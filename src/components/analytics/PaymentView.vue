<template>
  <v-row>
    <v-col cols="12" sm="6">
      <v-toolbar flat color="transparent" class="mt-3">
        <v-toolbar-title class="white--text">Relatório</v-toolbar-title>
        <v-chip color="purple" text-color="white" class="ml-2 mb-2">2</v-chip>
      </v-toolbar>
      <v-row>
        <v-col cols="12" sm="6">
          <v-card color="#242426" class="rounded-lg mx-2 pa-2" flat>
            <span class="caption grey--text mt-n6">Cartão de crédito</span
            ><br />
            <h6 class="white--text mt-4">Aprovado</h6>

            <h4 class="white--text">R$ 767.50</h4>
            <h6 class="white--text mt-4">Ver tudo</h6>
          </v-card>
        </v-col>
        <v-col cols="12" sm="6">
          <v-card color="#242426" class="rounded-lg mx-2 pa-2" flat>
            <span class="caption grey--text mt-n6">Pix</span><br />
            <h6 class="white--text mt-4">Recebido</h6>

            <h4 class="white--text">R$ 328.85</h4>
            <h6 class="white--text mt-4">Ver tudo</h6>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
    <v-col cols="12" sm="6">
      <v-toolbar flat color="transparent" class="mt-3">
        <v-toolbar-title class="white--text">Últimas vendas</v-toolbar-title>
        <v-chip color="purple" text-color="white" class="ml-2">12</v-chip>
      </v-toolbar>
      <v-card color="#242426" class="rounded-lg mr-2" flat>
        <h5 class="white--text ml-3">Usuário</h5>
        <v-list class="mt-n2" color="transparent" dense>
          <v-list-item
            v-for="experience in experiences"
            :key="experience.title"
          >
            <v-list-item-avatar>
              <v-img :src="experience.img" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title
                v-text="experience.title"
                class="white--text"
              ></v-list-item-title>
              <v-list-item-subtitle
                v-text="experience.subtitle"
                class="grey--text"
              ></v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <h5 class="white--text">{{ experience.price }}</h5>
            </v-list-item-action>
          </v-list-item>
          <h6 class="white--text mt-4 ml-3">Ver tudo</h6>
        </v-list>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    console.log(this.pageTitle);
    return {
      experiences: [
        {
          img: "",
          subtitle: "1 mês de serviço",
          title: "AdrianoSilva13",
          price: "+R$ 49.59",
        },
        {
          img: "",
          subtitle: "6 meses de serviço",
          title: "MarioAndrade",
          price: "+R$ 106.58",
        },
      ],
    };
  },
};
</script>
<style>
.col {
  width: 100%;
}

.custom-table {
  margin-top: 20px;
}

.custom-table td,
.custom-table th {
  text-align: left;
}

.custom-table th {
  background-color: #6b1f96;
  color: #ffffff;
}

.custom-table td,
.custom-table th {
  padding: 8px;
}

@media only screen and (max-width: 600px) {
  .custom-table {
    overflow-x: auto;
  }
}
</style>
