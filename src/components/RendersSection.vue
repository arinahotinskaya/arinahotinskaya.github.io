<script setup>
import { carShots, furniture } from '@/data/portfolio'
import SectionShell from './ui/SectionShell.vue'
import ShotFrame from './ui/ShotFrame.vue'
</script>

<template>
  <SectionShell
    id="renders"
    title-id="renders-title"
    index="07"
    topic="3D"
    title="3D-графика"
    light
  >
    <template #aside>
      <p class="section__lead">
        Создаю 3D-модели в <span class="accent-stack">Blender</span>, прорабатывая их до цельного визуального результата: моделирую объекты, настраиваю материалы, освещение и сцену, а также создаю анимацию.
      </p>
    </template>

    <div class="renders">
      <div>
        <div class="renders__head">
          <p class="section__label">Мебель</p>
        </div>
        <div class="renders__row renders__row--furniture">
          <ShotFrame
            v-for="item in furniture"
            :key="item.src"
            class="shot--render"
            :src="item.src"
            :alt="item.alt"
            :file="item.file"
            :title="item.title"
            :hint="item.hint"
            icon
          />
        </div>
      </div>

      <div>
        <div class="renders__head">
          <p class="section__label">Автомобиль – два ракурса модели и анимация.</p>
        </div>
        <div class="renders__row renders__row--pair">
          <ShotFrame
            v-for="item in carShots"
            :key="item.src"
            class="shot--render"
            :src="item.src"
            :alt="item.alt"
            :file="item.file"
            :title="item.title"
            :hint="item.hint"
            icon
          />
        </div>
        <div class="renders__row renders__row--wide">
          <ShotFrame
            class="shot--render"
            media="video"
            src="/images/3d/car-03.mp4"
            alt="Анимация 3D-модели автомобиля"
            file="images/3d/car-03.mp4"
            title="Автомобиль"
            hint="Анимация модели"
            icon
          />
        </div>
      </div>

      <div>
        <div class="renders__head">
          <p class="section__label">Работа на заказ – слева исходная 2D-картинка, справа модель по этому одному ракурсу.</p>
        </div>
        <div class="renders__row renders__row--pair">
          <ShotFrame
            class="shot--render shot--render-portrait"
            src="/images/3d/character-2d.png"
            alt="2D-картинка персонажа, один ракурс"
            file="images/3d/character-2d.png"
            title="Референс"
            hint="2D-картинка одного ракурса"
            tag="2D-картинка"
            icon
          />
          <ShotFrame
            class="shot--render shot--render-reel"
            media="video"
            src="/images/3d/character-3d.mp4"
            alt="Анимация 3D-модели персонажа"
            file="images/3d/character-3d.mp4"
            title="Персонаж"
            hint="Вертикальная анимация модели"
            tag="3D-модель"
            icon
          />
        </div>
      </div>
    </div>
  </SectionShell>
</template>
