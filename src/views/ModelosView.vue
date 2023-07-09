<template>
  <v-row>
    <v-col
      cols="12"
      sm="6"
      md="4"
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
          {{ vibe.descricao }}
        </v-card-title>
        <br />
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.custom-results-list .v-list-item {
  background-color: #212121 !important;
  border-radius: 8px;
}

.rounded {
  border-radius: 25px;
}

.custom-autocomplete .custom-results-list {
  background-color: black;
}
.v-tab.withoutupercase {
  text-transform: none !important;
}

.blurred-image {
  filter: blur(2px);
}

.v-menu__content .v-list-item {
  background-color: #262626 !important;
}

.tabs-container {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

.v-btn.withoutupercase {
  text-transform: none !important;
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
.custom-autocomplete .v-autocomplete__content {
  background-color: #262626 !important;
}

.full-width-tabs {
  width: 100%;
}

@media (min-width: 600px) {
  .full-width-tabs {
    width: unset;
  }
}
</style>
<script>
export default {
  name: "HomeView",
  data() {
    return {
      seduvibe: [
        {
          image: "",
          pic: "https://pm1.narvii.com/6649/f0104fe950ca05cc7216a0ebb0e779f62800734f_00.jpg",
          price: "R$ 465",
          descricao: "1.512.452 Assinantes",
        },
        {
          image: "",
          pic: "https://pm1.narvii.com/6649/f0104fe950ca05cc7216a0ebb0e779f62800734f_00.jpg",
          price: "R$ 465",
          descricao: "1.512.452 Assinantes",
        },
        {
          image: "",
          pic: "https://pm1.narvii.com/6649/f0104fe950ca05cc7216a0ebb0e779f62800734f_00.jpg",
          price: "R$ 465",
          descricao: "1.512.452 Assinantes",
        },
        {
          image: "",
          pic: "https://pm1.narvii.com/6649/f0104fe950ca05cc7216a0ebb0e779f62800734f_00.jpg",
          price: "R$ 465",
          descricao: "1.512.452 Assinantes",
        },
      ],
    };
  },
};
</script>
