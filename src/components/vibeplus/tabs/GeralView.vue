<template>
  <v-container>
    <v-card dark>
      <v-card-title class="overline"> Valores da assinatura</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="3">
            <v-switch
              v-model="monthly"
              @change="saveSwitchState('monthly')"
              color="purple"
              label="Apenas mensal"
              dark
            ></v-switch>
            <v-text-field
              v-if="monthly"
              v-model="monthlyPrice"
              label="Mensal"
              prefix="R$"
              suffix="BRL"
              dark
              color="purple"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
              v-model="quarterly"
              @change="saveSwitchState('quarterly')"
              color="purple"
              label="Trimestral"
              dark
            ></v-switch>
            <v-text-field
              v-if="quarterly"
              v-model="quarterlyPrice"
              label="Trimestral"
              prefix="R$"
              suffix="BRL"
              color="purple"
              dark
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
              v-model="semiannual"
              @change="saveSwitchState('semiannual')"
              color="purple"
              label="Semestral"
              dark
            ></v-switch>
            <v-text-field
              v-if="semiannual"
              v-model="semiannualPrice"
              label="Semestral"
              prefix="R$"
              suffix="BRL"
              dark
              color="purple"
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="3">
            <v-switch
              v-model="annual"
              @change="saveSwitchState('annual')"
              color="purple"
              dark
              label="Anual"
            ></v-switch>
            <v-text-field
              v-if="annual"
              v-model="annualPrice"
              label="Anual"
              prefix="R$"
              suffix="BRL"
              dark
              color="purple"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-card-text>
      <v-btn class="mb-4 ml-4" small color="purple" dark>Atualizar</v-btn>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      monthly: false,
      semiannual: false,
      quarterly: false,
      annual: false,
      monthlyPrice: null,
      semiannualPrice: null,
      quarterlyPrice: null,
      annualPrice: null,
    };
  },
  mounted() {
    this.loadSwitchState("monthly");
    this.loadSwitchState("quarterly");
    this.loadSwitchState("semiannual");
    this.loadSwitchState("annual");
  },
  methods: {
    saveSwitchState(key) {
      localStorage.setItem(key, this[key]);
    },
    loadSwitchState(key) {
      const value = localStorage.getItem(key);
      if (value !== null) {
        this[key] = value === "true";
        this.updateInputVisibility(key);
      }
    },
    updateInputVisibility(key) {
      if (key === "monthly") {
        this.monthlyPrice = this.monthly ? "" : null;
      } else if (key === "quarterly") {
        this.quarterlyPrice = this.quarterly ? "" : null;
      } else if (key === "semiannual") {
        this.semiannualPrice = this.semiannual ? "" : null;
      } else if (key === "annual") {
        this.annualPrice = this.annual ? "" : null;
      }
    },
  },
};
</script>
