<template>
  <v-btn append-icon="arrow_forward" color="primary" size="large">
    <slot>{{ props.title }}</slot>
  </v-btn>
</template>

<script setup lang="ts">
const props = defineProps({
	title: { type: String, default: 'Перейти'}
})
</script>

<style scoped>

</style>