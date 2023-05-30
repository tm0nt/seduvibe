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

      <v-col
        cols="12"
        md="4"
        class="d-flex align-center justify-center d-none d-md-block"
      >
        <v-badge bordered overlap color="purple" content="4" class="ml-2" dark>
          <v-icon color="#878A94">far fa-bell</v-icon>
        </v-badge>

        <v-avatar size="30" class="ml-3">
          <v-img
            src="https://64.media.tumblr.com/9c7d26120ea04d8a946409133f9b3df9/2a2eda0f2e53ab0d-d1/s640x960/9cc7cb8352092bd2e55fa1e0f9a9b84d2d8e9911.jpg"
          ></v-img>
        </v-avatar>
        <div class="d-flex flex-column justify-center">
          <p class="white--text mt-5 ml-2 caption">Laís Silva</p>
          <br />
          <p class="grey--text mt-n10 ml-2 caption">São Paulo, Brasil</p>
        </div>
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
