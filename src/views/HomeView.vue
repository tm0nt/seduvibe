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
              <v-btn v-bind="attrs" v-on="on" text>
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
      <v-app-bar dark color="rgba(0,0,0,0)" flat class=""> </v-app-bar>
      <v-divider color="grey"></v-divider>

      <v-row>
        <v-col
          cols="12"
          xs="12"
          sm="8"
          md="3"
          lg="3"
          v-for="(vibe, i) in seduvibe"
          :key="i"
        >
          <v-card class="mx-auto my-12 rounded-xl" color="#151515">
            <v-img width="100%" :src="vibe.image" tile class="blurred-image">
            </v-img>
            <div
              class="d-flex align-center justify-center"
              style="height: 100%"
            >
              <v-avatar
                color="white"
                class="circle-avatar"
                size="100"
                style="position: absolute"
              >
                <v-img :src="vibe.pic" contain class="circle-image"></v-img>
              </v-avatar>
            </div>

            <v-toolbar color="transparent" class="mt-n7" flat>
              <v-avatar color="black" rounded class="mr-2" purple>
                <div class="three">
                  <div class="four">
                    <span class="white--text caption">{{ vibe.price }}</span>
                  </div>
                  <div class="five">
                    <span
                      class="white--text caption mdi mdi-lock-open-variant"
                    ></span>
                  </div>
                </div>
              </v-avatar>
            </v-toolbar>
            <v-card-title
              class="text-subtitle-1 text-center ml-3 mt-5 white--text"
            >
              Taiane Martins&nbsp;
              <v-icon small color="purple">mdi-check-decagram</v-icon>
            </v-card-title>
            <v-card-title
              class="grey--text text-grey-purple-1 text-center ml-3 caption font-italic"
            >
              {{ vibe.descricao }} </v-card-title
            ><br />
          </v-card>
        </v-col>
      </v-row>
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

export default {
  name: "HomeView",
  data: () => ({
    activeTab: 0,
    selectedTag: null,
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
    seduvibe: [
      {
        image:
          "https://istoe.com.br/wp-content/uploads/2022/04/jade-picon-1.jpg",
        pic: "https://pm1.narvii.com/6649/f0104fe950ca05cc7216a0ebb0e779f62800734f_00.jpg",
        price: "R$ 465",
        descricao: "1.512.452 Assinantes",
      },
      {
        image:
          "https://istoe.com.br/wp-content/uploads/2022/04/jade-picon-1.jpg",
        pic: "https://pm1.narvii.com/6649/f0104fe950ca05cc7216a0ebb0e779f62800734f_00.jpg",
        price: "R$ 465",
        descricao: "1.512.452 Assinantes",
      },
      {
        image:
          "https://istoe.com.br/wp-content/uploads/2022/04/jade-picon-1.jpg",
        pic: "https://pm1.narvii.com/6649/f0104fe950ca05cc7216a0ebb0e779f62800734f_00.jpg",
        price: "R$ 465",
        descricao: "1.512.452 Assinantes",
      },
      {
        image:
          "https://eql.com.br/wp-content/uploads/2022/02/Abre-JadePicon-BigBrotherBrasil-160222-Divulgacao3-1024x576.jpg",
        pic: "https://pm1.narvii.com/6649/f0104fe950ca05cc7216a0ebb0e779f62800734f_00.jpg",
        price: "R$ 465",
        descricao: "1.512.452 Assinantes",
      },
    ],
  }),
  components: {
    SideBar,
  },
  methods: {
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
