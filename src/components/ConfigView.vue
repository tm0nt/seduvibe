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
        :rules="rules"
        label="Usuário"
      ></v-text-field>
      <v-text-field v-model="Nome" :rules="rules" label="Nome"></v-text-field>
      <v-text-field v-model="CPF" :rules="rules" label="CPF"></v-text-field>
      <v-text-field
        v-model="Telefone"
        :rules="rules"
        label="Telefone"
      ></v-text-field>
      <v-text-field v-model="email" :rules="rules" label="Email"></v-text-field>
      <v-text-field
        v-model="Senha"
        :rules="rules"
        label="Senha"
        type="password"
      ></v-text-field>
      <v-text-field
        v-model="Senha"
        :rules="rules"
        label="Confirmar senha"
        type="password"
      ></v-text-field>
      <v-btn type="submit" block class="purple mt-2 white--text"
        >Salvar alterações</v-btn
      >
    </v-form>
  </v-sheet>
</template>

<script>
export default {
  data: (vm) => ({
    userName: "rafaelsantos",
    email: "rafaelsantos@gmail.com",
    rules: [(value) => vm.checkApi(value)],
    timeout: null,
  }),
  methods: {
    async submit(event) {
      const results = await event;
      alert(JSON.stringify(results, null, 2));
    },
    async checkApi(userName) {
      return new Promise((resolve) => {
        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          if (!userName) return resolve("Please enter a user name.");
          if (userName === "johnleider")
            return resolve("User name already taken. Please try another one.");

          return resolve(true);
        }, 1000);
      });
    },
  },
};
</script>
