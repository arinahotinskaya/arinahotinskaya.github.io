<script setup>
import { screens } from '@/data/portfolio'
import SectionShell from './ui/SectionShell.vue'
import ShotFrame from './ui/ShotFrame.vue'
</script>

<template>
  <SectionShell
    id="web"
    title-id="web-title"
    index="06"
    topic="Веб-дизайн"
    title="Веб-интерфейсы, которые я сама разрабатываю"
  >
    <template #aside>
      <p class="section__lead">
        Создаю дизайн веб-страниц, которые разрабатываю самостоятельно: продумываю структуру
        и композицию, визуальное оформление, навигацию и взаимодействие с элементами, а
        затем реализую готовые решения в коде.
        <br><br>
        Мой стек: <span class="accent-stack">Figma, React, Vue, JavaScript, TypeScript, HTML, CSS, SCSS, Tailwind, Redux</span>.
        <br><br>
        Ниже – пример реализованного проекта, где я прошла путь от разработки визуальной концепции и интерфейса до его реализации.
      </p>
    </template>

    <div class="screens">
      <figure v-for="screen in screens" :key="screen.caption" class="screen">
        <figcaption class="screen__caption">{{ screen.caption }}</figcaption>
        <ShotFrame
          root="div"
          class="shot--laptop"
          :src="screen.laptop.src"
          :alt="screen.laptop.alt"
          :file="screen.laptop.file"
          :hint="screen.laptop.hint"
        />
        <ShotFrame
          root="div"
          class="shot--phone"
          :src="screen.phone.src"
          :alt="screen.phone.alt"
          :file="screen.phone.file"
          :hint="screen.phone.hint"
        />
      </figure>
      <article class="project-card">
        <svg class="project-card__icon" viewBox="0 0 24 24" fill="none" stroke="#0C0E0D" stroke-width="1.6" stroke-linecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.6 2.6 4 5.6 4 9s-1.4 6.4-4 9c-2.6-2.6-4-5.6-4-9s1.4-6.4 4-9z" />
        </svg>
        <div>
          <p class="project-card__label">Реализованный проект</p>
          <a class="project-card__link" href="http://gnss.gsras.ru">gnss.gsras.ru ↗</a>
        </div>
      </article>
    </div>
  </SectionShell>
</template>
