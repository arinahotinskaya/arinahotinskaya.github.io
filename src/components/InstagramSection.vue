<script setup>
import { ref } from 'vue'
import { igPosts, igReels, igReelStats, igStats } from '@/data/portfolio'
import SectionShell from './ui/SectionShell.vue'
import ShotFrame from './ui/ShotFrame.vue'
import StatsList from './ui/StatsList.vue'

const reelShots = ref([])
const sounding = ref(null)

function setReel(element, index) {
  if (element) reelShots.value[index] = element
}

function toggleSound(index) {
  const current = reelShots.value[index]?.mediaEl
  if (!current) return

  const turnOn = current.muted

  reelShots.value.forEach((shot) => {
    if (shot?.mediaEl) shot.mediaEl.muted = true
  })

  sounding.value = null
  if (!turnOn) return

  current.muted = false
  current.play().catch(() => {})
  sounding.value = index
}
</script>

<template>
  <SectionShell
    id="instagram"
    title-id="instagram-title"
    index="08"
    topic="Контент"
    title="Instagram 7bit"
  >
    <template #aside>
      <div class="section__copy">
        <p class="section__lead">
          С апреля 2026 веду Instagram команды 7bit и монтирую рилсы в <span class="accent-stack">Final Cut Pro</span>. Четыре года аккаунт никто не вёл: в ленте было 17 публикаций, последние посты вышли в апреле и мае 2022 года. На скриншотах статистики – февраль: публикаций не было, подписчиков было 191, сейчас их 242. На первых публикациях охват был 500 просмотров, сейчас в среднем близится к 1&nbsp;000. Вернула регулярный ритм и закрыла историями пропущенные события 2018–2026. Участники команды снова отмечают аккаунт в течение года.
        </p>
        <a class="ig-link" href="https://www.instagram.com/7bit_official/" target="_blank" rel="noopener noreferrer">instagram.com/7bit_official ↗</a>
      </div>
    </template>

    <StatsList :items="igStats" />

    <div class="ig-grid">
      <ShotFrame
        v-for="post in igPosts"
        :key="post.src"
        :src="post.src"
        :alt="post.alt"
        :file="post.file"
        :title="post.title"
        :hint="post.hint"
      />
      <div class="ig-grid__reels">
        <ShotFrame
          v-for="(reel, index) in igReels"
          :key="reel.src"
          :ref="(element) => setReel(element, index)"
          class="ig-cell--reel"
          media="video"
          :src="reel.src"
          :alt="reel.alt"
          :file="reel.file"
          :title="reel.title"
          :hint="reel.hint"
        >
          <button
            class="ig-sound"
            type="button"
            :aria-pressed="sounding === index"
            :aria-label="sounding === index ? 'Выключить звук' : 'Включить звук'"
            @click="toggleSound(index)"
          >
            <svg class="ig-sound__off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">
              <path d="M4 10v4h3l4 3V7L7 10H4z" />
              <path d="M16 10l4 4M20 10l-4 4" />
            </svg>
            <svg class="ig-sound__on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">
              <path d="M4 10v4h3l4 3V7L7 10H4z" />
              <path d="M16 9.5a3.5 3.5 0 010 5" />
              <path d="M18.5 7.5a6.5 6.5 0 010 9" />
            </svg>
            <span class="ig-sound__label">{{ sounding === index ? 'Звук вкл' : 'Звук' }}</span>
          </button>
        </ShotFrame>
        <ShotFrame
          v-for="stat in igReelStats"
          :key="stat.src"
          class="ig-cell--wide"
          :src="stat.src"
          :alt="stat.alt"
          :file="stat.file"
          :title="stat.title"
          :hint="stat.hint"
        />
      </div>
    </div>
  </SectionShell>
</template>
