<template>
  <div style="width: 270px;">
    <v-card width="inherit" height="380px" @click="routeTo()">
      <v-img :src="componentProps.team.imageRef" cover />
    </v-card>
    <h3 class="mt-4">{{ componentProps.team.title }}</h3>
    <btn-arrow-plain />
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import BtnArrowPlain from '@/components/UI/buttons/BtnArrowPlain.vue'

const componentProps = defineProps({
	team: { type: Object as () => Team, required: true }
})

interface Team {
    id: string|number,
    imageRef: string,
    title: string
}

const router = useRouter()
const routeTo = () => {
	router.push({ name: 'team', params: { id: componentProps.team.id } })
} 
</script>

<style scoped>

</style>