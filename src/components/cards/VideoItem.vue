<template>
  <div>
    <v-hover v-slot="{ isHovering, props }">
      <v-card v-bind="props">
        <image-card :image-ref="cardProps.imageRef" :size="cardProps.size" />
        
        <v-overlay
          :model-value="isHovering"
          contained
          class="d-flex justify-center align-center"
          scrim="primary-lighten-1"
          style="cursor: pointer"
        >
          <v-btn density="comfortable" icon="play_arrow" />
        </v-overlay>
      </v-card>
    </v-hover>
  </div>
</template>

<script setup lang="ts">
import ImageCard from '@/components/UI/ImageCard.vue'

const cardProps = defineProps({
	size: { type: String, default: 'medium' },
	imageRef: { type: String, required: true }
})
</script>

<style scoped>
</style>