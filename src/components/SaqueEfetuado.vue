<template>
  <v-sheet
    elevation="12"
    max-width="600"
    rounded="lg"
    width="100%"
    dark
    class="pa-4 text-center mx-auto"
  >
    <v-icon
      class="mb-5"
      color="purple"
      icon="mdi-check-circle"
      size="112"
    ></v-icon>

    <h2 class="text-h5 mb-6">Seu saque foi feito com sucesso!</h2>

    <p class="mb-4 text-medium-emphasis text-body-2">
      Seu saque foi efetuado e está em fase de processamento e deverá debitar em
      sua conta em até 3 dias. Veja seu
      <a href="#" class="text-decoration-none text-info">Histórico de saque</a>
      para mais informações

      <br />

      Obrigado!
    </p>

    <v-divider class="mb-4"></v-divider>

    <div class="text-end">
      <v-btn
        class="text-none"
        color="purple"
        rounded
        dark
        variant="flat"
        width="90"
      >
        Ok
      </v-btn>
    </div>
  </v-sheet>
</template>
