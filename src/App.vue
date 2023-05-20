<template>
  <v-app bg="dark">
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import FloatingButton from "./components/FloattingButton.vue";
export default {
  name: "App",

  data: () => ({
    components: {
      FloatingButton,
    },
  }),
};
</script>
