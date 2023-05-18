<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <SideBar />
    <v-container>
      <v-row>
        <template>
          <div>
            <v-card>
              <v-card-title class="purple">
                <v-icon class="icon">mdi-account-group</v-icon>
                <span>Total de Assinantes</span>
              </v-card-title>
              <v-progress-linear
                class="progress"
                color="purple"
                :value="100"
              ></v-progress-linear>
              <v-card-text class="info">{{ totalAssinantes }}</v-card-text>
            </v-card>

            <v-card>
              <v-card-title class="purple">
                <v-icon class="icon">mdi-eye</v-icon>
                <span>Número de Visualizações</span>
              </v-card-title>
              <v-progress-linear
                class="progress"
                color="purple"
                :value="100"
              ></v-progress-linear>
              <v-card-text class="info">{{ numeroVisualizacoes }}</v-card-text>
            </v-card>

            <v-card>
              <v-card-title class="purple">
                <v-icon class="icon">mdi-emoticon-happy-outline</v-icon>
                <span>Total de Vibe+</span>
              </v-card-title>
              <v-progress-linear
                class="progress"
                color="purple"
                :value="100"
              ></v-progress-linear>
              <v-card-text class="info">{{ totalVibe }}</v-card-text>
            </v-card>
          </div>
        </template>

        <script>
          export default {
            data() {
              return {
                totalAssinantes: 10000, // Exemplo de dado
                numeroVisualizacoes: 500000, // Exemplo de dado
                totalVibe: 15000, // Exemplo de dado
              };
            },
          };
        </script>

        <style scoped>
          .purple {
            background-color: #232323;
            color: white;
          }

          .icon {
            margin-right: 8px;
          }

          .progress {
            margin-top: 16px;
          }

          .info {
            text-align: center;
            font-size: 24px;
            font-weight: bold;
          }
        </style>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import SideBar from "../SidebarView.vue";
export default {
  data: () => ({}),
  components: {
    SideBar,
  },
};
</script>
<style>
.v-btn.withoutupercase {
  text-transform: none !important;
}
.v-btn:not(.v-btn--round).v-size--small {
  min-width: 30px !important;
  padding: 0 5px !important;
}
</style>
