<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" sm="8" md="4">
        <v-alert v-if="isPasswordNotChange" type="error"
          >Aconteceu algum erro e a senha não foi alterada!</v-alert
        >
        <v-alert v-if="isPasswordChange" type="success"
          >Senha alterada com sucesso! Redirecionando...</v-alert
        >
        <v-card
          class="elevation-0 mt-10 my-custom-card"
          color="#212121"
          dark
          border-0
          flat
        >
          <div class="text-center">
            <v-img
              src="../../assets/logo.png"
              width="200"
              class="d-flex mx-auto"
            ></v-img>
          </div>
          <p class="caption grey--text text-center">
            Exclusividade e liberdade
          </p>
          <v-col>
            <p class="text-center caption grey--text">
              Vamos alterar sua senha!
            </p>
          </v-col>
          <v-text-field
            ref="novaSenha"
            color="purple"
            v-model="novaSenha"
            :append-icon="showNovaSenha ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showNovaSenha ? 'text' : 'password'"
            label="Nova senha"
            @click:append="showNovaSenha = !showNovaSenha"
            required
            :rules="[
              (v) => !!v || 'Campo obrigatório',
              (v) => (v && v.length >= 8) || 'Mínimo de 8 caracteres',
            ]"
          ></v-text-field>
          <v-text-field
            ref="confirmarSenha"
            color="purple"
            v-model="confirmarSenha"
            :append-icon="showConfirmarSenha ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showConfirmarSenha ? 'text' : 'password'"
            label="Confirmar senha"
            @click:append="showConfirmarSenha = !showConfirmarSenha"
            required
            :rules="[
              (v) => !!v || 'Campo obrigatório',
              (v) => (v && v.length >= 8) || 'Mínimo de 8 caracteres',
              (v) => v === novaSenha || 'As senhas não coincidem',
            ]"
          ></v-text-field>
          <v-col class="text-center">
            <v-btn color="purple" dark @click="alterarSenha"
              >Alterar senha</v-btn
            >
          </v-col>
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
      novaSenha: "",
      confirmarSenha: "",
      showNovaSenha: false,
      isPasswordNotChange: false,
      isPasswordChange: false,
      showConfirmarSenha: false,
      email: "",
      token: "",
      method: "",
    };
  },
  created() {
    // Extrair as variáveis da URL
    const params = new URLSearchParams(this.$route.query);
    this.email = params.get("email");
    this.token = params.get("token");
    this.method = params.get("method");
  },
  methods: {
    async alterarSenha() {
      this.$refs.novaSenha.validate();
      this.$refs.confirmarSenha.validate();

      if (
        !this.$refs.novaSenha.hasError &&
        !this.$refs.confirmarSenha.hasError
      ) {
        if (this.novaSenha === this.confirmarSenha) {
          try {
            // Construir a URL com os valores armazenados
            const url = `https://api.seduvibe.com/reset_password?email=${encodeURIComponent(
              this.email
            )}&token=${encodeURIComponent(
              this.token
            )}&method=${encodeURIComponent(this.method)}`;

            // Realizar a requisição para a API
            const response = await axios.post(url, {
              password: this.novaSenha,
            });

            console.log(response.data);
            this.isPasswordChange = true;

            // Redirecionar para a página de login após a alteração da senha
            setTimeout(() => {
              this.$router.push("/login");
            }, 3000);
          } catch (error) {
            // Ocorreu um erro ao alterar a senha
            console.error(error);
            this.isPasswordNotChange = true;
          }
        } else {
          // As senhas não coincidem
          console.log("As senhas não coincidem");
        }
      }
    },
  },
};
</script>
