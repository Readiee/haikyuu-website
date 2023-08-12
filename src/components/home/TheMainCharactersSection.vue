<template>
  <a-section title="Главные персонажи" btn-title="Все персонажи" btn-route-name="characters">
    <div class="d-flex justify-space-between">
      <template v-for="character in characters" :key="character.id">
        <character-item :character="character" />
      </template>
    </div>
  </a-section>
</template>

<script setup lang="ts">
import ASection from '@/components/UI/ASection.vue'
import CharacterItem from '@/components/cards/CharacterItem.vue'

const characters = [
	{ id: 1, imageRef: '/src/assets/images/characters/hinata.png',  name: 'Шоё Хината', height: '162.8', position: 'Центр. блокирующий'},
	{ id: 2, imageRef: '/src/assets/images/characters/nishiya.png',  name: 'Юу Нишиноя', height: '160.5', position: 'Либеро'},
	{ id: 3, imageRef: '/src/assets/images/characters/tobio.png',  name: 'Тобио Кагеяма', height: '181.9', position: 'Связующий'},
	{ id: 4, imageRef: '/src/assets/images/characters/tanaka.png',  name: 'Рюноске Танака', height: '178.2', position: 'Доигровщик'}
]
</script>

<style scoped>

</style>