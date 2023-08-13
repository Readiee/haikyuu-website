<template>
  <c-section :title="props.character.name" :caption="props.character.quote">
    <v-container class="d-flex">
      <div style=" flex: 0 0 450px">
        <v-img :src="props.character.imageRef" style="margin-top: -40px;" />
      </div>

      <ul class="infos" style="margin-left: 180px">
        <li v-for="info in props.character.infos" :key="info.title" class="info mb-4 d-flex font-weight-light">
          <p class="text--primary font-weight-regular me-5" style="width: 150px;">{{ info.title }}</p>

          <ul v-if="info.value.constructor == Array">
            <p v-for="(item, index) in info.value" :key="index">
              <span v-if="item.constructor == Object" class="text--primary hover" style="cursor: pointer;" @click="routeTo(info.title, item.id)">{{ item.title }}</span>
              <span v-else>{{ item }}</span>
            </p>
          </ul>

          <p v-else>{{ info.value }}</p>
        </li>
      </ul>
    </v-container>
  </c-section>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import CSection from '@/components/UI/CSection.vue'

const props = defineProps({
	character: { type: Object, required: true }
})

const router = useRouter()

const routeTo = (title, itemId) => {
	let routeName = '' 

	switch (title) {
	case 'Команда':
		routeName = 'team'
		break
	case 'Еще что-то':
		routeName = 'something'
		break
	}

	router.push({ name: routeName, params: { id: itemId }})
}
</script>

<style lang="scss" scoped>

</style>