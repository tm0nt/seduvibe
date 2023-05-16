<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <SideBar />
    <v-container>
      <v-row
        justify="center"
        align="center"
        class="d-flex"
        style="max-height: 100vh"
      >
        <v-col cols="12" sm="4">
          <v-card color="#202022" class="rounded-lg mt-10" flat>
            <v-card color="transparent" class="rounded-lg mx-2" flat>
              <v-btn color="purple" small>
                <v-icon color="white">far fa-dollar-sign</v-icon>
              </v-btn>
              <h2 class="white--text">R$ 8.779,58</h2>
              <h6 class="grey--text">Saldo disponível</h6>
              <v-btn color="purple" dark class="withoutupercase mt-2"
                >Saque rápido</v-btn
              >
            </v-card>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4">
          <v-card color="#202022" class="rounded-lg mt-10" flat>
            <v-card color="transparent" class="rounded-lg mx-2" flat>
              <v-btn color="grey" small>
                <v-icon color="white">far fa-dollar-sign</v-icon>
              </v-btn>
              <h2 class="white--text">R$ 8.779,58</h2>
              <h6 class="grey--text">Aguardando confirmação</h6>
            </v-card>
          </v-card>
        </v-col>

        <v-col cols="12" sm="4">
          <v-card color="#202022" class="rounded-lg mt-10" flat>
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
    </v-container>
  </v-app>
</template>

<script>
import SideBar from "../SidebarView.vue";
import PixForm from "./PixForm.vue";
import TedForm from "./TedForm.vue";

export default {
  data: () => ({
    items: [
      { title: "Transferência via Pix", formType: "pix" },
      { title: "Transferência via Ted", formType: "ted" },
    ],
    activeIndex: null,
  }),
  methods: {
    navigate(to) {
      this.$router.push({ name: to });
      this.drawer = false;
    },
    showContent(index) {
      this.activeIndex = this.activeIndex === index ? null : index;
    },
  },
  components: {
    SideBar,
    PixForm,
    TedForm,
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
