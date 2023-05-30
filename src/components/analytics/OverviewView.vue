<template>
  <v-card color="#202022" class="rounded-lg" flat>
    <navbar-view
      :page-title="'Vamos analisar sua conta metricamente!'"
    ></navbar-view>

    <v-row>
      <v-col cols="6" sm="6">
        <v-card color="#202022" class="rounded-lg" flat>
          <v-card color="transparent" class="rounded-lg mx-2" flat>
            <v-btn color="purple" small>
              <v-icon color="white">far fa-dollar-sign</v-icon>
            </v-btn>
            <h2 class="white--text">R$ 8.779,58</h2>
            <h6 class="grey--text">Saldo disponível</h6>
            <v-btn
              color="purple"
              dark
              class="withoutupercase mt-2"
              @click="openConfirmationDialog"
              >Saque rápido</v-btn
            >
          </v-card>
        </v-card>

        <v-dialog v-model="showConfirmationDialog" max-width="400" dark>
          <v-card>
            <v-card-title class="headline">Confirmar saque-rápido</v-card-title>
            <v-card-text
              >Todos os saques serão feitos via Pix diretamente no CPF
              cadastrado na plataforma.</v-card-text
            >
            <v-card-actions>
              <v-btn color="purple" text @click="closeConfirmationDialog"
                >Cancelar</v-btn
              >
              <v-btn color="purple" text @click="performQuickWithdrawal"
                >Confirmar</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-col>
      <v-col cols="6" sm="6">
        <v-card color="#202022" class="rounded-lg" flat>
          <v-card color="transparent" class="rounded-lg mx-2" flat>
            <v-btn color="#404040" small>
              <v-icon color="white">far fa-dollar-sign</v-icon>
            </v-btn>
            <h2 class="white--text">R$ 1.779,58</h2>
            <h6 class="grey--text">Seu saldo hoje</h6>
          </v-card>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card color="#242426" class="rounded-lg mx-2" flat>
          <v-app-bar flat color="rgba(0, 0, 0, 0)">
            <span class="caption grey--text mt-n6">Vendas hoje</span>
          </v-app-bar>
          <v-app-bar flat color="rgba(0, 0, 0, 0)" class="mt-n12">
            <h4 class="white--text">23</h4>
          </v-app-bar>

          <v-app-bar flat color="rgba(0, 0, 0, 0)" class="mt-n10">
            <v-progress-linear
              color="purple"
              height="4"
              value="100"
            ></v-progress-linear>
          </v-app-bar>
          <v-card-text class="pt-0 mt-n4"> </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6">
        <v-card color="#242426" class="rounded-lg mx-2" flat>
          <v-app-bar flat color="rgba(0, 0, 0, 0)">
            <span class="caption grey--text mt-n6">Vendas semanal</span>
          </v-app-bar>
          <v-app-bar flat color="rgba(0, 0, 0, 0)" class="mt-n12">
            <h4 class="white--text">35</h4>
          </v-app-bar>

          <v-app-bar flat color="rgba(0, 0, 0, 0)" class="mt-n10">
            <v-progress-linear
              color="purple"
              height="4"
              value="100"
            ></v-progress-linear>
          </v-app-bar>
          <v-card-text class="pt-0 mt-n4"> </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    showConfirmationDialog: false,
  }),
  methods: {
    openConfirmationDialog() {
      this.showConfirmationDialog = true;
    },
    closeConfirmationDialog() {
      this.showConfirmationDialog = false;
    },
    performQuickWithdrawal() {
      // Coloque aqui a lógica para realizar o saque rápido
      // Você pode adicionar a lógica de negócio que for necessária neste método
      // Por exemplo, chamar uma API ou atualizar valores no componente
      // Após realizar o saque, feche o modal de confirmação
      this.closeConfirmationDialog();
    },
  },
};
</script>

<style></style>
