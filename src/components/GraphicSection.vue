<script setup>
import { roomSigns } from '@/data/portfolio'
import SectionShell from './ui/SectionShell.vue'
import ShotFrame from './ui/ShotFrame.vue'
</script>

<template>
  <SectionShell
    id="graphic"
    title-id="graphic-title"
    index="05"
    topic="Графический дизайн"
    title="Графический дизайн"
    light
  >
    <div class="split">
      <article class="split__col" aria-labelledby="poster-title">
        <p id="poster-title" class="split__text">Афиша для выступления актива ОИКС на студенческой осени.</p>
        <ShotFrame
          class="shot--poster shot--float"
          src="/images/poster-oiks.png"
          alt="Афиша для выступления актива ОИКС"
          file="images/poster-oiks.png"
          hint="Афиша для выступления актива ОИКС."
        />
      </article>
      <article class="split__col" aria-labelledby="signs-title">
        <p id="signs-title" class="split__text">
          Таблички для кабинетов активов ИАТЭ НИЯУ МИФИ: стилизация с иллюстрациями для каждого актива. Сделано 8 дизайнов табличек.
        </p>
        <div class="signs">
          <ShotFrame
            class="shot--door shot--cover"
            src="/images/sign-door.png"
            alt="Табличка на двери кабинета"
            file="images/sign-door.png"
            hint="Табличка на двери кабинета, фото в интерьере."
          />
          <div class="signs__row">
            <ShotFrame
              v-for="sign in roomSigns"
              :key="sign.src"
              class="shot--sign"
              :src="sign.src"
              :alt="sign.alt"
              :file="sign.file"
              :hint="sign.hint"
            />
          </div>
        </div>
      </article>
    </div>
  </SectionShell>
</template>
