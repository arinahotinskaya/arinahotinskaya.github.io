<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
  },
  spaced: {
    type: Boolean,
    default: false,
  },
  large: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <ul class="tags" :class="{ 'tags--spaced': spaced, 'tags--large': large }">
    <li v-for="item in items" :key="item.href || item.label || item" class="tags__item">
      <a v-if="item.href" :href="item.href" class="tags__link">{{ item.label }}</a>
      <template v-else>{{ item.label || item }}</template>
    </li>
  </ul>
</template>
