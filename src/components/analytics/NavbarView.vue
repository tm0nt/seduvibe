<template>
  <v-app-bar color="rgba(0,0,0,0)" flat class="mt-15">
    <v-row align="center">
      <v-col cols="12" md="3" class="text-center text-md-left">
        <h4 class="white--text mt-n3">Olá, Laís Silva</h4>
        <br />
        <p class="grey--text caption mt-n5">{{ introduction_page }}</p>
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script>
export default {
  props: {
    introduction_page: {
      type: String,
      default: "", // Valor padrão para a prop "value"
    },
  },
};
</script>

<style></style>
