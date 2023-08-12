<template>
  <v-container class="my-16bruh" style="margin-top: 100px; margin-bottom: 100px;">
    <div class="d-flex justify-space-between align-center mb-8">
      <slot name="headerStart">
        <h1>
          {{ props.title }}
        </h1>
      </slot>
      <slot name="headerEnd">
        <btn-arrow
          :title="props.btnTitle" 
          @click="routeTo()"
        />
      </slot>
    </div>
    <slot>
      Default Slot
    </slot>
  </v-container>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps({
	title: { type: String, default: 'Название блока'},
	btnTitle: { type: String, default: 'Перейти'},
	btnRouteName: { type: String, default: 'home' },
	btnRouteUrl: { type: String, default: '' },
}
)

const router = useRouter()
const routeTo = () => {
	if(props.btnRouteUrl == '') {
		return router.push({ name: props.btnRouteName })
	}
	return window.location.replace(props.btnRouteUrl)
}
</script>

<style scoped>
  h1 {
    font-size: 2.5rem;
  }
</style>