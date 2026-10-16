<script setup>
import { skills, toc } from '@/data/portfolio'
import TagsList from './ui/TagsList.vue'
</script>

<template>
  <header>
    <div class="container hero__inner">
      <div class="hero__meta">
        <p class="hero__brand">Портфолио</p>
        <p class="hero__years">Работы · 2022 – 2026</p>
      </div>
      <div class="hero__layout">
        <div class="hero__intro">
          <h1 class="hero__title">Хотинская<br>Арина</h1>
          <TagsList :items="skills" />
          <nav aria-label="Содержание">
            <p class="toc__title">Содержание</p>
            <ol class="toc__list">
              <li v-for="item in toc" :key="item.href" class="toc__item">
                <a class="toc__link" :href="item.href">
                  <span class="toc__num">{{ item.num }}</span>{{ item.label }}
                </a>
              </li>
            </ol>
          </nav>
        </div>
        <figure class="hero__portrait">
          <img class="hero__portrait-image" src="/images/header-photo.png" alt="Хотинская Арина">
        </figure>
      </div>
    </div>
  </header>
</template>
