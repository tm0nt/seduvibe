<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <SideBar />
    <v-container>
      <Navbar :introduction_page="intro" />
      <v-row>
        <v-col cols="12" sm="8">
          <v-row>
            <v-col cols="12" sm="12">
              <Overview />
            </v-col>

            <v-col cols="12" sm="12">
              <Payment />
            </v-col>
          </v-row>
        </v-col>
        <v-col cols="12" sm="4">
          <Card />
        </v-col>
      </v-row>
    </v-container>
    <v-btn
      class="chat-button"
      fab
      large
      color="purple"
      dark
      @click="$router.push('/dashboard')"
    >
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
  </v-app>
</template>

<script>
// @ is an alias to /src
import SideBar from "../components/analytics/SidebarView.vue";
import Navbar from "../components/analytics/NavbarView.vue";
import Overview from "../components/analytics/OverviewView.vue";
import Payment from "../components/analytics/PaymentView.vue";
import Card from "../components/analytics/CardView.vue";
export default {
  data: () => ({
    intro: "Vamos analisar sua conta metricamente!",
  }),
  components: {
    SideBar,
    Navbar,
    Overview,
    Payment,
    Card,
  },
};
</script>
<style>
.chat-button {
  position: fixed;
  bottom: 16px;
  right: 85%;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  height: 64px;
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
}

.v-btn.withoutupercase {
  text-transform: none !important;
}
.v-btn:not(.v-btn--round).v-size--small {
  min-width: 30px !important;
  padding: 0 5px !important;
}
</style>
