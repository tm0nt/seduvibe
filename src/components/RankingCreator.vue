<template>
  <v-app>
    <v-container fluid>
      <v-row>
        <v-col cols="7">
          <h3 class="white--text">Ranking completo</h3>

          <v-card class="elevation-0" flat color="#212121" dark>
            <v-card-text>
              <v-row justify="space-between">
                <v-list>
                  <v-list-item v-for="(entry, index) in ranking" :key="index">
                    <v-list-item-avatar>
                      <h2>#1</h2>
                    </v-list-item-avatar>
                    <v-list-item-content class="mt-3 mb-3">
                      <v-list-item-title :class="getEntryClass(index)">
                        {{ entry.name }}
                        <v-icon class="ml-2" v-if="index < 3" color="purple"
                          >mdi-check-decagram</v-icon
                        >
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Usuário: {{ entry.user }}</v-list-item-subtitle
                      >
                      <v-list-item-subtitle
                        >Nível: {{ entry.score }}</v-list-item-subtitle
                      >
                    </v-list-item-content>
                    <v-icon class="align-self-center ml-auto" color="white">
                      mdi-plus
                    </v-icon>
                  </v-list-item>
                </v-list>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="5">
          <h3 class="white--text">Minha posição</h3>
          <v-card class="elevation-0" flat dark>
            <v-card-text>
              <v-row justify="space-between">
                <v-list color="purple">
                  <v-list-item>
                    <v-list-item-avatar>
                      <h2>+99</h2>
                    </v-list-item-avatar>
                    <v-list-item-content class="mt-3 mb-3">
                      <v-list-item-title>
                        Maria Almeida
                        <v-icon class="ml-2" v-if="index < 3" color="purple"
                          >mdi-check-decagram</v-icon
                        >
                      </v-list-item-title>
                      <v-list-item-subtitle
                        >Usuário: @mariaalmeida</v-list-item-subtitle
                      >
                      <v-list-item-subtitle>Nível: 2</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-icon class="align-self-center ml-auto" color="white">
                      mdi-plus
                    </v-icon>
                  </v-list-item>
                </v-list>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      ranking: [
        { name: "Daniele Alves", user: "@danieleh0t", score: 5 },
        { name: "Daniele Alves", user: "@danieleh0t", score: 5 },
        { name: "Daniele Alves", user: "@danieleh0t", score: 5 },
        { name: "Daniele Alves", user: "@danieleh0t", score: 5 },
        { name: "Daniele Alves", user: "@danieleh0t", score: 5 },
      ],
    };
  },
  methods: {
    getEntryClass(index) {
      if (index === 0) {
        return "top1";
      } else if (index === 1) {
        return "top2";
      } else if (index === 2) {
        return "top3";
      } else {
        return "";
      }
    },
  },
};
</script>

<style scoped>
/* Define o fundo preto para o componente Ranking */
.v-application {
  background-color: #212121;
}

.top1 {
  color: #ff9800; /* Laranja */
}

.top2 {
  color: #e91e63; /* Rosa */
}

.top3 {
  color: #9c27b0; /* Roxo */
}
.align-self-center {
  align-self: center !important;
}
</style>
