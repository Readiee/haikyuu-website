<template>
  <v-btn
    color="primary"
    size="large"
    :disabled="!isValid"
  >
    <slot>Отправить</slot>
  </v-btn>
</template>

<script setup lang="ts">
import { useIsFormValid } from 'vee-validate'
const isValid = useIsFormValid()
</script>

<style scoped>

</style>