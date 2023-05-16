<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <SideBar />
    <v-container>
      <v-row>
        <v-col cols="12" sm="8">
          <v-row>
            <v-col cols="12" sm="12">
              <v-col cols="12" sm="4">
                <v-card color="#242426" class="rounded-lg mx-2" flat>
                  <v-app-bar flat color="rgba(0, 0, 0, 0)">
                    <span class="caption grey--text mt-n6">Assinantes</span>
                  </v-app-bar>
                  <v-app-bar flat color="rgba(0, 0, 0, 0)" class="mt-n12">
                    <h4 class="white--text">512166</h4>
                    <span class="caption grey--text ml-2"> +1489/dia </span>
                  </v-app-bar>

                  <v-app-bar flat color="rgba(0, 0, 0, 0)" class="mt-n10">
                    <v-progress-linear
                      color="purple"
                      height="1"
                      value="100"
                    ></v-progress-linear>
                  </v-app-bar>
                  <v-card-text class="pt-0 mt-n4">
                    <span
                      class="text-caption grey--text font-weight-light"
                    ></span>
                  </v-card-text>
                </v-card>
              </v-col>
              <h2 class="white--text">Próximos pagamentos</h2>
              <v-data-table
                :items="items"
                :footer-props="{
                  showFirstLastPage: true,
                  'items-per-page-text': 'Usuários por página',
                }"
                class="purple darken-4"
                dark
              >
                <template v-slot:header="{ classes }">
                  <thead :class="classes">
                    <tr>
                      <th
                        v-for="header in headers"
                        :key="header.text"
                        class="text-white"
                        :style="{
                          backgroundColor: '#6B1F96',
                          color: '#FFFFFF',
                        }"
                      >
                        {{ header.text }}
                      </th>
                    </tr>
                  </thead>
                </template>
                <template v-slot:item="{ item }">
                  <tr>
                    <td
                      class="text-white"
                      :style="{ backgroundColor: '#222222' }"
                    >
                      {{ item.usuario }}
                    </td>
                    <td
                      class="text-white"
                      :style="{ backgroundColor: '#222222' }"
                    >
                      {{ item.vencimento }}
                    </td>
                    <td
                      class="text-white"
                      :style="{ backgroundColor: '#222222' }"
                    >
                      {{ item.servico }}
                    </td>
                  </tr>
                </template>
              </v-data-table>
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="4"> </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import SideBar from "../SidebarView.vue";
export default {
  data() {
    return {
      headers: [
        { text: "Usuário", value: "usuario" },
        { text: "Vencimento", value: "vencimento" },
        { text: "Serviço", value: "servico" },
      ],
      items: [],
    };
  },
  mounted() {
    this.generateData();
  },
  components: {
    SideBar,
  },
  methods: {
    generateData() {
      const usuarios = [
        "Alice",
        "Bob",
        "Charlie",
        "David",
        "Emma",
        "Frank",
        "Gina",
        "Hank",
        "Iris",
        "Jake",
      ];
      const servicos = [
        "1 mês assinatura",
        "1 mês assinatura",
        "1 mês assinatura",
        "1 mês assinatura",
        "1 mês assinatura",
        "1 mês assinatura",
        "1 mês assinatura",
        "1 mês assinatura",
        "1 mês assinatura",
        "1 mês assinatura",
      ];

      for (let i = 0; i < 10; i++) {
        const usuario = usuarios[Math.floor(Math.random() * usuarios.length)];
        const vencimento = Math.floor(Math.random() * 50) + 20;
        const servico = servicos[Math.floor(Math.random() * servicos.length)];

        this.items.push({ usuario, vencimento, servico });
      }
    },
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
