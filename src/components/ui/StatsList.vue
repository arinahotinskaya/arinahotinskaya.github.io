<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
})
</script>

<template>
  <ul class="stats">
    <li v-for="item in items" :key="item.value" class="stats__item">
      <strong class="stats__value">{{ item.value }}</strong>
      <span class="stats__label">{{ item.label }}</span>
    </li>
  </ul>
</template>
