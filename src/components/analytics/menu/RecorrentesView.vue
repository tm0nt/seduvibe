<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <v-container>
      <Navbar />
      <SideBar />
      <v-row>
        <v-col>
          <v-row align="center">
            <v-col>
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
                      class="text-white text-xs-center"
                      :style="{ backgroundColor: '#222222' }"
                    >
                      {{ item.usuario }}
                    </td>
                    <td
                      class="text-white text-xs-center"
                      :style="{ backgroundColor: '#222222' }"
                    >
                      {{ item.vencimento }}
                    </td>
                    <td
                      class="text-white text-xs-center"
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
      </v-row>
    </v-container>
  </v-app>
</template>

<!-- Restante do código -->

<script>
// @ is an alias to /src
import SideBar from "../SidebarView.vue";
import Navbar from "../NavbarView.vue";

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
    Navbar,
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
