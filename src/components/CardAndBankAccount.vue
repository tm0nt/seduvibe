<template>
  <v-container>
    <v-card class="credit-card">
      <v-card-text>
        <div class="credit-card-content white--text font-weight-bold">
          <div class="credit-card-chip"></div>
          <div class="credit-card-info">
            <div class="credit-card-info-row">
              <div class="credit-card-info-value">{{ numeroCartao }}</div>
            </div>
            <div class="credit-card-info-row">
              <div class="credit-card-info-label">
                Nome do titular: {{ nomeTitular }}
              </div>
            </div>
            <div class="credit-card-info-row">
              <div class="credit-card-info-label">Tipo: {{ Tipo }}</div>
            </div>
          </div>
        </div>
      </v-card-text>
      <v-card class="pa-5" dark>
        <v-card-text>
          <v-form>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Nome do titular"
                  color="purple"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="CPF"
                  required
                  color="purple"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field
                  color="purple"
                  label="Conta"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  color="purple"
                  label="Agência"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select
                  label="Banco"
                  color="purple"
                  :items="bancos"
                  required
                ></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="text-center"> </v-col>
            </v-row>
            <v-btn color="purple" class="white--text">Salvar Alterações</v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      bancos: ["Caixa", "Itaú"],
      numeroCartao: "Caixa Economica Federal",
      nomeTitular: "Lais Maria",
      Tipo: "Poupança",
    };
  },
};
</script>

<style scoped>
.credit-card {
  width: 100%;
  background-color: purple;
  color: white;
  font-family: Arial, sans-serif;
}

.credit-card-content {
  padding: 10px;
  display: flex;
  justify-content: space-between;
}

.credit-card-info {
  flex-grow: 1;
  margin-left: 1px;
}

.credit-card-info-row {
  display: flex;
  margin-bottom: 12px;
}

.credit-card-info-label {
  flex-grow: 1;
}
</style>
