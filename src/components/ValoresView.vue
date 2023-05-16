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
          :class="{ 'custom-suffix': true }"
          :append-icon="['mdi', 'percent']"
          :rules="[requiredRule]"
          @input="calculateTotal('mensal')"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          dark
          v-model="trimestral"
          label="Assinatura Trimestral"
          :class="{ 'custom-suffix': true }"
          :append-icon="['mdi', 'percent']"
          @input="calculateTotal"
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6">
        <v-text-field
          v-model="anual"
          dark
          label="Assinatura Anual"
          :class="{ 'custom-suffix': true }"
          :append-icon="['mdi', 'percent']"
          @input="calculateTotal"
        ></v-text-field>
        <p class="grey--text caption">
          Nossa taxa é de 15% o valor da sua mensalidade.
        </p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card color="#242424">
          <v-card-text class="purple--text">
            <div class="text-center">
              <p class="headline mb-0">Valor bruto:</p>
              <p class="display-1">{{ total | formatCurrency }}</p>
              <p class="headline mb-0">Valor líquido:</p>
              <p class="display-1">{{ netTotal | formatCurrency }}</p>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
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
      mensal: 0,
      trimestral: 0,
      selectedCurrency: "BRL",
      anual: 0,
      total: 0,
      currencies: [
        { text: "Dólares Americanos", value: "USD" },
        { text: "Libras Esterlinas", value: "GBP" },
        { text: "Euros", value: "EUR" },
        { text: "Real Brasileiro", value: "BRL" },
      ],
      netTotal: 0,
      requiredRule: [(v) => !!v || "Campo obrigatório"],
    };
  },
  methods: {
    calculateTotal(field) {
      const mensal = parseFloat(this.mensal) || 0;
      const trimestral = parseFloat(this.trimestral) || 0;
      const anual = parseFloat(this.anual) || 0;

      if (field === "mensal") {
        this.total = mensal + trimestral + anual;
        this.netTotal = this.total - mensal * 0.15;
      }
    },
  },
  filters: {
    formatCurrency(value) {
      const formatter = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
      return formatter.format(value);
    },
  },
};
</script>
