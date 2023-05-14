<template>
  <v-card color="#202022" class="rounded-lg mt-2" flat>
    <v-row>
      <v-col cols="12" sm="8">
        <v-toolbar color="transparent" flat class="mt-n3">
          <v-toolbar-title class="white--text"> Gráfico </v-toolbar-title>
          <v-spacer></v-spacer>
          <span class="grey--text">1 ano</span>
          <v-icon x-small color="#878A94" class="ml-2"
            >fas fa-chevron-down</v-icon
          >
        </v-toolbar>
        <line-chart :chart-data="data"></line-chart>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  data() {
    return {
      data: {
        labels: [
          "2023-05-01",
          "2023-05-02",
          "2023-05-03",
          "2023-05-04",
          "2023-05-05",
          "2023-05-06",
          "2023-05-07",
        ],
        datasets: [
          {
            label: "Quantidade de views diárias",
            backgroundColor: "#f87979",
            data: [120, 180, 90, 200, 150, 50, 80],
          },
        ],
      },
    };
  },
  mounted() {
    this.renderChart(this.data, {
      responsive: true,
      maintainAspectRatio: false,
    });
  },
};
</script>
<style></style>
