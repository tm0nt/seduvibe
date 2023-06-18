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

        <h2 class="text-center white--text">Laís Morais</h2>
        <p class="text-center grey--text overline">
          <span class="font-italic">vibing+&nbsp;</span>
        </p>
        <v-col cols="12">
          <v-btn color="purple" class="text-center white--text" block
            >Ver perfil</v-btn
          >
        </v-col>
        <v-col class="text-center my-n1">
          <p class="overline grey--text">Outras assinaturas premium ativa</p>
        </v-col>
        <v-col cols="12" class="my-n4 text-center d-sm-flex justify-sm-center">
          <v-sheet
            class="mx-auto sheet-no-border"
            elevation="0"
            max-width="100%"
            color="#212121"
            dark
          >
            <v-slide-group v-model="model" class="pa-4" show-arrows>
              <v-slide-item v-for="n in 5" :key="n" v-slot="{ active, toggle }">
                <v-card
                  class="ma-4 circle-card grey"
                  width="50"
                  height="50"
                  @click="toggle"
                  flat
                >
                  <div class="d-flex fill-height align-center justify-center">
                    <v-scale-transition>
                      <v-icon
                        v-if="active"
                        color="purple"
                        size="48"
                        class="circle-icon"
                      >
                        mdi-close-circle-outline
                      </v-icon>
                    </v-scale-transition>
                  </div>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-sheet>
        </v-col>
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
          >
            <v-tabs-slider color="purple"></v-tabs-slider>
            <v-tab class="withoutupercase">Minha assinatura</v-tab>
            <v-tab class="withoutupercase">Conteúdo exclusivo</v-tab>
          </v-tabs>
        </v-app-bar>
        <div class="d-flex justify-center flex-column">
          <v-row v-if="selectedTab === 0">
            <v-col class="tab-content">
              <component :is="currentComponent" />
            </v-col>
          </v-row>

          <v-row v-if="selectedTab === 1">
            <v-col class="tab-content">
              <component :is="currentComponent" />
            </v-col>
          </v-row>
        </div>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import SideBar from "../SideBar.vue";
import AssinaturaComponent from "./AssinaturaVibePlus.vue";
import ConteudoComponent from "./ConteudoPlus.vue";

export default {
  components: {
    SideBar,
    AssinaturaComponent,
    ConteudoComponent,
  },
  data() {
    return {
      drawer: true,
      model: null,
      selectedTab: "assinatura",
    };
  },
  computed: {
    currentComponent() {
      switch (this.selectedTab) {
        case 0:
          return "AssinaturaComponent";
        case 1:
          return "ConteudoComponent";
        default:
          return null;
      }
    },
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
  created() {
    if (window.innerWidth < 768) {
      this.drawer = false;
    }
  },
};
</script>

<style>
.purple-bg {
  position: relative;
  background-color: purple;
  background: url("https://saibadetudo.com.br/wp-content/uploads/2022/04/capa-insta-2-min-10.jpg")
    center center;
  height: 150px;
  width: 100%;
  position: absolute;
  background-size: cover;
  z-index: 1;
  /* define um valor maior que o z-index do v-toolbar */
}

.circle-card {
  border-radius: 50% !important;
  overflow: hidden;
}

.circle-icon {
  width: 50px;
  height: 50px;
}
.tab-content {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.toolbar-mobile {
  position: relative;
  z-index: 2;
  /* define um valor menor que o z-index da div purple-bg */
}

.avatar-border {
  border: 5px solid purple;
}
</style>
