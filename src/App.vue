<script setup>
import BadgesFestSection from './components/BadgesFestSection.vue'
import BadgesSsmSection from './components/BadgesSsmSection.vue'
import GraphicSection from './components/GraphicSection.vue'
import HeroSection from './components/HeroSection.vue'
import InstagramSection from './components/InstagramSection.vue'
import MerchSection from './components/MerchSection.vue'
import RedesignSection from './components/RedesignSection.vue'
import RendersSection from './components/RendersSection.vue'
import SiteFooter from './components/SiteFooter.vue'
import WebSection from './components/WebSection.vue'
</script>

<template>
  <HeroSection />
  <main>
    <MerchSection />
    <RedesignSection />
    <BadgesSsmSection />
    <BadgesFestSection />
    <GraphicSection />
    <WebSection />
    <RendersSection />
    <InstagramSection />
  </main>
  <SiteFooter />
</template>
