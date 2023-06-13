<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <div>
      <v-row class="d-flex mt-6">
        <v-col cols="12" sm6>
          <v-card class="rounded-lg mt-n3 pb-1 transparent" flat>
            <v-toolbar flat color="transparent">
              <v-toolbar-title class="white--text mt-n2"
                >Seu cartão</v-toolbar-title
              >
            </v-toolbar>
            <v-card color="#303030" class="rounded-lg mx-2 pa-1 mt-n3" flat>
              <v-toolbar flat color="transparent">
                <v-toolbar-title class="grey--text caption">
                  Mastercard
                </v-toolbar-title>
                <v-spacer></v-spacer>
                <v-icon color="purple" class="icon"
                  >fab fa-cc-mastercard</v-icon
                >
              </v-toolbar>
              <span class="grey--text mt-3 ml-4 caption">RAFAEL F SANTOS</span>
              <v-card-text class="pt-0 mt-4">
                <span class="white--text font-weight-light"
                  >**** **** **** 6774</span
                >
              </v-card-text>
              <v-btn color="purple" class="ml-1 mb-2" @click="toggleInputs"
                ><v-icon color="white" size="18">
                  {{ showInputs ? "close" : "fa-regular fa-pen-to-square" }}
                </v-icon></v-btn
              >
            </v-card>
            <v-row v-if="showInputs" class="mt-4">
              <v-col
                cols="12"
                sm="6"
                md="3"
                v-for="(input, index) in inputs"
                :key="index"
              >
                <v-text-field
                  v-model="input.value"
                  :label="input.label"
                  color="purple"
                  outlined
                  dark
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="mt-2">
                <v-btn color="purple" dark @click="saveInputs">Salvar</v-btn>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
        <v-col cols="12" sm6>
          <v-card dark color="#353535" class="rounded-lg mx-2 pa-1 mt-n3" flat>
            <v-toolbar flat color="transparent">
              <v-toolbar-title class="white--text">Histórico</v-toolbar-title>
              <v-chip color="purple" text-color="white" class="ml-2">12</v-chip>
            </v-toolbar>
            <h5 class="white--text ml-2">Experiências recentes</h5>
            <v-list class="mt-n2 rounded-lg mx-2" color="transparent" dense>
              <v-list-item
                v-for="experience in experiences"
                :key="experience.title"
              >
                <v-list-item-avatar>
                  <v-img :src="experience.img" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title
                    v-text="experience.title"
                    class="white--text"
                  ></v-list-item-title>
                  <v-list-item-subtitle
                    v-text="experience.subtitle"
                    class="grey--text"
                  ></v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-action>
                  <h5 class="white--text">{{ experience.price }}</h5>
                </v-list-item-action>
              </v-list-item>
              <v-btn
                class="white--text"
                color="purple"
                @click="expandExperiences"
                >Ver tudo</v-btn
              >
            </v-list>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <v-dialog v-model="dialogVisible" max-width="800" dark>
      <v-card>
        <v-card-title>
          <h5 class="white--text">Histórico de compras</h5>
        </v-card-title>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="expandedExperiences"
            :footer-props="{
              itemsPerPageText: 'Compras por página:',
            }"
          >
            <template #item="{ item }">
              <tr>
                <td><v-img :src="item.img"></v-img></td>
                <td>{{ item.title }}</td>
                <td>{{ item.subtitle }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.ultimopag }}</td>
              </tr>
            </template>
            <template #no-data>
              <p>Nenhum dado disponível</p>
            </template>
          </v-data-table>
        </v-card-text>
        <v-card-actions>
          <v-btn color="purple" text @click="dialogVisible = false">
            Fechar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      showInputs: false,
      dialogVisible: false,

      expandedExperiences: [],
      isDialogVisible: false,
      headers: [
        { text: "", value: "img" },
        { text: "Modelo", value: "title" },
        { text: "Tipo de assinatura", value: "subtitle" },
        { text: "Preço", value: "price" },
        { text: "Último pagamento", value: "ultimopag" },
      ],
      inputs: [
        { value: "", label: "Nome do titular" },
        { value: "", label: "Número do cartão" },
        { value: "", label: "Vencimento" },
        { value: "", label: "Código de segurança" },
      ],

      experiences: [
        {
          img: "spotify.png",
          subtitle: "Mensal",
          title: "Larissa Manoela",
          price: "-$49.59",
        },
        {
          img: "netflix.png",
          subtitle: "Anual",
          title: "Emme White",
          price: "-$106.58",
        },
      ],
    };
  },
  methods: {
    toggleInputs() {
      this.showInputs = !this.showInputs;
    },
    expandExperiences() {
      this.expandedExperiences = [...this.experiences];
      this.dialogVisible = true;
    },
  },
};
</script>

<style>
body,
html {
  background-color: #212121;
}
</style>
