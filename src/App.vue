<template>
  <v-app>
    <v-main>
      <v-row justify="center" align="center">
        <v-col cols="12" class="text-center">
          <v-card color="purple" dark text-color="white">
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
export default {
  name: "App",

  data: () => ({
    dialogVisible: false,
  }),

  methods: {
    openDialog() {
      this.dialogVisible = true;
    },

    closeDialog() {
      this.dialogVisible = false;
    },
  },
};
</script>

<style>
.v-application--wrap {
  min-height: 0vh !important;
}
</style>
