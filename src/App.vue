<template>
  <v-app>
    <v-main>
      <v-row justify="center" align="center">
        <v-col cols="12" class="text-center">
          <v-card
            v-if="
              emailConfirmed === 0 &&
              !['/login', '/o-que-e-vibe', '/signature'].includes($route.path)
            "
            color="purple"
            dark
            text-color="white"
          >
            <v-card-text>
              <span style="font-size: 14px">
                Seu e-mail ainda não foi confirmado, confirme agora&nbsp;
              </span>
              <v-btn
                dark
                outlined
                color="white"
                small
                x-small
                text
                @click="openDialog"
              >
                Verificar
              </v-btn>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>

      <v-dialog v-model="dialogVisible" max-width="500px">
        <v-card>
          <v-alert color="purple" class="white--text">
            Foi enviado um e-mail de confirmação para seu e-mail.&nbsp;
            <v-icon color="white">mdi-check</v-icon>
          </v-alert>
        </v-card>
      </v-dialog>

      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import axios from "axios";
export default {
  name: "App",

  data: () => ({
    dialogVisible: false,
    emailConfirmed: null,
    email: null,
  }),

  methods: {
    openDialog() {
      this.dialogVisible = true;
      const url = "https://api.seduvibe.com/confirm_email";
      const data = {
        email: this.email,
      };
      axios
        .post(url, data)
        .then((response) => {
          if (response.data.msg === "Email successfully sent") {
            // Email enviado com sucesso
            this.dialogVisible = true;
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },

    closeDialog() {
      this.dialogVisible = false;
    },
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
        if (data.users && data.users.length > 0) {
          this.emailConfirmed = data.users[0].emailConfirmed;
          this.email = data.users[0].email;
        } else {
          this.emailConfirmed = null;
        }

        if (this.emailConfirmed === 1) {
          this.emailConfirmed = 1;
        }
      })
      .catch((error) => {
        // A requisição falhou
        console.log(error);
        console.error("Falha na requisição:", error.response.status);
      });
  },
};
</script>

<style>
.v-application--wrap {
  min-height: 0vh !important;
}
::selection {
  background-color: purple;
  color: white;
}
</style>
