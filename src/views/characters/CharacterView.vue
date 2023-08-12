<template>
  <c-section :title="character.name" :caption="character.quote">
    <v-container class="d-flex">
      <div style=" flex: 0 0 450px">
        <v-img :src="character.imageRef" style="margin-top: -40px;" />
      </div>

      <ul class="infos" style="margin-left: 180px">
        <li v-for="info in character.infos" :key="info.title" class="info mb-4 d-flex font-weight-light">
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

<script lang="ts" setup>
import CSection from '@/components/UI/CSection.vue'
import { getCharacter } from '@/api/characters.api'
import { useRoute, useRouter } from 'vue-router'
import { onBeforeMount, ref } from 'vue'

const route = useRoute()
const router = useRouter()
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
