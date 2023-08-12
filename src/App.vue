<template>
  <v-app id="inspire">
    <v-app-bar
      class="nav"
      height="70"
      elevation="0"
    >
      <v-container class="align-center d-flex">
        <!-- <g-drive-image
          g-drive-link="https://drive.google.com/file/d/1SfAFvx8_auvzMONxm8ggN3b2s_IAx4kC/view?usp=drive_link"
          max-width="120"
          min-width="120"
          style="cursor: pointer;"
          @click="router.push({ name: 'home' })"
        /> -->

        <v-img
          src="@/assets/images/logo_haikyuu.svg"
          max-width="120"
          min-width="120"
          style="cursor: pointer;"
          @click="router.push({ name: 'home' })"
        />
        
        <v-spacer />
        
        <template v-for="route in routes" :key="route.to">
          <router-link :to="route.to" class="mx-2">
            <v-btn class="font-weight-medium">
              {{ route.title }}
            </v-btn>
          </router-link>
        </template>

        <v-spacer />
        
        <v-icon
          icon="search"
          size="x-large"
          class="hover me-7"
          style="cursor: pointer;"
        />
        <v-icon
          icon="notifications"
          size="x-large"
          class="hover"
          style="cursor: pointer;"
        />
      </v-container>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = [
	{ title: 'Главная', to: { name: 'home' } },
	{ title: 'Серии', to: { name: 'episodes' } },
	{ title: 'Персонажи', to: { name: 'characters' } },
	{ title: 'Вики', to: { name: 'wiki' } },
	{ title: 'Мерч', to: { name: 'merch' } },
	{ title: 'Блоги', to: { name: 'blogs' } },
]
</script>

<style lang="scss">
$color-primary: #FF9900;
$box-shadow: 0px 0px 45px 10px rgba(255, 219, 165, 0.30);


body {
  font-family: 'Rubik', sans-serif;
  background-color: #1e2027;

  a {
    text-decoration: none;
    color: white
  }
}

.v-container {
  width: 1320px !important;
  max-width: 1320px !important;
  padding: 0 !important;
}

.router-link-active,
.router-link-exact-active,
a:hover, .hover:hover {
  color: $color-primary;
  cursor: pointer;
  transition: 0.3s;
}

.router-link-active,
.router-link-exact-active {
  border-bottom: 1px solid $color-primary;
}

.text--primary {
  color: $color-primary
}
// GSCarousel Component
// .gsc {
//   .gsl-default__indicator {
//    display: none !important;
//   }
//   .gsc-arrow {
//     background-color: $color-primary;
//   }
// } 

.absolute-centered {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
}

.text-clamp-1 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.text-clamp-2 {
  @extend .text-clamp-1;
  -webkit-line-clamp: 2;
}
.text-clamp-3 {
  @extend .text-clamp-1;
  -webkit-line-clamp: 3;
}

// Yandex browser images UI disabling
img {
  pointer-events: none;
}

.overlay {
  position: fixed;
  z-index: 2000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overscroll-behavior: contain;

}

</style>