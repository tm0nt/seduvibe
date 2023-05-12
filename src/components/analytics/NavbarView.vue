<template>
  <v-app-bar color="rgba(0,0,0,0)" flat class="mt-2">
    <div>
      <h4 class="white--text mt-n3">Bom dia, Laís Silva</h4>
      <br />
      <p class="grey--text caption mt-n5">
        Vamos lá, analisar metricamente sua conta!
      </p>
    </div>
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

    <v-spacer></v-spacer>

    <v-icon color="#878A94" class="mt-n8">far fa-envelope</v-icon>

    <v-badge
      bordered
      overlap
      color="purple"
      content="2"
      class="ml-3 mt-n8"
      dark
    >
      <v-icon color="#878A94">far fa-bell</v-icon>
    </v-badge>

    <v-avatar size="30" class="ml-3 mt-n8">
      <v-img
        src="https://64.media.tumblr.com/9c7d26120ea04d8a946409133f9b3df9/2a2eda0f2e53ab0d-d1/s640x960/9cc7cb8352092bd2e55fa1e0f9a9b84d2d8e9911.jpg"
      ></v-img>
    </v-avatar>
    <div>
      <p class="white--text mt-n3 ml-2 caption">Laís Silva</p>
      <br />
      <p class="grey--text mt-n10 ml-2 caption">São Paulo, Brasil</p>
    </div>

    <v-icon x-small color="#878A94" class="mt-n8 ml-2"
      >fas fa-chevron-down</v-icon
    >
  </v-app-bar>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
<style></style>
