<template>
  <div style="width: min-content;">
    <image-card :image-ref="props.blog.imageRef" @click="routeTo()" />
    
    <div class="caption__level">
      <h3 
        class="hover my-3 text-clamp-2" 
        @click="routeTo()"
      >
        {{ props.blog.title }}
      </h3>
      <p class="text-medium-emphasis text-caption  text-clamp-3">
        {{ props.blog.desc }}
      </p>
    </div>

    
    <div class="caption__level mt-1 align-center d-flex justify-space-between">
      <btn-arrow-plain />
      <div class="d-flex align-center">
        {{ props.blog.views }}
        <v-icon class="ms-2">
          visibility
        </v-icon>
      </div>
    </div> 
  </div>
</template>
  
<script setup lang="ts">
import { toRefs } from 'vue'
import { useRouter } from 'vue-router'
import BtnArrowPlain from '../UI/buttons/BtnArrowPlain.vue'
const props = defineProps({
	blog: { type: Object as () => Blog, required: true }
})
  
const { blog } = toRefs(props)
  
  interface Blog {
      id: string|number,
      imageRef: string,
      title: string,
      desc: string,
      views: string|number
  }
const router = useRouter()
const routeTo = () => {
	router.push({ name: 'blog', params: { id: blog.value.id } })
}
</script>
  
<style scoped></style>