<template>
  <v-app
    id="inspire"
    :style="{ background: $vuetify.theme.themes.dark.background }"
  >
    <SideBar />

    <v-container>
      <v-row>
        <v-col cols="4">
          <div class="conversation">
            <v-list>
              <v-list-item
                v-for="(conversation, index) in conversations"
                :key="index"
                @click="selectedConversation = conversation"
              >
                <v-list-item-avatar>
                  <v-img :src="conversation.avatar"></v-img>
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="title">{{
                    conversation.name
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    conversation.lastMessage
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </div>
        </v-col>
        <v-col v-if="selectedConversation" cols="8">
          <v-dialog v-model="showChat" max-width="600">
            <template v-slot:activator="{ on }">
              <div class="chat-button" v-on="on">
                <v-icon>mdi-chat</v-icon>
              </div>
            </template>
            <v-card>
              <v-card-title class="headline">{{
                selectedConversation.name
              }}</v-card-title>
              <v-card-text>
                <p>{{ selectedConversation.lastMessage }}</p>
              </v-card-text>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import SideBar from "../SidebarView.vue";

export default {
  data: () => ({
    conversations: [
      {
        name: "João",
        avatar: "https://cdn.vuetifyjs.com/images/lists/1.jpg",
        lastMessage: "Oi, tudo bem?",
      },
      {
        name: "Maria",
        avatar: "https://cdn.vuetifyjs.com/images/lists/2.jpg",
        lastMessage: "Vamos nos encontrar hoje à noite?",
      },
      {
        name: "Pedro",
        avatar: "https://cdn.vuetifyjs.com/images/lists/3.jpg",
        lastMessage: "Você viu o novo filme do Batman?",
      },
    ],
    selectedConversation: null,
    showChat: false,
  }),
  components: {
    SideBar,
  },
};
</script>
<style>
.border {
  border-right: 1px solid grey;
}

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
</style>
