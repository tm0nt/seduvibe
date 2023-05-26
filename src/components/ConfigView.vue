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
        prefix="@"
      ></v-text-field>

      <v-text-field v-model="Nome" :rules="rules" label="Nome"></v-text-field>
      <v-text-field
        v-model="CPF"
        :rules="cp"
        label="CPF"
        v-mask="'###.###.###-##'"
        mask-replace="#"
        masked="true"
      ></v-text-field>
      <v-text-field
        v-model="celular"
        :rules="cel"
        label="Celular"
        v-mask="'(##) #####-####'"
        mask-replace="9"
        masked="true"
        @input="formatCelular"
      ></v-text-field>
      <v-text-field v-model="email" label="Email" :rules="em"></v-text-field>
      <v-text-field
        v-model="senha"
        :rules="se"
        label="Nova senha"
        :type="mostrarSenha ? 'text' : 'password'"
        :append-icon="mostrarSenha ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append="toggleMostrarSenha"
      ></v-text-field>

      <v-text-field
        v-model="senhaConfirmacao"
        :rules="se"
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
export default {
  data: (vm) => ({
    userName: "rafaelsantos",
    email: "rafaelsantos@gmail.com",
    CPF: "",
    cp: [
      (v) => !!v || "O campo CPF é obrigatório",
      (v) => this.validarCPF(v) || "CPF inválido",
    ],

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
    rules: [(value) => vm.checkApi(value)],
    timeout: null,
  }),
  methods: {
    toggleMostrarSenha() {
      this.mostrarSenha = !this.mostrarSenha;
    },
    validarCPF(value) {
      const cpf = value.replace(/\D/g, ""); // Remove caracteres não numéricos
      if (cpf.length !== 11) return false; // Verifica se possui 11 dígitos
      let sum = 0;
      let remainder;

      for (let i = 1; i <= 9; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (11 - i);
      }

      remainder = (sum * 10) % 11;
      if (remainder === 10 || remainder === 11) remainder = 0;

      if (remainder !== parseInt(cpf.substring(9, 10))) return false;

      sum = 0;
      for (let i = 1; i <= 10; i++) {
        sum += parseInt(cpf.substring(i - 1, i)) * (12 - i);
      }

      remainder = (sum * 10) % 11;
      if (remainder === 10 || remainder === 11) remainder = 0;

      if (remainder !== parseInt(cpf.substring(10, 11))) return false;

      return true;
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
