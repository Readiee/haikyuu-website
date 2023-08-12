<template>
  <a-section title="Новые серии" btn-title="Все серии" btn-route-name="episodes">
    <v-row no-gutters class="justify-space-between">
      <template v-for="episode in episodes" :key="episode.id">
        <episode-item :episode="episode" />
      </template>
    </v-row>
  </a-section>
</template>

<script setup lang="ts">
import ASection from '@/components/UI/ASection.vue'
import EpisodeItem from '@/components/cards/EpisodeItem.vue'

const episodes = [
	{ id: 420, season: '4', series: '20', imageRef: '/src/assets/images/episodes/4-20.png', date: '30 июля, 2022', views: '32k'},
	{ id: 419, season: '4', series: '19', imageRef: '/src/assets/images/episodes/4-19.png', date: '23 июля, 2022', views: '27k'},
	{ id: 418, season: '4', series: '18', imageRef: '/src/assets/images/episodes/4-18.png', date: '23 июля, 2022', views: '28k'},
]
</script>

<style scoped>

</style>