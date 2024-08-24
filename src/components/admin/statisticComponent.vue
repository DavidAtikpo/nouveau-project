<!-- <template>
  <div :class="[theme, 'page']">
    <div v-if="loading">Loading...</div>
    <div v-else>

      <h2>Statistiques du jour</h2>
      <div class="percentage-of-the-day">
        <p>Pourcentage du jour: {{ percentageOfDay }}%</p>
      </div>
      <div class="chart">
        <h3>Diagramme à barres</h3>
        <canvas ref="dayBarChartCanvas"></canvas>
      </div>
      
      
      <h2>Statistiques de la semaine</h2>
      <div class="percentage-of-the-week">
        <p>Pourcentage de la semaine: {{ percentageOfWeek.monday }}%</p>
      </div>
      <div class="chart">
        <h3>Diagramme à barres</h3>
        <canvas ref="weekBarChartCanvas"></canvas>
      </div>
      
    
      <h2>Statistiques du mois</h2>
      <div class="percentage-of-the-month">
        <p>Pourcentage du mois: {{ calculateMonthlyAverage() }}%</p>
      </div>
      <div class="chart">
        <h3>Diagramme en courbes</h3>
        <canvas ref="monthLineChartCanvas"></canvas>
      </div>
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
    loading: true,
    percentageOfDay: 0,
    percentageOfWeek: {
      monday: 0,
      tuesday: 0,
      wednesday: 0,
      thursday: 0,
      friday: 0
    },
    percentageOfMonth: [] 
  };
},

  computed: {
    ...mapState(['theme'])
  },
  mounted() {
    this.fetchData();
  },
