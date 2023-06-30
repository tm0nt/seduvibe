<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <SideBar :drawer.sync="drawer" />

    <div class="purple-bg">
      <v-col>
        <v-btn
          class="mb-2 mr-2"
          outlined
          color="white"
          @click="openCoverModal"
          style="
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: 1;
            border-radius: 50px;
          "
        >
          <v-icon left class="ml-2">mdi-camera</v-icon>
        </v-btn>
      </v-col>
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
              <v-col md="2" sm="1" xs="1">
                <v-avatar
                  size="150"
                  :border="{ width: '5px', style: 'solid', color: 'black' }"
                  class="avatar-border mt-n10"
                  @mouseenter="showIcon = true"
                  @mouseleave="showIcon = false"
                >
                  <v-img
                    src="https://spinoff.com.br/entrete/wp-content/uploads/2023/05/Jade-Picon-2-300x300.jpg"
                    contain
                    class="rounded-circle"
                  ></v-img>
                  <v-icon
                    v-show="showIcon"
                    class="camera-icon"
                    @click.stop="openModal"
                  >
                    mdi-camera
                  </v-icon>
                </v-avatar>
              </v-col>
              <v-col cols="6" md="8" sm="11" xs="11">
                <div style="display: inline-block; margin-top: 60px">
                  <h2 class="white--text">Laís Alves</h2>
                  <h5 class="grey--text">@laisalves</h5>
                  <p class="bio mt-5 white--text">
                    Assine meu conteúdo para ver videos exclusivos!!!&nbsp;
                    <v-icon
                      size="18"
                      class="mr-4 grey--text"
                      @click="openEditModal"
                    >
                      fa-pen
                    </v-icon>
                  </p>
                </div>
              </v-col>
              <v-row align="center" class="d-flex justify-center">
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
          </v-col>
        </v-row>

        <v-row class="mt-2 white--text text-center">
          <v-col cols="2">
            <router-link to="/config">
              <v-btn color="purple" class="white--text">
                <v-icon size="12" class="mr-2">fa-gear</v-icon>
                Configurações
              </v-btn>
            </router-link>
          </v-col>
          <v-col cols="10" class="text-right justify-end">
            <router-link to="/analytics">
              <v-btn color="white" class="black--text">
                <v-icon size="12" class="mr-2">fa-chart-simple</v-icon>
                Analytics
              </v-btn>
            </router-link>
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
        <v-img src="/img/post.jpg"></v-img>
        <!-- Ações da publicação -->
        <v-card-actions>
          <v-btn icon>
            <v-icon color="purple">mdi-heart-outline</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-comment-outline</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
        <!-- Legenda da publicação -->
        <v-card-text>
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
              <v-row class="d-flex justify-end">
                <v-col cols="auto">
                  <v-icon size="16" color="purple">mdi-heart</v-icon>
                </v-col>
                <v-col cols="auto">
                  <v-icon size="16" color="grey">mdi-delete</v-icon>
                </v-col>
              </v-row>
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

    <template>
      <v-dialog v-model="dialog" dark max-width="500">
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
            <v-btn class="purple--text" text @click="closeModal"
              >Cancelar</v-btn
            >
            <v-btn class="purple--text" @click="saveFile" text>Enviar</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </template>
    <v-dialog dark v-model="isEditModalOpen" max-width="500">
      <v-card>
        <v-card-title>Editar bio</v-card-title>
        <v-card-text>
          <v-text-field v-model="editText" color="purple"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn text class="purple--text" @click="closeEditModal"
            >Cancelar</v-btn
          >
          <v-btn class="purple--text" @click="saveEditedText" text
            >Salvar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="coverModal" max-width="500" dark>
      <v-card>
        <v-card-title>
          <span class="headline white--text">{{ coverTitle }}</span>
        </v-card-title>
        <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-file-input
                v-model="selectedFile"
                label="Selecionar a imagem"
                color="white"
                accept="image/*"
              ></v-file-input>
            </v-col>
          </v-row>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn class="purple--text" text @click="closeCoverModal"
            >Cancelar</v-btn
          >
          <v-btn class="purple--text" text @click="uploadCover">Enviar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import SideBar from "../components/SideBar.vue";

export default {
  name: "HomeView",
  data() {
    return {
      dialog: false,
      showIcon: false,
      isOpen: false,
      coverModal: false,
      coverTitle: "Enviar capa",
      options: ["Criar nova publicação"],
      selectedFile: null,
      file: null,
      publicacaoModal: false,
      publicacaoCaption: "",
      publicacaoSelectedFile: null,
      publicacaoPreviewUrl: null,
      publicacaoExclusivePack: false,
      publicacaoExclusiveValue: null,
      currencyRule: [
        (v) => !!v || "Valor é obrigatório",
        (v) => /^\d+(\.\d{1,2})?$/.test(v) || "Valor inválido",
      ],
      menu: false,
      isEditModalOpen: false,
      editText: "",
      selection: 1,
      drawer: true,
      showOptions: false,
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
  created() {
    if (window.innerWidth < 768) {
      this.drawer = false;
    }
    var showicon = document.getElementById("showIcon");
    if (showicon) {
      showicon.addEventListener("mouseover", function () {
        showicon.setAttribute("hovered", "true");
      });
    }
  },

  methods: {
    openPublicacaoModal() {
      this.publicacaoModal = true;
    },
    closePublicacaoModal() {
      this.publicacaoModal = false;
      this.publicacaoCaption = "";
      this.publicacaoSelectedFile = null;
      this.publicacaoPreviewUrl = null;
      this.publicacaoExclusivePack = false;
      this.publicacaoExclusiveValue = null;
    },
    previewPublicacaoFile() {
      const file = this.publicacaoSelectedFile;
      if (file) {
        this.publicacaoPreviewUrl = URL.createObjectURL(file);
      } else {
        this.publicacaoPreviewUrl = null;
      }
    },
    publishPublicacao() {
      // Lógica para enviar os dados e fechar o modal
      this.closePublicacaoModal();
    },
    handleOptionClick(option) {
      switch (option) {
        case "Criar nova publicação":
          alert('You clicked "Use Vue.js"');
          break;
        default:
          break;
      }
      this.showOptions = false;
    },
    addComment() {
      if (this.newComment) {
        this.comments.push(this.newComment);
        this.newComment = "";
      }
    },
    openCoverModal() {
      this.coverModal = true;
    },
    menuItemClicked(item) {
      console.log(`Você clicou na opção ${item}`);
      // faça o que quiser com o item
    },
    closeCoverModal() {
      this.coverModal = false;
      this.selectedFile = null;
    },
    uploadCover() {
      // Lógica para upload do arquivo
      console.log("Arquivo enviado:", this.selectedFile);
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
  background: url("https://saibadetudo.com.br/wp-content/uploads/2022/04/capa-insta-2-min-10.jpg")
    center center;
  background-size: cover;
}

.toolbar-mobile {
  position: relative;
  z-index: 2;
}

.avatar-border {
  border: 5px solid purple;
}

.camera-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  background-color: black;
  border-radius: 50%;
  cursor: pointer;
  color: white;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.3);
  opacity: 0.4;
}

.camera-icon:hover v-avatar {
  transform: scale(1.2);
}
.back {
  background: purple !important;
  color: white !important;
}
</style>
