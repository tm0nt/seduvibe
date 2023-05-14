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
        <v-list color="#222222" class="mt-5">
          <v-list-item
            class="white--text"
            v-for="(item, index) in items"
            :key="index"
            @click="showContent(index)"
            :class="{ active: activeIndex === index }"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>

        <v-row>
          <v-col v-if="activeIndex !== null" cols="12">
            <v-card color="#232323">
              <v-card-text class="white--text">{{
                items[activeIndex].content
              }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import SideBar from "../SidebarView.vue";
export default {
  data: () => ({
    items: [
      { title: "Transferência via Pix", content: "Conteúdo do item 1" },
      { title: "Transferência via Ted", content: "Conteúdo do item 2" },
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
