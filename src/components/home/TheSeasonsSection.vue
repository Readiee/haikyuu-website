<template>
  <a-section title="Сезоны" btn-title="Все сезоны" btn-route-name="seasons">
    <div class="d-flex justify-space-between">
      <template v-for="season in seasons.slice(0, 4)" :key="season">
        <season-item :season="season" />
      </template>
    </div>
  </a-section>
</template>

<script setup lang="ts">
import ASection from '@/components/UI/ASection.vue'
import SeasonItem from '@/components/cards/SeasonItem.vue'

const seasons = [
	{ id: 1, imageRef: 'src/assets/images/seasons/1.png', title: 'Haikyuu!!', desc: 'Шоё Хината решает серьезно заняться волейболом, после того, как несколько раз посмотрел эту игру. Теперь он исполняет свою мечту, создав волейбольную команду.', rating: 4.8, views: '177k'},
	{ id: 2, imageRef: 'src/assets/images/seasons/2.png', title: 'Haikyuu!! 2', desc: 'Карасуна готовится к весеннему турниру. Хината и его команда отправляется в Некому на товарищеский турнир, чтобы отточить свои навыки.', rating: 4.7, views: '153k'},
	{ id: 3, imageRef: 'src/assets/images/seasons/3.png', title: 'Haikyuu!! 3', desc: 'Карасуна почти выиграла в весеннем турнире! Ребята готовятся, чтобы одолеть команду из академии Сираторидзава, в которой играет Вакатоши Ушиджима – невероятный гений.', rating: 4.6, views: '150k'},
	{ id: 4, imageRef: 'src/assets/images/seasons/4.png', title: 'Haikyuu!! To the top 2', desc: 'Яростная борьба за «вершину» среди волейбольных команд на чемпионате Японии продолжается. Хинате, Кагэяме и другим участникам волейбольного клуба Карасуно придётся столкнуться с мощными противниками и по полной прочувствовать вкус соперничества', rating: 4.5, views: '140k'},
	{ id: 4, imageRef: 'src/assets/images/seasons/4.png', title: 'Haikyuu!! To the top 2', desc: 'Яростная борьба за «вершину» среди волейбольных команд на чемпионате Японии продолжается. Хинате, Кагэяме и другим участникам волейбольного клуба Карасуно придётся столкнуться с мощными противниками и по полной прочувствовать вкус соперничества', rating: 4.5, views: '140k'},
]
</script>

<style scoped>

</style>