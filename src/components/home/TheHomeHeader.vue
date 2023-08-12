<template>
  <section class="header">
    <!-- <g-drive-image
      aspect-ratio="16/9"
      cover
      g-drive-link="https://drive.google.com/file/d/1Tynp2Vm9Tm0ZsE69v0db9Mb6sbuyln9K/view?usp=drive_link"
    /> -->
    <v-container class=" d-flex flex-column" style="height: 100%;">
      <div class="header__main">
        <span class="text-h4 text--primary">アニメバレーボール</span>
        <h1 class="text-h1 font-weight-black my-4 text-no-wrap">
          Anime Haikyuu!!
        </h1>
        <p class="text-h7 mb-6">
          Шоё Хината решает серьезно заняться волейболом, после того, как несколько раз посмотрел эту игру.
          Теперь он исполняет свою мечту, создав настоящую волейбольную команду.
        </p>

        <v-spacer />

        <btn-arrow title="Смотреть" @click="$router.push({ name: `episodes` })" />
      </div>

      <v-spacer />

      <div class="header__bottom d-flex align-center align-center mb-10">
        <div class="header__bottom__start d-flex justify-space-between align-start text-no-wrap">
          <div class="wrapper me-10">
            <p class="text-h7 mb- font-weight-bold">
              Рейтинг
            </p>
            <a-rating style="margin-left: -5px;" />
          </div>

          <div class="wrapper me-10">
            <p class="text-h7 mb-1 font-weight-bold">
              Жанры
            </p>
            <p class="text-body-2 text-no-wrap">
              Драма, Комедия, Спорт, Школа
            </p>
          </div>

          <div class="wrapper">
            <p class="text-h7 mb-1 font-weight-bold">
              Студия
            </p>
            <p class="text-body-2 text-no-wrap">
              Production I.G
            </p>
          </div>
        </div>

        <div class="header__bottom__end" style="margin-left: 100px;">
          <!-- <g-s-carousel
            :items="episodes"
            :item-gap="8"
            :layout="GSLayoutDefault"
            :preview-size="0"
          >
            <template #item="{ data }">
              <video-item :image-ref="data.imageRef" size="small" />
            </template>
          </g-s-carousel> -->
          <v-slide-group>
            <v-slide-group-item v-for="episode in episodes" :key="episode.id">
              <video-item :image-ref="episode.imageRef" size="small" class="mx-2" />
            </v-slide-group-item>

            <template #prev>
              <v-btn
                icon="navigate_before"
                density="compact"
                color="white"
              />
            </template>
            <template #next>
              <v-btn
                icon="navigate_next"
                density="compact"
                color="white"
              />
            </template>
          </v-slide-group>
        </div>
      </div>
    </v-container>
  </section>
</template>

<script lang="ts" setup>
// import { GSCarousel, GSLayoutDefault } from 'gitart-scroll-carousel'
import VideoItem from '@/components/cards/VideoItem.vue'

const episodes = [
	{ id: 1, season: 1, series: 3, imageRef: 'src/assets/images/home/header/1.jpg' },
	{ id: 2, season: 3, series: 12, imageRef: 'src/assets/images/home/header/3.jpg' },
	{ id: 3, season: 4, series: 10, imageRef: 'src/assets/images/home/header/2.png' },
	{ id: 4, season: 2, series: 4, imageRef: 'src/assets/images/home/header/4.jpg' },
	{ id: 5, season: 1, series: 19, imageRef: 'src/assets/images/home/header/5.jpg' },
	{ id: 6, season: 2, series: 4, imageRef: 'src/assets/images/home/header/6.png' },
	{ id: 7, season: 3, series: 9, imageRef: 'src/assets/images/home/header/7.jpg' },
	{ id: 8, season: 2, series: 3, imageRef: 'src/assets/images/home/header/8.jpg' },
]
</script>

<style lang="scss" scoped>
.header {
  height: 700px;
  background-image: linear-gradient(to right, black 0%, transparent 90%),
    // url('https://drive.google.com/uc?export=view&id=1Tynp2Vm9Tm0ZsE69v0db9Mb6sbuyln9K');
    url('@/assets/images/home/header/header_image.jpg');
  background-size: cover;

  .header__main {
    margin-top: 170px;
    width: 60%;
  }

  .header__bottom {
    .header__bottom__end {
      width: 47vw;
    }
  }
}
</style>
