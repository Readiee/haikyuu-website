<template>
  <v-container class="my-16bruh d-flex align-center" style="margin-top: 80px; margin-bottom: 80px;">
    <div class="start">
      <slot>
        <h1 class="mb-6">
          {{ props.title }}
        </h1>
        <template v-for="( desc, index ) in props.descs" :key="index">
          <p class="mb-3 font-weight-light">
            {{ desc }}
          </p>
        </template>
      </slot>
    </div>
    
    <v-img
      :src="props.imageRef"
      width="45%"
      max-height="500px"
      class="ms-16"
    />
  </v-container>
</template>

<script setup lang="ts">
const props = defineProps({
	title: { type: String, default: 'Title'},
	descs: { type: Array<String>, default: ['hello'] },
	imageRef: { type: String, default: 'src/assets/images/home/about_anime.png'}
})
</script>

<style scoped>
  h1 {
    font-size: 2.5rem;
  }
</style>