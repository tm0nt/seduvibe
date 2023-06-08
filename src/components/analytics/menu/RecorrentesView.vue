<template>
  <v-app id="inspire">
    <v-container fluid>
      <Navbar :introduction_page="intro" />
      <SideBar />
      <v-row>
        <v-col>
          <v-row align="center">
            <v-col class="col">
              <h2 class="white--text">Próximos pagamentos</h2>
              <v-card class="custom-table">
                <v-simple-table dark dense>
                  <template v-slot:default>
                    <thead>
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
                    <tbody>
                      <tr v-for="item in items" :key="item.usuario">
                        <td class="text-white">{{ item.usuario }}</td>
                        <td class="text-white">{{ item.vencimento }}</td>
                        <td class="text-white">{{ item.servico }}</td>
                      </tr>
                    </tbody>
                  </template>
                </v-simple-table>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import SideBar from "../SidebarView.vue";
import Navbar from "../NavbarView.vue";

export default {
  data() {
    return {
      intro: "Analise e consulte suas assinaturas em recorrência ativa.",
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
.col {
  width: 100%;
}

.custom-table {
  margin-top: 20px;
}

.custom-table td,
.custom-table th {
  text-align: left;
}

.custom-table th {
  background-color: #6b1f96;
  color: #ffffff;
}

.custom-table td,
.custom-table th {
  padding: 8px;
}

@media only screen and (max-width: 600px) {
  .custom-table {
    overflow-x: auto;
  }
}
</style>
