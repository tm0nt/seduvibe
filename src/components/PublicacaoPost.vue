<template>
  <v-dialog v-model="dialogpost" max-width="500px">
    <v-card>
      <v-card-title> Publicação </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="legenda" label="Legenda"></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col v-for="(item, index) in files" :key="index" cols="4">
              <v-card class="pa-2">
                <v-img :src="item.preview" v-if="item.preview"></v-img>
                <video
                  :src="item.preview"
                  v-else-if="item.type === 'video'"
                ></video>
                <v-icon color="grey" v-else>mdi-file</v-icon>
              </v-card>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-file-input
                v-model="selectedFiles"
                @change="handleFileUpload"
                multiple
                label="Adicionar mídia"
              ></v-file-input>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12">
              <v-switch v-model="showValue" label="Mostrar valor"></v-switch>
            </v-col>
          </v-row>
          <v-row v-if="showValue">
            <v-col cols="12">
              <v-text-field v-model="valor" label="Valor"></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" text @click="dialog = false">Cancelar</v-btn>
        <v-btn color="primary" @click="submitForm">Enviar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      legenda: "",
      selectedFiles: [],
      files: [],
      showValue: false,
      valor: "",
    };
  },
  methods: {
    handleFileUpload() {
      this.files = [];
      for (let i = 0; i < this.selectedFiles.length; i++) {
        const file = this.selectedFiles[i];
        const reader = new FileReader();

        reader.onload = (e) => {
          const fileType = file.type.startsWith("video/") ? "video" : "image";

          this.files.push({
            type: fileType,
            preview: e.target.result,
          });
        };

        reader.readAsDataURL(file);
      }
    },
    submitForm() {
      // Lógica para enviar a publicação
      // Incluir a manipulação dos arquivos e valores aqui
      console.log("Publicação enviada");
      this.dialog = false;
    },
  },
};
</script>
