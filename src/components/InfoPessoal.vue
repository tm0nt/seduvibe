<template>
  <v-container>
    <v-form @submit.prevent="salvarAlteracoes">
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="nomeCompleto"
            label="Nome completo"
            dark
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-text-field
            v-model="cpf"
            label="CPF"
            mask="###.###.###-##"
            dark
            required
          ></v-text-field>
        </v-col>
        <v-col cols="6">
          <v-text-field
            v-model="dataNascimento"
            label="Data de nascimento"
            mask="##/##/####"
            dark
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="endereco"
            label="Endereço"
            dark
            required
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-text-field
            v-model="cep"
            label="CEP"
            mask="#####-###"
            dark
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="numero"
            label="Número"
            dark
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="complemento"
            label="Complemento"
            dark
          ></v-text-field>
          <p class="caption grey--text">Opcional</p>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-alert v-if="!validarIdade()" type="error"
            >É necessário ter mais de 18 anos.</v-alert
          >
        </v-col>
      </v-row>

      <v-btn type="submit" color="purple" dark>Salvar alterações</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      nomeCompleto: "",
      dataNascimento: "",
      cpf: "",
      endereco: "",
      cep: "",
      numero: "",
      complemento: "",
    };
  },
  methods: {
    salvarAlteracoes() {
      // Lógica para salvar as alterações aqui
    },
    validarIdade() {
      const dataNascimento = this.dataNascimento;
      const partesData = dataNascimento.split("/");
      const dataCompleta = new Date(
        partesData[2],
        partesData[1] - 1,
        partesData[0]
      );
      const hoje = new Date();
      let idadeCalculada = hoje.getFullYear() - dataCompleta.getFullYear();
      const mes = hoje.getMonth() - dataCompleta.getMonth();

      if (mes < 0 || (mes === 0 && hoje.getDate() < dataCompleta.getDate())) {
        idadeCalculada--;
      }

      return idadeCalculada >= 18;
    },
  },
};
</script>
