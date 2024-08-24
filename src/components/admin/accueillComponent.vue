<template>
  <div :class="[theme , 'page']">
    <div class="stud-dash">
      <div class="welcome">
        <div class="right">
          <p class="up-welcome">
            Bienvenue <span>{{ firstName }}</span>
          </p>
          <p class="under-welcome">
            N'oubliez pas de générer le rapport à la fin de la journée. Votre rapport reflète le travail accompli et ne peut être rempli qu'une fois par jour.
          </p>
          <div class="blue"></div>
        </div>
        <div class="left">
          <img class="welcome-img" src="@/assets/images/logo.jpeg" alt="dashboard" />
        </div>
      </div>
    </div>
    
    <!-- Statistiques -->
    <div class="statistics-component">
      <h2>Statistiques du jour</h2>
      <div class="percentage-of-the-day">
        <p>Percentage du jour: {{ percentageOfDay }}%</p>
      </div>
      <div class="chart">
        <h3>Diagramme à barres</h3>
        <canvas ref="barChartCanvas"></canvas>
      </div>
      <div class="chart">
        <h3>Diagramme en courbes</h3>
        <canvas ref="lineChartCanvas"></canvas>
      </div>
      <div class="chart">
        <h3>Diagramme circulaire</h3>
        <canvas ref="doughnutChartCanvas"></canvas>
      </div>
    </div>

    <!-- Chat Bar -->
    <div class="chat-bar">
      <div class="chat-header" @click="toggleChat">
        <h4>Chat Support</h4>
      </div>
      <div v-if="chatOpen" class="chat-content">
        <div class="chat-messages">
          <p v-for="message in messages" :key="message.id">{{ message.text }}</p>
        </div>
        <input type="text" v-model="newMessage" placeholder="Type a message..." @keyup.enter="sendMessage" />
      </div>
    </div>

    <!-- Section des Actualités -->
    <div class="news-section">
      <h3>Actualités</h3>
      <ul>
        <li v-for="(news, index) in newsData" :key="index">
          <a :href="news.url" target="_blank">{{ news.title }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Chart from 'chart.js/auto';
import axios from 'axios';
import { API_BASE_URL } from '@/config.js';

export default {
  data() {
    return {
      percentageOfDay: 0,
      weekPercentage: 75, // Example value, replace with actual data
      monthPercentage: 85, // Example value, replace with actual data
      yearPercentage: 90, // Example value, replace with actual data
      userData: [], // Array to store user data from backend
      firstName: '',
      chatOpen: false,
      messages: [],
      newMessage: '',
      newsData: []
    };
  },
  computed: {
    ...mapState(['theme'])
  },
  mounted() {
    this.fetchUserDataFromBackend();
    this.firstName = localStorage.getItem('user');
    this.fetchNews();
  },
  methods: {
    async fetchUserDataFromBackend() {
      try {
        const token = localStorage.getItem('token');
        const headers = {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        };
        const response = await axios.get(`${API_BASE_URL}/admin/percent`, { headers });
        this.userData = response.data;

        this.calculatePercentageOfDay();
        this.populateCharts();
      } catch (error) {
        console.error('Error fetching user data from backend:', error);
      }
    },
    calculatePercentageOfDay() {
      const sum = this.userData.reduce((total, user) => total + parseFloat(user.pourcentage), 0);
      this.percentageOfDay = this.userData.length > 0 ? Math.round(sum / this.userData.length) : 0;
    },
    populateCharts() {
      const barLabels = this.userData.map(user => user.name);
      const barData = this.userData.map(user => user.percentage);
      const lineLabels = ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'];
      const lineData = this.userData.map(user => user.variations);

      // Bar chart
      const barCtx = this.$refs.barChartCanvas.getContext('2d');
      new Chart(barCtx, {
        type: 'bar',
        data: {
          labels: barLabels,
          datasets: [{
            label: 'Percentage',
            data: barData,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      // Line chart
      const lineCtx = this.$refs.lineChartCanvas.getContext('2d');
      new Chart(lineCtx, {
        type: 'line',
        data: {
          labels: lineLabels,
          datasets: this.userData.map((user, index) => ({
            label: user.name,
            data: lineData[index],
            borderColor: '#' + ((Math.random() * 0xFFFFFF) << 0).toString(16),
            fill: false
          }))
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });

      // Doughnut chart
      const doughnutCtx = this.$refs.doughnutChartCanvas.getContext('2d');
      new Chart(doughnutCtx, {
        type: 'doughnut',
        data: {
          labels: ['Semaine', 'Mois', 'Année'],
          datasets: [{
            data: [this.weekPercentage, this.monthPercentage, this.yearPercentage],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
            hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
          }]
        },
        options: {
          responsive: true
        }
      });
    },
    toggleChat() {
      this.chatOpen = !this.chatOpen;
    },
    sendMessage() {
      if (this.newMessage) {
        this.messages.push({ id: Date.now(), text: this.newMessage });
        this.newMessage = '';
      }
    },
    async fetchNews() {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=fr&apiKey=YOUR_NEWS_API_KEY');
        this.newsData = response.data.articles;
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    }
  }
};
</script>

<style scoped>
.dark.page {
  background-color: #525050;
  color: #fff;
}
.light.page {
  background-color: #fff;
  color: #333;
}

.statistics-component {
  margin-top: 20px;
}
.percentage-of-the-day {
  margin-bottom: 20px;
}
.chart {
  margin-top: 20px;
}

body {
  background-color: white;
  padding-top: 5rem;
}

.welcome {
  height: 10rem;
  width: 100%;
  background-color: rgb(255, 255, 255);
  border-bottom: 2px solid rgb(215, 213, 213);
  display: flex;
  justify-content: space-between;
}
.welcome-img {
  width: 9.5rem;
}
.up-welcome {
  color: #2e1c6c;
  font-weight: bolder;
  font-size: 3rem;
  padding-top: 1rem;
  width:100%;
}
.under-welcome {
  color: #737372;
  font-size: 1rem;
  width: 45rem;
}

.chat-bar {
  position: fixed;
  bottom: 0;
  right: 20px;
  width: 300px;
  border: 1px solid #ccc;
  background-color: #fff;
}
.chat-header {
  background-color: #2e1c6c;
  color: white;
  padding: 10px;
  cursor: pointer;
}
.chat-content {
  display: flex;
  flex-direction: column;
  height: 200px;
}
.chat-messages {
  flex-grow: 1;
  padding: 10px;
  overflow-y: auto;
  border-top: 1px solid #ccc;
}
input[type="text"] {
  padding: 10px;
  border: none;
  border-top: 1px solid #ccc;
}

.news-section {
  position: fixed;
  right: 20px;
  top: 100px;
  width: 300px;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
}
.news-section h3 {
  margin-bottom: 10px;
}
.news-section ul {
  list-style: none;
  padding: 0;
}
.news-section li {
  margin-bottom: 10px;
}
.news-section a {
  color: #2e1c6c;
  text-decoration: none;
}
</style>
