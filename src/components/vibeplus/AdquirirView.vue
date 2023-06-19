<template>
  <v-container>
    <v-row align="center" justify="center">
      <v-col
        cols="12"
        md="4"
        class="mt-5"
        v-for="packages in imageVideoPackagess"
        :key="packages.id"
      >
        <v-card dark flat>
          <v-card-title>{{ packages.name }}</v-card-title>
          <v-card-text>
            <p>{{ packages.description }}</p>
            <p>Preço: R$ {{ packages.price }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="purple" dark @click="purchasePackages(packages)"
              >Comprar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    =
    <v-row center="align" justify="center">
      <v-col
        cols="12"
        md="4"
        v-for="packages in videoCallPackagess"
        :key="packages.id"
      >
        <v-card flat dark>
          <v-card-title>{{ packages.name }}</v-card-title>
          <v-card-text>
            <p>{{ packages.description }}</p>
            <p>Preço: R$ {{ packages.price }}</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="purple" dark @click="purchasePackages(packages)"
              >Comprar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      imageVideoPackagess: [
        {
          id: 1,
          name: "Pacote de Pedido de Imagem",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 99.99,
        },
        {
          id: 2,
          name: "Pacote de Pedido de Vídeo",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 149.99,
        },
        // Adicione mais pacotes de pedido de imagem/vídeo aqui
      ],
      videoCallPackagess: [
        {
          id: 1,
          name: "Pacote de Vídeochamada 15/min",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 49.99,
        },
        {
          id: 2,
          name: "Pacote de Vídeochamada 30/min",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          price: 79.99,
        },
        // Adicione mais pacotes de vídeochamada aqui
      ],
    };
  },
  methods: {
    purchasePackages(selectedPackages) {
      // Logic to process the packages purchase
      console.log("Packages purchased:", selectedPackages);
    },
  },
};
</script>
