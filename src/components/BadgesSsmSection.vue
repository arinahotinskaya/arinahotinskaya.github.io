<script setup>
import { stilyagiBadges } from '@/data/portfolio'
import BadgeRow from './ui/BadgeRow.vue'
import SectionShell from './ui/SectionShell.vue'
</script>

<template>
  <SectionShell
    id="badges-2023"
    title-id="badges-2023-title"
    index="03"
    topic="Бейджи"
    title="Бейджи ССМ 2023"
    light
  >
    <template #aside>
      <p class="section__lead">
        Разработала серию бейджей для команды 7bit на Слёт студенческой молодёжи в стиле
        стиляг. За основу взяла единый макет, а для каждого участника отдельно
        прорабатывала изображение в <span class="accent-stack">Photoshop</span>: дорисовывала детали одежды, аксессуары и другие элементы,
        подходящие под его образ. В результате каждый бейдж получился персональным, при этом вся
        серия сохранила единую визуальную стилистику.
      </p>
    </template>

    <BadgeRow :items="stilyagiBadges" variant="stilyagi" />
  </SectionShell>
</template>
