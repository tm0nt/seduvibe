<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <SideBar :drawer.sync="drawer" />
    <v-overlay :value="isBlurred" absolute class="blur-overlay">
      <v-container class="d-flex flex-column align-center justify-center">
        <h3 class="text-center">Faça login-in em sua conta</h3>
        <h5>Ou crie uma.</h5>
        <v-btn
          class="mt-2"
          color="purple"
          dark
          :loading="loading"
          @click="createAccount"
        >
          <template v-if="!loading"> Criar agora </template>
          <template v-else>
            <v-progress-circular
              indeterminate
              color="white"
              size="24"
            ></v-progress-circular>
          </template>
        </v-btn>
      </v-container>
    </v-overlay>
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
        <h1 class="text-center white--text">@Guest561232</h1>
        <v-app-bar
          dark
          color="rgba(0,0,0,0)"
          flat
          class="d-flex justify-center"
        >
        </v-app-bar>
      </v-container>
    </div>
  </v-app>
</template>

<script>
import SideBar from "../components/SideBar.vue";

export default {
  name: "HomeView",
  data: () => ({
    selection: 1,
    drawer: true,
    isBlurred: true,
    loading: false,
    selectedTab: null,
  }),
  components: {
    SideBar,
  },
  methods: {
    createAccount() {
      this.loading = true;

      // Simulando uma requisição assíncrona com setTimeout
      setTimeout(() => {
        // Após a conclusão da requisição, redireciona para /login
        this.$router.push("/login");

        // Reseta o estado de loading após o redirecionamento
        this.loading = false;
      }, 2000);
    },
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

.blur-overlay::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(20px);
}
</style>
