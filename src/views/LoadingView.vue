<template>
  <div class="loading">
    <!-- Logo pulsando -->
    <img
      class="logo"
      src="../assets/logo.png"
      alt="Seduvibe - A maior plataforma de criação de conteúdo da América Latina"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true,
    };
  },
  created() {
    // Simulação de uma requisição assíncrona para verificar o carregamento
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  },
};
</script>

<style>
/* Estilos e animação da logo */
.loading {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.logo {
  width: 350px; /* Ajuste o tamanho da logo conforme necessário */
  animation: pulse 1s infinite alternate;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
