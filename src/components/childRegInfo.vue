<template>
  <!-- Step 1: Information about the child -->
  <div class="page">
  <div class="container">
    <div class="info1">
      <div v-if="currentStep === 1">
        <h2>Information de l'enfant</h2><br>

        <div class="form-group">
          <label class="" for="Nom">Nom <span>*</span></label>
          <input type="text" v-model="child.lastName" class="input-field">
        </div><br>

        <div class="form-group">
          <label>Prénom <span>*</span></label>
          <input type="text" v-model="child.firstName" class="input-field">
        </div><br>

        <div class="form-group">
  <label>Sexe</label>
  <select v-model="child.sex" class="input-field">
    <option value="Masculin">Masculin</option>
    <option value="Féminin">Féminin</option>
  </select>
</div><br>

        <div class="form-group">
        <label>Classe</label>
          <select v-model="child.class" class="input-field">
              <option value="CP1">CP1</option>
              <option value="CP2">CP2</option>
              <option value="CE1">CE1</option>
              <option value="CE2">CE2</option>
              <option value="CM1">CM1</option>
              <option value="CM2">CM2</option>
              <option value="6eme">6eme</option>
              <option value="5eme">5eme</option>
              <option value="4eme">4eme</option>
              <option value="3eme">3eme</option>
              <option value="Seconde">Seconde</option>
              <option value="Premiere">Premiere</option>
              <option value="Terminal">Terminal</option>
           </select>
        </div><br>

        <div class="from-group">
          <label>Établissement</label>
          <input type="text" v-model="child.school" class="input-field">
        </div><br>

       
<div class="form-group">
  <label>Date de naissance <span>*</span></label>
  <input type="date" v-model="child.birthDate" class="input-field">
</div><br>

        <div class="form-group">
          <label>Lieu de naissance <span>*</span></label>
          <input type="text" v-model="child.birthPlace" class="input-field">
        </div><br>

        <div class="form-group">
          <label>Quartier de résidence <span>*</span></label>
          <input type="text" v-model="child.live" class="input-field">
        </div><br>
        <!-- Other fields for child information -->
        <button class="button" @click="nextStep">Suivant</button>
      </div>
    </div>

    <!-- Step 2: Information about the parents -->
    <div class="info2">
      <div v-if="currentStep === 2">
        <h2>Information de parent/Tuteur</h2><br>

        <div class="form-group">
          <label>Nom du père/tuteur <span>*</span></label>
          <input type="text" v-model="parent.fatherName" class="input-field">
        </div><br>

        <div class="form-group">
          <label>Nom de la mère </label>
          <input type="text" v-model="parent.motherName" class="input-field">
        </div><br>

        <div class="form-group">
          <label>Téléphone :</label>
          <input type="text" v-model="parent.phoneNumber" class="input-field">
        </div><br>

        <div class="form-group">
          <label>Profession</label>
          <input type="text" v-model="parent.occupation" class="input-field">
        </div>

        <!-- Other fields for parent information -->
        <button class="previous" @click="previousStep">Retour</button>
        <button class="submit" @click="nextStep">Suivant</button>
      </div>
    </div>

    <div class="info3">
      <div v-if="currentStep === 3">
        <h2>Date d'entrée au CDE 213</h2><br>

        <div class="form-group">
  <label>Date d'entrée </label>
  <input type="date" v-model="date.dateOfEntrance" class="input-field">
</div><br>

        <div class="form-group">
          <label>Autre information </label>
          <textarea v-model="date.otherInfo" class="input-field"></textarea>
          
          <p>Pouvez-vous fournir une autre information concernant la vie de l'enfant, notamment quelque chose de touchant ou de significatif ?</p>
        </div><br>

        <button class="previous" @click="previousStep">Retour</button>
        <button class="submit" @click="nextStep">Suivant</button>
      </div>
    </div>

    <!-- Step 3: Add a photo (optional) -->
    <div v-if="currentStep === 4">
      <h2>Ajouter la photo de l'enfant</h2>
      <input type="file" @change="onFileChange" accept="image/*">
      <!-- Afficher l'image sélectionnée -->
      <img v-if="profileImage" :src="profileImageURL" alt="Photo de profil">
      <!-- Boutons pour naviguer entre les étapes -->
      <button class="previous" @click="previousStep">Retour</button>
      <button class="submit" @click="submit">Soumettre</button>
    </div> 
  </div>
  <div v-if="showPopup" class="popup">
    <h3>Formulaire soumis avec succès !</h3>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import {API_BASE_URL}  from '@/config.js';
