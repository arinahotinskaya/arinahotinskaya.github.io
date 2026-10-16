<script setup>
import { onMounted, ref } from 'vue'
import CubeIcon from './CubeIcon.vue'

defineOptions({ inheritAttrs: false })

const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  media: {
    type: String,
    default: 'image',
  },
  file: {
    type: String,
    default: '',
  },
  title: {
    type: String,
    default: '',
  },
  hint: {
    type: String,
    default: '',
  },
  icon: {
    type: Boolean,
    default: false,
  },
  tag: {
    type: String,
    default: '',
  },
  root: {
    type: String,
    default: 'figure',
  },
})

const failed = ref(false)
const ready = ref(false)
const mediaEl = ref(null)
const hasCaption = props.file || props.title || props.hint || props.icon

function onError() {
  failed.value = true
}

function onImageLoad(event) {
  if (event.target.naturalWidth === 0) failed.value = true
}

function onVideoReady() {
  ready.value = true
}

onMounted(() => {
  if (props.media === 'video' && mediaEl.value?.readyState >= 2) ready.value = true
})

defineExpose({ mediaEl })
</script>

<template>
  <component :is="root" class="shot" v-bind="$attrs">
    <img
      v-if="media === 'image' && !failed"
      ref="mediaEl"
      class="shot__image"
      :src="src"
      :alt="alt"
      @error="onError"
      @load="onImageLoad"
    >
    <video
      v-else-if="media === 'video' && !failed"
      ref="mediaEl"
      class="shot__image"
      :class="{ 'ig-ready': ready }"
      :src="src"
      autoplay
      muted
      loop
      playsinline
      :aria-label="alt"
      @error="onError"
      @loadeddata="onVideoReady"
    />
    <span v-if="tag" class="renders__tag">{{ tag }}</span>
    <slot />
    <component
      :is="root === 'figure' ? 'figcaption' : 'p'"
      v-if="hasCaption"
      class="shot__caption"
    >
      <CubeIcon v-if="icon" />
      <code v-if="file" class="shot__file">{{ file }}</code>
      <span v-if="title" class="shot__title">{{ title }}</span>
      <span v-if="hint" class="shot__hint">{{ hint }}</span>
    </component>
  </component>
</template>
