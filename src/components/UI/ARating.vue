<template>
  <v-rating
    v-model="rating"
    color="yellow-darken-2"
    density="compact"
    readonly
    half-increments
    style="margin-left: -5px;"
  />
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
const props = defineProps({
	rate: { type: Number, default: 4.7}
})
const { rate } = toRefs(props)
const rating = rate.value
</script>

<style scoped>

</style>