export default {
  data() {
    return {
      currentStep: 1,
      showPopup:false,
      child: {
        lastName: '',
        firstName: '',
        sex: '',
        class: '',
        birthDate: '',
        birthPlace: '',
        live: '',
        // Other child fields
      },
      parent: {
        fatherName: '',
        motherName: '',
        phoneNumber: ''
        // Other parent fields
      },
      date: {
        dateOfEntrance: '',
        otherInfo: '',
      },
      profileImage: null,
      profileImageURL: null,
    };
  },
  methods: {
    nextStep() {
      this.currentStep++;
    },
    previousStep() {
      this.currentStep--;
    },
    skipStep() {
      // Move to the next step (in this case, step 3)
      this.nextStep();
    },
    onFileChange(event) {
      // Récupérer le fichier d'image sélectionné par l'utilisateur
      const file = event.target.files[0];
      // Mettre à jour la variable profileImage avec le fichier sélectionné
      this.profileImageURL = URL.createObjectURL(file);
      this.profileImage = file;
    },
    submit() {
      const token = localStorage.getItem('token');
      const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      };
      const postData = {
        ...this.child,
        ...this.parent,
        ...this.date,
        profileImageURL: this.profileImageURL
      };
      console.log('Data to be sent:', postData);

      axios.post(`${API_BASE_URL}/child/childInfo`, postData, { headers })
        .then(res => {
          console.log('Data saved successfully:', res.data);
          this.showPopup = true;
          // Réinitialiser le formulaire et revenir à l'étape 1 après la soumission réussie
          setTimeout(() => {
            this.showPopup = false; // Hide the popup
          }, 1000);
          this.resetForm();
        })
        .catch(error => {
          console.log("backend error", error.response.data);
          console.error('Error saving data:', error);
        });
    },
    resetForm() {
      // Réinitialiser toutes les données du formulaire à leur état initial
      this.currentStep = 1;
      this.child = {
        lastName: '',
        firstNames: '',
        sex: '',
        class: '',
        birthDate: '',
        birthPlace: '',
        live: '',
        // Autres champs pour l'enfant
      };
      this.parent = {
        fatherName: '',
        motherName: '',
        phoneNumber: ''
        // Autres champs pour le parent
      };
      this.date = {
        dateOfEntre: '',
        otherInfo: '',
      };
      this.profileImageURL = null;
    }
  }
};
</script>




<style scoped>

h2{
color: rgb(180, 34, 34);
}
span{
  color: red;
}

.button {
  width: 100px; /* ajuster la largeur du bouton */
  margin-top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.input-field {
  width: 100%; /* remplir la largeur disponible */
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 8px; /* ajouter un peu de marge intérieure pour plus de confort */
  box-sizing: border-box; /* inclure le rembourrage dans la largeur totale */
  margin-bottom: 10px; /* espace supplémentaire entre les champs */
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px; /* espace supplémentaire entre les étiquettes */
}

.submit {
  width: 100px; /* ajuster la largeur du bouton de soumission */
  margin-top: 20px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.profile-icon {
  margin-top: 30px;
  cursor: pointer;
  width: 50px; /* ajuster la taille de l'icône de profil */
  display: block;
  margin-left: auto;
  margin-right: auto;
}


.container {
  width: 80%; /* Ajustement de la largeur du conteneur principal pour les petits écrans */
  margin: 0 auto; /* Centrage du conteneur */
  padding: 20px;
  background-color: #fff;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.popup {
  position: fixed; /* Positionnement fixe pour afficher la popup par-dessus le contenu */
  top: 50%; /* Alignement vertical au milieu de l'écran */
  left: 50%; /* Alignement horizontal au milieu de l'écran */
  transform: translate(-50%, -50%); /* Centrage parfait */
  background-color: rgba(255, 255, 255, 0.9); /* Fond semi-transparent */
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.popup h2 {
  color: rgb(180, 34, 34);
  text-align: center; /* Centrage du texte */
}

@media only screen and (max-width: 768px) {
  .container {
    width: 90%; /* Ajustement de la largeur du conteneur principal pour les petits écrans */
  }

  .popup {
    width: 90%; /* Ajustement de la largeur de la popup pour les petits écrans */
  }
}
</style>
