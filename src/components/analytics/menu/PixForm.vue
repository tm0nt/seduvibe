<template>
  <v-container>
    <v-text-field label="Nome completo" />
    <v-text-field
      label="CPF"
      v-model="cpf"
      :value="formattedCPF"
      readonly
      disabled
    />
    <v-text-field
      label="Valor"
      v-model="valor"
      v-on:keyup="formatarValor"
      :rules="[requiredRule, valorRule]"
    />

    <v-btn color="purple">Enviar</v-btn>
    <v-alert
      v-if="cpf === ''"
      type="error"
      color="#940020"
      dismissible
      class="mt-4"
    >
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
      cpf: "11122233344",
      valor: "",
      requiredRule: [(v) => !!v || "Valor é obrigatório"],
      valorRule: [
        (v) =>
          !v ||
          parseFloat(v.replace(/\D/g, "")) <= 1000000 ||
          "O valor deve ser menor que R$ 1.000.000,00",
      ],
    };
  },
  computed: {
    formattedCPF() {
      return this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    },
  },
  methods: {
    formatarValor() {
      let val = this.valor.replace(/\D/g, "");
      val = (parseFloat(val) / 100).toFixed(2).replace(".", ",");
      val = "R$ " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      this.valor = val;
    },
  },
};
</script>

<style>
.custom-router-link {
  color: #151515 !important;
  text-decoration: none;
}

.custom-router-link .custom-router-link-text {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
</style>
<template>
  <v-container>
    <v-text-field label="Nome completo" />
    <v-text-field
      label="CPF"
      v-model="cpf"
      :value="formattedCPF"
      readonly
      disabled
    />
    <v-text-field
      label="Valor"
      v-model="valor"
      v-on:input="formatarValor"
      :rules="valorRules"
      :error-messages="valorErrors"
    />

    <v-btn color="purple">Enviar</v-btn>
    <v-alert
      v-if="cpf === ''"
      type="error"
      color="#940020"
      dismissible
      class="mt-4"
    >
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
      cpf: "11122233344",
      valor: "",
      valorRules: [
        (v) => !!v || "Valor é obrigatório",
        (v) =>
          parseFloat(v.replace(/\D/g, "")) <= 1000000 ||
          "O valor deve ser menor que R$ 1.000.000,00",
      ],
    };
  },
  computed: {
    formattedCPF() {
      return this.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    },
    valorErrors() {
      return this.valorRules
        .filter((rule) => !rule(this.valor))
        .map((rule) => rule(this.valor));
    },
  },
  methods: {
    formatarValor() {
      let val = this.valor.replace(/\D/g, "");
      val = (parseFloat(val) / 100).toFixed(2).replace(".", ",");
      val = "R$ " + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      this.valor = val;
    },
  },
};
</script>

<style>
.custom-router-link {
  color: #151515 !important;
  text-decoration: none;
}

.custom-router-link .custom-router-link-text {
  color: inherit;
  text-decoration: none;
  cursor: pointer;
}
</style>
