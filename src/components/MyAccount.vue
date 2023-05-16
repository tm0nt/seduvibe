<template>
  <div>
    <v-text-field
      v-model="form.usuario"
      label="Usuário"
      color="white"
      dark
    ></v-text-field>
    <v-text-field
      v-model="form.email"
      label="Email"
      color="white"
      dark
    ></v-text-field>
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
    <v-btn color="purple" dark @click="salvarAlteracoes"
      >Salvar Alterações</v-btn
    >
    <v-btn style="float: right" white @click="openDialog">Alterar Senha</v-btn>

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

<script>
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
      dialog: false,
      senha: "",
      confirmarSenha: "",
    };
  },
  methods: {
    openDialog() {
      this.dialog = true;
    },
    alterarSenha() {
      // Lógica para alterar a senha
    },
  },
};
</script>
