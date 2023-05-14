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
            <v-col cols="12" sm="12"> </v-col>
            <v-col cols="12" sm="12"> </v-col>
            <v-col cols="12" sm="12"> </v-col>
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
  data: () => ({}),
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