methods: {
  async fetchData() {
    try {
      const token = localStorage.getItem('token');
      const headers = { 'Authorization': `Bearer ${token}` };

      const [dayData, weekData, monthData] = await Promise.all([
        axios.get(`${API_BASE_URL}/admin/percent`, { headers }),
        axios.get(`${API_BASE_URL}/admin/weekperc`, { headers }),
        axios.get(`${API_BASE_URL}/admin/monthperc`, { headers })
      ]);

      this.percentageOfDay = dayData.data;
      this.percentageOfWeek = weekData.data; 
      this.percentageOfMonth = monthData.data;

      this.populateCharts(); 
      this.loading = false;
    } catch (error) {
      console.error('Error fetching data:', error);
      this.loading = false;
    }
  },
  populateCharts() {
    const dayBarCtx = this.$refs.dayBarChartCanvas.getContext('2d');
    new Chart(dayBarCtx, {
      type: 'bar',
      data: {
        labels: [new Date().toLocaleDateString()], 
        datasets: [{
          label: 'Pourcentage',
          data: [this.percentageOfDay],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
      }
    });

    const weekBarCtx = this.$refs.weekBarChartCanvas.getContext('2d');
    new Chart(weekBarCtx, {
      type: 'bar',
      data: {
        labels: Object.keys(this.percentageOfWeek), 
        datasets: [{
          label: 'Pourcentage',
          data: Object.values(this.percentageOfWeek),
          backgroundColor: 'rgba(153, 102, 255, 0.2)',
          borderColor: 'rgba(153, 102, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
      }
    });

    const monthLineCtx = this.$refs.monthLineChartCanvas.getContext('2d');
    new Chart(monthLineCtx, {
      type: 'line',
      data: {
        labels: this.percentageOfMonth.map((_, i) => `Day ${i + 1}`), // Adjusted to each day of the month
        datasets: [{
          label: 'Pourcentage',
          data: this.percentageOfMonth,
          borderColor: 'rgba(255, 99, 132, 1)',
          borderWidth: 1,
          fill: false
        }]
      },
      options: {
        responsive: true,
        scales: { y: { beginAtZero: true } }
      }
    });
  },
  calculateMonthlyAverage() {
  if (Array.isArray(this.percentageOfMonth) && this.percentageOfMonth.length > 0) {
    const sum = this.percentageOfMonth.reduce((a, b) => a + b, 0);
    return (sum / this.percentageOfMonth.length).toFixed(2);
  }
  return 0;
}

},

};
</script>

<style scoped>
.page {
  margin-top: 20px;
}
.dark.page {
  background-color:#858282;
  color: #fff;
}
.light.page {
  background-color: #fff;
  color: #333;
}
.chart {
  margin-top: 20px;
}
</style> -->


<!-- <template>
  <div class="statistics-container">
    <h2>Statistics Overview</h2>

   
    <select v-model="selectedPeriod" @change="fetchStats" class="period-select">
      <option value="daily">Daily</option>
      <option value="weekly">Weekly</option>
      <option value="monthly">Monthly</option>
      <option value="yearly">Yearly</option>
    </select>

    
    <div class="chart-wrapper">
      <BarChart ref="barChart" :chart-data="barChartData" />
    </div>

   
    <div class="chart-wrapper">
      <DoughnutChart ref="doughnutChart" :chart-data="circularChartData" />
    </div>
  </div>
</template>


<script>
import { API_BASE_URL } from '@/config.js'; 
import { reactive, onMounted, ref } from "vue";
import { Bar, Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  DoughnutController,
  ArcElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(Title, Tooltip, Legend, BarElement, DoughnutController, ArcElement, CategoryScale, LinearScale);

export default {
  components: {
    BarChart: {
      extends: Bar,
      props: ["chartData"],
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    },
    DoughnutChart: {
      extends: Doughnut,
      props: ["chartData"],
      options: {
        responsive: true,
        maintainAspectRatio: false,
      },
    },
  },
  setup() {
    
    const barChartData = reactive({
      labels: [], 
      datasets: [
        {
          label: "Average Percentage",
          backgroundColor: "#f87979",
          data: [], 
        },
      ],
    });

  
    const circularChartData = reactive({
      labels: [],
      datasets: [
        {
          label: "Average Percentage",
          backgroundColor: ["#f87979", "#4bc0c0", "#ffcd56", "#36a2eb", "#9966ff"],
          data: [], 
        },
      ],
    });

    const selectedPeriod = ref("daily");

    
    const fetchStats = async () => {
  try {
    let response;

    switch (selectedPeriod.value) {
      case "daily":
        response = await fetch(`${API_BASE_URL}/user/stats/daily`);
        barChartData.labels = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];
        break;
      case "weekly":
        response = await fetch(`${API_BASE_URL}/user/stats/weekly`);
        barChartData.labels = ["Week 1", "Week 2", "Week 3", "Week 4"];
        break;
      case "monthly":
        response = await fetch(`${API_BASE_URL}/user/stats/monthly`);
        barChartData.labels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        break;
      case "yearly":
        response = await fetch(`${API_BASE_URL}/user/stats/yearly`);
        barChartData.labels = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];
        break;
    }

    const data = await response.json();
    console.log('Data received:', data);
    barChartData.datasets[0].data = data.map((stat) => stat.averagePercentage);
    circularChartData.labels = barChartData.labels;
    circularChartData.datasets[0].data = barChartData.datasets[0].data;
    

this.$refs.barChart.update();
this.$refs.doughnutChart.update();

    const percentages = data.map((stat) => stat.averagePercentage);
console.log('Percentages:', percentages); 


  
    this.$refs.barChart.update();
    this.$refs.doughnutChart.update();

  } catch (error) {
    console.error("Error fetching statistics:", error);
  }
};



  
    onMounted(() => {
      fetchStats();
    });

    return {
      selectedPeriod,
      barChartData,
      circularChartData,
      fetchStats,
    };
  },
};
</script>

<style>
.statistics-container {
  width: 100%;
  padding: 20px;
}

.period-select {
  display: block;
  margin-bottom: 20px;
  padding: 10px;
  font-size: 16px;
}

.chart-wrapper {
  width: 100%;
  height: 400px;
  margin-bottom: 30px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
 -->


 <template>  
  <div class="statistics-container">  
    <h2>Statistics Overview (Dummy Data)</h2>  

    <!-- Dropdown to select period -->  
    <select v-model="selectedPeriod" @change="loadDummyData" class="period-select">  
      <option value="daily">Daily</option>  
      <option value="weekly">Weekly</option>  
      <option value="monthly">Monthly</option>  
      <option value="yearly">Yearly</option>  
    </select>  

    <!-- Bar Chart display -->  
    <div class="chart-wrapper">  
      <BarChart v-if="barChartData.labels.length" :chart-data="barChartData" :options="barChartOptions" />  
    </div>  

    <!-- Circular Chart display (Pie or Doughnut) -->  
    <div class="chart-wrapper">  
      <DoughnutChart v-if="circularChartData.labels.length" :chart-data="circularChartData" :options="doughnutChartOptions" />  
    </div>  
  </div>  
</template>  

<script>  
import { reactive, ref, onMounted, watch } from "vue";  
import { Bar, Doughnut } from "vue-chartjs";  
import {  
  Chart as ChartJS,  
  Title,  
  Tooltip,  
  Legend,  
  BarElement,  
  DoughnutController,  
  ArcElement,  
  CategoryScale,  
  LinearScale,  
} from "chart.js";  

// Register chart components globally  
ChartJS.register(Title, Tooltip, Legend, BarElement, DoughnutController, ArcElement, CategoryScale, LinearScale);  

export default {  
  components: {  
    BarChart: Bar,  
    DoughnutChart: Doughnut,  
  },  
  setup() {  
    const barChartData = reactive({  
      labels: [],  
      datasets: [  
        {  
          label: "60",  
          backgroundColor: "#f87979",  
          data: [],  
        },  
      ],  
    });  

    const circularChartData = reactive({  
      labels: [],  
      datasets: [  
        {  
          label: "70",  
          backgroundColor: ["#f87979", "#4bc0c0", "#ffcd56", "#36a2eb", "#9966ff"],  
          data: [],  
        },  
      ],  
    });  

    const barChartOptions = reactive({  
      responsive: true,  
      maintainAspectRatio: false,  
    });  

    const doughnutChartOptions = reactive({  
      responsive: true,  
      maintainAspectRatio: false,  
    });  

    const selectedPeriod = ref("daily");  

    // Load dummy data based on selected period  
    const loadDummyData = () => {  
      // Reset data to avoid issues with undefined labels or datasets  
      barChartData.labels = [];  
      barChartData.datasets[0].data = [];  
      circularChartData.labels = [];  
      circularChartData.datasets[0].data = [];  

      // Log state before populating data  
      console.log('Bar Chart Data1 (before):', barChartData);  

      switch (selectedPeriod.value) {  
        case "daily":  
          barChartData.labels = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];  
          barChartData.datasets[0].data = [70, 85, 60, 90, 80, 75, 95];  
          break;  
        case "weekly":  
          barChartData.labels = ["Week 1", "Week 2", "Week 3", "Week 4"];  
          barChartData.datasets[0].data = [75, 85, 80, 90];  
          break;  
        case "monthly":  
          barChartData.labels = [  
            "January", "February", "March", "April", "May", "June",  
            "July", "August", "September", "October", "November", "December"  
          ];  
          barChartData.datasets[0].data = [65, 75, 85, 95, 70, 80, 60, 90, 85, 75, 80, 90];  
          break;  
        case "yearly":  
          barChartData.labels = ["Year 1", "Year 2", "Year 3", "Year 4", "Year 5"];  
          barChartData.datasets[0].data = [80, 85, 90, 95, 75];  
          break;  
      }  

      // Log state after populating data  
      console.log('Bar Chart Data2 (after):', barChartData);  

      // Update circular chart data  
      circularChartData.labels = [...barChartData.labels];  
      circularChartData.datasets[0].data = [...barChartData.datasets[0].data];  
    };  

    onMounted(() => {  
      loadDummyData();  
    });  

    watch(selectedPeriod, loadDummyData);  

    return {  
      selectedPeriod,  
      barChartData,  
      circularChartData,  
      barChartOptions,  
      doughnutChartOptions,  
      loadDummyData,  
    };  
  },  
};  
</script>  

<style scoped>  
.statistics-container {  
  margin: 20px;  
}  
.period-select {  
  margin-bottom: 20px;  
}  
.chart-wrapper {  
  height: 400px; /* Fixe la hauteur pour le graphique */  
  width: 100%;   /* Assure que le graphique prend toute la largeur */  
  margin-bottom: 40px;  
}  
</style>



