<template>
  <div id="app">
    <v-app id="inspire">
      <v-container fluid>
        <v-layout column>
          <v-flex xs12>
            <v-card class="ma-2" dark>
              <v-card-title>
                <h4 class="overline">Ranking de mimos</h4>
              </v-card-title>
              <v-card-text>
                <v-data-table
                  color="purple"
                  :headers="headers"
                  :items="users"
                  item-key="id"
                  :footer-props="{
                    itemsPerPageText: 'Linhas por página:',
                  }"
                >
                  <template slot="item.amount" slot-scope="{ item }">
                    <span
                      :class="{ 'gradient-background': item.id <= 3 }"
                      :style="{ color: 'white' }"
                      >{{ item.amount }}</span
                    >
                  </template>
                </v-data-table>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs12>
            <v-card class="ma-2" dark>
              <v-card light flat dark>
                <v-container>
                  <v-layout align-center>
                    <strong class="display-1 font-weight-regular mr-4"
                      >9</strong
                    >
                    <v-layout column justify-end>
                      <div class="title font-weight-light">Terça-feira</div>
                      <div class="text-uppercase font-weight-light">
                        Fevereiro 2023
                      </div>
                    </v-layout>
                  </v-layout>
                </v-container>
              </v-card>

              <v-card-text class="py-0">
                <v-timeline align-top dense>
                  <v-infinite-scroll
                    :on-infinite="loadMoreTimelineItems"
                    :disabled="loadingMoreItems"
                  >
                    <v-timeline-item
                      v-for="item in timelineItems"
                      :key="item.id"
                      color="purple"
                      small
                      icon="mdi-currency-usd"
                    >
                      <v-layout pt-3>
                        <v-flex>
                          <h4 class="overline">{{ item.amount }}</h4>
                          <div class="caption grey--text">
                            {{ item.username }}
                          </div>
                        </v-flex>
                      </v-layout>
                    </v-timeline-item>
                  </v-infinite-scroll>
                  <v-btn
                    v-if="showLoadMoreButton"
                    @click="loadMoreTimelineItems"
                    class="mt-4"
                    block
                    dark
                    color="purple"
                  >
                    Carregar Mais
                  </v-btn>
                  <v-progress-circular
                    v-if="loadingMoreItems"
                    indeterminate
                    color="purple"
                    class="mt-4"
                  ></v-progress-circular>
                </v-timeline>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Nome do Usuário", value: "name" },
        { text: "Quantia", value: "amount" },
      ],
      users: [
        { id: 1, name: "Usuário 1", amount: "R$ 50,00" },
        { id: 2, name: "Usuário 2", amount: "R$ 100,00" },
        { id: 3, name: "Usuário 3", amount: "R$ 75,00" },
        // Adicione mais usuários aqui...
      ],
      timelineItems: [
        { id: 1, amount: "R$ 1.000,00", username: "@carlossilva" },
        { id: 2, amount: "R$ 25,00", username: "@mauriciosilva13" },
      ],
      loadingMoreItems: false,
      showLoadMoreButton: true,
    };
  },
  methods: {
    loadMoreTimelineItems() {
      this.loadingMoreItems = true;
      // Simulate an API call or any asynchronous operation to fetch more timeline items
      setTimeout(() => {
        const newItems = [
          { id: 3, amount: "R$ 500,00", username: "@maria.souza" },
          { id: 4, amount: "R$ 50,00", username: "@joao123" },
          // Add more items here...
        ];
        this.timelineItems = [...this.timelineItems, ...newItems];
        this.loadingMoreItems = false;
        this.showLoadMoreButton = false; // Remove this line if you want to always show the "Load More" button
      }, 1500);
    },
  },
};
</script>
