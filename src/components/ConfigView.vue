<template>
  <v-sheet
    width="500"
    class="mx-auto mt-10"
    style="background-color: transparent"
    dark
  >
    <v-form validate-on="submit" @submit.prevent="submit">
      <v-text-field
        v-model="userName"
        label="Usuário"
        color="purple"
        prefix="@"
      ></v-text-field>

      <v-text-field v-model="nome" color="purple" label="Nome"></v-text-field>
      <v-text-field
        v-model="cpf"
        label="CPF"
        color="purple"
        @input="formatCPF"
        maxlength="14"
      ></v-text-field>
      <v-text-field
        v-model="celular"
        :rules="cel"
        label="Celular"
        color="purple"
        @input="formatCelular"
        maxlength="14"
      ></v-text-field>
      <v-text-field
        v-model="email"
        label="Email"
        color="purple"
        :rules="emailRules"
      ></v-text-field>
      <v-chip
        v-if="emailConfirmed === 0"
        color="danger"
        dark
        @click="openDialog"
        >Email não verificado</v-chip
      >
      <v-chip v-else color="purple" dark>Email verificado</v-chip>

      <v-dialog v-model="dialogOpen" max-width="400px">
        <v-card>
          <v-alert
            type="info"
            color="purple"
            dense
            dismissible
            @input="dialogOpen = false"
            >d Enviamos o e-mail verificador para o seu e-mail, verifique sua
            caixa de entrada.
          </v-alert>
        </v-card>
      </v-dialog>
      <v-text-field
        v-model="senha"
        :rules="se"
        label="Nova senha"
        color="purple"
        :type="mostrarSenha ? 'text' : 'password'"
        :append-icon="mostrarSenha ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append="toggleMostrarSenha"
      ></v-text-field>

      <v-text-field
        v-model="senhaConfirmacao"
        :rules="se"
        color="purple"
        label="Confirmar senha"
        :type="mostrarSenha ? 'text' : 'password'"
        :append-icon="mostrarSenha ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append="toggleMostrarSenha"
      ></v-text-field>
      <v-btn type="submit" block class="purple mt-2 white--text"
        >Salvar alterações</v-btn
      >
      <v-btn
        type="submit2"
        block
        class="white mt-2 black--text"
        @click="openConfirmationModal"
      >
        Tornar-se criador(a)
      </v-btn>

      <v-dialog v-model="confirmationModalOpen" max-width="400" dark>
        <v-card>
          <v-card-title class="headline">CONFIRMAÇÃO</v-card-title>
          <v-card-text> Quer realmente se tornar um criador(a)? </v-card-text>
          <v-card-actions>
            <v-btn color="purple darken-1" text @click="confirmTornarCriador"
              >SIM</v-btn
            >
            <v-btn color="white darken-1" text @click="closeConfirmationModal"
              >NÃO</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-form>
  </v-sheet>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    isEmailVerified: false,
    userName: "",
    emailConfirmed: null,
    nome: "",
    emailRules: [
      (v) => !!v || "Preenchimento de campo obrigatório",
      (v) => /.+@.+\..+/.test(v) || "Seu e-mail não é válido",
    ],
    email: "",
    dialogOpen: false,
    cpf: "",
    celular: "",
    senha: "",
    senhaConfirmacao: "",
    se: [(v) => !!v || "O campo é obrigatório"],
    mostrarSenha: false,
    em: [
      (v) => !!v || "O campo E-mail é obrigatório",
      (v) => /.+@.+\..+/.test(v) || "E-mail inválido",
    ],
    cel: [
      (v) => !!v || "O campo Celular é obrigatório",
      (v) =>
        /^(\([1-9]{2}\) )?[9]{1}[0-9]{4}-[0-9]{4}$/.test(v) ||
        "Celular inválido",
    ],
    confirmationModalOpen: false,
    timeout: null,
  }),
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
        console.log(data);
        this.nome = data.users[0].name;
        this.userName = data.users[0].user;
        this.cpf = data.users[0].cpf;
        this.email = data.users[0].email;
        this.celular = data.users[0].phone;
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
    openDialog() {
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
              this.dialogOpen = true;
            }
          })
          .catch((error) => {
            console.error(error);
          });
      }
    },
    toggleMostrarSenha() {
      this.mostrarSenha = !this.mostrarSenha;
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

    openConfirmationModal() {
      this.confirmationModalOpen = true;
    },
    closeConfirmationModal() {
      this.confirmationModalOpen = false;
    },
    confirmTornarCriador() {
      // Lógica para confirmar a ação de tornar-se criador(a)
      this.closeConfirmationModal();
    },
  },
};
</script>
