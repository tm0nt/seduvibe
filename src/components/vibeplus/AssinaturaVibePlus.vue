<template>
  <v-row align="center" justify="center" class="fill-height">
    <v-col cols="12" class="text-center">
      <h2 class="white--text text--center mt-2 mb-5">
        Pedidos
        <v-chip color="purple" text-color="white" class="ml-2">{{
          quantidadePedidos
        }}</v-chip>
      </h2>
      <v-card class="chat-card" dark>
        <v-card-text>
          <v-text-field
            v-model="descricao"
            color="purple"
            label="Descrição"
            required
          ></v-text-field>
          <v-text-field
            v-model="mimo"
            label="Mimo"
            color="purple"
            prefix="R$"
            suffix="BRL"
          ></v-text-field>
          <v-btn color="purple" dark @click="enviarPedido">Enviar</v-btn>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <h3>Pedidos</h3>
          <v-data-table
            :headers="headers"
            :items="pedidos"
            :items-per-page="3"
            :hide-default-footer="true"
            class="elevation-0"
          >
            <template v-slot:prev-icon="{ on }">
              <v-btn icon v-on="on"><v-icon>mdi-chevron-left</v-icon></v-btn>
            </template>
            <template v-slot:next-icon="{ on }">
              <v-btn icon v-on="on"><v-icon>mdi-chevron-right</v-icon></v-btn>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="12" class="text-center">
      <h2 class="white--text text--center mt-2 mb-5">
        Vídeochamadas
        <v-chip color="purple" text-color="white" class="ml-2">1</v-chip>
      </h2>
      <p class="caption grey--text">Nenhum agendamento cadastrado...</p>
      <v-btn class="white--text" color="purple">Agendar</v-btn>
    </v-col>
  </v-row>
</template>

<style>
.chat-card {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
}
</style>

<script>
export default {
  data() {
    return {
      descricao: "",
      mimo: "",
      pedidos: [],
      quantidadePedidos: 3,

      headers: [
        { text: "Descrição", value: "descricao" },
        { text: "Mimo", value: "mimo" },
        { text: "Status", value: "status" },
      ],
    };
  },
  methods: {
    enviarPedido() {
      const pedido = {
        descricao: this.descricao,
        mimo: this.mimo,
        status: "Aguardando...",
      };
      this.pedidos.unshift(pedido);
      this.descricao = "";
      this.mimo = "";

      // Atualiza o valor do v-chip dos pedidos
      this.quantidadePedidos -= 1;
    },
  },
};
</script>
