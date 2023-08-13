<template>
  <div style="width: 300px;">
    <v-card
      width="100%"
      color="background"
      elevation="0"
      class="pa-5"
      @click="routeTo()"
    >
      <v-img :src="componentProps.character.imageRef" cover />

      <h2 class="mt-7 mb-2 text--primary text-center">{{ componentProps.character.name }}</h2>
    
      <ul class="infos">
        <li class="d-flex justify-space-between align-center mb-1">
          <h4>Рост:</h4>
          <p class="font-weight-thin">{{ componentProps.character.height }} см</p>
        </li>

        <li class="d-flex justify-space-between align-center">
          <h4>Позиция:</h4>
          <p class="font-weight-thin">{{ componentProps.character.position }}</p>
        </li>
      </ul>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const componentProps = defineProps({
	character: { type: Object as () => Character, required: true }
})

interface Character {
    id: string|number,
    imageRef: string,
    name: string,
    height: string|number,
    position: string,
}

const router = useRouter()
const routeTo = () => {
	router.push({ name: 'character', params: { id: componentProps.character.id } })
} 
</script>

<style scoped>

</style>