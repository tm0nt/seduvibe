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
        <v-row align="center">
          <v-col cols="auto">
            <v-row align="center">
              <v-col md="2" xs="1" sm="1">
                <v-avatar size="150" color="white" :border="'5px solid white'">
                  <v-img
                    src="/img/avatar.jpg"
                    contain
                    class="rounded-circle"
                  ></v-img>
                </v-avatar>
              </v-col>
              <v-col cols="6" md="8" sm="10" xs="10">
                <div style="display: inline-block; margin-top: 80px">
                  <h2 class="white--text">Laís Alves</h2>
                  <h5 class="grey--text">@laisalves</h5>
                  <v-btn color="purple" class="mt-3 white--text"> Vibe+ </v-btn>
                  <v-icon
                    color="grey"
                    size="18"
                    class="mt-3"
                    right
                    @click="redirectToVibeInfo"
                    >mdi-information-outline</v-icon
                  >

                  <p class="bio mt-5 white--text"></p>
                </div>
              </v-col>
              <v-row align="center" class="mt-5 d-flex justify-center">
                <v-col cols="4" class="text-center d-sm-flex justify-sm-end">
                  <v-icon class="purple--text">fab fa-facebook-f</v-icon>
                </v-col>
                <v-col cols="4" class="text-center d-sm-flex justify-sm-end">
                  <v-icon class="purple--text">fab fa-twitter</v-icon>
                </v-col>
                <v-col cols="4" class="text-center d-sm-flex justify-sm-end">
                  <v-icon class="purple--text">fab fa-instagram</v-icon>
                </v-col>
              </v-row>
            </v-row>
            <v-row>
              <v-col md="10" xs="11" sm="11">
                <p class="mt-5 white--text">
                  Assine meu conteúdo para ver videos exclusivos!!!
                </p>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
        <v-app-bar
          dark
          color="rgba(0,0,0,0)"
          flat
          class="d-flex justify-center"
        >
          <v-btn color="purple" class="white--text">
            ASSINE MENSALMENTE POR R$ 5,00
          </v-btn>
        </v-app-bar>
        <div class="d-flex justify-center">
          <a class="white--text text-center" @click="showOptions = !showOptions"
            >Ver mais opções</a
          >
        </div>
        <v-row
          v-if="showOptions"
          align="center"
          class="mt-5 d-flex justify-center"
        >
          <v-col cols="12" class="text-center">
            <v-btn color="purple" class="white--text text-center">
              PLANO ANUAL R$ 50,00&nbsp; <b>50% OFF</b>
            </v-btn>
          </v-col>
          <v-col cols="12" class="text-center">
            <v-btn color="purple" class="white--text text-center">
              PLANO TRIMESTRAL R$ 10,00 &nbsp;<b>30% OFF</b>
            </v-btn>
          </v-col>
        </v-row>
        <h3 class="white--text mt-2">Publicações</h3>
      </v-container>

      <v-card class="mx-auto my-8" max-width="100%" dark>
        <!-- Cabeçalho da publicação -->
        <v-card-title>
          <v-spacer></v-spacer>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>Denunciar</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-title>
        <!-- Imagem da publicação -->
        <v-card-media>
          <v-img src="/img/post.jpg"></v-img>
        </v-card-media>
        <!-- Ações da publicação -->
        <v-card-actions>
          <v-btn icon>
            <v-icon color="purple">mdi-heart-outline</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-comment-outline</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-bookmark-outline</v-icon>
          </v-btn>
        </v-card-actions>
        <!-- Legenda da publicação -->
        <v-card-text>
          <span class="font-weight-bold mr-1">Nome do usuário:</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </v-card-text>
        <!-- Comentários da publicação -->
        <v-card-text>
          <v-list dense>
            <v-list-item v-for="(comment, index) in comments" :key="index">
              <v-list-item-avatar>
                <v-img src="/img/avatar.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold"
                  >Nome do usuário</v-list-item-title
                >
                <v-list-item-subtitle>{{ comment }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>

        <!-- Formulário de comentário -->
        <v-card-actions>
          <v-avatar size="32">
            <v-img src="/img/avatar.jpg"></v-img>
          </v-avatar>
          <v-form
            class="flex-grow-1"
            ref="commentForm"
            v-on:submit.prevent="addComment"
          >
            <v-textarea
              v-model="newComment"
              label="Adicione um comentário"
              :rules="[rules.comment]"
              required
            ></v-textarea>
          </v-form>
          <v-btn
            color="purple white--text"
            @click="submitComment"
            :disabled="submittingComment"
          >
            Enviar
          </v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-app>
</template>

<script>
import SideBar from "../components/SideBar.vue";

export default {
  name: "HomeView",
  data() {
    return {
      selection: 1,
      drawer: true,
      showOptions: false,
      selectedTab: 0,
      tabs: [
        { title: "Pagamentos", component: "CardView" },
        { title: "Assinaturas", component: "Assinaturas" },
        { title: "Configurações", component: "ConfigView" },
        { title: "Favoritos", component: "FavoritosView" },
      ],
      newComment: "",
      submittingComment: false,
      comments: [
        "Comentário 1",
        "Comentário 2",
        "Comentário 3",
        "Comentário 4",
        "Comentário 5",
      ],
      rules: {
        comment: [
          (v) => !!v || "O comentário é obrigatório",
          (v) =>
            (v && v.length <= 100) ||
            "O comentário não pode ter mais de 100 caracteres",
        ],
      },
    };
  },
  components: {
    SideBar,
  },
  computed: {
    currentComponent() {
      switch (this.selectedTab) {
        case 0:
          return "CardView";
        case 1:
          return "Assinaturas";
        case 2:
          return "ConfigView";
        case 3:
          return "FavoritosView";
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
  methods: {
    addComment() {
      if (this.newComment) {
        this.comments.push(this.newComment);
        this.newComment = "";
      }
    },
    redirectToVibeInfo() {
      this.$router.push("/o-que-e-vibe");
    },
    submitComment() {
      if (!this.submittingComment) {
        this.$refs.commentForm.validate().then((valid) => {
          if (valid) {
            this.submittingComment = true;
            setTimeout(() => {
              this.addComment();
              this.submittingComment = false;
            }, 1000);
          }
        });
      }
    },
  },
};
</script>

<style scoped>
.purple-bg {
  background-color: purple;
  height: 150px;
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
</style>
