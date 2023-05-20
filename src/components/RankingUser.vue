<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <SideBar :drawer.sync="drawer" />
    <div class="purple-bg">
      <v-container>
        <v-toolbar flat color="rgba(0,0,0,0)" class="toolbar-mobile">
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
        <v-col cols="12" class="d-flex justify-center align-center">
          <v-avatar size="150" color="white" :border="'5px solid white'">
            <v-img src="/img/avatar.jpg" contain class="rounded-circle"></v-img>
          </v-avatar>
        </v-col>
        <h1 class="text-center white--text">Laís Morais</h1>
        <v-app-bar
          dark
          color="rgba(0,0,0,0)"
          flat
          class="d-flex justify-center"
        >
          <v-tabs
            color="purple"
            v-model="selectedTab"
            class="d-flex justify-center flex-column"
            centered
            scrollable
            style="max-width: 600px"
          >
            <v-tabs-slider color="purple"></v-tabs-slider>
            <v-tab class="withoutupercase">Ranking</v-tab>
            <v-tab class="withoutupercase">Meus níveis</v-tab>
            <v-tab class="withoutupercase">Recompensas</v-tab>
          </v-tabs>
        </v-app-bar>
        <div class="d-flex justify-center flex-column">
          <v-row v-if="selectedTab === 0">
            <v-col cols="12" class="tab-content mt-5">
              <component :is="currentComponent" />
            </v-col>
          </v-row>
          <v-row v-if="selectedTab === 1">
            <v-col cols="12" class="tab-content mt-5">
              <component :is="currentComponent" />
            </v-col>
          </v-row>
          <v-row v-if="selectedTab === 2">
            <v-col cols="12" class="tab-content mt-5">
              <component :is="currentComponent" />
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import Niveis from "../components/ranking/NiveisView.vue";
import Ranking from "../components/RankingCreator.vue";
import Recompensas from "../components/ranking/RecompensasView.vue";

export default {
  name: "HomeView",
  data: () => ({
    selection: 1,
    drawer: true,
    selectedTab: 0,
    tabs: [
      { title: "Ranking", component: "Ranking" },
      { title: "Meus níveis", component: "Niveis" },
      { title: "Recompensas", component: "Recompensas" },
    ],
  }),
  components: {
    SideBar,
    Niveis,
    Ranking,
    Recompensas,
  },
  computed: {
    currentComponent() {
      switch (this.selectedTab) {
        case 0:
          return "Ranking";
        case 1:
          return "Niveis";
        case 2:
          return "Recompensas";
        default:
          return null;
      }
    },
  },
  created() {
    if (window.innerWidth < 768) {
      this.drawer = false;
    }
  },
};
</script>

<style scoped>
.purple-bg {
  background-color: purple;
  height: 200px;
  width: 100%;
  position: absolute;
  z-index: 1;
  /* define um valor maior que o z-index do v-toolbar */
}

.toolbar-mobile {
  position: relative;
  z-index: 2;
  /* define um valor menor que o z-index da div purple-bg */
}
.tab-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
