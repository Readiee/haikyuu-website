<template>
  <div style="width: 270px" @click="routeTo()">
    <v-card width="100%" height="380px" @click="routeTo()">
      <v-img :src="componentProps.season.imageRef" cover />
        
      <!-- <v-overlay
          :model-value="isHovering"
          contained
          class="d-flex justify-center align-center"
          scrim="primary-lighten-1"
          style="cursor: pointer"
        >
          <v-btn density="comfortable" icon="play_arrow" />
        </v-overlay> -->
    </v-card>
    

    <h3 class="mt-4 hover" @click="routeTo()">
      {{ componentProps.season.title }}
    </h3>
    <p class="text-medium-emphasis text-caption my-2 text-clamp-3">
      {{ componentProps.season.desc }}
    </p>
    
    <div class="d-flex justify-space-between align-end">
      <div class="d-flex flex-column">
        Рейтинг
        <a-rating :rate="componentProps.season.rating" />
      </div>
      <div class="d-flex align-center">
        {{ componentProps.season.views }}
        <v-icon class="ms-2">
          visibility
        </v-icon>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const componentProps = defineProps({
	season: { type: Object as () => Season, required: true }
})

interface Season {
    id: string|number,
    imageRef: string,
    title: string,
    desc: string|number,
    rating: number,
    views: string|number
}

const router = useRouter()
const routeTo = () => {
	router.push({ name: 'season', params: { id: componentProps.season.id } })
} 
</script>

<style scoped>

</style>