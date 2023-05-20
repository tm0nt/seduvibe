<template>
  <v-btn
    v-if="showBackButton"
    fab
    small
    dark
    left
    fixed
    class="back-button"
    color="purple"
    @click="goBack"
  >
    <v-icon>mdi-arrow-left</v-icon>
  </v-btn>
</template>

<script>
export default {
  data() {
    return {
      showBackButton: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    goBack() {
      this.$router.go(-1); // Volta uma página para trás
    },
    handleScroll() {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      this.showBackButton = scrollTop > 100; // Mostra o botão quando o scroll é maior que 100 pixels
    },
  },
};
</script>

<style scoped>
.back-button {
  position: fixed;
  left: 20px; /* Ajuste a posição esquerda conforme necessário */
  bottom: 20px; /* Ajuste a posição inferior conforme necessário */
}
</style>
