<template>
  <v-card :width="width" :height="height">
    <!-- <v-img :src="imageRef" aspect-ratio="16/9" cover /> -->
    <img :src="$props.imageRef" style="width: 100%; height: 100%;">
  </v-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	size: { type: String, default: 'medium' },
	imageRef: { type: String, default: 'src/assets/images/episodes/4-20.png' }
})
const width = ref('')
const height = ref('')
switch (props.size) {
case 'medium':
	width.value = '390px'
	height.value = '219px'
	break
case 'small':
	width.value = '256px'
	height.value = '144px'
	break
case 'semi-medium':
	width.value = '374px'
	height.value = '210px'
	break
}

</script>

<style scoped>

</style>