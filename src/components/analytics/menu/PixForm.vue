<template>
  <v-container>
    <v-text-field label="Nome completo" />
    <v-text-field
      label="CPF"
      v-model="cpf"
      value="111.222.333-44"
      readonly
      disabled
    />
    <v-text-field
      label="Valor"
      v-model="valor"
      v-on:keyup="formatarValor"
      :rules="[
        valorRule,
        (v) => {
          if (!v) {
            return 'Valor é obrigatório';
          } else if (parseFloat(v.replace(/\D/g, '')) > 1000000) {
            return 'O valor deve ser menor que R$ 1.000.000,00';
          } else {
            return true;
          }
        },
      ]"
    />

    <v-btn color="purple">Enviar</v-btn>
    <v-alert v-if="cpf === ''" type="error" dismissible class="mt-4">
      Antes de pedir um saque é necessário cadastrar seu CPF nas configurações
      do perfil ou
      <router-link to="/config" class="custom-router-link"
        >clique aqui</router-link
      >
      para cadastrar.
    </v-alert>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      cpf: "",
      valor: "",
      valorRule: [(v) => !!v || "Valor é obrigatório"],
    };
  },
  methods: {
    formatarValor() {
      let val = this.valor.replace(/\D/g, "");
      val = (val / 100).toFixed(2).replace(".", ",");
      val = "R$ " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      this.valor = val;
    },
  },
};
</script>

<style>
.custom-router-link {
  color: black !important;
  text-decoration: none;
}

.custom-router-link .custom-router-link-text {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
</style>
