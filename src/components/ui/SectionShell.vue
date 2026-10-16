<script setup>
defineProps({
  id: {
    type: String,
    required: true,
  },
  titleId: {
    type: String,
    required: true,
  },
  index: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  light: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <section
    :id="id"
    class="section section__anchor"
    :class="{ 'section--light': light }"
    :aria-labelledby="titleId"
  >
    <div class="container">
      <header>
        <div class="section__kicker">
          <span class="section__index">{{ index }}</span>
          <span class="section__line" aria-hidden="true" />
          <span class="section__topic">{{ topic }}</span>
        </div>
        <div class="section__intro">
          <h2 :id="titleId" class="section__title">{{ title }}</h2>
          <slot name="aside" />
        </div>
      </header>
      <slot />
    </div>
  </section>
</template>
