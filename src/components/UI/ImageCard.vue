<template>
  <v-card :width="width" :height="height">
    <!-- <v-img :src="imageRef" aspect-ratio="16/9" cover /> -->
    <img :src="$props.imageRef" style="width: 100%; height: 100%;">
  </v-card>
</template>

<script setup lang="ts">
const props = defineProps({
	size: { type: String, default: 'medium' },
	imageRef: { type: String, default: 'src/assets/images/episodes/4-20.png' }
})
let width = ''
let height = ''
switch (props.size) {
case 'medium':
	width = '390px'
	height = '219px'
	break
case 'small':
	width = '256px'
	height = '144px'
	break
}
</script>

<style scoped>

</style>