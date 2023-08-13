<template>
  <a-section title="Галерея">
    <v-slide-group show-arrows>
      <v-slide-group-item v-for="(image, index) in props.images" :key="index">
        <image-card size="semi-medium" :image-ref="image" class="mx-4" @click="showOverlay(index)" />
      </v-slide-group-item>

      <template #prev>
        <v-btn
          icon="navigate_before"
          density="comfortable"
          color="primary"
        />
      </template>
      <template #next>
        <v-btn
          icon="navigate_next"
          density="comfortable"
          color="primary"
        />
      </template>
    </v-slide-group>    

    <!-- too slow overlay loading -->
    <v-overlay v-model="overlay" class="overlay" scrim="black" scroll-strategy="block">
      <v-card class="galleryCarousel" width="1000px" height="562px">
        <v-carousel v-model="currentImage" style="height: 100%;">
          <template v-for="(image, index) in props.images" :key="index">
            <v-carousel-item :src="image" cover />
          </template>
        </v-carousel>
      </v-card>
    </v-overlay>

    <!-- more faster solution -->
    <!-- <div v-show="overlay" class="overlay" @click="overlay = false">   
      <v-container @click.stop>
        <v-card>
          <v-carousel v-model="currentImage" style="height: 100%;">
            <template v-for="(image, index) in images" :key="index">
              <v-carousel-item :src="image" cover />
            </template>
          </v-carousel>
        </v-card>
      </v-container>
    </div> -->
  </a-section>
</template>

<script setup lang="ts">
import ASection from '@/components/UI/ASection.vue'
import ImageCard from '@/components/UI/ImageCard.vue'
import { ref } from 'vue'

const props = defineProps({
	images: { type: Array<string>, required: true }
})

const currentImage = ref(1)
const overlay = ref(false)

const showOverlay = (clickedImageIndex) => {
	overlay.value = true
	currentImage.value = clickedImageIndex

	// left&right arrow events for sliding
	document.addEventListener('keydown', function(e) {
		if (e.key === 'ArrowLeft') {
			const leftArrowElement: HTMLElement = document.getElementsByClassName('v-window__left')[0] as HTMLElement
			leftArrowElement.click()
			return false
		}
		if (e.key === 'ArrowRight') {
			const rightArrowElement: HTMLElement = document.getElementsByClassName('v-window__right')[0] as HTMLElement
			rightArrowElement.click()
			return false
		}
	})
}

</script>

<style lang="scss" scoped>
</style>