<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <SideBar />
    <v-container>
      <v-row>
        <v-col cols="12" sm="4">
          <v-card color="#242426" class="rounded-lg mx-2 mt-10" flat>
            <v-app-bar flat color="rgba(0, 0, 0, 0)">
              <span class="caption grey--text mt-n6">Total de assinaturas</span>
            </v-app-bar>
            <v-app-bar flat color="rgba(0, 0, 0, 0)" class="mt-n12">
              <h4 class="white--text">565.565</h4>
              <span class="caption grey--text ml-2"> + 125 </span>
            </v-app-bar>

            <v-app-bar flat color="rgba(0, 0, 0, 0)" class="mt-n10">
              <v-progress-linear
                color="purple"
                height="3"
                value="100"
              ></v-progress-linear>
            </v-app-bar>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card color="#242426" class="rounded-lg mx-2 mt-10" flat>
            <v-app-bar flat color="rgba(0, 0, 0, 0)">
              <span class="caption grey--text mt-n6"
                >Número de visualizações</span
              >
            </v-app-bar>
            <v-app-bar flat color="rgba(0, 0, 0, 0)" class="mt-n12">
              <h4 class="white--text">565.565</h4>
              <span class="caption grey--text ml-2"> + 125 </span>
            </v-app-bar>

            <v-app-bar flat color="rgba(0, 0, 0, 0)" class="mt-n10">
              <v-progress-linear
                color="purple"
                height="3"
                value="100"
              ></v-progress-linear>
            </v-app-bar>
          </v-card>
        </v-col>
        <v-col cols="12" sm="4">
          <v-card color="#242426" class="rounded-lg mx-2 mt-10" flat>
            <v-app-bar flat color="rgba(0, 0, 0, 0)">
              <span class="caption grey--text mt-n6">Assinaturas ativas</span>
            </v-app-bar>
            <v-app-bar flat color="rgba(0, 0, 0, 0)" class="mt-n12">
              <h4 class="white--text">565.565</h4>
              <span class="caption grey--text ml-2"> + 125 </span>
            </v-app-bar>

            <v-app-bar flat color="rgba(0, 0, 0, 0)" class="mt-n10">
              <v-progress-linear
                color="purple"
                height="3"
                value="100"
              ></v-progress-linear>
            </v-app-bar>
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card color="#242426" class="rounded-lg mx-2 mt-10" flat>
            <v-app-bar flat color="rgba(0, 0, 0, 0)">
              <span class="caption grey--text mt-n6"
                >Relação de visualizações, assinantes e ex-assinantes</span
              >
            </v-app-bar>

            <div style="position: relative; height: 400px">
              <canvas id="line-chart"></canvas>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import SideBar from "../SidebarView.vue";
import {
  Chart,
  LinearScale,
  CategoryScale,
  LineController,
  PointElement,
  LineElement,
  Tooltip,
} from "chart.js";

export default {
  data() {
    return {
      lineChart: null,
    };
  },
  components: {
    SideBar,
  },
  mounted() {
    this.registerLinearScale();
    this.registerCategoryScale();
    this.registerLineController();
    this.registerTooltipPlugin();
    this.initializeLineChart();
  },
  destroyed() {
    if (this.lineChart) {
      this.lineChart.destroy();
    }
  },
  methods: {
    registerLinearScale() {
      Chart.register(LinearScale);
    },
    registerCategoryScale() {
      Chart.register(CategoryScale);
    },
    registerLineController() {
      Chart.register(LineController, PointElement, LineElement);
    },
    registerTooltipPlugin() {
      Chart.register(Tooltip);
    },
    initializeLineChart() {
      const canvas = document.getElementById("line-chart");
      const ctx = canvas.getContext("2d");

      this.lineChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "Janeiro",
            "Fevereiro",
            "Março",
            "Abril",
            "Maio",
            "Junho",
            "Julho",
          ],
          datasets: [
            {
              label: "Views",
              data: [65, 59, 80, 81, 56, 55, 40],
              borderColor: "rgba(75, 192, 192, 1)",
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              fill: true,
            },
            {
              label: "Likes",
              data: [40, 45, 60, 62, 48, 50, 30],
              borderColor: "rgba(255, 99, 132, 1)",
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              fill: true,
            },
            {
              label: "Comentários",
              data: [20, 25, 40, 42, 38, 40, 20],
              borderColor: "rgba(54, 162, 235, 1)",
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              fill: true,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              type: "category",
            },
            y: {
              type: "linear",
              beginAtZero: true,
            },
          },
          plugins: {
            tooltip: {
              callbacks: {
                label: function (context) {
                  const value = context.parsed.y;
                  return value.toString();
                },
              },
            },
          },
        },
      });
    },
  },
};
</script>

<style>
.v-btn.withoutupercase {
  text-transform: none !important;
}
.v-btn:not(.v-btn--round).v-size--small {
  min-width: 30px !important;
  padding: 0 5px !important;
}
</style>
