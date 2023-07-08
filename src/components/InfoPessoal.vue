<template>
  <v-container>
    <v-form @submit.prevent="salvarAlteracoes">
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="nomeCompleto"
            label="Nome completo"
            dark
            color="purple"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="3">
          <v-text-field
            v-model="cpf"
            label="CPF"
            dark
            color="purple"
            required
            @input="formatCPF"
            maxlength="14"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="telefone"
            label="Celular"
            dark
            maxlength="14"
            required
            color="purple"
            @input="formatCelular"
          ></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-select
            v-model="genero"
            :items="generoOptions"
            label="Gênero"
            color="purple"
            autocomplete="off"
            dark
            :rules="rules"
          ></v-select>
        </v-col>
        <v-col cols="3">
          <v-text-field
            v-model="dataNascimento"
            label="Data de nascimento"
            dark
            color="purple"
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
            color="purple"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4">
          <v-text-field
            v-model="cep"
            label="CEP"
            color="purple"
            dark
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="numero"
            label="Número"
            color="purple"
            dark
            required
          ></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field
            v-model="complemento"
            color="purple"
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

      <v-btn type="submit" color="purple" dark @click="salvarAlteracoes"
        >Salvar alterações</v-btn
      >
    </v-form>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nomeCompleto: "",
      dataNascimento: "",
      cpf: "",
      endereco: "",
      cep: "",
      genero: "",
      telefone: "",
      numero: "",
      complemento: "",
    };
  },
  mounted() {
    const axios = require("axios");
    const url = "https://api.seduvibe.com/";
    const token = localStorage.getItem("token");

    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios
      .get(url, config)
      .then((response) => {
        // Requisição bem-sucedida
        const data = response.data;
        this.nomeCompleto = data.users[0].name;
        this.cpf = data.users[0].cpf;
        this.dataNascimento = data.users[0].dateOfBirth;
        this.endereco = data.users[0].street;
        this.genero = data.users[0].gender;

        this.telefone = data.users[0].phone;
        this.cep = data.users[0].cep;
        this.numero = data.users[0].number;
        this.complemento = data.users[0].complement;
      })
      .catch((error) => {
        // A requisição falhou
        console.error("Falha na requisição:", error.response.status);
      });
  },
  methods: {
    formatCPF() {
      // Remove caracteres não numéricos do valor do CPF
      let cpf = this.CPF.replace(/\D/g, "");

      // Aplica a máscara do CPF (###.###.###-##)
      cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf = cpf.replace(/(\d{3})(\d{2})$/, "$1-$2");

      // Atualiza o valor do campo CPF
      this.CPF = cpf;
    },
    salvarAlteracoes() {
      const url = "https://api.seduvibe.com/change_personal_data";
      const {
        nomeCompleto,
        cpf,
        dataNascimento,
        telefone,
        endereco,
        cep,
        numero,
        complemento,
      } = this;

      const data = {
        name: nomeCompleto,
        cpf,
        dateOfBirth: dataNascimento,
        phone: telefone,
        street: endereco,
        cep,
        number: numero,
        complement: complemento,
      };

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      axios
        .post(url, JSON.stringify(data), config)
        .then((response) => {
          // Requisição bem-sucedida
          console.log(response.data);
        })
        .catch((error) => {
          // A requisição falhou
          console.error("Falha na requisição:", error.response.status);
        });
    },
    formatCelular() {
      let value = this.celular.replace(/\D/g, "");
      if (value.length > 10) {
        this.celular = `(${value.substring(0, 2)}) ${value.substring(
          2,
          7
        )}-${value.substring(7, 11)}`;
      } else {
        this.celular = value;
      }
    },
    validarIdade() {
      if (!this.dataNascimento) {
        return false;
      }

      const partesData = this.dataNascimento.split("/");
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
