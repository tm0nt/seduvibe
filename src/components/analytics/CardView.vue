<template>
  <v-card color="#202022" class="rounded-lg mt-n3 pb-1" flat>
    <v-toolbar flat color="transparent">
      <v-toolbar-title class="white--text mt-n2"
        >Enviamos para você</v-toolbar-title
      >
    </v-toolbar>
    <v-card color="purple" class="rounded-lg mx-2 pa-1 mt-n3" flat>
      <v-toolbar flat color="transparent">
        <v-toolbar-title class="white--text caption">
          Último saque feito
        </v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>

      <span class="white--text mt-3 ml-4 caption"
        >Enviado via Pix - 03/12/2000</span
      >

      <h2 class="white--text ml-4">R$ 4.799,85</h2>

      <v-card-text class="pt-0 mt-4"> </v-card-text>
    </v-card>
    <v-toolbar flat color="transparent" class="mt-n1">
      <v-toolbar-title class="white--text">Conversas </v-toolbar-title>
      <v-chip color="purple" text-color="white" class="ml-2">2</v-chip>
    </v-toolbar>

    <v-list class="mt-n6" color="transparent" dense>
      <v-list-item v-for="chat in chats" :key="chat.title">
        <v-list-item-avatar>
          <v-img :src="chat.img" />
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title
            v-text="chat.title"
            class="white--text"
          ></v-list-item-title>
          <v-list-item-subtitle
            v-text="chat.subtitle"
            class="grey--text"
          ></v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action>
          <h5 class="white--text">{{ chat.date }}</h5>
        </v-list-item-action>
      </v-list-item>
    </v-list>
    <v-card color="purple" class="rounded-lg mx-2 pa-1 mt-2" flat>
      <h4 class="white--text ml-4">Torne-se VibePlus</h4>

      <span class="white--text mt-4 ml-4 caption"
        >Tenha um pacote completo que irá alavancar suas vendas!
      </span>

      <v-card-text class="pt-0 ml-3 mb-2">
        <router-link to="/assine">
          <v-btn
            small
            style="font-size: 10px"
            color="white"
            white
            class="withoutupercase mt-2"
            >Ver mais</v-btn
          >
        </router-link>
      </v-card-text>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    chats: [
      {
        img: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        subtitle: "Ok, tudo certo!",
        title: "Mário",
        date: "12/06/03",
      },
      {
        img: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        subtitle: "Podemos continuar o atendimento?",
        title: "Estella",
        date: "12/06/03",
      },
      {
        img: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        subtitle: "O que você precisa?",
        title: "Eduarda",
        date: "12/06/03",
      },
    ],
  }),
};
</script>
<style>
.gradient {
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(52, 36, 69, 1) 100%
  );
}
.flip {
  transform-style: preserve-3d;
  transition: all 0.8s ease;
}

.flip:hover {
  transform: rotateY(180deg);
}
</style>
