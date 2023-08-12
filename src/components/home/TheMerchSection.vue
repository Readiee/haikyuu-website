<template>
  <a-section title="Мерч" btn-title="Другие товары" btn-route-url="https://haikyuu.store/">
    <div class="content d-flex justify-space-between">
      <div class="content__start font-weight-light">
        <p>
          В магазине товаров Haikyuu все, что мы представляем, связано с нашей задачей удовлетворить огромное количество любителей Haikyuu!!, которые не могут найти подходящее место для покупки лицензионного товара широкого ассортимента. Магазин поддерживают создатели сериала.
        </p>

        <p class="mt-3">
          Вдохновение и восторг — это главное, что мы хотим подарить поклонникам Haikyuu!!. Чтобы достичь этого, мы делаем это максимально удобным для таких фанатов и сообществ, всегда обеспечивая высший уровень обслуживания. Политика компания ориентирована на клиента, каждый в нашей команде отсносится к клиентам с максимальным уважением и старается предоставлять им услуги высочайшего качества, которые они заслуживают.
        </p>
        
        <a href="https://haikyuu.store/">
          <btn-arrow class="mt-6">Купить</btn-arrow>
        </a>
      </div>
      
      <v-img
        src="src/assets/images/home/merch.png"
        width="40%"
        max-height="500px"
        class="ms-16"
      />
    </div>
  </a-section>
</template>

<script setup lang="ts">
import ASection from '@/components/UI/ASection.vue'
</script>
<style scoped>

</style>