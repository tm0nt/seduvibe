<template>
  <v-app>
    <v-navigation-drawer
      v-model="localDrawer"
      app
      color="#212121"
      mini-variant
      mini-variant-width="110"
    >
      <v-avatar class="d-block text-center mx-auto mt-4 mb-10" size="85">
        <v-img
          class="mt-5"
          src="../assets/logo2.png"
          height="auto"
          max-width="50px"
        ></v-img>
      </v-avatar>

      <v-card flat color="#151515" class="rounded-xl mx-4 py-10">
        <v-list flat class="" dark>
          <v-list-item-group v-model="selectedItem">
            <v-list-item
              v-for="(item, i) in sidebarItems"
              :key="i"
              active-class="border"
              exact
              :to="item.url"
              :class="{ active: item.active }"
              @click="handleMenuItemClick(item.icon)"
            >
              <v-list-item-content>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on }">
                    <v-icon
                      v-text="item.icon"
                      :color="item.active ? 'white' : 'grey lighten-1'"
                      v-on="on"
                    ></v-icon>
                  </template>
                  <span>{{ item.title }}</span>
                </v-tooltip>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
      <div
        style="
          position: absolute;
          bottom: 20px;
          margin-left: auto;
          margin-right: auto;
          left: 0;
          right: 0;
          text-align: center;
        "
      >
        <v-menu v-model="avatarOpen" color="purple" dark v-if="tokenExists">
          <template v-slot:activator="{ on }">
            <v-avatar v-on="on" size="40" @click="openAvatar">
              <v-img
                src="https://i.em.com.br/jTOeJB6fT9ijp4Icco__veVWhO0=/1200x1200/smart/imgsapp.em.com.br/app/noticia_127983242361/2023/03/03/1464489/jade-picon-vestida-de-chiara-_1_1461741.png"
                class="image"
              ></v-img>
            </v-avatar>
          </template>
          <v-list>
            <v-list-item @click="logout">
              <v-list-item-icon>
                <v-icon>mdi-logout</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Sair</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <div v-else>
          <v-icon color="white">mdi-account</v-icon>
          <p class="grey--text" style="font-size: 9px !important">
            Você não está logado
            <v-btn to="/login" dark color="white" text class="elevation-0" small
              >Entrar</v-btn
            >
          </p>
        </div>
      </div>
    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  props: {
    drawer: Boolean,
  },
  data() {
    return {
      avatarOpen: false,
      localDrawer: this.drawer,
      creator: null,
      selectedItem: 0,
      tokenExists: false,
      sidebarItems: [],
    };
  },
  mounted() {
    const axios = require("axios");
    const url = "https://api.seduvibe.com/";
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(url, config)
      .then((response) => {
        // Requisição bem-sucedida
        const creator = response.data.users[0].creator;
        localStorage.setItem("creator", creator);
        if (!localStorage.getItem("creator")) {
          this.sidebarItems = [
            {
              icon: "mdi-home-outline",
              url: "/",
              title: "Home",
              active: false,
            },
            {
              icon: "mdi-account-circle-outline",
              url: "/profile",
              title: "Perfil",
              active: false,
            },
            {
              icon: "mdi-chat-outline",
              url: "/chat",
              title: "Chat",
              active: false,
            },
            {
              icon: "mdi-layers-plus",
              url: "/vibeplus",
              title: "Vibe+",
              active: false,
            },

            {
              icon: "mdi-chevron-triple-up",
              url: "/ranking",
              title: "Ranking",
              active: false,
            },
          ];
          return;
        }
        if (creator === 1) {
          this.sidebarItems = [
            {
              icon: "mdi-home-outline",
              url: "/",
              title: "Home",
              active: false,
            },
            {
              icon: "mdi-account-circle-outline",
              url: "/profile",
              title: "Perfil",
              active: false,
            },
            {
              icon: "mdi-chat-outline",
              url: "/chat",
              title: "Chat",
              active: false,
            },
            {
              icon: "mdi-note-multiple-outline",
              url: "/postagem",
              title: "Criar uma publicação",
              active: false,
            },
            {
              icon: "mdi-layers-plus",
              url: "/vibeplus",
              title: "Vibe+",
              active: false,
            },
            {
              icon: "mdi-chevron-triple-up",
              url: "/ranking",
              title: "Ranking",
              active: false,
            },
          ];
        } else {
          this.sidebarItems = [
            {
              icon: "mdi-home-outline",
              url: "/",
              title: "Home",
              active: false,
            },
            {
              icon: "mdi-account-circle-outline",
              url: "/profile",
              title: "Perfil",
              active: false,
            },
            {
              icon: "mdi-chat-outline",
              url: "/chat",
              title: "Chat",
              active: false,
            },
            {
              icon: "mdi-link-box-outline",
              url: "/virarcriador",
              title: "Torne-se criador(a)",
              active: false,
            },
            {
              icon: "mdi-layers-plus",
              url: "/vibeplus",
              title: "Vibe+",
              active: false,
            },

            {
              icon: "mdi-chevron-triple-up",
              url: "/ranking",
              title: "Ranking",
              active: false,
            },
          ];
        }
      })
      .catch((error) => {
        // A requisição falhou
        console.error("Falha na requisição:", error.response.status);
      });

    if (this.sidebarItems.length === 0) {
      this.sidebarItems = [
        {
          icon: "mdi-home-outline",
          url: "/",
          title: "Home",
          active: false,
        },
        {
          icon: "mdi-account-circle-outline",
          url: "/profile",
          title: "Perfil",
          active: false,
        },
        {
          icon: "mdi-chat-outline",
          url: "/chat",
          title: "Chat",
          active: false,
        },
        {
          icon: "mdi-chevron-triple-up",
          url: "/ranking",
          title: "Ranking",
          active: false,
        },
      ];
    }
  },
  created() {
    this.checkTokenExistence();
  },
  watch: {
    drawer(newValue) {
      this.localDrawer = newValue;
    },
    $route(newRoute) {
      this.sidebarItems.forEach((item) => {
        item.active = newRoute.path === item.url;
      });
    },
  },
  methods: {
    checkTokenExistence() {
      // Verifica se o token existe no localStorage
      const token = localStorage.getItem("token");
      if (token) {
        // Se o token existir, define a propriedade tokenExists como verdadeiro
        this.tokenExists = true;
      } else {
        // Se o token não existir, define a propriedade tokenExists como falso
        this.tokenExists = false;
      }
    },
    openAvatar() {
      this.avatarOpen = true;
    },
    logout() {
      localStorage.clear();
      this.$router.replace({
        path: "/login",
        query: { logout: "Você saiu da sua conta." },
      });
    },
    handleMenuItemClick(icon) {
      // Lógica para manipular o clique no item do menu
      console.log("Icon clicked:", icon);
    },
  },
};
</script>

<style>
.border {
  margin: 0px 8px;
  background: purple;
  border-radius: 15px;
  text-decoration: none;
}
</style>
