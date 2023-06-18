<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <v-container fluid fill-height>
      <v-row justify="center">
        <v-col cols="12" sm="3">
          <v-app-bar flat color="rgba(0,0,0,0)">
            <v-btn tile color="purple" x-large block dark>
              <v-icon left color="white"> fas fa-plus </v-icon>
              <v-divider class="mx-3" vertical></v-divider>
              Nova conversa
            </v-btn>
          </v-app-bar>

          <v-app-bar flat color="rgba(0,0,0,0)" dolor="purple" dark>
            <v-toolbar-title class="title"> Chat </v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon>fas fa-ellipsis-h</v-icon>
            </v-btn>
          </v-app-bar>
          <v-app-bar flat color="rgba(0,0,0,0)" dark>
            <v-text-field
              filled
              label="Pesquise mensagens..."
              append-icon="mdi-magnify"
              color="grey"
            ></v-text-field>
          </v-app-bar>

          <v-list two-line color="rgba(0,0,0,0)" dark>
            <v-list-item-group
              v-model="selected"
              active-class="purple lighten-4"
              multiple
            >
              <template v-for="(item, index) in items">
                <v-list-item :key="item.title">
                  <v-badge
                    bordered
                    bottom
                    color="green"
                    dot
                    offset-x="22"
                    offset-y="26"
                  >
                    <v-list-item-avatar>
                      <v-img :src="item.avatar"></v-img>
                    </v-list-item-avatar>
                  </v-badge>
                  <template>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="item.title"
                      ></v-list-item-title>

                      <v-list-item-subtitle
                        v-text="item.subtitle"
                      ></v-list-item-subtitle>
                    </v-list-item-content>
                  </template>
                </v-list-item>

                <v-divider
                  v-if="index < items.length - 1"
                  :key="index"
                ></v-divider>
              </template>
            </v-list-item-group>
          </v-list>
        </v-col>
        <v-col cols="12" sm="6">
          <v-app-bar color="rgba(0,0,0,0)" flat dark>
            <v-badge
              bordered
              bottom
              color="green"
              dot
              offset-x="11"
              offset-y="13"
            >
              <v-avatar class="mt-n7" size="40" elevation="10">
                <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
              </v-avatar>
            </v-badge>
            <v-toolbar-title class="title pl-0 ml-2 mt-n4">
              Fernando Gaucho
            </v-toolbar-title>
            <v-spacer></v-spacer>
          </v-app-bar>
          <v-app-bar color="rgba(0,0,0,0)" flat class="mb-16">
            <v-spacer></v-spacer>
            <v-card class="mt-10 mr-2" max-width="350px" color="white" white>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="mb-4">Oi</div>
                  <v-list-item-subtitle
                    >16 mins atrás
                    <span class="ml-16"
                      >Visto 1:03PM</span
                    ></v-list-item-subtitle
                  >
                </v-list-item-content>
              </v-list-item>
            </v-card>
            <v-badge
              bordered
              bottom
              color="green"
              dot
              offset-x="10"
              offset-y="10"
            >
              <v-avatar class="mt-n5" size="30" elevation="10">
                <img src="https://cdn.vuetifyjs.com/images/lists/5.jpg" />
              </v-avatar>
            </v-badge>
          </v-app-bar>
          <v-app-bar color="rgba(0,0,0,0)" flat class="mb-16">
            <v-badge
              bordered
              bottom
              color="green"
              dot
              offset-x="16"
              offset-y="9"
            >
              <v-avatar class="mt-n5 mr-2" size="30" elevation="10">
                <img src="https://cdn.vuetifyjs.com/images/lists/1.jpg" />
              </v-avatar>
            </v-badge>
            <v-card class="mt-10" max-width="350px" color="purple" dark>
              <v-list-item three-line>
                <v-list-item-content>
                  <div class="mb-4">Olá</div>
                  <v-list-item-subtitle>12 mins atrás</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-card>
            <v-btn color="white" icon class="mb-n10">
              <v-icon>fas fa-ellipsis-h</v-icon>
            </v-btn>
          </v-app-bar>
          <v-app-bar color="rgba(0,0,0,0)" flat class="mb-16"> </v-app-bar>
          <v-app-bar color="rgba(0,0,0,0)" flat dark>
            <v-text-field
              v-model="message"
              append-icon="mdi-emoticon"
              :append-outer-icon="message ? 'mdi-send' : 'mdi-microphone'"
              filled
              clear-icon="mdi-close-circle"
              clearable
              label="Message"
              type="text"
              @click:append-outer="sendMessage"
              @click:clear="clearMessage"
            ></v-text-field>
          </v-app-bar>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data: () => ({
    selected: [2],
    items: [
      {
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        title: "Ali Connors",
      },
    ],
    panel: [2],

    password: "Password",
    show: false,
    message: "Digite aqui...",
    marker: true,
    iconIndex: 0,
  }),
  components: {},
  methods: {
    sendMessage() {
      this.resetIcon();
      this.clearMessage();
    },
    clearMessage() {
      this.message = "";
    },
    resetIcon() {
      this.iconIndex = 0;
    },
  },
};
</script>
<style>
.chat-button {
  position: fixed;
  bottom: 16px;
  right: 16px;
  background-color: primary;
  color: white;
  border-radius: 50%;
  cursor: pointer;
  height: 64px;
  width: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.26);
}

v-container {
  transform: scale(80%);
}
</style>
