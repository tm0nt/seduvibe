<template>
  <v-sheet
    class="mx-auto sheet-no-border"
    elevation="0"
    max-width="800"
    color="#212121"
    dark
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      active-class="purple"
      show-arrows
    >
      <v-slide-item v-for="n in 15" :key="n" v-slot="{ active, toggle }">
        <v-card
          :class="['ma-4', { purple: active }]"
          height="200"
          width="100"
          @click="toggle"
          flat
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon v-if="active" color="white" size="48">
                mdi-close-circle-outline
              </v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data() {
    return {
      model: null,
    };
  },
};
</script>

<style scoped>
.purple {
  background-color: purple !important;
}

.sheet-no-border {
  border: none !important;
}

.v-slide-group__prev-btn,
.v-slide-group__next-btn {
  color: purple !important;
}
</style>
