<script setup>
import { reactive } from 'vue'

defineProps({
  items: {
    type: Array,
    required: true,
  },
  variant: {
    type: String,
    required: true,
  },
})

const hidden = reactive({})
</script>

<template>
  <ul class="badges" :class="`badges--${variant}`">
    <li v-for="item in items" :key="item.src" class="badges__item">
      <img
        v-if="!hidden[item.src]"
        class="badges__image"
        :src="item.src"
        :alt="item.alt"
        @error="hidden[item.src] = true"
      >
    </li>
  </ul>
</template>
