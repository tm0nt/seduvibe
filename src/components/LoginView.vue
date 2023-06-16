<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-alert v-if="isPasswordChanged" type="success"
          >Senha alterada com sucesso!</v-alert
        >

        <v-card class="elevation-6 mt-10 my-custom-card" color="#212121" dark>
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <v-img
                      src="../assets/logo.png"
                      alt="Plataforma exclusiva para criadores de conteúdo adulto "
                      width="250"
                      style="max-width: 100%; margin: auto; max-height: 100%"
                    ></v-img>
                    <h6 class="text-center grey--text mb-2">
                      Exclusividade e liberdade
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-text-field
                          label="Email, usuário ou telefone"
                          color="purple"
                          autocomplete="on"
                          class="meu-vtf-personalizado mt-16"
                          :rules="rules"
                        />
                        <v-text-field
                          label="Senha"
                          color="purple"
                          autocomplete="on"
                          :append-icon="
                            showPassword ? 'mdi-eye' : 'mdi-eye-off'
                          "
                          :type="showPassword ? 'text' : 'password'"
                          @click:append="showPassword = !showPassword"
                          :rules="rules"
                        />
                        <v-row>
                          <v-col cols="12" sm="6" class="mb-2">
                            <a class="text-decoration-none">
                              <span class="body purple--text" @click="openModal"
                                >Esqueceu a senha?</span
                              >
                            </a>

                            <v-dialog
                              v-model="modalOpen"
                              max-width="500px"
                              dark
                            >
                              <v-card>
                                <v-card-title class="headline"
                                  >Recuperação de senha</v-card-title
                                >
                                <v-card-text>
                                  Vamos ajudar você a recuperar sua senha.
                                </v-card-text>
                                <v-card-text>
                                  <v-radio-group v-model="opcaoRecuperacao">
                                    <v-radio
                                      label="Recuperar por e-mail"
                                      value="email"
                                    ></v-radio>
                                    <v-radio
                                      label="Recuperar por celular"
                                      value="celular"
                                    ></v-radio>
                                  </v-radio-group>
                                </v-card-text>
                                <v-card-actions>
                                  <v-btn
                                    color="purple"
                                    @click="abrirModalCodigo"
                                    >Continuar</v-btn
                                  >
                                </v-card-actions>
                              </v-card>
                            </v-dialog>
                          </v-col>
                        </v-row>
                        <v-dialog
                          v-model="modalCodigoAberto"
                          max-width="500px"
                          dark
                        >
                          <v-card>
                            <v-card-title class="headline"
                              >Insira o código de verificação</v-card-title
                            >
                            <v-card-title class="text-caption"
                              >Enviamos o código de verificação para seu
                              {{ opcaoRecuperacao }}</v-card-title
                            >
                            <v-card-text>
                              <div class="verification-code">
                                <div class="verification-code-inputs">
                                  <input
                                    v-for="index in 6"
                                    :key="index"
                                    ref="verificationInput"
                                    v-model="codigoVerificacao[index - 1]"
                                    class="verification-code-input"
                                    maxlength="1"
                                    type="text"
                                    pattern="[0-9]"
                                    @input="handleInput(index - 1)"
                                  />
                                </div>
                              </div>
                            </v-card-text>
                            <v-card-actions>
                              <v-btn color="purple" @click="verificarCodigo"
                                >Verificar</v-btn
                              >
                            </v-card-actions>
                          </v-card>
                        </v-dialog>
                        <v-btn color="purple" dark block tile>ENTRAR</v-btn>

                        <h5 class="text-center grey--text mt-4 mb-3">Ou</h5>
                        <div
                          class="d-flex justify-space-between align-center mx-10 mb-16"
                        >
                          <v-btn depressed outlined color="grey">
                            <v-icon color="purple">fab fa-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="purple">fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="purple">fab fa-twitter</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="6" class="purple rounded-bl-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Não possui uma conta?</h3>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++">CRIAR</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" md="6" class="purple rounded-br-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Login-in</h3>
                      <h6 class="text-center">
                        Entre em sua conta e continue produzindo :)
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--">ENTRAR</v-btn>
                    </div>
                  </div>
                </v-col>

                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center">Crie uma conta</h4>
                    <h6 class="text-center grey--text mb-5">
                      Vamos lá criar sua primeira conta para ter sua experiência
                      exclusiva.
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-form
                          ref="form"
                          v-model="isFormValid"
                          @submit.prevent="enviar"
                        >
                          <v-row>
                            <v-col cols="12" sm="12">
                              <v-checkbox
                                v-model="criador"
                                label="Sou criador(a)"
                                color="purple"
                              ></v-checkbox>
                              <v-text-field
                                label="Seu nome"
                                color="purple"
                                v-model="nome"
                                autocomplete="off"
                                class="mt-4"
                                :rules="rules"
                              ></v-text-field>
                              <v-row>
                                <v-col cols="6">
                                  <v-select
                                    v-model="genero"
                                    :items="generoOptions"
                                    label="Gênero"
                                    color="purple"
                                    autocomplete="off"
                                    :rules="rules"
                                  ></v-select>
                                </v-col>
                                <v-col cols="6">
                                  <v-text-field
                                    label="Celular"
                                    maxlength="11"
                                    v-model="celular"
                                    color="purple"
                                    autocomplete="off"
                                    :rules="rules"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                              <v-row>
                                <v-col cols="6">
                                  <v-text-field
                                    label="Usuário"
                                    prefix="@"
                                    v-model="usuario"
                                    color="purple"
                                    maxlength="15"
                                    autocomplete="off"
                                    :rules="rules"
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                  <v-text-field
                                    label="Email"
                                    color="purple"
                                    v-model="email"
                                    :rules="emailRules"
                                    autocomplete="off"
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="12">
                              <v-text-field
                                v-model="senha"
                                label="Sua senha"
                                color="purple"
                                :type="mostrarSenha ? 'text' : 'password'"
                                :append-icon="
                                  mostrarSenha ? 'mdi-eye' : 'mdi-eye-off'
                                "
                                @click:append="toggleMostrarSenha"
                                :rules="rules"
                              ></v-text-field>
                            </v-col>
                          </v-row>
                          <v-row>
                            <v-col cols="12" sm="7">
                              <v-checkbox
                                v-model="termosAceitos"
                                label="Aceito os termos"
                                class="mt-n1"
                                color="purple"
                                :rules="termosRules"
                              ></v-checkbox>
                            </v-col>
                            <v-col cols="12" sm="5">
                              <span class="caption purple--text ml-n4"
                                >Termos e serviços</span
                              >
                            </v-col>
                          </v-row>
                          <v-btn
                            color="purple"
                            dark
                            block
                            class="mt-2"
                            tile
                            @click="enviar"
                            >CRIAR CONTA</v-btn
                          >
                        </v-form>

                        <h5 class="text-center grey--text mt-4 mb-3">
                          Ou crie uma conta com
                        </h5>
                        <div
                          class="d-flex justify-space-between align-center mx-10 mb-11"
                        >
                          <v-btn depressed outlined color="grey">
                            <v-icon color="purple">fab fa-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="purple">fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="purple">fab fa-twitter</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      step: 1,
      emailRules: [
        (v) => !!v || "Preenchimento de campo obrigatório",
        (v) => /.+@.+\..+/.test(v) || "Seu e-mail não é válido",
      ],
      termosRules: [
        (v) => !!v || "PVocê deve aceitar os termos para prosseguir",
      ],
      criador: 0,
      modalOpen: false,
      isFormValid: true,

      showPassword: false,
      opcaoRecuperacao: null,
      senhaConfirmacao: "",
      genero: null,
      generoOptions: [
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
      nome: "",
      celular: "",
      usuario: "",
      rules: [
        (value) => {
          if (value) return true;

          return "Preenchimento de campo obrigatório";
        },
      ],
      email: "",
      senha: "",
      termosAceitos: false,
      isPasswordChanged: false,
      modalCodigoAberto: false,
      codigoVerificacao: "",
      codigoVerificacaoRules: [
        (v) => !!v || "O código de verificação é obrigatório",
        (v) =>
          (v && v.length === 6) || "O código de verificação deve ter 6 dígitos",
      ],
      mostrarSenha: false,
    };
  },
  props: {
    source: String,
  },
  mounted() {
    this.checkSuccessQueryParam();
  },
  criadorValue() {
    return this.criador ? 1 : 0;
  },
  methods: {
    enviar() {
      this.$nextTick(() => {
        if (this.$refs.form.validate()) {
          // Os campos são válidos, você pode enviar o formulário para a API
          const formData = {
            name: this.nome,
            email: this.email,
            user: this.usuario,
            creator: this.criadorValue ? 1 : 0,
            celular: this.celular,
            password: this.senha,
            genero: this.genero,
          };

          // Enviar os dados para a API usando axios (ou outro método de sua escolha)
          axios
            .post("http://3.145.205.83:3333/register", formData)
            .then((response) => {
              // Manipule a resposta da API, se necessário
              console.log(response.data);
            })
            .catch((error) => {
              // Trate os erros que ocorrerem durante a requisição
              console.error(error);
              // Exiba uma mensagem de erro ou tome outras ações apropriadas
            });
        }
      });
    },

    handleInput(index) {
      const nextInputIndex = index < 5 ? index + 1 : 5;
      const nextInput = this.$refs.verificationInput[nextInputIndex];
      if (nextInput) {
        nextInput.focus();
      }
    },
    toggleMostrarSenha() {
      this.mostrarSenha = !this.mostrarSenha;
    },
    checkSuccessQueryParam() {
      const query = this.$route.query;
      if (query.success && query.success === "true") {
        this.isPasswordChanged = true;
      }
    },
    openModal() {
      this.modalOpen = true;
    },
    abrirModalCodigo() {
      this.modalCodigoAberto = true;
    },
    verificarCodigo() {
      // Lógica para verificar se o código é verdadeiro
      const codigoVerificado = true; // Substitua pela lógica real de verificação

      if (codigoVerificado) {
        this.step = 3;
      }
    },
    reiniciar() {
      this.step = 1;
    },
  },
};
</script>
<style scoped>
.verification-code-inputs {
  display: flex;
  gap: 8px;
}

.verification-code-input {
  width: 24px;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: center;
  font-size: 16px;
}

.verification-code-squares {
  display: flex;
  gap: 4px;
}

.verification-code-square {
  width: 24px;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
}

.verification-code-square.filled {
  background-color: #ccc;
}
.verification-code-input {
  color: white !important;
}

.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}

.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}

.my-custom-card {
  background-color: black;
}
</style>
