<script setup>
import { palette } from '@/data/portfolio'
import SectionShell from './ui/SectionShell.vue'
import ShotFrame from './ui/ShotFrame.vue'
</script>

<template>
  <SectionShell
    id="redesign"
    title-id="redesign-title"
    index="02"
    topic="Редизайн"
    title="Новый образ команды 7bit"
  >
    <template #aside>
      <p class="section__lead">
        Провела полный редизайн визуального стиля команды: разработала новый логотип и обновила концепцию оформления мерча. Результат – более целостный и узнаваемый образ.
      </p>
    </template>

    <div class="gallery">
      <ShotFrame
        class="shot--look"
        src="/images/merch/tshirt-old-logo.png"
        alt="Футболка со старым логотипом 7bit"
      />
      <ShotFrame
        class="shot--look"
        src="/images/merch/tshirt-new-logo.png"
        alt="Футболка с новым логотипом 7bit"
      />
      <ul class="palette palette--look" aria-label="Цветовая палитра">
        <li v-for="swatch in palette" :key="swatch.hex" class="swatch" :class="`swatch--${swatch.tone}`">
          <span class="swatch__name">{{ swatch.name }}</span>
          <span class="swatch__hex">{{ swatch.hex }}</span>
        </li>
      </ul>
    </div>

    <div class="compare">
      <article class="compare__card compare__card--before">
        <h3 class="compare__label">Было</h3>
        <p class="compare__text">Фирменный стиль только в чёрном цвете. Мерч – футболки и толстовки.</p>
      </article>
      <article class="compare__card compare__card--now">
        <h3 class="compare__label">Стало</h3>
        <p class="compare__text">
          Новый логотип, обновлённый стиль, палитра с салатовым для худи и новые категории мерча. Каждый год под тему слёта выходит лимитированный мерч – обычно футболки, но не только они. Купить его могут лишь те, кто был на слёте в этот год.
        </p>
      </article>
    </div>
  </SectionShell>
</template>
