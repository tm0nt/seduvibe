<template>
  <v-app> </v-app>
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: "EmailConfirmed",

  created() {
    const urlParams = new URLSearchParams(window.location.search);
    const email = urlParams.get("email");
    const token = urlParams.get("token");

    if (email && token) {
      const url = `https://api.seduvibe.com/email_confirmed?email=${email}&token=${token}`;

      axios
        .get(url)
        .then((response) => {
          console.log(response.data);
          router.push("/profile");
        })
        .catch((error) => {
          console.error(error);
          router.push("/");
        });
    } else {
      router.push("/");
    }
  },

  methods: {},
};
</script>
