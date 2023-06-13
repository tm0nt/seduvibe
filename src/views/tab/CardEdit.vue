<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <div>
      <v-row class="d-flex mt-6">
        <v-col cols="12" sm6>
          <v-card class="rounded-lg mt-n3 pb-1 transparent" flat>
            <v-toolbar flat color="transparent">
              <v-toolbar-title class="white--text mt-n2"
                >Seu cartão</v-toolbar-title
              >
            </v-toolbar>
            <v-card color="#303030" class="rounded-lg mx-2 pa-1 mt-n3" flat>
              <v-toolbar flat color="transparent">
                <v-toolbar-title class="grey--text caption">
                  Mastercard
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-icon color="grey" class="">fab fa-cc-mastercard</v-icon>
              </v-toolbar>

              <span class="grey--text mt-3 ml-4 caption">RAFAEL F SANTOS</span>
              <v-card-text class="pt-0 mt-4">
                <span class="white--text font-weight-light"
                  >**** **** **** 6774</span
                >
              </v-card-text>
              <v-icon color="grey" class="ml-4 mb-2"
                >fa-regular fa-pen-to-square</v-icon
              >
            </v-card>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
<style>
body,
html {
  background-color: #212121;
}
</style>
