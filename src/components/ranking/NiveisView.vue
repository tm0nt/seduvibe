<template>
  <v-app>
    <div class="cards-container">
      <v-card v-for="card in cards" :key="card.id" class="user-card" dark flat>
        <v-avatar class="avatar" color="white">
          <v-img class="avatar">{{ card.image }}</v-img>
        </v-avatar>
        <div class="user-details">
          <div class="username">{{ card.username }}</div>
          <div class="level">{{ card.nivelAtual }}</div>
          <v-progress-linear
            color="purple"
            height="7"
            :value="card.progress"
            class="progress-bar"
          ></v-progress-linear>
          <div clas s="level">Próximo Nível: {{ card.nextLevel }}</div>
        </div>
      </v-card>
      <div class="card-line" v-if="index !== cards.length - 1"></div>

      <v-card
        v-for="card in cards"
        :key="card.id + '-icon'"
        class="user-card"
        dark
        flat
      >
        <v-avatar class="avatar" color="purple">
          <v-icon color="white">mdi-star</v-icon>
        </v-avatar>
        <div class="user-details">
          <div class="username">Iniciante</div>
          <div class="level">Nível 1</div>
        </div>
      </v-card>
      <div class="card-line" v-if="index !== cards.length - 1"></div>
      <v-card v-for="card in cards" :key="card.id" class="user-card" dark flat>
        <v-avatar class="avatar" color="white">
          <v-icon color="purple">mdi-star</v-icon>
        </v-avatar>
        <div class="user-details">
          <div class="username">Amadora</div>
          <div class="level">Nível 2</div>
        </div>
      </v-card>
      <div class="card-line" v-if="index !== cards.length - 1"></div>
      <v-card v-for="card in cards" :key="card.id" class="user-card" dark flat>
        <v-avatar class="avatar" color="white">
          <v-icon color="purple">mdi-star</v-icon>
        </v-avatar>
        <div class="user-details">
          <div class="username">Profissional</div>
          <div class="level">Nível 3</div>
        </div>
      </v-card>
      <div class="card-line" v-if="index !== cards.length - 1"></div>
      <v-card v-for="card in cards" :key="card.id" class="user-card" dark flat>
        <v-avatar class="avatar" color="white">
          <v-icon color="purple">mdi-star</v-icon>
        </v-avatar>
        <div class="user-details">
          <div class="username">Estrela</div>
          <div class="level">Nível 4</div>
        </div>
      </v-card>
    </div>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      index: "",
      cards: [
        {
          id: 1,
          username: "Laís Morais",
          image: "",
          progress: 50,
          nextLevel: "Nível 2",
          nivelAtual: "Nível 1",
        },
      ],
      showDivider: true, // Defina como false se não quiser a linha divisória após o último v-card
    };
  },
};
</script>

<style>
.cards-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.user-card {
  width: 330px;
  padding: 16px;
  border-radius: 8px;
  background-color: purple;
  color: white;
  display: flex;
  align-items: center;
}

.v-application {
  background-color: #212121 !important;
}

.avatar {
  width: 80px;
  height: 80px;
}

.user-details {
  margin-left: 16px;
}

.username {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 8px;
}

.progress-bar {
  margin-bottom: 8px;
}

.level {
  font-size: 16px;
}

.card-line {
  width: 2px;
  height: 40px; /* Ajuste a altura da linha conforme necessário */
  background-color: purple;
}
</style>
