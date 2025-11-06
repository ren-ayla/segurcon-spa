<script setup lang="ts">
import ContactSection from '@/components/ContactSection.vue'
import ContentWrapper from '@/components/ContentWrapper.vue'
import PageHero from '@/components/PageHero.vue'
</script>

<template>
  <div class="view-layout-grid">
    <PageHero />

    <ContentWrapper>
      <ContactSection />
    </ContentWrapper>
  </div>
</template>

<style scoped>
.view-layout-grid {
  display: grid;
  grid-template-columns: 1fr;
}
</style>
