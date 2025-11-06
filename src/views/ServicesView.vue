<script setup lang="ts">
import ContactSectionService from '@/components/ContactSectionService.vue'
import ContentWrapper from '@/components/ContentWrapper.vue'
import PageHero from '@/components/PageHero.vue'
import RubrosCarousel from '@/components/RubrosCarousel.vue'
import ServicesView from '@/components/ServicesView.vue'
</script>

<template>
  <PageHero />
  <ContentWrapper>
    <ServicesView />
  </ContentWrapper>
  <RubrosCarousel />
  <ContactSectionService />
</template>

<style scoped>
body {
  background-color: #3cb2cf;
}
</style>
