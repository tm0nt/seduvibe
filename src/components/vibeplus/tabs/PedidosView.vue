<template>
  <v-data-table
    :headers="headers"
    :items="orders"
    :items-per-page="5"
    class="elevation-1"
  >
    <template item.actions="{ item }">
      <v-btn-toggle>
        <v-btn
          small
          color="green"
          @click="acceptOrder(item)"
          v-if="item.status === 'Pending'"
        >
          Aceitar
        </v-btn>
        <v-btn
          small
          color="red"
          @click="rejectOrder(item)"
          v-if="item.status === 'Pending'"
        >
          Recusar
        </v-btn>
        <v-btn
          small
          color="orange"
          @click="updateOrderStatus(item, 'In Progress')"
          v-if="item.status === 'Accepted'"
        >
          Em Progresso
        </v-btn>
        <v-btn
          small
          color="blue"
          @click="updateOrderStatus(item, 'Delivered')"
          v-if="item.status === 'In Progress'"
        >
          Entregue
        </v-btn>
      </v-btn-toggle>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "ID", value: "id" },
        { text: "Cliente", value: "client" },
        { text: "Status", value: "status" },
        { text: "Ações", value: "actions", sortable: false },
      ],
      orders: [
        { id: 1, client: "João", status: "Pending" },
        { id: 2, client: "Maria", status: "Pending" },
        { id: 3, client: "Pedro", status: "Accepted" },
        { id: 4, client: "Ana", status: "In Progress" },
      ],
    };
  },
  methods: {
    acceptOrder(order) {
      // Lógica para aceitar o pedido
      order.status = "Accepted";
    },
    rejectOrder(order) {
      // Lógica para recusar o pedido
      order.status = "Rejected";
    },
    updateOrderStatus(order, status) {
      // Lógica para atualizar o status do pedido
      order.status = status;
    },
  },
};
</script>
