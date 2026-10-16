<script setup>
import { festBadges, festStats } from '@/data/portfolio'
import BadgeRow from './ui/BadgeRow.vue'
import SectionShell from './ui/SectionShell.vue'
import StatsList from './ui/StatsList.vue'
</script>

<template>
  <SectionShell
    id="badges-2026"
    title-id="badges-2026-title"
    index="04"
    topic="Бейджи"
    title="Бейджи Студфест 2026"
  >
    <template #aside>
      <p class="section__lead">
        Разработала серию бейджей для команды 7bit на студенческий фестиваль в стиле techno rave.
        Самостоятельно придумала концепцию и создала шаблон сначала в <span class="accent-stack">Figma</span>, затем подготовила рабочий
        макет в <span class="accent-stack">Photoshop</span>. Разработала 6 цветовых вариаций макета бейджа и подбирала подходящий вариант
        под образ каждого участника.<br><br>
        До фотосессии помогала участникам подобрать образы. После обработала
        фотографии, вручную прорисовала индивидуальные фоновые линии и внесла персональные данные:
        фамилию и имя, статус в команде, год начала участия и, при наличии, награды. Для каждого из
        79 участников собрала готовый бейдж, затем объединила все макеты в общий файл и подготовила к печати.
        После печати отдельно подобрала цвета лент для бейджей.
      </p>
    </template>

    <StatsList :items="festStats" />
    <BadgeRow :items="festBadges" variant="techno" />
  </SectionShell>
</template>
