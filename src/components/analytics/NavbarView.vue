<template>
  <v-app-bar color="rgba(0,0,0,0)" flat class="mt-15">
    <v-row align="center">
      <v-col cols="12" md="3" class="text-center text-md-left">
        <h4 class="white--text mt-n3">Bom dia, Laís Silva</h4>
        <br />
        <p class="grey--text caption mt-n5">
          Vamos lá, analisar metricamente sua conta!
        </p>
      </v-col>

      <v-col cols="12" md="5" class="text-center d-none d-md-block">
        <v-text-field
          label="Faça pesquisas por aqui"
          filled
          prepend-inner-icon="mdi-magnify"
          dense
          solo
          flat
          background-color="#1D1C21"
          dark
          class="ml-5"
        ></v-text-field>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style></style>
