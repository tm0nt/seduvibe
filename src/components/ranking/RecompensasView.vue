<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-row align="center" class="py-4">
            <v-col cols="2">
              <v-icon size="48" color="purple">mdi-fire</v-icon>
            </v-col>
            <v-col cols="10">
              <div class="headline uppercase">Fire in heart</div>
              <div class="subtext white--text">
                Alcance 10 vendas para sua conta ser impulsionada atraindo mais
                clientes
              </div>
            </v-col>
          </v-row>
          <v-row align="center" class="py-4">
            <v-col cols="12">
              <h4 class="white--text text-center">Faltam 7 vendas</h4>

              <v-progress-linear
                v-model="progress"
                color="purple"
              ></v-progress-linear>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      progress: 20,
    };
  },
  mounted() {
    // Lógica para atualizar o progresso aqui
    // Exemplo: this.progress = (vendasRealizadas / 10) * 100;
  },
};
</script>

<style>
.headline {
  font-size: 24px;
  font-weight: bolder;
  color: purple;
}

.uppercase {
  text-transform: uppercase;
}

.subtext {
  font-size: 18px;
}

.white--text {
  color: white;
}
</style>
