<template>
  <v-container style="margin-top: 30px; margin-bottom: 100px;">
    <div class="text-center mb-16">
      <slot name="title">
        <h1 class="text--primary">{{ props.title }}</h1>
      </slot>
      <slot name="caption">
        <p v-if="props.caption">
          <span class="text--primary">❞</span>
          {{ props.caption }}
          <span class="text--primary">❝</span>
        </p>
      </slot>
    </div>
    <slot>
      Default Slot
    </slot>
  </v-container>
</template>

<script setup lang="ts">

const props = defineProps({
	title: { type: String, default: 'Название блока'},
	caption: { type: String, default: ''},
}
)

</script>

<style scoped>
  h1 {
    font-size: 2.5rem;
  }
</style>