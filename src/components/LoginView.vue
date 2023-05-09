<template>
  <v-container class="no-glutters black-background" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="10">
        <v-card class="elevation-6 mt-10" color="#212121">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <v-img
                      src="../assets/logo.png"
                      alt="Plataforma exclusiva para criadores de conteúdo adulto "
                      width="250"
                      style="max-width: 100%; margin: auto; max-height: 100%"
                    ></v-img>
                    <h6 class="text-center grey--text">
                      Exclusividade e liberdade
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-text-field
                          label="Email, usuário ou telefone"
                          color="purple"
                          autocomplete="false"
                          class="meu-vtf-personalizado mt-16"
                          dark
                        />
                        <v-text-field
                          label="Senha"
                          color="purple"
                          autocomplete="false"
                          type="password"
                          dark
                        />
                        <v-row>
                          <v-col cols="12" sm="6">
                            <v-checkbox
                              label="Lembre-se"
                              class="mt-n1"
                              color="purple"
                              dark
                            >
                            </v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="6">
                            <span class="caption purple--text"
                              >Esqueceu a senha?</span
                            >
                          </v-col>
                        </v-row>
                        <v-btn color="purple" dark block tile>ENTRAR</v-btn>

                        <h5 class="text-center grey--text mt-4 mb-3">Ou</h5>
                        <div
                          class="d-flex justify-space-between align-center mx-10 mb-16"
                        >
                          <v-btn depressed outlined color="grey">
                            <v-icon color="purple">fab fa-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="purple">fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="purple">fab fa-twitter</v-icon>
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="6" class="purple rounded-bl-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Não possui uma conta?</h3>
                      <h6 class="text-center">
                        Qual tipo de conta você precisa?
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn
                        style="margin-bottom: 4px"
                        tile
                        outlined
                        dark
                        @click="step++"
                        >CRIADOR(A)</v-btn
                      >
                    </div>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step++">FÃ</v-btn>
                    </div>
                  </div>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row>
                <v-col cols="12" md="6" class="purple rounded-br-xl">
                  <div style="text-align: center; padding: 180px 0">
                    <v-card-text class="white--text">
                      <h3 class="text-center">Faça o login em sua conta</h3>
                      <h6 class="text-center">
                        Entre em sua conta e continue produzindo :)
                      </h6>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn tile outlined dark @click="step--">ENTRAR</v-btn>
                    </div>
                  </div>
                </v-col>

                <v-col cols="12" md="6">
                  <v-card-text class="mt-12">
                    <h4 class="text-center white--text">Crie uma conta</h4>
                    <h6 class="text-center grey--text">
                      Vamos lá criar sua primeira conta para ter sua experiência
                      exclusiva com a <i><b>seduvibe</b></i
                      >. <br />
                    </h6>
                    <v-row align="center" justify="center">
                      <v-col cols="12" sm="8">
                        <v-row>
                          <v-col cols="12" sm="12">
                            <v-text-field
                              label="Seu nome"
                              color="purple"
                              autocomplete="false"
                              class="mt-4"
                              dark
                            />
                            <v-text-field
                              label="Usuário"
                              color="purple"
                              autocomplete="false"
                              dark
                            />
                          </v-col>
                        </v-row>
                        <v-text-field
                          label="Email"
                          color="purple"
                          autocomplete="false"
                          dark
                        />
                        <v-text-field
                          label="Senha"
                          color="purple"
                          autocomplete="false"
                          type="password"
                          dark
                        />
                        <v-row>
                          <v-col cols="12" sm="7">
                            <v-checkbox
                              label="Aceito os termos"
                              class="mt-n1"
                              color="purple"
                              dark
                            >
                            </v-checkbox>
                          </v-col>
                          <v-col cols="12" sm="5">
                            <span class="caption purple--text ml-n4"
                              >Termos e serviços</span
                            >
                          </v-col>
                        </v-row>
                        <v-btn color="purple" dark block tile
                          >Criar conta</v-btn
                        >

                        <h5 class="text-center grey--text mt-4 mb-3">
                          Ou crie uma conta com
                        </h5>
                        <div
                          class="d-flex justify-space-between align-center mx-10 mb-11"
                        >
                          <v-btn depressed outlined color="grey">
                            <v-icon color="red">fab fa-google</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="purple">fab fa-facebook-f</v-icon>
                          </v-btn>
                          <v-btn depressed outlined color="grey">
                            <v-icon color="light-blue lighten-3"
                              >fab fa-twitter</v-icon
                            >
                          </v-btn>
                        </div>
                      </v-col>
                    </v-row>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    step: 1,
  }),
  props: {
    source: String,
  },
};
</script>
<style scoped>
.v-application .rounded-bl-xl {
  border-bottom-left-radius: 300px !important;
}

.v-application .rounded-br-xl {
  border-bottom-right-radius: 300px !important;
}

.black-background {
  background-color: #252525;
  height: 100vh;
  width: 100%;
}
</style>
