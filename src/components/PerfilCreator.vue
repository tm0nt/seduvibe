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
                <v-avatar
                  size="150"
                  color="white"
                  style="filter: none:!important;"
                >
                  <v-img
                    src="https://spinoff.com.br/entrete/wp-content/uploads/2023/05/Jade-Picon-2-300x300.jpg"
                    contain
                    class="rounded-circle avatar-border"
                  ></v-img>
                </v-avatar>
              </v-col>
              <v-col cols="6" md="8" sm="10" xs="10">
                <div style="display: inline-block; margin-top: 80px">
                  <h2 class="white--text">
                    Laís Alves&nbsp;
                    <v-icon :color="heartColor" @click="toggleHeart">
                      {{ heartIcon }}</v-icon
                    >
                  </h2>

                  <h5 class="grey--text">@laisalves</h5>
                  <v-btn
                    color="purple"
                    class="mt-3 white--text"
                    @click="openVibe"
                  >
                    Vibe+
                  </v-btn>
                  <v-dialog v-model="vibeOpen" max-width="500px" dark>
                    <v-card>
                      <div
                        class="vibeground d-flex justify-center align-center"
                      >
                        <v-avatar
                          class="no-blur"
                          size="80"
                          color="white"
                          :border="'5px solid white'"
                        >
                          <v-img
                            src="https://spinoff.com.br/entrete/wp-content/uploads/2023/05/Jade-Picon-2-300x300.jpg"
                            contain
                            class="rounded-circle"
                          ></v-img>
                        </v-avatar>
                      </div>
                      <v-col class="text-center" align="center">
                        <p class="text-center overline">
                          Desbloqueie o Vibe+ e Fique Mais Próximo do Criador!
                        </p>
                        <p class="text-center caption grey--text">
                          Tenha acesso a
                        </p>
                      </v-col>
                      <v-card class="transparent align-center" flat>
                        <v-list class="">
                          <v-divider color="purple"></v-divider>

                          <v-list-item class="white--text">
                            <v-list-item-icon>
                              <v-icon color="purple">mdi-check</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                              Chat prioritário com o criador
                            </v-list-item-content>
                          </v-list-item>
                          <v-divider color="purple" class="my-1"></v-divider>

                          <v-list-item class="white--text">
                            <v-list-item-icon>
                              <v-icon color="purple">mdi-check</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                              Conteúdo básico e exclusivo
                            </v-list-item-content>
                          </v-list-item>
                          <v-divider color="purple" class="my-1"></v-divider>

                          <v-list-item class="white--text">
                            <v-list-item-icon>
                              <v-icon color="purple">mdi-check</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                              3 pedidos de pack personalizados mensais.
                            </v-list-item-content>
                          </v-list-item>
                          <v-divider color="purple" class="my-1"></v-divider>

                          <v-list-item class="white--text">
                            <v-list-item-icon>
                              <v-icon color="purple">mdi-check</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                              Receba mimos do criador(fotos, vídeos e áudios
                              grátis)
                            </v-list-item-content>
                          </v-list-item>
                          <v-divider color="purple" class="my-1"></v-divider>

                          <v-list-item class="white--text">
                            <v-list-item-icon>
                              <v-icon color="purple">mdi-check</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                              Selo d destaque no nome de usuário
                            </v-list-item-content>
                          </v-list-item>
                          <v-divider color="purple" class="my-1"></v-divider>
                          <v-list-item class="white--text">
                            <v-list-item-icon>
                              <v-icon color="purple">mdi-check</v-icon>
                            </v-list-item-icon>
                            <v-list-item-content>
                              Interação making-off com a modelo
                            </v-list-item-content>
                          </v-list-item>
                        </v-list>
                        <v-card-actions class="d-flex justify-center">
                          <v-btn
                            block
                            color="purple"
                            class="text-center white--text v-btn-pulse"
                          >
                            Eu quero
                          </v-btn>
                        </v-card-actions>
                        <v-card-actions class="d-flex justify-center">
                          <v-btn
                            color="purple"
                            class="text-center"
                            text
                            @click="vibeClose"
                          >
                            Não quero
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-card>
                  </v-dialog>
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
              <v-col
                cols="12"
                class="mt-2 text-center d-sm-flex justify-sm-end"
              >
                <v-menu v-model="open" offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="purple"
                      class="white--text custom-btn"
                      v-bind="attrs"
                      v-on="on"
                    >
                      <v-icon color="white">mdi-plus-circle</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item @click="openMobile">Enviar valor</v-list-item>
                    <v-list-item @click="selectOption('Wishlist Amazon')"
                      >Wishlist Amazon</v-list-item
                    >
                  </v-list>
                </v-menu>
              </v-col>
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
          <v-btn icon>
            <v-icon>mdi-bookmark-outline</v-icon>
          </v-btn>
        </v-card-actions>
        <!-- Legenda da publicação -->
        <v-card-text>
          <span class="font-weight-bold mr-1">@laissilva:</span>
          <span>Olha como fiquei molhadinha para vocês</span>
        </v-card-text>
        <!-- Comentários da publicação -->
        <v-card-text>
          <v-list dense>
            <v-list-item v-for="(comment, index) in comments" :key="index">
              <v-list-item-avatar>
                <v-img
                  src="https://i.pinimg.com/280x280_RS/03/74/39/037439bcf49c2be21db616d3a8163435.jpg"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold"
                  >@Guest432323</v-list-item-title
                >
                <v-list-item-subtitle>{{ comment }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card-text>

        <!-- Formulário de comentário -->
        <v-card-actions>
          <v-avatar size="32">
            <v-img
              src="https://observatoriog.bol.uol.com.br/wordpress/wp-content/uploads/2022/08/jade-picon-mostrou-novo-visual-pensado-para-a-personagem-chiara-em-travessia-1660440458015_v2_4x3.jpg"
            ></v-img>
          </v-avatar>
          <v-form
            class="flex-grow-1"
            ref="commentForm"
            v-on:submit.prevent="addComment"
          >
            <v-textarea
              v-model="newComment"
              label="Adicione um comentário"
              :rules="[
                (v) => !!v || 'Field is required',
                (v) => (v && v.length <= 10) || 'Max 10 characters',
              ]"
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
    <v-dialog v-model="mobileOpen" persistent max-width="500px" dark>
      <v-card>
        <v-card-title>
          <span class="headline">Envie valor p/ criador</span>
        </v-card-title>
        <v-card-text>
          <v-text-field
            v-model="valor"
            label="Valor"
            prefix="R$"
            suffix="BRL"
            color="purple"
            outlined
          ></v-text-field>
          <h5>Escolher forma de pagamento</h5>
          <v-menu v-model="menu" :close-on-content-click="false" offset-y>
            <template v-slot:activator="{ on }">
              <v-select
                v-model="selectedOption"
                :items="options"
                color="purple"
                append-icon="mdi-menu-down"
                v-on="on"
              >
                <template v-slot:selection="{ item }">
                  <v-chip>
                    <v-avatar>
                      <v-icon>{{ item.icon }}</v-icon>
                    </v-avatar>
                    {{ item.text }}
                  </v-chip>
                </template>
              </v-select>
            </template>
            <v-list>
              <v-list-item
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
              >
                <v-list-item-avatar>
                  <v-icon>{{ option.icon }}</v-icon>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ option.text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-menu>

          <template v-if="selectedOption && selectedOption.value === 1">
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="nomeTitular"
                  label="Nome do titular"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="numeroCartao"
                  label="Número do cartão"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="6">
                <v-text-field
                  v-model="dataVencimento"
                  label="Data de vencimento"
                ></v-text-field>
              </v-col>
              <v-col cols="6">
                <v-text-field
                  v-model="codigoSeguranca"
                  label="Código de segurança"
                ></v-text-field>
              </v-col>
            </v-row>
            <v-text-field v-model="cpf" label="CPF"></v-text-field>
          </template>
        </v-card-text>
        <v-card-actions>
          <v-btn color="purple" text @click="closeModal">Fechar</v-btn>
          <v-btn color="purple" class="white--text" @click="submitValor"
            >Enviar</v-btn
          >
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
      selection: 1,
      drawer: true,
      open: "",
      vibeOpen: false,
      mobileOpen: false,
      valor: "",
      heartIcon: "mdi-heart-outline",
      heartColor: "purple",
      filledHeartIcon: "mdi-heart",
      filledHeartColor: "purple",
      showOptions: false,
      selectedTab: 0,
      menu: false,
      selectedOption: null,
      options: [
        { value: 1, text: "Novo cartão", icon: "mdi-credit-card-plus" },
        { value: 2, text: "Cartão **** 6486", icon: "mdi-credit-card" },
        { value: 3, text: "Pix", icon: "mdi-currency-usd" },
      ],
      nomeTitular: "",
      numeroCartao: "",
      dataVencimento: "",
      codigoSeguranca: "",
      cpf: "",
      tabs: [
        { title: "Pagamentos", component: "CardView" },
        { title: "Assinaturas", component: "Assinaturas" },
        { title: "Configurações", component: "ConfigView" },
        { title: "Favoritos", component: "FavoritosView" },
      ],
      newComment: "",
      submittingComment: false,
      comments: [
        "Linda, gataaaa",
        "Gostosa ",
        "Nossa ",
        "Fiquei duro",
        "MAravilhosa",
      ],
      rules: {
        comment: [(v) => (v && v.length <= 10) || "Máximo de 10 caracteres"],
        comment2: [(v) => !!v || "Campo obrigatório"],
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
    selectOption(option) {
      this.selectedOption = option;
      this.menu = false;
    },
    openMobile() {
      this.mobileOpen = true;
    },
    closeModal() {
      this.mobileOpen = false;
    },
    submitValor() {
      // Lógica para enviar o valor
      console.log(this.valor);
      this.closeModal();
    },
    toggleHeart() {
      if (this.heartIcon === "mdi-heart-outline") {
        this.heartIcon = this.filledHeartIcon;
        this.heartColor = this.filledHeartColor;
      } else {
        this.heartIcon = "mdi-heart-outline";
        this.heartColor = "purple";
      }
    },
    openVibe() {
      this.vibeOpen = true;
    },
    vibeClose() {
      this.vibeOpen = false;
    },
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
.avatar-border {
  border: 5px solid purple;
}
.vibeground {
  filter: blur(5px);
  background-color: purple;
  background: url("https://saibadetudo.com.br/wp-content/uploads/2022/04/capa-insta-2-min-10.jpg")
    center center;
  width: 100%;
  height: 100px;
  background-size: cover;
}

.purple-bg .no-blur {
  backdrop-filter: none;
}
.purple-bg {
  position: relative;

  background-color: purple;
  background: url("https://saibadetudo.com.br/wp-content/uploads/2022/04/capa-insta-2-min-10.jpg")
    center center;
  height: 150px;
  width: 100%;
  position: absolute;
  background-size: cover;
  z-index: 1;
  /* define um valor maior que o z-index do v-toolbar */
}

.heart-filled {
  color: purple;
  cursor: pointer;
}
.toolbar-mobile {
  position: relative;
  z-index: 2;
  /* define um valor menor que o z-index da div purple-bg */
}

@keyframes pulse {
  0% {
    transform: scale(0.5);
  }
  100% {
    transform: scale(1);
  }
}

@media (max-width: 600px) {
  .custom-btn {
    display: block;
    width: 100%;
  }
}

.v-btn-pulse {
  animation: pulse 3s infinite;
}
</style>
