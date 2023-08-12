<template>
  <a-section title="Волейбольные команды" btn-title="Все команды" btn-route-name="teams">
    <div class="d-flex justify-space-between">
      <template v-for="team in teams.slice(0, 4)" :key="team.id">
        <team-item :team="team" />
      </template>
    </div>
  </a-section>
</template>

<script setup lang="ts">
import ASection from '@/components/UI/ASection.vue'
import TeamItem from '@/components/cards/TeamItem.vue'

const teams = [
	{ id: 1, imageRef: 'src/assets/images/teams/karasuno_high.png', title: 'Старшая Карасуно' },
	{ id: 2, imageRef: 'src/assets/images/teams/nekoma_high.png', title: 'Старшая Некома' },
	{ id: 3, imageRef: 'src/assets/images/teams/aoba_johsai_high.png', title: 'Старшая Аоба Джосай' },
	{ id: 4, imageRef: 'src/assets/images/teams/fukurodani_academy.png', title: 'Академия Фукуродани' },
]
</script>

<style scoped>

</style>