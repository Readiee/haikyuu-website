<template>
  <a-section title="Блоги" btn-title="Все блоги" btn-route-name="blogs">
    <v-row no-gutters class="justify-space-between">
      <template v-for="blog in blogs" :key="blog">
        <blog-item :blog="blog" />
      </template>
    </v-row>
  </a-section>
</template>

<script setup lang="ts">
import ASection from '@/components/UI/ASection.vue'
import BlogItem from '@/components/cards/BlogItem.vue'

const blogs = [
	{ id: 420, imageRef: '/src/assets/images/blogs/1.png', title: 'Топ-3 матча Карасуно в Haikyuu!!', desc: 'Матч старшей Карасуно против старшей Некомы ожидается в 5-ом сезоне аниме. Персонажи, которых мы видели в предыдущих 4-х сезонах, готовятся к весеннему волейбольному турниру.', views: '15k'},
	{ id: 419, imageRef: '/src/assets/images/blogs/2.png', title: 'Топ-5 сокомандников в Haikyuu!!', desc: 'В волейболе коммуникация - ключ к победе. Во время матча игроки должны обдумывать все свои действия, чтобы выиграть. Но в волейболе не все можно сделать одному, поэтому о своих действиях... ', views: '21k'},
	{ id: 418, imageRef: '/src/assets/images/blogs/3.png', title: 'Haikyuu!! — лучшее спортивное аниме?', desc: 'Haikyuu!! - это аниме, посвященное волейболу, с четырьмя сезонами, в которых каждый персонаж аниме развивается. Сюжет фокусируется на событиях после окончания Шоё Хинатой средней школы.', views: '35k'}
]
</script>
<style scoped>

</style>