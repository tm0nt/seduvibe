<template>
  <v-container>
    <v-text-field label="Nome completo" />
    <v-text-field
      label="Cpf"
      v-model="cpf"
      value="111.222.333-44"
      readonly
      disabled
    />
    <v-text-field
      label="Valor"
      v-model="valor"
      v-on:keyup="formatarValor"
      :rules="[
        valorRule,
        (v) => {
          if (!v) {
            return 'Valor é obrigatório';
          } else if (parseFloat(v.replace(/\D/g, '')) > 1000000) {
            return 'O valor deve ser menor que R$ 1.000.000,00';
          } else {
            return true;
          }
        },
      ]"
    />

    <v-btn color="purple">Enviar</v-btn>
    <p class="grey--text mt-2 text-subtitle-1" style="font-size: 10px">
      Todas as transferências via pix serão enviadas pela chave CPF, crie uma
      chave com seu CPF no seu banco antes de pedir o saque.
    </p>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cpf: "111.222.333-45",
      valor: "",
      valorRule: [(v) => !!v || "Valor é obrigatório"],
    };
  },
  methods: {
    formatarValor() {
      let val = this.valor.replace(/\D/g, "");
      val = (val / 100).toFixed(2).replace(".", ",");
      val = "R$ " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      this.valor = val;
    },
  },
};
</script>
