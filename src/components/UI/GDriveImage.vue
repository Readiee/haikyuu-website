<template>
  <v-img :src="displayRef" />
</template>

<script setup lang="ts">
import { toRefs } from 'vue'
import { getDisplayRef } from '@/hooks/gdrive/getDisplayRef'

const props = defineProps({
	gDriveLink: { type: String, required: true }
})
const { gDriveLink } = toRefs(props)
const displayRef = getDisplayRef(gDriveLink.value)
</script>

<style scoped></style>