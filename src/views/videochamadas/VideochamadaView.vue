<template>
  <v-row>
    <v-col
      cols="12"
      xs="12"
      sm="8"
      md="3"
      lg="3"
      v-for="(vibe, i) in seduvibe"
      :key="i"
      ><v-app-bar color="rgb(0,0,0,0)" flat></v-app-bar>
      <v-card class="mx-auto mt-5 rounded-xl" color="#151515">
        <div class="d-flex align-center justify-center" style="height: 100%">
          <v-avatar
            color="white"
            class="circle-avatar"
            size="120"
            style="position: absolute"
          >
            <v-img :src="vibe.pic" contain class="circle-image"></v-img>
          </v-avatar>
        </div>
        <v-card-title class="text-subtitle-1 text-center ml-3 mt-5 white--text">
        </v-card-title>
        <v-card-text
          style="text-align: center"
          class="white--text mt-10 overline"
        >
          {{ vibe.nome }}
        </v-card-text>
        <v-card-text class="white--text caption"
          ><v-icon color="white" size="15">mdi-clock</v-icon>&nbsp;4,5
          horas</v-card-text
        >
        <v-card color="green">
          <v-card-text>
            <span style="font-size: 12px"> On-line&nbsp; </span>
          </v-card-text>
        </v-card>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
export default {
  name: "HomeView",
  data() {
    return {
      seduvibe: [
        {
          image:
            "https://istoe.com.br/wp-content/uploads/2022/04/jade-picon-1.jpg",
          pic: "https://pm1.narvii.com/6649/f0104fe950ca05cc7216a0ebb0e779f62800734f_00.jpg",
          price: "R$ 465",
          nome: "Taiane Martins",
        },
        {
          image:
            "https://istoe.com.br/wp-content/uploads/2022/04/jade-picon-1.jpg",
          pic: "https://pm1.narvii.com/6649/f0104fe950ca05cc7216a0ebb0e779f62800734f_00.jpg",
          price: "R$ 465",
          nome: "Taiane Martins",
        },
        {
          image:
            "https://istoe.com.br/wp-content/uploads/2022/04/jade-picon-1.jpg",
          pic: "https://pm1.narvii.com/6649/f0104fe950ca05cc7216a0ebb0e779f62800734f_00.jpg",
          price: "R$ 465",
          nome: "Taiane Martins",
        },
        {
          image:
            "https://eql.com.br/wp-content/uploads/2022/02/Abre-JadePicon-BigBrotherBrasil-160222-Divulgacao3-1024x576.jpg",
          pic: "https://pm1.narvii.com/6649/f0104fe950ca05cc7216a0ebb0e779f62800734f_00.jpg",
          price: "R$ 465",
          nome: "Taiane Martins",
        },
      ],
    };
  },
};
</script>
<style scoped>
.rounded {
  border-radius: 25px;
}

.blurred-image {
  filter: blur(2px);
}

.three {
  width: 50px;
  height: 50px;
}
.circle-avatar {
  border-radius: 50%;
  overflow: hidden;
  border: 4px solid purple !important;
}
.circle-image {
  border-radius: 50%;
}
.four {
  width: 50px;
  height: 25px;
  background: purple;
}

.five {
  width: 50px;
  height: 25px;
  background: rgb(87, 1, 87);
}
</style>
