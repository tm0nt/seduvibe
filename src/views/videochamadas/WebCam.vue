<template>
  <v-container fluid>
    <v-row>
      <!-- Câmera da modelo -->
      <v-col cols="8">
        <v-card class="video-card">
          <!--  vídeo da câmera da modelo aqui -->
        </v-card>
        <v-app-bar flat color="rgb(0,0,0,0)"></v-app-bar>
        <v-row justify="center">
          <v-btn class="action-button" color="purple" dark>Dar mimo</v-btn>
          <v-btn class="action-button" color="purple" dark>Chat privado</v-btn>
          <v-btn class="action-button" color="purple" dark
            >Chat exclusivo</v-btn
          >
        </v-row>
      </v-col>

      <!-- Chat ao vivo -->
      <v-col cols="4">
        <v-card class="chat-card">
          <!-- Incluir o componente de chat ao vivo aqui -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "WebcamRoom",
  // Adicione aqui o código necessário para controlar a câmera, o chat e os botões
};
</script>

<style>
.video-card {
  height: 100%;
  background-color: #000;
}

.chat-card {
  height: 100%;
  background-color: #f5f5f5;
}

.action-button {
  margin: 0 10px;
}
</style>
