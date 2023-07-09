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
        <v-flex xs7 sm7 md6 lg6 class="mt-2">
          <v-autocomplete
            v-model="searchQuery"
            append-icon=""
            placeholder="Pesquise por usuários..."
            prepend-inner-icon="mdi-magnify"
            color="purple"
            dark
            class="custom-autocomplete"
            rounded
            hide-details
            :menu-props="{ transition: false }"
            item-text="username"
            item-value="username"
            return-object
            :style="{ padding: '10px' }"
            :class="{ 'dark-autocomplete': $vuetify.theme.dark }"
          >
          </v-autocomplete>
        </v-flex>
        <v-spacer></v-spacer>
        <div class="notification-dropdown">
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on" class="" text>
                <v-icon color="white mr-4">mdi-bell</v-icon>
              </v-btn>
            </template>
            <v-card class="rounded-card" dark>
              <v-list dark class="rounded">
                <v-list-item
                  v-for="(notification, index) in notifications"
                  :key="index"
                >
                  <v-list-item-icon>
                    <v-icon color="purple">{{ notification.icon }}</v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title class="purple--text">{{
                      notification.title
                    }}</v-list-item-title>
                    <v-list-item-subtitle class="grey--text">{{
                      notification.message
                    }}</v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
              <p class="text-center grey--text overline">VER TUDO</p>
            </v-card>
          </v-menu>

          <v-btn color="purple" class="white--text" @click="openModal">
            <v-icon class="{'text-center': isMobile}" size="18"
              >fas fa-filter</v-icon
            >

            <span class="hidden-sm-and-down">&nbsp;Filtros</span>
          </v-btn>
        </div>
      </v-toolbar>

      <v-app-bar
        dark
        color="rgba(0,0,0,0)"
        flat
        class="mt-4 d-flex justify-center"
      >
        <v-tabs
          v-model="selectedTab"
          color="purple"
          centered
          fixed-tabs
          show-arrows
          style="max-width: 100vw"
        >
          <v-tabs-slider color="purple"></v-tabs-slider>
          <v-tab class="withoutupercase">Modelos</v-tab>
          <v-tab class="withoutupercase">Ao vivo</v-tab>
        </v-tabs>
      </v-app-bar>
      <v-divider color="grey"></v-divider>
      <v-app-bar flat color="rgb(0,0,0,0)"></v-app-bar>
      <div class="">
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
      </div>
    </v-container>
    <v-dialog v-model="modalOpen" max-width="500" dark>
      <v-card>
        <v-card-title>
          <span class="headline">Filtros</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="6">
                <v-select
                  v-model="selectedGenre"
                  :items="genres"
                  label="Gênero"
                  color="purple"
                ></v-select>
              </v-col>
              <v-col cols="6">
                <v-select
                  v-model="selectedTag"
                  :items="tags"
                  label="Tags"
                  color="purple"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-slider
                  v-model="priceRange"
                  min="0"
                  max="1000"
                  label="Preço"
                  color="purple"
                  thumb-label
                  tick-labels
                ></v-slider>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="purple" text @click="applyFilters">Aplicar</v-btn>
          <v-btn color="purple" text @click="closeModal">Fechar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import SideBar from "../components/SideBar.vue";
import VideoChamadas from "./videochamadas/VideochamadaView.vue";
import ModelosView from "./ModelosView.vue";

export default {
  name: "HomeView",
  data: () => ({
    activeTab: 0,
    selectedTab: null,
    tags: ["Novinha", "Nerd", "Gamer", "BDSM"],
    modalOpen: false,
    genres: [
      "Masculino",
      "Feminino",
      "Não binário",
      "Agênero",
      "Bigênero",
      "Gênero fluido",
      "Pangênero",
      "Transexual",
      "Outro",
    ],
    selectedGenre: "",
    chipSelected: false,
    priceRange: [0, 100], // Defina os valores mínimos e máximos do slider conforme necessário
    searchQuery: "",
    isDropdownOpen: false,
    notifications: [
      {
        id: 1,
        icon: "mdi-bell",
        title: "Notificação 1",
        message: "Essa é uma notificação.",
      },
      {
        id: 2,
        icon: "mdi-bell",
        title: "Notificação 2",
        message: "Essa é uma notificação.",
      },
    ],
    drawer: true,
  }),
  components: {
    SideBar,
    VideoChamadas,
    ModelosView,
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
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    moveTab(direction) {
      if (direction === "left") {
        this.activeTab =
          (this.activeTab - 1 + this.tabs.length) % this.tabs.length;
      } else if (direction === "right") {
        this.activeTab = (this.activeTab + 1) % this.tabs.length;
      }
    },

    openModal() {
      this.modalOpen = true;
    },
    toggleChipSelection() {
      this.chipSelected = !this.chipSelected;
    },
    closeModal() {
      this.modalOpen = false;
    },
    applyFilters() {
      // Lógica para aplicar os filtros selecionados
      console.log("Gênero selecionado:", this.selectedGenre);
      console.log("Faixa de preço selecionada:", this.priceRange);
      this.modalOpen = false;
    },
    centerActiveTab(tabId) {
      this.activeTab = tabId;
    },
  },
  computed: {
    currentComponent() {
      switch (this.selectedTab) {
        case 0:
          return "ModelosView";
        case 1:
          return "VideoChamadas";
        default:
          return null;
      }
    },
    filteredUsers() {
      return this.users.filter(
        (user) =>
          user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          user.username.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  created() {
    if (window.innerWidth < 768) {
      // define a largura limite
      this.drawer = false; // define drawer como false se a largura for menor que 768px
    }
  },
};
</script>
<style scoped>
.custom-results-list .v-list-item {
  background-color: #212121 !important;
  border-radius: 8px;
}

.rounded {
  border-radius: 25px;
}

.custom-autocomplete .custom-results-list {
  background-color: black;
}
.v-tab.withoutupercase {
  text-transform: none !important;
}

.blurred-image {
  filter: blur(2px);
}

.v-menu__content .v-list-item {
  background-color: #262626 !important;
}

.tabs-container {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.v-btn.withoutupercase {
  text-transform: none !important;
}

.three {
  width: 50px;
  height: 50px;
}
.circle-avatar {
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid purple !important;
}
.circle-image {
  border-radius: 50%;
}
.four {
  width: 50px;
  height: 25px;
  background: purple;
}

.five {
  width: 50px;
  height: 25px;
  background: rgb(87, 1, 87);
}
.custom-autocomplete .v-autocomplete__content {
  background-color: #262626 !important;
}

.full-width-tabs {
  width: 100%;
}

@media (min-width: 600px) {
  .full-width-tabs {
    width: unset;
  }
}
</style>
