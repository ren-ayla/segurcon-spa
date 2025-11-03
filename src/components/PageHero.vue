<template>
  <section class="page-hero-section"></section>
</template>

<script setup>
// Este comp es visual no más.
</script>

<style scoped>
.page-hero-section {
  height: 45px;
  position: relative;
  overflow: hidden;
  grid-row: 1 / 2; /* Le decimos: "vive en la fila 1" */
  grid-column: 1 / 2; /* Y en la columna 1 */
}

/* Replicamos el efecto exacto del HeroCarousel */
.page-hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 45px;
  background-size: cover;
  background-position: center;
  background-color: #0d3c65;
}
</style>
