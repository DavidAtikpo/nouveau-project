
 <template>
  <div class="chart-wrapper">
    <Bar :data="barChartData" :options="barChartOptions" />
  </div>
  <div class="chart-wrapper">
    <Doughnut :data="doughnutChartData" :options="doughnutChartOptions" />
  </div>
</template>

<script>
import { API_BASE_URL } from '@/config.js';
import { ref, onMounted } from 'vue';
import { Bar, Doughnut } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ArcElement);

export default {
  components: {
    Bar,
    Doughnut
  },
  setup() {
    const barChartData = ref({
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          label: 'Daily Average Percentage',
          backgroundColor: '#42A5F5',
          data: [0, 0, 0, 0, 0, 0, 0]
        }
      ]
    });

    const doughnutChartData = ref({
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      datasets: [
        {
          label: 'Daily Average Percentage',
          backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#FF6384', '#36A2EB', '#FFCE56'],
          data: [0, 0, 0, 0, 0, 0, 0]
        }
      ]
    });

    const selectedPeriod = ref('daily');

    const fetchStats = async () => {
      try {
        let response;

        if (selectedPeriod.value === 'daily') {
          response = await fetch(`${API_BASE_URL}/user/stats/daily`);
          const data = await response.json();

          console.log("Fetched data:", data);

          // Initialiser les valeurs par défaut
          const labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
          const averagePercentages = Array(labels.length).fill(0);

          // Mettre à jour les valeurs en fonction des données reçues
          data.forEach(item => {
            const dayIndex = labels.indexOf(item.day);
            if (dayIndex !== -1) {
              averagePercentages[dayIndex] = item.averagePercentage;
            }
          });

          console.log("Updated averagePercentages:", averagePercentages);

          // Mettre à jour les données des graphiques
          barChartData.value.labels = labels;
          barChartData.value.datasets[0].data = averagePercentages;

          doughnutChartData.value.labels = labels;
          doughnutChartData.value.datasets[0].data = averagePercentages;

        } else {
          // Gérer d'autres périodes (hebdomadaire, mensuel, annuel)
        }
      } catch (error) {
        console.error('Error fetching statistics:', error);
      }
    };

    onMounted(() => {
      fetchStats();
    });

    return {
      selectedPeriod,
      barChartData,
      doughnutChartData,
      fetchStats
    };
  }
};



</script>




<style scoped>
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



