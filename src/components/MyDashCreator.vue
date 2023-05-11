<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <SideBar :drawer.sync="drawer" />
    <div class="purple-bg">
      <v-col>
          <v-btn class="back white--text mb-2 mr-2" outlined @click="openCoverModal"
            style="position: absolute; bottom: 0; right: 0; z-index: 1;">
            <v-icon left>mdi-image-outline</v-icon>
            Alterar capa
          </v-btn>
      </v-col>
      <v-dialog v-model="coverModal" max-width="500">
      <v-card>
        <v-card-title>
          <span class="headline">{{ coverTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-file-input v-model="selectedFile" label="Selecionar a imagem" color="purple" accept="image/*"></v-file-input>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="purple" class="white--text" @click="uploadCover">Enviar</v-btn>
          <v-btn color="red" class="white--text"  @click="closeCoverModal">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

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
              <v-col cols="auto">
                <v-avatar
                  size="150"
                  color="white"
                  :border="'5px solid white'"
                  @click="openModal"
                >
                  <v-img
                    src="/img/avatar.jpg"
                    contain
                    class="rounded-circle"
                  ></v-img>
                  <div class="overlay" @click="openModal">
                    <p class="text">Alterar foto do perfil</p>
                  </div>
                </v-avatar>

                <template>
                  <v-dialog v-model="dialog" max-width="500">
                    <v-card>
                      <v-card-title>Alterar foto do perfil</v-card-title>
                      <v-card-text>
                        <v-file-input
                          label="Selecione uma imagem"
                          v-model="file"
                          color="purple"
                          accept="image/*"
                        ></v-file-input>
                      </v-card-text>
                      <v-card-actions>
                        <v-btn
                          color="purple"
                          class="white--text"
                          @click="saveFile"
                          >Enviar</v-btn
                        >
                        <v-btn
                          color="red"
                          class="white--text"
                          @click="closeModal"
                          >Cancelar</v-btn
                        >
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </template>
              </v-col>
              <v-col cols="auto">
                <h2 class="text-center white--text mt-15">Laís Alves</h2>
                <h5 class="grey--text">@laisalves</h5>
              </v-col>
            </v-row>
            <p class="bio mt-5 white--text">
              Assine meu conteúdo para ver videos exclusivos!!!&nbsp;
              <v-icon size="18" class="mr-4 grey--text" @click="openEditModal"
                >fa-pen</v-icon
              >
            </p>
            <v-dialog v-model="isEditModalOpen">
              <v-card>
                <v-card-title>Editar bio</v-card-title>
                <v-card-text>
                  <v-text-field
                    v-model="editText"
                    color="purple"
                  ></v-text-field>
                </v-card-text>
                <v-card-actions>
                  <v-btn
                    color="purple"
                    class="white--text"
                    @click="saveEditedText"
                    >Salvar</v-btn
                  >
                  <v-btn color="red" class="white--text" @click="closeEditModal"
                    >Cancelar</v-btn
                  >
                </v-card-actions>
              </v-card>
            </v-dialog>
            <v-row>
              <v-col cols="auto">
                <v-icon class="purple--text mr-4">fab fa-facebook-f</v-icon>
              </v-col>
              <v-col cols="auto">
                <v-icon class="purple--text mr-4">fab fa-twitter</v-icon>
              </v-col>
              <v-col cols="auto">
                <v-icon class="purple--text">fab fa-instagram</v-icon>
              </v-col>
            </v-row>
          </v-col>
          <v-col cols="auto" class="ml-auto white--text">
            <v-btn color="purple" class="white--text">
              <v-icon size="12" class="mr-2">fa-gear</v-icon>
              Configurações
            </v-btn>
          </v-col>
          <v-col cols="auto" class="ml-1 white--text">
            <v-btn color="white" class="black--text">
              <v-icon size="12" class="mr-2">fa-chart-simple</v-icon>
              Analytics
            </v-btn>
          </v-col>
        </v-row>
        <v-app-bar
          dark
          color="rgba(0,0,0,0)"
          flat
          class="d-flex justify-center"
        >
        </v-app-bar>

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
            <v-icon color="pink">mdi-heart-outline</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-comment-outline</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-share-variant-outline</v-icon>
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
      dialog: false,
      coverModal: false,
      coverTitle: 'Enviar capa',
      selectedFile: null,
      file: null,
      isEditModalOpen: false,
      editText: "",
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
    openCoverModal() {
      this.coverModal = true;
    },
    closeCoverModal() {
      this.coverModal = false;
      this.selectedFile = null;
    },
    uploadCover() {
      // Lógica para upload do arquivo
      console.log('Arquivo enviado:', this.selectedFile);
      this.closeCoverModal();
    },
    openEditModal() {
      this.editText = this.$el.querySelector(".bio").textContent.trim();
      this.isEditModalOpen = true;
    },
    closeEditModal() {
      this.isEditModalOpen = false;
    },
    saveEditedText() {
      const newText = this.editText.trim();
      if (newText) {
        this.$el.querySelector("p").textContent = newText;
      }
      this.closeEditModal();
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
    openModal() {
      this.dialog = true;
    },
    closeModal() {
      this.dialog = false;
    },
    saveFile() {
      // Adicione aqui a lógica para fazer upload da imagem
      this.closeModal();
    },
  },
};
</script>

<style scoped>
.purple-bg {
  background-color: purple;
  height: 150px;
  width: 100%;
  position: relative;
  z-index: 1;
  /* define um valor maior que o z-index do v-toolbar */
}

.toolbar-mobile {
  position: relative;
  z-index: 2;
  /* define um valor menor que o z-index da div purple-bg */
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: none;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.text {
  color: black;
  font-size: 14px;
}

v-avatar:hover .overlay {
  display: flex;
}

.back:hover {
    background-color: white;
    color: #525252 !important; 
  }
</style>
