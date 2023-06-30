<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <v-text-field label="Nome completo" />
      </v-col>
      <v-col cols="6">
        <v-text-field
          v-model="cpf"
          label="CPF"
          value="111.222.333-44"
          readonly
          disabled
          maxlength="14"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row color="purple">
      <v-col cols="4">
        <v-text-field label="Conta" maxlength="10" />
      </v-col>
      <v-col cols="4">
        <v-text-field label="Agência" maxlength="14" />
      </v-col>
      <v-col cols="4">
        <v-select label="Tipo" :items="['Poupança', 'Conta Corrente']" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-select
          v-model="selectedBank"
          :items="bankList"
          label="Selecione um banco"
        />
      </v-col>
      <v-col cols="6">
        <v-text-field
          label="Valor"
          v-model="valor"
          v-on:input="formatarValor"
          :rules="valorRules"
          :error-messages="valorErrors"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-alert
      v-if="cpf === ''"
      type="error"
      dismissible
      class="mt-4"
      color="#940020"
    >
      Antes de pedir um saque é necessário cadastrar seu CPF nas configurações
      do perfil ou
      <router-link to="config" class="custom-router-link"
        >clique aqui</router-link
      >
      para cadastrar.
    </v-alert>
    <v-btn color="purple">Enviar</v-btn>
  </v-container>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      cpf: "111.222.333-44",
      valor: "",
      selectedBank: null,
      bankList: [
        "Banco do Brasil",
        "Caixa Econômica Federal",
        "Bradesco",
        "Itaú",
        "Santander",
        "HSBC",
        "Citibank",
        "BNDES",
        "Banco Inter",
        "Sicoob",
        "Bancoob",
        "Banco Safra",
        "Banco Votorantim",
        "Banco do Nordeste",
        "Banrisul",
        "Banco Pine",
        "Banco Pan",
        "Banco BMG",
        "Banco Neon",
        "Nubank",
        "C6Bank",
        "Banco Daycoval",
      ],
      valorRules: [
        (v) => !!v || "Valor é obrigatório",
        (v) =>
          parseFloat(v.replace(/\D/g, "")) <= 1000000 ||
          "O valor deve ser menor que R$ 1.000.000,00",
      ],
    };
  },
  computed: {
    valorErrors() {
      return this.valorRules
        .filter((rule) => !rule(this.valor))
        .map((rule) => rule(this.valor));
    },
  },
  methods: {
    formatarValor() {
      let val = this.valor.replace(/\D/g, "");
      val = (parseFloat(val) / 100).toFixed(2).replace(".", ",");
      val = "R$ " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      this.valor = val;
    },
    formatCPF() {
      this.cpf = this.cpf
        .replace(/\D/g, "") // remove caracteres não numéricos
        .replace(/(\d{3})(\d)/, "$1.$2") // insere ponto após o terceiro dígito
        .replace(/(\d{3})(\d)/, "$1.$2") // insere ponto após o sexto dígito
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2"); // insere traço após o nono dígito
    },
  },
};
</script>

<style>
.custom-router-link {
  color: #151515 !important;
  text-decoration: none;
}

.custom-router-link .custom-router-link-text {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
</style>
