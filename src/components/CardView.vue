<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <div>
      <v-row class="d-flex mt-6">
        <v-col cols="12" sm6>
          <v-card class="rounded-lg mt-n3 pb-1 transparent" flat>
            <v-toolbar flat color="transparent">
              <v-toolbar-title class="white--text mt-n2"
                >Seu cartão</v-toolbar-title
              >
            </v-toolbar>
            <v-card color="#303030" class="rounded-lg mx-2 pa-1 mt-n3" flat>
              <v-toolbar flat color="transparent">
                <v-toolbar-title class="grey--text caption">
                  Mastercard
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-icon color="grey" class="">fab fa-cc-mastercard</v-icon>
              </v-toolbar>

              <span class="grey--text mt-3 ml-4 caption">RAFAEL F SANTOS</span>
              <v-card-text class="pt-0 mt-4">
                <span class="white--text font-weight-light"
                  >**** **** **** 6774</span
                >
              </v-card-text>
              <v-icon color="grey" class="ml-4 mb-2"
                >fa-regular fa-pen-to-square</v-icon
              >
            </v-card>
          </v-card>
        </v-col>
        <v-col cols="12" sm6>
          <v-card dark color="#353535" class="rounded-lg mx-2 pa-1 mt-n3" flat>
            <v-toolbar flat color="transparent">
              <v-toolbar-title class="white--text">Histórico</v-toolbar-title>
              <v-chip color="purple" text-color="white" class="ml-2">12</v-chip>
            </v-toolbar>
            <h5 class="white--text ml-2">Experiências recentes</h5>
            <v-list class="mt-n2 rounded-lg mx-2" color="transparent" dense>
              <v-list-item
                v-for="experience in experiences"
                :key="experience.title"
              >
                <v-list-item-avatar>
                  <v-img :src="experience.img" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="experience.title"
                    class="white--text"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-text="experience.subtitle"
                    class="grey--text"
                  ></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <h5 class="white--text">{{ experience.price }}</h5>
                </v-list-item-action>
              </v-list-item>
              <h4 class="white--text ml-5 mb-5">Ver tudo</h4>
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    chats: [
      {
        img: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        subtitle: "Allright then, see you later !",
        title: "Esther Howard",
        date: "12/06/03",
      },
      {
        img: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        subtitle: "Allright then, see you later ! ",
        title: "Floyd Miles",
        date: "12/06/03",
      },
      {
        img: "https://cdn.vuetifyjs.com/images/lists/4.jpg",
        subtitle: "Allright then, see you later ! ",
        title: "Brooklyn Simmons",
        date: "12/06/03",
      },
    ],
    experiences: [
      {
        img: "spotify.png",
        subtitle: "Mensal",
        title: "Larissa Manoela",
        price: "-$49.59",
      },
      {
        img: "netflix.png",
        subtitle: "Anual",
        title: "Emme White",
        price: "-$106.58",
      },
    ],
  }),
};
</script>
<style>
body,
html {
  background-color: #212121;
}
</style>
