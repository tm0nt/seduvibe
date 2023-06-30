<template>
  <v-app>
    <v-card dark class="mt-4 w-100">
      <v-card-title class="overline white--text"
        >Seu conteúdo exclusivo</v-card-title
      >
      <v-card class="mx-auto my-8" min-width="800" dark>
        <!-- Cabeçalho da publicação -->
        <v-card-title>
          <v-spacer></v-spacer>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn icon v-on="on">
                <v-icon>mdi-dots-horizontal</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-list-item-title>Denunciar</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-card-title>
        <!-- Imagem da publicação -->
        <v-img src="/img/post.jpg"></v-img>
        <!-- Ações da publicação -->
        <v-card-actions>
          <v-btn icon>
            <v-icon color="purple">mdi-heart-outline</v-icon>
          </v-btn>
          <v-btn icon>
            <v-icon>mdi-comment-outline</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
        <!-- Legenda da publicação -->
        <v-card-text>
          <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
        </v-card-text>
        <!-- Comentários da publicação -->
        <v-card-text>
          <v-list dense>
            <v-list-item v-for="(comment, index) in comments" :key="index">
              <v-list-item-avatar>
                <v-img src="/img/avatar.jpg"></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold"
                  >Nome do usuário</v-list-item-title
                >
                <v-list-item-subtitle>{{ comment }}</v-list-item-subtitle>
              </v-list-item-content>
              <v-row class="d-flex justify-end">
                <v-col cols="auto">
                  <v-icon size="16" color="purple">mdi-heart</v-icon>
                </v-col>
                <v-col cols="auto">
                  <v-icon size="16" color="grey">mdi-delete</v-icon>
                </v-col>
              </v-row>
            </v-list-item>
          </v-list>
        </v-card-text>

        <!-- Formulário de comentário -->
        <v-card-actions>
          <v-avatar size="32">
            <v-img src="/img/avatar.jpg"></v-img>
          </v-avatar>
          <v-form
            class="flex-grow-1"
            ref="commentForm"
            v-on:submit.prevent="addComment"
          >
            <v-textarea
              v-model="newComment"
              label="Adicione um comentário"
              :rules="rules"
              required
            ></v-textarea>
          </v-form>
          <v-btn
            color="purple white--text"
            @click="submitComment"
            :disabled="submittingComment"
          >
            Enviar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-card>
  </v-app>
</template>
<script>
export default {
  data() {
    return {
      newComment: "",
      submittingComment: false,
      comments: [
        "Comentário 1",
        "Comentário 2",
        "Comentário 3",
        "Comentário 4",
        "Comentário 5",
      ],
      rules: [
        (v) => (v && v.length <= 10) || "Máximo de 10 caracteres",
        (v) => !!v || "Campo obrigatório",
      ],
    };
  },
  methods: {
    addComment() {
      if (this.newComment) {
        this.comments.push(this.newComment);
        this.newComment = "";
      }
    },
    submitComment() {
      if (!this.submittingComment) {
        this.$refs.commentForm.validate().then((valid) => {
          if (valid) {
            this.submittingComment = true;
            setTimeout(() => {
              this.addComment();
              this.submittingComment = false;
            }, 1000);
          }
        });
      }
    },
  },
};
</script>
