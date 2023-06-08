<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
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
                          autocomplete="false"
                          class="meu-vtf-personalizado mt-16"
                        />
                        <v-text-field
                          label="Senha"
                          color="purple"
                          autocomplete="false"
                          type="password"
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
                              autocomplete="false"
                              class="mt-4"
                            />
                            <v-text-field
                              label="Usuário"
                              prefix="@"
                              color="purple"
                              autocomplete="false"
                            />
                          </v-col>
                        </v-row>
                        <v-text-field
                          label="Email"
                          color="purple"
                          autocomplete="false"
                        />
                        <v-text-field
                          v-model="senha"
                          :rules="rules"
                          label="Nova senha"
                          :type="mostrarSenha ? 'text' : 'password'"
                          :append-icon="
                            mostrarSenha ? 'mdi-eye-off' : 'mdi-eye'
                          "
                          @click:append="toggleMostrarSenha"
                        ></v-text-field>

                        <v-text-field
                          v-model="senhaConfirmacao"
                          :rules="rules"
                          label="Confirmar senha"
                          :type="mostrarSenha ? 'text' : 'password'"
                          :append-icon="
                            mostrarSenha ? 'mdi-eye-off' : 'mdi-eye'
                          "
                          @click:append="toggleMostrarSenha"
                        ></v-text-field>
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox
                              label="Aceito os termos"
                              class="mt-n1"
                              color="purple"
                            >
                            </v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption purple--text ml-n4"
                              >Termos e serviços</span
                            >
                          </v-col>
                        </v-row>
                        <v-btn color="purple" dark block tile
                          >Criar conta</v-btn
                        >

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
export default {
  data: () => ({
    step: 1,
    criador: false,
    modalOpen: false,
    email: "",
    modalCodigoAberto: false,
    codigoVerificacao: "",
    codigoVerificacaoRules: [
      (v) => !!v || "O código de verificação é obrigatório",
      (v) =>
        (v && v.length === 6) || "O código de verificação deve ter 6 dígitos",
    ],
    celular: "",
    senha: "",
    senhaConfirmacao: "",
    rules: [(v) => !!v || "O campo é obrigatório"],
    mostrarSenha: false,
  }),
  props: {
    source: String,
  },
  methods: {
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
    openModal() {
      this.modalOpen = true;
    },
    abrirModalCodigo() {
      this.modalCodigoAberto = true;
    },
    verificarCodigo() {
      if (this.$refs.form.validate()) {
        // Aqui você pode adicionar a lógica para verificar o código de verificação
        // Por exemplo, enviar uma requisição ao servidor para verificar se o código está correto
        // Dependendo do resultado da verificação, você pode exibir uma mensagem de sucesso ou erro para o usuário
      }
    },
    recuperarPorEmail() {
      // Lógica para recuperar a senha por e-mail
    },
    recuperarPorCelular() {
      // Lógica para recuperar a senha por celular
    },
    enviar() {
      // Lógica para enviar a solicitação de recuperação de senha
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
