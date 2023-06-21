<template>
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
            v-for="(item, i) in items"
            :key="i"
            active-class="border"
            exact
            :to="item.url"
            :class="{ active: item.active }"
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
      <v-menu v-model="avatarOpen" color="purple" dark>
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
    </div>
  </v-navigation-drawer>
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
      selectedItem: 0,
      items: [
        {
          icon: "mdi-home-outline",
          url: "/",
          title: "Home",
          active: false,
        },
        {
          icon: "mdi-account-circle-outline",
          url: "/perfil",
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
        {
          icon: "mdi-bell",
          title: "Notificações",
          active: false,
        },
      ],
    };
  },
  watch: {
    drawer(newValue) {
      this.localDrawer = newValue;
    },
    $route(newRoute) {
      // define a propriedade "active" o menu com base na rota atual
      this.items.forEach((item) => {
        item.active = newRoute.path === item.url;
      });
    },
  },
  methods: {
    openAvatar() {
      this.avatarOpen = true;
    },
    logout() {
      // Limpar todo o conteúdo do localStorage
      localStorage.clear();

      // Redirecionar para a outra página com a mensagem
      this.$router.push({
        path: "/login",
        query: { logout: "Você saiu da sua conta." },
      });
    },

    goToSettings() {
      // Lógica para navegar para a página de configurações
    },

    selectItem() {
      this.$emit("update:drawer", false);
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
