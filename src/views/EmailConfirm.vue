<template>
  <v-app> </v-app>
</template>

<script>
import axios from "axios";
import router from "../router"; // Ajuste o caminho do arquivo "router.js" conforme necessário

export default {
  name: "EmailConfirmed",

  created() {
    // Obtém os parâmetros da URL
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");
    const token = urlParams.get("token");

    if (email && token) {
      // Constrói a URL com os parâmetros
      const url = `https://api.seduvibe.com/email_confirmed?email=${email}&token=${token}`;

      // Faz a requisição utilizando o Axios
      axios
        .post(url)
        .then((response) => {
          console.log(response.data);
          // Redireciona para a rota "/perfil"
          router.push("/profile");
        })
        .catch((error) => {
          console.error(error);
          // Redireciona para a rota "/profile" em caso de erro
          router.push("/profile");
        });
    } else {
      // Redireciona para a rota "/perfil" se os parâmetros de email e token não estiverem presentes
      router.push("/profile");
    }
  },
};
</script>
