<template>
  <v-container>
    <div>
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
                          <v-form ref="loginForm" v-model="isFormValid">
                            <v-text-field
                              label="E-mail"
                              color="purple"
                              v-model="emailLogin"
                              autocomplete="on"
                              class="meu-vtf-personalizado mt-16"
                              :rules="emailRules"
                            />
                            <v-text-field
                              label="Senha"
                              color="purple"
                              v-model="senhaLogin"
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
                                  <span
                                    class="body purple--text"
                                    @click="openModal"
                                    >Esqueceu a senha?</span
                                  >
                                </a>
                                <v-btn
                                  color="purple"
                                  @click="loginForm"
                                  dark
                                  block
                                  tile
                                  >ENTRAR</v-btn
                                >
                              </v-col>

                              <v-alert
                                v-if="showLogin"
                                :type="isLoading ? 'success' : 'success'"
                                class="success"
                                icon="mdi-check"
                                dense
                              >
                                {{ loginMessage }}
                                <template v-if="isLoading">
                                  <v-progress-circular
                                    indeterminate
                                    size="20"
                                  ></v-progress-circular>
                                </template>
                              </v-alert>
                              <v-alert
                                v-if="showErrorLogin"
                                class="danger"
                                icon="mdi-close"
                                dense
                              >
                                {{ loginMessage }}
                              </v-alert>
                            </v-row>
                          </v-form>
                          <v-dialog
                            v-model="modalCodigoAberto"
                            max-width="500px"
                            dark
                            ><v-card>
                              <v-alert type="success"
                                >E-mail enviado com sucesso! Verifique sua caixa
                                de entrada...</v-alert
                              ></v-card
                            >
                          </v-dialog>
                          <v-col cols="12" class="text-center">
                            <p class="caption grey--text">{{ logout }}</p>
                          </v-col>
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
                        Vamos lá criar sua primeira conta para ter sua
                        experiência exclusiva.
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
                                <v-alert
                                  v-if="showAlert"
                                  :type="isLoading ? 'success' : 'success'"
                                  icon="mdi-check"
                                  dense
                                >
                                  {{ alertMessage }}
                                  <template v-if="isLoading">
                                    <v-progress-circular
                                      indeterminate
                                      size="20"
                                    ></v-progress-circular>
                                  </template>
                                </v-alert>

                                <v-alert
                                  v-if="showAlert2"
                                  class="error"
                                  icon="mdi-close"
                                  dense
                                >
                                  {{ alertMessage2 }}
                                </v-alert>
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
                                <v-row>
                                  <v-col cols="6">
                                    <v-text-field
                                      label="Data de nascimento"
                                      maxlength="10"
                                      v-model="dataNascimento"
                                      color="purple"
                                      autocomplete="off"
                                      :rules="dataNascimentoRules"
                                      @input="formatarData"
                                    ></v-text-field>
                                  </v-col>
                                  <v-col cols="6">
                                    <v-text-field
                                      label="Celular"
                                      maxlength="15"
                                      :rules="[validarNumero]"
                                      v-model="celular"
                                      @input="formatarNumero"
                                      color="purple"
                                      autocomplete="off"
                                    ></v-text-field>
                                  </v-col>
                                </v-row>
                              </v-col>
                            </v-row>
                            <v-select
                              v-model="genero"
                              :items="generoOptions"
                              label="Gênero"
                              color="purple"
                              autocomplete="off"
                              :rules="rules"
                            ></v-select>
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
                                  @click:append="toggleMostrarSenha('senha')"
                                  :rules="rulesSenha"
                                ></v-text-field>
                                <v-text-field
                                  v-model="confirmarSenha"
                                  label="Confirme a senha"
                                  color="purple"
                                  :type="mostrarSenha ? 'text' : 'password'"
                                  :append-icon="
                                    mostrarSenha ? 'mdi-eye' : 'mdi-eye-off'
                                  "
                                  @click:append="
                                    toggleMostrarSenha('confirmarSenha')
                                  "
                                  :rules="rulesSenha"
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
      <v-dialog v-model="modalOpen" max-width="500px" dark>
        <v-card>
          <v-card-title class="headline">Recuperação de senha</v-card-title>
          <v-card-text> Vamos ajudar você a recuperar sua senha. </v-card-text>
          <v-card-text>
            <v-radio-group v-model="opcaoRecuperacao">
              <v-radio
                label="Recuperar por e-mail"
                color="purple"
                value="Email"
              ></v-radio>
              <v-radio
                label="Recuperar por celular"
                color="purple"
                value="Celular"
                :disabled="true"
              ></v-radio>
            </v-radio-group>
          </v-card-text>
          <v-card-actions>
            <v-btn color="purple" @click="showRecoveryOptionDialog"
              >Continuar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
      <v-dialog v-model="showCodeModalDialog" dark max-width="500px">
        <form @submit.prevent="modalCodigoVerify">
          <v-card>
            <v-card-title class="headline"> Qual seu email? </v-card-title>
            <v-card-text>
              <v-text-field
                v-model="forgot_password"
                label="Digite aqui seu email.."
                required
                color="purple"
                :rules="emailRules"
              ></v-text-field>
              <p class="overline caption">Enviaremos um link para seu e-mail</p>
              <v-alert v-if="showRecoveryInputError" type="error">
                {{ opcaoRecuperacao }}, não pertence a nenhuma conta
              </v-alert>
            </v-card-text>
            <v-card-actions>
              <v-btn color="purple" dark type="submit">Enviar</v-btn>
            </v-card-actions>
          </v-card>
        </form>
      </v-dialog>
    </div>
  </v-container>
