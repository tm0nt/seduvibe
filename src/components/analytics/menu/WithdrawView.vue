<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <Navbar />
    <SideBar />
    <v-container>
      <v-row>
        <v-card color="#202022" class="rounded-lg" flat>
          <v-row>
            <v-col cols="12" sm="4">
              <v-card color="transparent" class="rounded-lg mx-2" flat>
                <v-btn color="purple" small>
                  <v-icon color="white">far fa-dollar-sign</v-icon>
                </v-btn>
                <h2 class="white--text">R$ 8.779,58</h2>
                <h6 class="grey--text">Saldo disponível</h6>
                <v-btn color="purple" dark class="withoutupercase mt-2"
                  >Pedir saque
                </v-btn>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card color="#242426" class="rounded-lg mx-2" flat>
                <v-app-bar flat color="rgba(0, 0, 0, 0)">
                  <span class="caption grey--text mt-n6">Vendas</span>
                </v-app-bar>
                <v-app-bar flat color="rgba(0, 0, 0, 0)" class="mt-n12">
                  <h4 class="white--text">96,50%</h4>
                  <span class="caption grey--text ml-2"> + 6.7% </span>
                </v-app-bar>

                <v-app-bar flat color="rgba(0, 0, 0, 0)" class="mt-n10">
                  <v-progress-linear
                    color="purple"
                    height="6"
                    value="45"
                  ></v-progress-linear>
                </v-app-bar>
                <v-card-text class="pt-0 mt-n4">
                  <span class="text-caption grey--text font-weight-light"
                    >Meta mensal</span
                  >
                </v-card-text>
              </v-card>
            </v-col>
            <v-col cols="12" sm="4">
              <v-card color="#242426" class="rounded-lg mx-2" flat>
                <v-app-bar flat color="rgba(0, 0, 0, 0)">
                  <span class="caption grey--text mt-n6">Vendas</span>
                </v-app-bar>
                <v-app-bar flat color="rgba(0, 0, 0, 0)" class="mt-n12">
                  <h4 class="white--text">96,50%</h4>
                  <span class="caption grey--text ml-2"> + 6.7% </span>
                </v-app-bar>

                <v-app-bar flat color="rgba(0, 0, 0, 0)" class="mt-n10">
                  <v-progress-linear
                    color="purple"
                    height="6"
                    value="45"
                  ></v-progress-linear>
                </v-app-bar>
                <v-card-text class="pt-0 mt-n4">
                  <span class="text-caption grey--text font-weight-light"
                    >Meta anual</span
                  >
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-card>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
// @ is an alias to /src
import SideBar from "../SidebarView.vue";
import Navbar from "../NavbarView.vue";

export default {
  data: () => ({}),
  components: {
    SideBar,
    Navbar,
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
