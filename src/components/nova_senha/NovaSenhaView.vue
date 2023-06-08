<template>
  <v-container class="fill-height">
    <v-row align="center" justify="center" class="fill-height">
      <v-col cols="12" sm="8" md="4">
        <v-card
          class="elevation-0 mt-10 my-custom-card"
          color="#212121"
          dark
          border-0
          flat
        >
          <v-img src="../../assets/logo.png" height="50"></v-img>
          <p class="caption grey--text text-center">
            Exclusividade e liberdade
          </p>
          <v-col>
            <h2 class="text-center mt-5">Olá, Laís Silva</h2>
            <p class="text-center caption grey--text">
              Vamos alterar sua senha!
            </p>
          </v-col>
          <v-text-field
            color="purple"
            v-model="novaSenha"
            :append-icon="showNovaSenha ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showNovaSenha ? 'text' : 'password'"
            label="Nova senha"
            @click:append="showNovaSenha = !showNovaSenha"
          ></v-text-field>
          <v-text-field
            color="purple"
            v-model="confirmarSenha"
            :append-icon="showConfirmarSenha ? 'mdi-eye' : 'mdi-eye-off'"
            :type="showConfirmarSenha ? 'text' : 'password'"
            label="Confirmar senha"
            @click:append="showConfirmarSenha = !showConfirmarSenha"
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
export default {
  data() {
    return {
      novaSenha: "",
      confirmarSenha: "",
      showNovaSenha: false,
      showConfirmarSenha: false,
    };
  },
  methods: {
    alterarSenha() {
      // Lógica de cadastro no banco de dados
      // ...

      // Redirecionar para a página de login
      this.$router.push({ path: "/login", query: { success: true } });
    },
  },
};
</script>
