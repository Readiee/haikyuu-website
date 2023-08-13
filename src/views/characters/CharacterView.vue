<template>
  <the-character-view-header :character="character" />
  <the-character-gallery-section :images="character.gallery" />
</template>

<script lang="ts" setup>
import TheCharacterViewHeader from '@/components/character/TheCharacterViewHeader.vue'
import TheCharacterGallerySection from '@/components/character/TheCharacterGallerySection.vue'
import { getCharacter } from '@/api/characters.api'
import { useRoute } from 'vue-router'
import { onBeforeMount, ref } from 'vue'

const route = useRoute()
const character = ref()

onBeforeMount(async () => {
	try {
		const response = await getCharacter(route.params.id)
		character.value = response.data
		console.log(character.value)
	} catch (err) {
		console.log(err)
	}
})


</script>
