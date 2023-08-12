<template>
  <div>
    <video-item size="medium" :image-ref="props.episode.imageRef" @click="routeTo()" />
 
    <div class="caption d-flex justify-space-between align-start mt-3">
      <div class="caption__start">
        <h3 class="hover" @click="routeTo()">{{ props.episode.season }} cезон, {{ props.episode.series }} серия</h3>
        <p class="text-medium-emphasis">
          {{ props.episode.date }}
        </p>
      </div>

      <div class="caption__end align-center d-flex">
        {{ props.episode.views }}
        <v-icon class="ms-2">
          visibility
        </v-icon>
      </div> 
    </div>
  </div>
</template>

<script setup lang="ts">
import VideoItem from '@/components/cards/VideoItem.vue'
import { toRefs } from 'vue'
import { useRouter } from 'vue-router'
const props = defineProps({
	episode: { type: Object as () => Episode, required: true }
})

const { episode } = toRefs(props)

const views = String(episode.value.views).substring(0,2) + 'k'

interface Episode {
    id: string|number,
    season: string|number,
    series: string|number,
    imageRef: string,
    date: string,
    views: string|number
}
const router = useRouter()
const routeTo = () => {
	router.push({ name: 'episode', params: { id: episode.value.id } })
}
</script>

<style scoped>

</style>