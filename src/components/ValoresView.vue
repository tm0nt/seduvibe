<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-select
          v-model="selectedCurrency"
          :items="currencies"
          label="Escolha sua moeda"
          dense
          dark
          :disabled="true"
        ></v-select>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="mensal"
          label="Assinatura Mensal"
          dark
          color="purple"
          :rules="requiredRule"
          :prefix="'R$'"
          @input="
            calculateTotal('mensal');
            formatCurrency('mensal');
          "
        ></v-text-field>
        <p class="grey--text caption">
          Você receberá: {{ formattedNetTotal("mensal", mensalPercentage) }}
        </p>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          dark
          v-model="trimestral"
          color="purple"
          label="Assinatura Trimestral"
          :prefix="'R$'"
          @input="
            calculateTotal('trimestral');
            formatCurrency('trimestral');
          "
        ></v-text-field>
        <p class="grey--text caption">
          Você receberá:
          {{ formattedNetTotal("trimestral", trimestralPercentage) }}
        </p>
      </v-col>
      <v-col cols="12" sm="12" class="">
        <v-text-field
          v-model="anual"
          dark
          label="Assinatura Anual"
          :prefix="'R$'"
          color="purple"
          @input="
            calculateTotal('anual');
            formatCurrency('anual');
          "
        ></v-text-field>
        <p class="grey--text caption">
          Você receberá: {{ formattedNetTotal("anual", anualPercentage) }}
        </p>
      </v-col>
    </v-row>
    <v-btn class="white--text" color="purple">Salvar</v-btn>
  </v-container>
</template>

<style>
.custom-suffix .v-text-field__append-inner {
  color: purple; /* Cor personalizada para o ícone */
}
</style>

<script>
export default {
  data() {
    return {
      mensal: "",
      trimestral: "",
      selectedCurrency: "BRL",
      anual: "",
      currencies: [
        { text: "Dólares Americanos", value: "USD" },
        { text: "Libras Esterlinas", value: "GBP" },
        { text: "Euros", value: "EUR" },
        { text: "Real Brasileiro", value: "BRL" },
      ],
      requiredRule: [(v) => !!v || "Campo obrigatório"],
      mensalPercentage: 0.85,
      trimestralPercentage: 0.85,
      anualPercentage: 0.85,
    };
  },
  computed: {
    netTotal() {
      return this.mensal * this.mensalPercentage;
    },
  },
  methods: {
    calculateTotal(field) {
      this[field] = parseFloat(this[field]);
    },
    formatCurrency(field) {
      this[field] = this[field].replace(/[^0-9,]/g, ""); // Remove caracteres não numéricos, exceto a vírgula
      this[field] = this[field].replace(",", "."); // Substitui a vírgula por ponto
      this[field] = this[field].replace(/\./g, ","); // Substitui o ponto por vírgula
    },
    formattedNetTotal(field, percentage) {
      const currency = this.selectedCurrency;
      const value = this[field] * percentage;

      if (isNaN(value)) {
        return "Valor não especificado";
      }

      const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: currency,
        minimumFractionDigits: 2,
      });
      const formattedValue = formatter.format(value);
      return `${formattedValue}`;
    },
  },
};
</script>
