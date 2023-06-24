<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <SideBar :drawer.sync="drawer" />
    <v-container>
      <v-row justify="center" align="center">
        <v-col>
          <v-card
            class="text-center white--text rounded-card elevation-0"
            flat
            style="border-radius: 20px"
            width="100%"
            height="250px"
            dark
            :class="$vuetify.theme.dark ? 'dark-card' : ''"
          >
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
            <v-avatar size="80">
              <v-img
                src="https://spinoff.com.br/entrete/wp-content/uploads/2023/05/Jade-Picon-2-300x300.jpg"
                contain
                class="rounded-circle"
              ></v-img>
            </v-avatar>
            <h2 class="pt-1 font-weight-regular mb-2">
              Bem vindo(a), Laís Silva
            </h2>
            <v-row justify="center" align="center">
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
                  fixed-tabs
                  show-arrows
                  style="max-width: 100vw"
                >
                  <v-tabs-slider color="purple"></v-tabs-slider>
                  <v-tab class="withoutupercase">Geral</v-tab>
                  <v-tab class="withoutupercase">Info</v-tab>
                  <v-tab class="withoutupercase">Pedidos</v-tab>
                  <v-tab class="withoutupercase">Agenda</v-tab>
                  <v-tab class="withoutupercase">Mimos</v-tab>
                </v-tabs>
              </v-app-bar>
            </v-row>
          </v-card>
          <div class="d-flex justify-center flex-column">
            <v-row v-if="selectedTab === 0">
              <v-col cols="12" class="tab-content">
                <component :is="currentComponent" />
              </v-col>
            </v-row>
            <v-row v-if="selectedTab === 1">
              <v-col cols="12" class="tab-content">
                <component :is="currentComponent" />
              </v-col>
            </v-row>
            <v-row v-if="selectedTab === 2">
              <v-col cols="12" class="tab-content">
                <component :is="currentComponent" />
              </v-col>
            </v-row>
            <v-row v-if="selectedTab === 3">
              <v-col cols="12" class="tab-content">
                <component :is="currentComponent" />
              </v-col>
            </v-row>
            <v-row v-if="selectedTab === 4">
              <v-col cols="12" class="tab-content">
                <component :is="currentComponent" />
              </v-col>
            </v-row>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import SideBar from "../SideBar.vue";
import AgendaView from "./tabs/AgendaView.vue";
import GeralView from "./tabs/GeralView.vue";
import InfoView from "./tabs/InfoView.vue";
import MimosView from "./tabs/MimosView.vue";
import PedidosView from "./tabs/PedidosView.vue";

export default {
  components: {
    SideBar,
    GeralView,
    PedidosView,
    AgendaView,
    MimosView,
    InfoView,
  },
  data() {
    return {
      selectedTab: null,
      tabs: [
        { title: "Geral", component: "GeralView" },
        { title: "Info", component: "InfoView" },
        { title: "Pedidos", component: "PedidosView" },
        { title: "Agenda", component: "AgendaView" },
        { title: "Mimos", component: "MimosView" },
      ],
      drawer: true,
    };
  },
  methods: {
    centerSelectedTab() {
      const tabsContainer = document.querySelector(".v-tabs-bar");
      const selectedTabElement = document.querySelector(".v-tab--active");

      if (tabsContainer && selectedTabElement) {
        const containerWidth = tabsContainer.offsetWidth;
        const tabOffsetLeft = selectedTabElement.offsetLeft;
        const tabWidth = selectedTabElement.offsetWidth;
        const scrollOffset =
          tabOffsetLeft - (containerWidth / 2 - tabWidth / 2);

        tabsContainer.scrollLeft += scrollOffset;
      }
    },
  },
  computed: {
    currentComponent() {
      switch (this.selectedTab) {
        case 0:
          return "GeralView";
        case 1:
          return "InfoView";
        case 2:
          return "PedidosView";
        case 3:
          return "AgendaView";
        case 4:
          return "MimosView";
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

<style>
.toolbar-mobile {
  position: relative;
  z-index: 2;
  /* define um valor menor que o z-index da div purple-bg */
}
</style>
