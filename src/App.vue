<template>
  <v-app bg="dark">
    <v-main>
      <v-card color="purple" dark text-color="white" width="100%" height="40">
        <div
          style="
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
          "
        >
          <span style="font-size: 14px"
            >Seu e-mail ainda não foi confirmado, confirme agora&nbsp;</span
          >
          <v-btn
            dark
            outlined
            color="white"
            small
            x-small
            text
            @click="openDialog"
            >Verificar</v-btn
          >
        </div>
      </v-card>

      <v-dialog v-model="dialogVisible" max-width="500px">
        <v-card>
          <v-alert color="purple" class="white--text"
            >Foi enviado um e-mail de confirmação para seu e-mail.&nbsp;<v-icon
              color="white"
              >mdi-check</v-icon
            ></v-alert
          >
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
    components: {},
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
