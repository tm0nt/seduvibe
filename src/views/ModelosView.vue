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
    >
      <v-card class="mx-auto my-12 rounded-xl" color="#151515">
        <v-img width="100%" :src="vibe.image" tile class="blurred-image">
        </v-img>
        <div class="d-flex align-center justify-center" style="height: 100%">
          <v-avatar
            color="white"
            class="circle-avatar"
            size="100"
            style="position: absolute"
          >
            <v-img :src="vibe.pic" contain class="circle-image"></v-img>
          </v-avatar>
        </div>

        <v-toolbar color="transparent" class="mt-n7" flat>
          <v-avatar color="black" rounded class="mr-2" purple>
            <div class="three">
              <div class="four">
                <span class="white--text caption">{{ vibe.price }}</span>
              </div>
              <div class="five">
                <span
                  class="white--text caption mdi mdi-lock-open-variant"
                ></span>
              </div>
            </div>
          </v-avatar>
        </v-toolbar>
        <v-card-title class="text-subtitle-1 text-center ml-3 mt-5 white--text">
          Taiane Martins&nbsp;
          <v-icon small color="purple">mdi-check-decagram</v-icon>
        </v-card-title>
        <v-card-title
          class="grey--text text-grey-purple-1 text-center ml-3 caption font-italic"
        >
          {{ vibe.descricao }} </v-card-title
        ><br />
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
          descricao: "1.512.452 Assinantes",
        },
        {
          image:
            "https://istoe.com.br/wp-content/uploads/2022/04/jade-picon-1.jpg",
          pic: "https://pm1.narvii.com/6649/f0104fe950ca05cc7216a0ebb0e779f62800734f_00.jpg",
          price: "R$ 465",
          descricao: "1.512.452 Assinantes",
        },
        {
          image:
            "https://istoe.com.br/wp-content/uploads/2022/04/jade-picon-1.jpg",
          pic: "https://pm1.narvii.com/6649/f0104fe950ca05cc7216a0ebb0e779f62800734f_00.jpg",
          price: "R$ 465",
          descricao: "1.512.452 Assinantes",
        },
        {
          image:
            "https://eql.com.br/wp-content/uploads/2022/02/Abre-JadePicon-BigBrotherBrasil-160222-Divulgacao3-1024x576.jpg",
          pic: "https://pm1.narvii.com/6649/f0104fe950ca05cc7216a0ebb0e779f62800734f_00.jpg",
          price: "R$ 465",
          descricao: "1.512.452 Assinantes",
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
