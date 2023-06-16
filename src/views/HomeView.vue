3 / 3 Aqui está o código atualizado da sua caixa de pesquisa que mostra os
resultados dinamicamente com v-avatar, nome e usuário: html Copy code
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
        <v-flex xs6 sm6 md4 lg6 dark>
          <v-autocomplete
            style="background-color: #212121 !important"
            v-model="searchQuery"
            :items="filteredUsers"
            label="Pesquise por usuários..."
            dark
            prepend-inner-icon="mdi-magnify"
            color="purple"
            flat
            class="custom-autocomplete pt-5"
            :class="{ 'd-sm-flex': $vuetify.breakpoint.smAndUp }"
            rounded
            outlined
            hide-no-data
            hide-details
            :menu-props="{ transition: false }"
            item-text="username"
            item-value="username"
            return-object
            :search-input.sync="isSearching"
          >
            <template v-slot:item="{ item }">
              <v-list-item
                class="mt-1 custom-item"
                style="background: #f1f1f1 !important; border-radius: 200px"
              >
                <v-list-item-avatar>
                  <v-img :src="item.avatar"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="purple--text">{{
                    item.name
                  }}</v-list-item-title>
                  <v-list-item-subtitle class="grey--text"
                    >@{{ item.username }}</v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-autocomplete>
        </v-flex>

        <v-spacer></v-spacer>
        <div>
          <v-btn color="purple" class="white--text" @click="openModal">
            <v-icon class="{'text-center': isMobile}" size="18"
              >fas fa-filter</v-icon
            >
            <span class="hidden-sm-and-down">&nbsp;Filtros</span>
          </v-btn>
        </div>
      </v-toolbar>
      <v-app-bar dark color="rgba(0,0,0,0)" flat class="mt-5">
        <v-btn icon @click="moveTab('left')">
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-tabs
          v-model="activeTab"
          color="purple"
          class="align-center"
          :class="{ 'full-width-tabs': isMobile }"
          ref="tabs"
        >
          <v-tabs-slider color="purple"></v-tabs-slider>

          <v-tab
            v-for="tab in tabs"
            :key="tab.id"
            class="withoutupercase"
            @click="centerActiveTab(tab.id)"
          >
            {{ tab.title }}
          </v-tab>
        </v-tabs>

        <v-spacer></v-spacer>

        <v-btn icon @click="moveTab('right')">
          <v-icon>mdi-chevron-right</v-icon>
        </v-btn>
      </v-app-bar>
      <v-divider color="grey"></v-divider>
      <v-toolbar flat color="rgba(0,0,0,0)">
        <v-divider vertical color="grey" inset class="d-none"></v-divider>
        <v-toolbar-title class="grey--text ml-4 d-none">Tags</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-chip
          class="ma-sm-1 d-flex mr-2"
          :color="chipSelected ? 'purple' : '#303030'"
          :text-color="chipSelected ? 'white' : 'grey'"
          :dark="chipSelected"
          :style="{
            'font-size': '10px',
            padding: '2px 4px',
            'margin-right': '4px',
          }"
          @click="toggleChipSelection"
        >
          <v-icon v-if="chipSelected">mdi-cancel</v-icon>
          <v-icon v-else>mdi-cancel</v-icon>
          &nbsp;Novinhas
        </v-chip>

        <v-spacer></v-spacer>
      </v-toolbar>
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
              class="grey--text text-grey-purple-1 text-center ml-3 caption mt-1 font-italic"
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
              <v-col cols="12">
                <v-select
                  v-model="selectedGenre"
                  :items="genres"
                  label="Gênero"
                ></v-select>
              </v-col>
              <v-col cols="12">
                <v-slider
                  v-model="priceRange"
                  min="0"
                  max="100"
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
    modalOpen: false,
    genres: ["Opção 1", "Opção 2", "Opção 3"], // Substitua pelas opções de gênero reais
    selectedGenre: "",
    chipSelected: false,
    priceRange: [0, 100], // Defina os valores mínimos e máximos do slider conforme necessário
    searchQuery: "",
    users: [
      {
        name: "Marisa",
        username: "marisaalves",
        avatar:
          "https://pbs.twimg.com/profile_images/1661725430255058945/NVTA7VA7_400x400.jpg",
      },
      {
        name: "Marcela Lima",
        username: "marcelalima",
        avatar:
          "https://static1.purebreak.com.br/articles/5/11/08/65/@/505074-jade-picon-rejeita-comentarios-sobre-sua-diapo-2.jpg",
      },
      {
        name: "Emme White",
        username: "emmewhite",
        avatar:
          "https://akns-images.eonline.com/eol_images/Entire_Site/2022715/rs_600x600-220815145922-15.08.22-600x600-JadePicon-Instagram.jpg?fit=around%7C1200:1200&output-quality=90&crop=1200:1200;center,top",
      },

      {
        name: "Lais Silva",
        username: "laissilva",
        avatar:
          "https://www.bnews.com.br/media/_versions/abril_2023/jade-picon-bastidores_widemd.jpg",
      },
    ],
    tabs: [
      { id: 1, title: "Perfis verificados" },
      { id: 2, title: "Mais visitados" },
      { id: 3, title: "Novos perfis" },
      { id: 4, title: "Ranking" },
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
.v-tab.withoutupercase {
  text-transform: none !important;
}

.blurred-image {
  filter: blur(2px);
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
  border: 3px solid #151515 !important;
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
.full-width-tabs {
  width: 100%;
}

@media (min-width: 600px) {
  .full-width-tabs {
    width: unset;
  }
}
</style>
