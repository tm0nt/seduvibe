<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <SideBar :drawer.sync="drawer" />

    <v-container>
      <v-toolbar flat color="rgba(0,0,0,0)">
        <v-btn
          icon
          dark
          class="d-lg-none d-xl-flex"
          @click.stop="drawer = !drawer"
        >
          <v-icon>mdi-menu</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
      </v-toolbar>
      <h1 class="purple--text ml-5 mt-5 mb-5">Meus acessos</h1>
      <v-row>
        <v-col v-for="j in 6" :key="`${n}${j}`" cols="12">
          <v-sheet height="150"></v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import SideBar from "../components/SideBar.vue";

export default {
  name: "HomeView",
  data: () => ({
    selection: 1,
    drawer: true,
  }),
  components: {
    SideBar,
  },
  methods: {},
  created() {
    if (window.innerWidth < 768) {
      // define a largura limite
      this.drawer = false; // define drawer como false se a largura for menor que 768px
    }
  },
};
</script>
