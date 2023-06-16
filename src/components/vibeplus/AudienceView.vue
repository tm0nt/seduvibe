<template>
  <v-card class="rounded-lg" color="#0F0A1E">
    <v-toolbar color="rgba(0,0,0,0)" flat dark class="py-4">
      <v-toolbar-title class="mt-n10">
        <span class="caption">Target Audience</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-icon color="#C3F942" small class="mt-n8">fas fa-ellipsis-h</v-icon>
    </v-toolbar>
    <div>
      <line-chart :data="chartData" :options="chartOptions"></line-chart>
    </div>
  </v-card>
</template>

<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Wave Chart",
            borderColor: "#C3F942",
            pointBackgroundColor: "#C3F942",
            data: [65, 59, 80, 81, 56, 55, 40],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions);
  },
};
</script>
