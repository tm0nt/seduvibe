<!-- eslint-disable vue/valid-v-slot -->
<template>
  <v-data-table
    dark
    :headers="headers"
    :items="payments"
    :rows-per-page-items="[]"
    class="elevation-0 mt-5 hide-rows-per-page"
  >
    <template #top>
      <v-toolbar flat color="purple">
        <v-toolbar-title class="white--text"
          >Histórico de Pagamentos</v-toolbar-title
        >
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <template #item.status="{ item }">
      <v-chip :color="getStatusColor(item.status)" dark>{{
        item.status
      }}</v-chip>
    </template>
    <template #item.actions="{ item }">
      <v-icon small class="mr-2" @click="editPayment(item)">mdi-pencil</v-icon>
      <v-icon small @click="deletePayment(item)">mdi-delete</v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      headers: [
        { text: "Data", value: "date" },
        { text: "Valor", value: "amount" },
        { text: "Status", value: "status" },
        { text: "Ações", value: "actions", sortable: false },
      ],
      payments: [
        { date: "2023-06-01", amount: 50.0, status: "Pago" },
        { date: "2023-05-01", amount: 50.0, status: "Pago" },
        { date: "2023-04-01", amount: 50.0, status: "Pago" },
        { date: "2023-03-01", amount: 50.0, status: "Pago" },
        { date: "2023-02-01", amount: 50.0, status: "Pago" },
        { date: "2023-01-01", amount: 50.0, status: "Pago" },
      ],
    };
  },
  methods: {
    getStatusColor(status) {
      if (status === "Pago") {
        return "purple";
      } else if (status === "Pendente") {
        return "warning";
      } else if (status === "Atrasado") {
        return "error";
      }
      return "";
    },
  },
};
</script>
