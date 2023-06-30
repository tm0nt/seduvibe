<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <v-container>
      <Navbar :introduction_page="intro" />
      <SideBar />
      <v-row
        justify="center"
        align="center"
        class="d-flex"
        style="max-height: 100vh"
      >
        <v-col cols="6" sm="6" md="4">
          <v-card color="#202022" class="rounded-lg" flat>
            <v-card color="transparent" class="rounded-lg mx-2" flat>
              <v-btn color="purple" small>
                <v-icon color="white">far fa-dollar-sign</v-icon>
              </v-btn>
              <h2 class="white--text">R$ 8.779,58</h2>
              <h6 class="grey--text">Saldo disponível</h6>
            </v-card>
          </v-card>
        </v-col>

        <v-col cols="6" sm="6" md="4">
          <v-card color="#202022" class="rounded-lg" flat>
            <v-card color="transparent" class="rounded-lg mx-2" flat>
              <v-btn color="grey" small>
                <v-icon color="white">far fa-dollar-sign</v-icon>
              </v-btn>
              <h2 class="white--text">R$ 8.779,58</h2>
              <h6 class="grey--text">Aguardando confirmação</h6>
            </v-card>
          </v-card>
        </v-col>
        <v-col
          cols="12"
          sm="4"
          md="4"
          class="d-flex align-center justify-center"
        >
          <v-card color="#202022" class="rounded-lg" flat>
            <v-card color="transparent" class="rounded-lg mx-2" flat>
              <v-btn color="red" small>
                <v-icon color="white">far fa-dollar-sign</v-icon>
              </v-btn>
              <h2 class="white--text">R$ 8.779,58</h2>
              <h6 class="grey--text">Bloqueado</h6>
            </v-card>
          </v-card>
        </v-col>
      </v-row>

      <v-card class="mt-10" dark color="purple">
        <v-card-title>
          <v-toolbar-title>Selecione o tipo de transferência</v-toolbar-title>
        </v-card-title>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="item.title">
            <v-list-item-content>
              <v-list-item-title
                v-text="item.title"
                @click="showContent(index)"
              ></v-list-item-title>
              <v-expand-transition>
                <div v-if="activeIndex === index">
                  <v-form v-if="item.formType === 'pix'" ref="pixForm">
                    <PixForm />
                  </v-form>
                  <v-form v-if="item.formType === 'ted'" ref="tedForm">
                    <TedForm />
                  </v-form>
                </div>
              </v-expand-transition>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
      <p class="grey--text mt-2 text-subtitle-1" style="font-size: 10px">
        Todas as transferências serão enviadas para o CPF cadastrado na
        plataforma.
      </p>
      <v-row align="center">
        <v-col class="col">
          <h2 class="white--text">Histórico de saque</h2>
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
    </v-container>
  </v-app>
</template>

<script>
import SideBar from "../SidebarView.vue";
import PixForm from "./PixForm.vue";
import TedForm from "./TedForm.vue";
import Navbar from "../NavbarView.vue";

export default {
  data: () => ({
    headers: [
      { text: "Data", value: "usuario" },
      { text: "Valor", value: "vencimento" },
      { text: "Estado", value: "servico" },
    ],
    items: [
      { title: "Transferência via Pix", formType: "pix" },
      { title: "Transferência via Ted", formType: "ted" },
    ],
    activeIndex: null,
    intro: "Aqui você pode fazer saques e consultar seu histórico de saque.",
  }),
  methods: {
    navigate(to) {
      this.$router.push({ name: to });
      this.drawer = false;
    },
    showContent(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
    generateData() {},
  },

  components: {
    Navbar,
    SideBar,
    PixForm,
    TedForm,
  },
  mounted() {
    this.generateData();
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
