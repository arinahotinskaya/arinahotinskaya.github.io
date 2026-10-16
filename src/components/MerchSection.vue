<script setup>
import { reactive } from 'vue'
import { carryShots, merchTags } from '@/data/portfolio'
import SectionShell from './ui/SectionShell.vue'
import ShotFrame from './ui/ShotFrame.vue'
import TagsList from './ui/TagsList.vue'

const hidden = reactive({})

function hide(key) {
  hidden[key] = true
}
</script>

<template>
  <SectionShell
    id="merch"
    title-id="merch-title"
    index="01"
    topic="Мерч"
    title="Мерч для слёта 7bit"
    light
  >
    <template #aside>
      <p class="section__lead">
        Два года разрабатывала дизайн мерча для команды студенческого молодёжного слёта 7bit: готовила макеты для производства и мокапы для презентации продукции и выбора изделий. Взаимодействовала с производством, собирала и координировала заявки. Работала на всех этапах – от визуальной концепции до передачи макетов в производство.
      </p>
    </template>

    <p class="section__label">Ассортимент</p>
    <TagsList :items="merchTags" spaced />

    <div class="merch">
      <div class="merch__hoodies">
        <div class="merch__flatbox merch__flatbox--black">
          <img
            v-if="!hidden.hoodieBlack"
            class="merch__flat"
            src="/images/merch/hoodie-black.png"
            alt="Чёрное худи 7bit"
            @error="hide('hoodieBlack')"
          >
        </div>
        <div class="merch__flatbox merch__flatbox--lime">
          <img
            v-if="!hidden.hoodieLime"
            class="merch__flat"
            src="/images/merch/hoodie-lime.png"
            alt="Оливковое худи 7bit"
            @error="hide('hoodieLime')"
          >
        </div>
        <img
          v-if="!hidden.hoodieBack"
          class="merch__person"
          src="/images/merch/hoodie-black-back.png"
          alt="Чёрное худи 7bit на модели"
          @error="hide('hoodieBack')"
        >
      </div>

      <div class="merch__row merch__row--carry">
        <ShotFrame
          v-for="shot in carryShots"
          :key="shot.src"
          :src="shot.src"
          :alt="shot.alt"
          :file="shot.file"
          :hint="shot.hint"
        />
      </div>

      <div class="merch__row merch__row--pack">
        <ShotFrame
          class="shot--merch-bag"
          src="/images/merch/bag-white-photo.png"
          alt="Белый бумажный пакет"
          file="images/merch/bag-white-photo.png"
          hint="Белый бумажный пакет."
        />
        <div class="merch__hats">
          <img
            v-if="!hidden.panama"
            class="merch__hat merch__hat--panama"
            src="/images/merch/panama.png"
            alt="Панама 7bit"
            @error="hide('panama')"
          >
          <img
            v-if="!hidden.cap"
            class="merch__hat merch__hat--cap"
            src="/images/merch/cap.png"
            alt="Кепка 7bit"
            @error="hide('cap')"
          >
        </div>
      </div>
    </div>
  </SectionShell>
</template>
