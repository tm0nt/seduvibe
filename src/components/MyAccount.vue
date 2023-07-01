<template>
  <div>
    <v-text-field
      v-model="form.usuario"
      label="Usuário"
      prefix="@"
      color="white"
      dark
    ></v-text-field>
    <v-chip v-if="emailConfirmed === 0" color="danger" dark @click="openDialog"
      >Email não verificado</v-chip
    >
    <v-chip v-else color="purple" dark>Email verificado</v-chip>
    <v-text-field
      v-model="form.email"
      label="Email"
      color="white"
      :rules="emailRules"
      dark
    ></v-text-field>
    <v-dialog v-model="mailOpen" max-width="400px">
      <v-card>
        <v-alert
          type="info"
          color="purple"
          dense
          dismissible
          @input="mailOpen = false"
        >
          Enviamos o e-mail verificador para o seu e-mail, verifique sua caixa
          de entrada.
        </v-alert>
      </v-card>
    </v-dialog>
    <v-text-field
      v-model="form.facebook"
      label="Facebook"
      color="white"
      dark
    ></v-text-field>
    <v-text-field
      v-model="form.twitter"
      label="Twitter"
      color="white"
      dark
      prefix="@"
    ></v-text-field>
    <v-text-field
      v-model="form.instagram"
      label="Instagram"
      color="white"
      dark
      prefix="@"
    ></v-text-field>
    <v-text-field
      v-model="form.telegram"
      label="Telegram"
      color="white"
      dark
      prefix="@"
    ></v-text-field>

    <div class="btn-container">
      <v-btn color="purple" class="mr-2" dark @click="salvarAlteracoes"
        >Salvar Alterações</v-btn
      >
      <v-btn white @click="openDialog">Alterar Senha</v-btn>
    </div>

    <v-dialog v-model="dialog" max-width="500px">
      <v-card dark>
        <v-card-title>Alterar Senha</v-card-title>
        <v-card-text>
          <v-text-field
            v-model="senha"
            label="Senha"
            type="password"
            color="white"
            dark
          ></v-text-field>
          <v-text-field
            v-model="confirmarSenha"
            label="Confirmar Senha"
            type="password"
            color="white"
            dark
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-btn color="purple" text @click="dialog = false">Cancelar</v-btn>
          <v-btn color="purple" text @click="alterarSenha">Salvar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style>
.btn-container {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>

<script>
import axios from "axios";
export default {
  data() {
    return {
      form: {
        usuario: "",
        email: "",
        facebook: "",
        twitter: "",
        instagram: "",
        telegram: "",
      },
      emailRules: [
        (v) => !!v || "Preenchimento de campo obrigatório",
        (v) => /.+@.+\..+/.test(v) || "Seu e-mail não é válido",
      ],
      emailConfirmed: null,
      dialog: false,
      senha: "",
      salvarAlteracoes: "",
      confirmarSenha: "",
      mailOpen: false,
      cel: [
        (v) => !!v || "O campo Celular é obrigatório",
        (v) =>
          /^(\([1-9]{2}\) )?[9]{1}[0-9]{4}-[0-9]{4}$/.test(v) ||
          "Celular inválido",
      ],
    };
  },
  mounted() {
    const axios = require("axios");
    const url = "https://api.seduvibe.com/";
    const token = localStorage.getItem("token");
    if (!token) {
      this.emailConfirmed = null; // Define emailConfirmed como null
      return;
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(url, config)
      .then((response) => {
        // Requisição bem-sucedida
        const data = response.data;
        this.form.usuario = data.users[0].user;
        this.form.email = data.users[0].email;
        this.emailConfirmed = data.users[0].emailConfirmed;

        if (data.users[0].emailConfirmed === 1) {
          this.emailConfirmed = 1;
        }
      })
      .catch((error) => {
        // A requisição falhou
        console.error("Falha na requisição:", error.response.status);
      });
  },
  methods: {
    formatCPF() {
      // Remove caracteres não numéricos do valor do CPF
      let cpf = this.CPF.replace(/\D/g, "");

      // Aplica a máscara do CPF (###.###.###-##)
      cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf = cpf.replace(/(\d{3})(\d{2})$/, "$1-$2");

      // Atualiza o valor do campo CPF
      this.CPF = cpf;
    },
    formatCelular() {
      let value = this.celular.replace(/\D/g, "");
      if (value.length > 10) {
        this.celular = `(${value.substring(0, 2)}) ${value.substring(
          2,
          7
        )}-${value.substring(7, 11)}`;
      } else {
        this.celular = value;
      }
    },
    openMail() {
      if (!this.isEmailVerified) {
        const url = "https://api.seduvibe.com/confirm_email";
        const data = {
          email: this.email,
        };
        axios
          .post(url, data)
          .then((response) => {
            if (response.data.msg === "Email successfully sent") {
              // Email enviado com sucesso
              this.mailOpen = true;
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    openDialog() {
      this.dialog = true;
    },
    alterarSenha() {
      // Lógica para alterar a senha
    },
  },
};
</script>