</template>

<script>
import axios from "axios";

function validarDataNascimento(data) {
  const partes = data.split("/");
  const dia = parseInt(partes[0], 10);
  const mes = parseInt(partes[1], 10);
  const ano = parseInt(partes[2], 10);

  // Verifica se a data é válida
  const dataNascimento = new Date(ano, mes - 1, dia);
  const dataAtual = new Date();

  // Verifica se a pessoa tem pelo menos 18 anos
  const idadeMinima = 18;
  const diferencaAnos = dataAtual.getFullYear() - dataNascimento.getFullYear();
  const mesAtual = dataAtual.getMonth() + 1;
  const diaAtual = dataAtual.getDate();

  if (
    diferencaAnos < idadeMinima ||
    (diferencaAnos === idadeMinima &&
      (mesAtual < mes || (mesAtual === mes && diaAtual < dia)))
  ) {
    return false;
  }

  return true;
}

export default {
  data() {
    return {
      dataNascimento: "",
      dataNascimentoRules: [
        (v) => !!v || "A data de nascimento é obrigatória",
        (v) => validarDataNascimento(v) || "Você deve ter pelo menos 18 anos",
      ],
      emailSent: true,
      showCodeModalDialog: false,
      recoveryOption: "", // Opção de recuperação selecionada
      recoveryInput: "",
      showRecoveryInputError: false,
      showAlert: false,
      alertMessage: "",
      logout: "",
      alertMessage2: "",
      forgot_password: "",
      showAlert2: false,
      vErrorMessage: false,
      showLogin: false,
      showErrorLogin: false,
      isLoading: false,
      step: 1,
      emailRules: [
        (v) => !!v || "Preenchimento de campo obrigatório",
        (v) => /.+@.+\..+/.test(v) || "Seu e-mail não é válido",
      ],
      termosRules: [(v) => !!v || "Aceite os termos para prosseguir"],
      criador: 0,
      modalOpen: false,
      isFormValid: true,
      showPassword: false,
      opcaoRecuperacao: null,
      senha: "",
      confirmarSenha: "",
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
      emailLogin: "",
      senhaLogin: "",
      nome: "",
      celular: "",
      usuario: "",
      rulesSenha: [
        (value) => !!value || "A senha é obrigatória",
        (value) =>
          (value && value.length >= 8) ||
          "A senha deve ter pelo menos 8 caracteres",
        () =>
          this.senha === this.confirmarSenha || "As senhas não correspondem",
      ],
      rules: [
        (value) => {
          if (value) return true;

          return "Preenchimento de campo obrigatório";
        },
      ],
      email: "",
      tokenExists: false,
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

  created() {
    this.logout = this.$route.query.logout || "";
  },
  mounted() {
    this.checkSuccessQueryParam();
  },
  criadorValue() {
    return this.criador ? 1 : 0;
  },
  components: {},

  methods: {
    formatarData() {
      // Formata a data para DD/MM/AAAA
      if (
        this.dataNascimento.length === 2 ||
        this.dataNascimento.length === 5
      ) {
        this.dataNascimento += "/";
      }
    },

    checkRecoveryOption() {
      // Verificar se a opção de recuperação pertence a uma conta
      // Aqui você pode fazer a validação adequada e decidir se a opção é válida ou não

      // Exemplo: Verificação simples se o input é igual a 'opcao1'
      if (this.recoveryInput === "opcao1") {
        // Opção válida, avançar para o próximo passo
        this.showRecoveryOptionDialog = true;
        this.showCodeModalDialog = true;
      } else {
        // Opção inválida, exibir mensagem de erro
        this.showRecoveryInputError = true;
      }
    },
    startErrorTimer() {
      setTimeout(() => {
        this.showErrorLogin = false;
        this.loginMessage = "";
      }, 5000);
    },
    formatarNumero() {
      // Remover todos os caracteres não numéricos
      let numeroSemFormato = this.celular.replace(/\D/g, "");

      // Verificar o comprimento do número para aplicar a formatação adequada
      if (numeroSemFormato.length <= 2) {
        this.celular = numeroSemFormato;
      } else if (numeroSemFormato.length <= 6) {
        this.celular = `(${numeroSemFormato.slice(
          0,
          2
        )}) ${numeroSemFormato.slice(2)}`;
      } else if (numeroSemFormato.length <= 10) {
        this.celular = `(${numeroSemFormato.slice(
          0,
          2
        )}) ${numeroSemFormato.slice(2, 7)}-${numeroSemFormato.slice(7)}`;
      } else {
        this.celular = `(${numeroSemFormato.slice(
          0,
          2
        )}) ${numeroSemFormato.slice(2, 7)}-${numeroSemFormato.slice(7, 11)}`;
      }
    },

    validarNumero(valor) {
      const numeroRegex = /^[\d,()\s-]+$/; // Regex para verificar se é um número inteiro com vírgulas, hífens, parênteses e espaços
      if (!numeroRegex.test(valor)) {
        return "Digite apenas números";
      }
      return true;
    },

    async loginForm() {
      if (await this.$refs.loginForm.validate()) {
        const formData = {
          email: this.emailLogin,
          password: this.senhaLogin,
        };

        try {
          const response = await axios.post(
            "https://api.seduvibe.com/login",
            formData
          );

          if (response.data.error === false) {
            const token = response.data.token;
            localStorage.setItem("token", token);
            this.showLogin = true;
            this.loginMessage = "Login autorizado! Redirecionando...";
            this.isLoading = true;

            // Após um certo tempo, redirecionar para /profile
            setTimeout(() => {
              this.$router.push("/profile");
            }, 3000);
            console.log(response.data);
          }
        } catch (error) {
          console.error(error);
          if (error.response && error.response.status === 401) {
            this.showErrorLogin = true;
            this.loginMessage = "Email ou senha incorretos!";
            this.startErrorTimer();
          } else {
            this.showErrorLogin = true;
            this.loginMessage = "Erro interno, tente mais tarde!";
            this.startErrorTimer();
          }
        }
      }
    },

    enviar() {
      this.$nextTick(() => {
        if (this.$refs.form.validate()) {
          // Os campos são válidos, você pode enviar o formulário para a API
          const formData = {
            name: this.nome,
            email: this.email,
            user: this.usuario,
            dateOfBirth: this.dataNascimento,
            creator: this.criadorValue ? "1" : "0",
            phone: this.celular,
            password: this.senha,
            genero: this.genero,
          };

          // Enviar os dados para a API usando axios (ou outro método de sua escolha)
          axios
            .post("https://api.seduvibe.com/register", formData)
            .then((response) => {
              // Manipule a resposta da API, se necessário
              if (response.data.msg === "User successfully registered!") {
                this.showAlert = true;
                this.alertMessage =
                  "Conta criada com sucesso, redirecionando...";
                this.isLoading = true;

                // Após um certo tempo, redirecionar para /profile
                setTimeout(() => {
                  this.performAutoLogin(); // Realiza automaticamente o login após o registro
                }, 3000);
              } else {
                this.showAlert2 = true;
                this.alertMessage2 =
                  "Erro interno, conta não criada. Tente novamente!";
                this.startErrorTimer2();
              }
            })
            .catch((error) => {
              console.log(error);
              if (
                error.response &&
                error.response.status === 422 &&
                error.response.data
              ) {
                const errorData = error.response.data;
                if (errorData.msg === "Username is already in use") {
                  this.showAlert2 = true;
                  this.alertMessage2 = "Usuário já existe";
                  this.startErrorTimer2();
                } else if (errorData.msg === "Email is already in use") {
                  this.showAlert2 = true;
                  this.alertMessage2 = "E-mail já está em uso";
                  this.startErrorTimer2();
                } else if (errorData.msg === "Phone is already in use") {
                  this.showAlert2 = true;
                  this.alertMessage2 = "Número de celular já está em uso";
                  this.startErrorTimer2();
                } else {
                  this.showAlert2 = true;
                  this.alertMessage2 =
                    "Erro interno, conta não criada. Tente novamente!";
                  this.startErrorTimer2();
                }
              } else {
                this.showAlert2 = true;
                this.alertMessage2 =
                  "Erro interno, conta não criada. Tente novamente!";
                this.startErrorTimer2();
              }
            });
        }
      });
    },
    startErrorTimer2() {
      setTimeout(() => {
        this.showAlert2 = false;
      }, 3000);
    },

    performAutoLogin() {
      const formData = {
        email: this.email,
        password: this.senha,
      };

      axios
        .post("https://api.seduvibe.com/login", formData)
        .then((response) => {
          if (response.data.error === false) {
            const token = response.data.token;
            localStorage.setItem("token", token);

            // Após um certo tempo, redirecionar para /profile
            setTimeout(() => {
              this.$router.push("/profile");
              window.location.reload();
            }, 3000);
            console.log(response.data);
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },

    handleInput(index) {
      const nextInputIndex = index < 5 ? index + 1 : 5;
      const nextInput = this.$refs.verificationInput[nextInputIndex];
      if (nextInput) {
        nextInput.focus();
      }
    },
    toggleMostrarSenha(campo) {
      if (campo === "senha") {
        this.mostrarSenha = !this.mostrarSenha;
      } else if (campo === "confirmarSenha") {
        this.mostrarSenha = !this.mostrarSenha;
      }
    },
    senhasIguais() {
      return this.senha === this.confirmarSenha;
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
    showRecoveryOptionDialog() {
      this.modalOpen = false;

      this.showCodeModalDialog = true;
    },
    modalCodigoVerify() {
      this.showCodeModalDialog = false;

      const url = "https://api.seduvibe.com/forgot_password";
      const data = {
        method: "email",
        email: this.forgot_password,
        phone: "",
        countryCode: "",
      };

      axios
        .post(url, data)
        .then((response) => {
          if (response.data.msg === "Email successfully sent") {
            // Email enviado com sucesso
            this.modalCodigoAberto = true;
          } else {
            // Email não enviado
            this.showRecoveryInputError = true;
            this.opcaoRecuperacao = "Este e-mail não possui conta";
          }
        })
        .catch((error) => {
          console.error(error);
        });
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
.error-message {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999; /* Define uma alta camada de sobreposição */
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
