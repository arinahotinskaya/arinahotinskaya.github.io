<script setup>
import { contacts } from '@/data/portfolio'
import TagsList from './ui/TagsList.vue'
</script>

<template>
  <footer class="footer">
    <div class="container">
      <h2 class="footer__title">Контакты</h2>
      <TagsList :items="contacts" large />
    </div>
  </footer>
</template>
