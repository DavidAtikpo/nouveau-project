<template>
  <div class="page-content">
    <h1>Réalisations Musicales de Compassion Togo Aneho Nlessi</h1>
    <div class="content">
      <div class="rows">
        <div class="row1">
          <div class="testimony" v-for="(testimonial, index) in testimonials" :key="index">
            <div class="user-info">
              <div class="profile-pic">
                <img :src="testimonial.image" :alt="'Témoignage ' + (index + 1)" />
              </div>
              <p>{{ testimonial.name }}</p>
            </div>
            <div class="message">
              <p>{{ testimonial.message }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="about-us" id="about">
      <h2>À Propos de Nous</h2>
      <div class="about-content">
        <img src="" alt="Notre Équipe" class="about-image" />
        <div class="about-text">
          <p>
            Compassion Togo est dédiée à aider les jeunes à découvrir et développer leurs talents dans la musique.
            Grâce à nos programmes et ateliers, nous offrons un soutien précieux pour les inspirer et les encadrer.
          </p>
          <p>
            Depuis notre fondation, nous avons touché la vie de nombreux jeunes, en leur fournissant des outils et des
            ressources pour réaliser leurs rêves musicaux.
          </p>
        </div>
      </div>
    </section>

    <section class="our-programs" id="programs">
      <h2>Nos Programmes</h2>
      <div class="program-list">
        <div class="program-item" v-for="(program, index) in programs" :key="index">
          <img :src="program.image" :alt="program.title" />
          <h3>{{ program.title }}</h3>
          <p>{{ program.description }}</p>
        </div>
      </div>
    </section>

    <section class="photo-gallery" id="gallery">
      <h2>Galerie de Photos</h2>
      <div class="gallery-grid">
        <img v-for="(photo, index) in photos" :src="photo.src" :alt="'Événement ' + (index + 1)" :key="index" class="gallery-item" />
      </div>
    </section>

    <section class="upcoming-events" id="events">
      <h2>Événements à Venir</h2>
      <div class="event-list">
        <div class="event-item" v-for="(event, index) in events" :key="index">
          <h3>{{ event.title }}</h3>
          <p>Date: {{ event.date }}</p>
          <p>Lieu: {{ event.location }}</p>
          <button class="event-button">S'inscrire</button>
        </div>
      </div>
    </section>

    <section class="contact-us" id="contact">
      <h2>Contactez-Nous</h2>
      <form class="contact-form">
        <input type="text" placeholder="Nom" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Message" rows="4" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
      <div class="contact-info">
        <p>Email: coordinateur213@gmail.com</p>
        <p>Téléphone: +228 90 70 74 35</p>
        <p>Adresse: Rue N2, Aneho , Lome-Togo</p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MainContent",
  data() {
    return {
      testimonials: [
        {
          name: "Jean Doe",
          message: "Grâce à Compassion Togo, j'ai découvert mon talent pour la musique. Ils m'ont aidé à m'entraîner et à améliorer mes compétences. Aujourd'hui, je suis capable de jouer plusieurs instruments.",
          image: "@/assets/images/348955217_778152960616511_1981663321848763521_n.jpg",
        },
        {
          name: "Marie Koffi",
          message: "Compassion Togo m'a donné l'opportunité de développer mes talents en chant. Leur soutien et encouragement m'ont permis de chanter avec confiance devant un public.",
          image: "@/assets/images/309084922_431587569080653_7848551493997462143_n.jpg",
        },
        {
          name: "Kofi Mensah",
          message: "Participer aux ateliers de musique organisés par Compassion Togo m'a permis d'améliorer mes compétences en composition musicale. Je suis maintenant capable de créer mes propres morceaux.",
          image: "@/assets/images/309430577_431589382413805_5270125874633532938_n.jpg",
        },
        {
          name: "Adjoa Agbeko",
          message: "Compassion Togo m'a appris à jouer de la guitare. Leur dévouement à aider les jeunes à développer leurs talents musicaux est incroyable.",
          image: "@/assets/images/379063963_653750866864321_1198646998069922534_n.jpg",
        },
      ],
      programs: [
        {
          title: "Atelier de Musique",
          description: "Apprenez à jouer d'un instrument et à composer vos propres morceaux avec notre équipe d'experts en musique.",
          // image: "@/assets/images/music-workshop.jpg",
        },
        {
          title: "Entraînement Vocal",
          description: "Développez vos compétences vocales grâce à nos cours personnalisés qui vous aident à atteindre de nouvelles hauteurs.",
          // image: "@/assets/images/vocal-training.jpg",
        },
        {
          title: "Chorale",
          description: "Rejoignez notre chorale et chantez avec d'autres passionnés de musique, en partageant des moments inoubliables.",
          // image: "@/assets/images/choir.jpg",
        },
      ],
      photos: [
        { src: "@/assets/images/309084922_431587569080653_7848551493997462143_n.jpg" },
        { src: "@/assets/images/photo2.jpg" },
        { src: "@/assets/images/photo3.jpg" },
        { src: "@/assets/images/photo4.jpg" },
        { src: "@/assets/images/photo5.jpg" },
        { src: "@/assets/images/photo6.jpg" },
      ],
      events: [
        {
          title: "Concert de Noël",
          date: "20 Décembre 2024",
          location: "Centre Culturel de Lomé",
        },
        {
          title: "Atelier de Composition",
          date: "15 Janvier 2025",
          location: "Salle de Musique Aneho",
        },
      ],
    };
  },
};
</script>

<style scoped>
.page-content {
  background-image: url("@/assets/images/images.jpeg");
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
  padding-top: 3em;
  padding-block: 3em;
  min-height: 100vh;
}

h1 {
  padding-bottom: 2rem;
  padding-top: 3rem;
  font-size: 2.5rem;
  color: #fff;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.content {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.rows {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.row1,
.row2 {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.testimony {
  width: 300px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgb(41, 40, 40);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.testimony:hover {
  transform: translateY(-10px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

.user-info {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1rem;
}

.profile-pic img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.user-info p {
  font-weight: bold;
  font-size: 1.1rem;
  color: #333;
}

.message {
  line-height: 1.5rem;
  color: #555;
  font-size: 1rem;
}

.video {
  padding-top: 12%;
  background-color: #16325b;
}

.about-us,
.our-programs,
.photo-gallery,
.upcoming-events,
.contact-us {
  margin-top: 3rem;
  width: 100%;
  max-width: 1200px;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  /* box-shadow: 0 4px 8px red; */
}

.about-content {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.about-image {
  width: 200px;
  border-radius: 10px;
}

.program-list {
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: center;
}

.program-item {
  width: 300px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.gallery-item {
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 2px 4px red;
}

.event-list {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
}

.event-item {
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 100%;
  max-width: 500px;
}

.event-button {
  margin-top: 1rem;
  padding: 0.5rem 1.5rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.event-button:hover {
  background-color: #0056b3;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
}

.contact-form input,
.contact-form textarea {
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 100%;
}

.contact-form button {
  padding: 0.8rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px ;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.contact-form button:hover {
  background-color: #0056b3;
}

@media only screen and (max-width: 600px) {
  .page-content {
    padding: 2rem 1rem;
  }

  h1 {
    font-size: 2rem;
  }

  .rows {
    gap: 1rem;
  }

  .testimony {
    width: 100%;
    padding: 1rem;
  }

  .user-info p {
    font-size: 1rem;
  }

  .message {
    font-size: 0.9rem;
  }

  .about-content {
    flex-direction: column;
  }

  .about-image {
    width: 100%;
  }

  .program-item {
    width: 100%;
  }
}
</style>
