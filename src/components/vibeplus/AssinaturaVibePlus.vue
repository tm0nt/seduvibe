<template>
  <v-card class="comment-card mt-5" flat dark>
    <v-card-text>
      <v-textarea
        v-model="comment"
        auto-grow
        rows="1"
        :class="{ 'rounded-input': comment }"
        placeholder="Escreva um comentário..."
      ></v-textarea>
    </v-card-text>
  </v-card>
</template>

<style>
.comment-card {
  width: 100%;
  height: 150px;
  overflow-y: auto;
}

.rounded-input {
  border-radius: 20px;
}
</style>
