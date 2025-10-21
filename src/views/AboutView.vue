<template>
  <div class="view-layout-grid">
    <PageHero />
    <ContentWrapper>
      <AboutIntro />
    </ContentWrapper>
    <RubrosCarousel />
    <ProcessSection />
  </div>
</template>

<script setup>
import AboutIntro from '@/components/AboutIntro.vue'
import ContentWrapper from '@/components/ContentWrapper.vue'
import PageHero from '@/components/PageHero.vue'
import ProcessSection from '@/components/ProcessSection.vue'
import RubrosCarousel from '@/components/RubrosCarousel.vue'
</script>

<style scoped>
/* CSS GRID */
.view-layout-grid {
  display: grid;
  grid-template-columns: 1fr; /* Una sola columna que ocupa todo el ancho */
}

/* El CSS para los títulos no cambia */
.page-title {
  text-align: center;
  font-weight: 700;
  font-size: 2.8rem;
  color: #0d3c65;
  margin-bottom: 0.5rem;
}
.page-subtitle {
  text-align: center;
  font-size: 1.2rem;
  color: #2c3e50;
  margin-bottom: 3rem;
}
</style>
