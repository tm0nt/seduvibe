<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <SideBar :drawer.sync="drawer" />

    <div class="purple-bg">
      <v-col>
        <v-btn
          class="back purple--text mb-2 mr-2"
          outlined
          color="purple"
          @click="openCoverModal"
          style="
            position: absolute;
            bottom: 0;
            right: 0;
            z-index: 1;
            border-radius: 20px;
            padding: 10px;
          "
        >
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
                <v-file-input
                  v-model="selectedFile"
                  label="Selecionar a imagem"
                  color="purple"
                  accept="image/*"
                ></v-file-input>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="purple" class="white--text" @click="uploadCover"
              >Enviar</v-btn
            >
            <v-btn color="red" class="white--text" @click="closeCoverModal"
              >Cancelar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <div class="cover"></div>

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
                  :border="{ width: '5px', style: 'solid', color: 'black' }"
                  class="avatar-border"
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
            <v-dialog v-model="isEditModalOpen" max-width="500">
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
      </v-container>
      <v-list color="#232323" max-width="400" dark>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="selectItem(index)"
        >
          <v-list-item-content>
            <v-list-item-title
              :class="{ 'selected-item': selected === index }"
              >{{ item }}</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>
      </v-list>
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
      showIcon: false,
      isOpen: false,
      coverModal: false,
      coverTitle: "Enviar capa",
      selectedFile: null,
      file: null,
      selected: null,
      isEditModalOpen: false,
      editText: "",
      selection: 1,
      drawer: true,
      showOptions: false,
      options: ["Criar nova publicação"],
      items: [
        "Sua conta",
        "Valores ",
        "Informações Pessoais",
        "Cartões",
        "Indicação",
      ],
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
    showicon.addEventListener("mouseover", function () {
      showicon.setAttribute("hovered", "true");
    });
  },
  methods: {
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
    navigateTo(route) {
      this.$router.push(route);
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
  background: url("https://saibadetudo.com.br/wp-content/uploads/2022/04/capa-insta-2-min-10.jpg");
  background-size: cover;
  /* define um valor maior que o z-index do v-toolbar */
}

.toolbar-mobile {
  position: relative;
  z-index: 2;
  /* define um valor menor que o z-index da div purple-bg */
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
