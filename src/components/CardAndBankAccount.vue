<template>
  <v-container>
    <v-card class="credit-card" min-width="500">
      <v-card-text>
        <div class="credit-card-content white--text font-weight-bold">
          <div class="credit-card-chip"></div>
          <div class="credit-card-info">
            <div class="credit-card-info-row">
              <div class="credit-card-info-value">{{ numeroCartao }}</div>
            </div>
            <div class="credit-card-info-row">
              <div class="credit-card-info-label">Nome do titular:</div>
              <div class="credit-card-info-value">{{ nomeTitular }}</div>
            </div>
            <div class="credit-card-info-row">
              <div class="credit-card-info-label">Tipo:</div>
              <div class="credit-card-info-value">{{ Tipo }}</div>
            </div>
          </div>
        </div>
      </v-card-text>
      <v-card class="pa-5" dark>
        <v-card-text>
          <v-form>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Nome do titular" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field
                  label="CPF"
                  required
                  mask="###.###.###-##"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-text-field label="Conta" required></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6">
                <v-text-field label="Agência" required></v-text-field>
              </v-col>
              <v-col cols="12" sm="6">
                <v-select label="Banco" :items="bancos" required></v-select>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" class="text-center">
                <v-btn color="purple" dark>Salvar Alterações</v-btn>
              </v-col>
            </v-row>
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
      numeroCartao: "Agẽncia 5656 Conta 556626",
      nomeTitular: "Lais Maria",
      Tipo: "Poupança",
    };
  },
};
</script>

<style scoped>
.credit-card {
  width: 360px;
  background-color: purple;
  color: white;
  font-family: Arial, sans-serif;
}

.credit-card-content {
  padding: 24px;
  display: flex;
  justify-content: space-between;
}

.credit-card-chip {
  width: 50px;
  height: 35px;
  background-image: url(https://img3.gratispng.com/dy/822a0fb6195a85a617c0ee6e034b1f46/L0KzQYm3U8MxN6d9fZH0aYP2gLBuTflxcJDzfZ9sb33zhcXskr1qa5Dzi59yboTod8PolPVlNZRuitVAaYT2PbTvigB0NaRuhZ9sYYLng368gfJmPpU9SaptN0m7QXA6U8UxPmE7SaMAMkK3Qoq6UcM2P2o6RuJ3Zx==/kisspng-iphone-computer-icons-integrated-circuits-chips-sim-cards-5abe6d818d7981.3350606115224293135795.png);
  background-size: cover;
}

.credit-card-info {
  flex-grow: 1;
  margin-left: 24px;
}

.credit-card-info-row {
  display: flex;
  margin-bottom: 12px;
}

.credit-card-info-label {
  flex-grow: 1;
}

.credit-card-logo {
  width: 60px;
}

.credit-card-logo img {
  max-width: 100%;
  height: auto;
}
</style>
