<template>
  <v-app style="background-color: #212121">
    <SideBar />
    <RightSideBar />
    <Dashboard />
  </v-app>
</template>

<script>
import SideBar from "./SideBar.vue";
import RightSideBar from "./RightSideBar.vue";
import Dashboard from "./DashboardVie.vue";

export default {
  components: {
    SideBar,
    RightSideBar,
    Dashboard,
  },
};
</script>
