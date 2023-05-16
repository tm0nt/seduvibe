<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6">
        <v-card class="mb-4" color="#212121" dark>
          <v-card-title class="pa-2 white--text">
            <v-icon left>mdi-account-multiple</v-icon>
            <span class="headline">{{ numeroIndicacoes }}</span>
          </v-card-title>
          <v-card-subtitle class="pa-2 white--text"
            >Número de Indicações</v-card-subtitle
          >
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-card class="mb-4" color="#212121" dark>
          <v-card-title class="pa-2 white--text">
            <v-icon left>mdi-currency-usd</v-icon>
            <span class="headline">{{ valorComissao }}</span>
          </v-card-title>
          <v-card-subtitle class="pa-2 white--text">Comissão</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-text-field
          v-model="linkCopiado"
          disabled
          outlined
          color="#212121"
          dark
        ></v-text-field>
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn color="purple" dark v-on="on" @click="copiarLink"
              >Copiar Link</v-btn
            >
          </template>
          <span>{{ tooltipTexto }}</span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      numeroIndicacoes: 10,
      valorComissao: "10.000",
      linkCopiado: "seja.seduvibe.com/laismaria?indicate=DSDF568",
      tooltipTexto: "Copiar para área de transferência",
    };
  },
  methods: {
    copiarLink() {
      navigator.clipboard.writeText(this.linkCopiado);
      this.tooltipTexto = "Copiado com sucesso!";
    },
  },
};
</script>

<style scoped>
.v-card-title {
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.v-card-subtitle {
  font-size: 16px;
}

.white--text {
  color: white !important;
}

.headline {
  font-size: 36px;
}
</style>
