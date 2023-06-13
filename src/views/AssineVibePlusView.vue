<template>
  <div>
    <v-app>
      <v-content>
        <v-container fluid>
          <v-row justify="center">
            <v-col
              cols="12"
              sm="6"
              md="4"
              class="d-flex align-center justify-center flex-column"
            >
              <v-img
                src="../assets/logo.png"
                alt="Assine VibePlus e tenha um pacote exclusivo"
                width="200"
              ></v-img>
              <p
                class="text-center grey--text caption"
                style="margin-top: 10px"
              >
                Exclusividade e liberdade
              </p>
            </v-col>
          </v-row>

          <v-row>
            <div
              class="section2 full-width d-flex flex-column align-center justify-center"
            >
              <h1 class="display-1 white--text text-center mt-5 pb-5 headline">
                Faça sua assinatura agora mesmo!
              </h1>

              <p class="grey--text caption text-center">
                Descubra o poder da nossa assinatura premium e conquiste o
                máximo de vantagens na plataforma!
              </p>
            </div>
          </v-row>

          <v-row justify="center">
            <v-col cols="12" md="4">
              <v-card class="transparent align-center mt-5" flat>
                <v-card-title class="plan-title purple--text text-center">
                  CreatorPlus+
                </v-card-title>
                <v-card-text class="plan-price">
                  <span class="currency purple--text">R$</span>
                  <span class="amount purple--text">87,90</span>
                  <span class="period grey--text">/mês</span>
                </v-card-text>
                <p class="grey--text caption mt-1 text-center">
                  Os pagamentos são feitos de maneira recorrente.
                </p>
                <v-list class="plan-features">
                  <v-divider color="purple" class="my-1"></v-divider>

                  <v-list-item class="white--text">
                    <v-list-item-icon>
                      <v-icon color="purple">mdi-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      Sua conta sempre em destaque
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider color="purple" class="my-1"></v-divider>

                  <v-list-item class="white--text">
                    <v-list-item-icon>
                      <v-icon color="purple">mdi-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      Agendamento de postagens
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider color="purple" class="my-1"></v-divider>

                  <v-list-item class="white--text">
                    <v-list-item-icon>
                      <v-icon color="purple">mdi-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                      8% taxa de venda
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider color="purple" class="my-1"></v-divider>

                  <v-list-item class="white--text">
                    <v-list-item-icon>
                      <v-icon color="purple">mdi-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content> 2% por saque </v-list-item-content>
                  </v-list-item>
                  <v-divider color="purple" class="my-1"></v-divider>

                  <v-list-item class="white--text">
                    <v-list-item-icon>
                      <v-icon color="purple">mdi-check</v-icon>
                    </v-list-item-icon>
                    <v-list-item-content> Suporte 24hrs </v-list-item-content>
                  </v-list-item>
                  <v-divider color="purple" class="my-1"></v-divider>
                </v-list>
                <v-card-actions>
                  <v-btn color="purple" class="white--text plan-button">
                    ASSINAR PLANO
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import anime from "animejs";

export default {
  mounted() {
    this.startPulseAnimation();
  },
  methods: {
    startPulseAnimation() {
      anime({
        targets: ".plan-button",
        scale: [1, 1.2],
        duration: 3000,
        direction: "alternate",
        loop: true,
      });
    },
  },
};
</script>

<style>
.price-plans {
  margin-top: 40px;
}

.transparent {
  background-color: transparent;
}

.plan-title {
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  padding-top: 20px;
}

.plan-price {
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  padding-bottom: 20px;
}

.currency {
  font-size: 20px;
}

.headline {
  font-size: 68px; /* Tamanho padrão para telas grandes */
}

/* Estilo para telas menores (celulares) */
@media only screen and (max-width: 600px) {
  .headline {
    font-size: 32px !important; /* Tamanho menor para celulares */
  }
}

.amount {
  font-size: 40px;
}

.period {
  font-size: 20px;
}

.plan-features {
  margin-top: 20px;
  background-color: transparent !important;
}

.plan-button {
  width: 100%;
}

.section1 {
  background-color: #212121;
  height: 100px;
}

.section2 {
  background-color: purple !important;
  min-height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.plan-button {
  animation: pulseAnimation 1s infinite;
}

.full-width {
  width: 100%;
}

@keyframes pulseAnimation {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

.p-text {
  font-size: 16px; /* Tamanho padrão para telas grandes */
}

/* Estilo para telas menores (celulares) */
@media only screen and (max-width: 600px) {
  .p-text {
    font-size: 14px !important; /* Tamanho menor para celulares */
  }
}
</style>
