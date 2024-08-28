<template>
  <div class="overall">
    <!-- Removed the login-pic-container -->
    <div class="login-container">
      <div>
        <a href="http://localhost:5173/">
          <img class="login-logo" src="@/assets/images/logo.jpeg" alt="logo" />
        </a>
      </div>
      <h2 class="login-title">Connectez ici</h2>
      <form class="login-form" @submit.prevent="handleLogin">
        <input
          v-model="loginData.email"
          class="form-input"
          type="email"
          name="email"
          placeholder="Email"
          @input="clearError"
          required
        />
        <div class="password-container">
          <input
            id="password"
            class="form-input inner-pswd"
            :type="showPassword ? 'text' : 'password'"
            name="password"
            v-model="loginData.password"
            placeholder="Password"
            :class="{ 'is-invalid': errorMessage }"
            @input="clearError"
            required
          />
          <i
    class="toggle-password-icon"
    :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
    @click="togglePasswordVisibility">
          </i>
        </div>
        <span class="error" v-if="errorMessage">{{ errorMessage }}</span>
        <div>
          <a class="forgot" @click="gotToForgot">Mot de passe oublié?</a>
        </div>

        <button class="form-button" type="submit" :disabled="loading">
          <i v-if="loading" class="fas fa-circle-notch fa-spin"></i>
          <span v-else>Connecter</span>
        </button>

        <div class="login-p">
          Vous n'avez pas de compte?
          <a @click="goToRegister" class="sign-up-link" href="#">Inscription</a>
        </div>
      </form>
    </div>
    
    <div class="popup" id="popup">
      <img class="check" src="@/assets/images/check.png" />
      <h2>Login was successful</h2>
      <button @click="closePopup" type="button">OK</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { API_BASE_URL } from '../config.js';

export default {
  data() {
    return {
      loading: false, // Loading state for the spinner
      showPassword: false,
      popupVisible: false,
      loginData: {
        email: '',
        password: ''
      },
      errorMessage: ''
    }
  },
  methods: {
    gotToForgot() {
      this.$router.push('/forgot')
    },
    goToRegister() {
      this.$router.push('/user/signup')
    },
    togglePasswordVisibility() {
      this.showPassword = !this.showPassword
    },
    handleLogin() {
  this.loading = true;
  this.errorMessage = '';  // Clear previous error messages

  axios.post(`${API_BASE_URL}/user/login`, this.loginData, { withCredentials: true })
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', res.data.firstName);

      if (res.status === 200) {
        this.popupVisible = true;  // Show popup after successful login

        // Introduce delay to ensure the spinner appears
        setTimeout(() => {
          if (res.data.role === 'Coordinateur') {
            this.$router.push(`/admin/adminDashboard`);
          } else {
            this.$router.push(`/user/suivi`);
          }
        });  // 2-second delay for testing spinner
      }
    })
    .catch((error) => {
      this.errorMessage = error.response?.data?.error || 'Login failed. Please try again.';
    })
    .finally(() => {
      this.loading = false;  // Stop spinner after the request
    });
},

    clearError() {
      this.errorMessage = ''
    },
    closePopup() {
      this.popupVisible = false; // Close popup
      this.$router.push('/student/analytics'); // Redirect user after popup
    }
  }
}
</script>

<style scoped>
.overall {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url("@/assets/images/pngtree-abstract-white-and-red-geometric-background-picture-image_1867378.jpg");
  background-size: cover;
}

.login-container {
  text-align: center;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 100%;
}

.login-title {
  color: #1f2bd3;
  font-size: 2.25rem;
  padding-top: 0.625rem;
}

.login-logo {
  width: 80px;
  margin-bottom: 1.5rem;
}

.form-input {
  width: 100%;
  height: 2.844rem;
  padding-left: 0.5em;
  border: 1px solid #ccc;
  border-radius: 0.25em;
}

.password-container {
  position: relative;
  width: 100%;
}

.toggle-password-icon {
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #888; /* Adjust the color */
  font-size: 1.25rem; /* Adjust the size */
}
.toggle-password-icon:hover {
  color: #000; /* Change color on hover */
}
.form-button {
  width: 100%;
  height: 3rem;
  border: none;
  background-color: #1f2bd3;
  border-radius: 0.25em;
  cursor: pointer;
  color: white;
  font-weight: bold;
  margin-top: 1rem;
}

.form-button:hover {
  background-color: #06d73a;
}

.error {
  display: block;
  font-size: 1rem;
  margin-top: 1px;
  color: red;
}

.forgot {
  color: black;
  text-decoration: none;
  font-size: 1rem;
  margin-top: 1rem;
}

.forgot:hover {
  color: red;
  cursor: pointer;
}

.sign-up-link {
  color: #1f2bd3;
  font-weight: 900;
  font-size: 1rem;
  text-decoration: underline;
  margin-top: 1rem;
}

.sign-up-link:hover {
  color: #06d73a;
}

.popup {
  width: 400px;
  background: #fff;
  border-radius: 6px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.1);
  text-align: center;
  padding: 0 30px 30px;
  color: #333;
  visibility: hidden;
  z-index: 1;
  transition: transform 0.4s, top 0.4s;
}

.open-popup {
  visibility: visible;
  top: 50%;
  transform: translate(-50%, -50%) scale(1);
}

.popup h2 {
  font-size: 38px;
  font-weight: 500;
  margin: 30px 0 10px;
}

.popup button {
  width: 30%;
  margin-top: 50px;
  padding: 10px 0;
  background: #32c671;
  color: #fff;
  border: 0;
  outline: none;
  font-size: 18px;
  border-radius: 4px;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
.fas.fa-circle-notch.fa-spin {
  margin-right: 8px; /* Adds space between the spinner and text */
  font-size: 16px;   /* Adjusts the size of the spinner */
  color: #ffffff;    /* Ensures the spinner matches your button text color */
  display: inline-block;
  vertical-align: middle;
}

</style>
