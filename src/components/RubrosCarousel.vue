<template>
  <section class="rubros-section">
    <div class="container">
      <h2 class="section-title text-start">ESPECIALISTAS EN TODO TIPO DE RUBROS</h2>
    </div>

    <Splide :options="splideOptions" aria-label="Nuestros Rubros">
      <SplideSlide v-for="(rubro, index) in rubros" :key="index">
        <div class="rubro-card" :style="{ backgroundImage: `url(${rubro.imageUrl})` }"></div>
      </SplideSlide>
    </Splide>
  </section>
</template>

<script setup>
import { ref } from 'vue'
// 1. Importa los componentes de Splide
import { Splide, SplideSlide } from '@splidejs/vue-splide'
// 2. Importa el CSS base de Splide
import '@splidejs/vue-splide/css'

// 3. Define los 9 rubros. Ahora solo necesitamos la URL de la imagen.
const rubros = ref([
  { imageUrl: 'src/assets/img/rubros/1.webp' },
  { imageUrl: 'src/assets/img/rubros/2.webp' },
  { imageUrl: 'src/assets/img/rubros/3.webp' },
  { imageUrl: 'src/assets/img/rubros/4.webp' },
  { imageUrl: 'src/assets/img/rubros/5.webp' },
  { imageUrl: 'src/assets/img/rubros/6.webp' },
  { imageUrl: 'src/assets/img/rubros/7.webp' },
  { imageUrl: 'src/assets/img/rubros/8.webp' },
  { imageUrl: 'src/assets/img/rubros/9.webp' },
])

// 4. Configura las opciones del carrusel (con más items para que sean más pequeños)
const splideOptions = ref({
  type: 'loop', // Vueltas infinitas
  drag: 'free', // Arrastre libre con el mouse o dedo
  perPage: 7, // 7 tarjetas en desktop (más pequeñas)
  perMove: 1,
  gap: '0rem', // Espacio entre tarjetas
  pagination: false, // Oculta los puntos de paginación
  arrows: true, // Oculta las flechas
  padding: '2rem',
  breakpoints: {
    1200: { perPage: 6 }, // Laptops
    992: { perPage: 4 }, // Tablets
    768: { perPage: 3 }, // Móviles grandes
    576: { perPage: 2 }, // Móviles pequeños
  },
})
</script>

<style scoped>
.rubros-section {
  padding: 3rem 0;
  background-color: #ffffff;
  width: 100%;
  overflow: hidden;
}

.section-title {
  font-weight: 700;
  font-size: 1.8rem;
  color: #0d3c65;
  padding-bottom: 0.5rem;
}

.rubro-card {
  position: relative;
  aspect-ratio: 1 / 1; /* ¡LA MAGIA PARA EL CUADRADO PERFECTO! */
  width: 100%;
  border-radius: 0px;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  cursor: grab;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.rubro-card:hover {
  transform: scale(1.02);
}

/* Ajuste para que el carrusel se vea bien */
:deep(.splide__track) {
  padding-bottom: 1rem; /* Deja espacio para la sombra */
}
</style>
