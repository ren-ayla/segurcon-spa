<template>
  <section class="rubros-section">
    <div class="container">
      <h2 class="section-title text-start">ESPECIALISTAS EN TODO TIPO DE RUBROS</h2>
    </div>

    <Splide :options="splideOptions" aria-label="Nuestros Rubros">
      <SplideSlide v-for="rubro in rubros" :key="rubro.imageFile">
        <div
          class="rubro-card"
          :style="{ backgroundImage: `url(${getRubroImageUrl(rubro.imageFile)})` }"
        ></div>
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

// 3. (NUEVO) Esta es la función mágica de Vite para construir la URL
function getRubroImageUrl(name) {
  // Le indicamos la carpeta base donde están las imágenes
  return new URL(`/src/assets/img/rubros/${name}`, import.meta.url).href
}

// 4. (ACTUALIZADO) El 'ref' ahora solo guarda el nombre del archivo
//    Cambié 'imageUrl' por 'imageFile' para que sea más claro
const rubros = ref([
  { imageFile: '1.webp' },
  { imageFile: '2.webp' },
  { imageFile: '3.webp' },
  { imageFile: '4.webp' },
  { imageFile: '5.webp' },
  { imageFile: '6.webp' },
  { imageFile: '7.webp' },
  { imageFile: '8.webp' }, // <-- Corregido, sin el error 'IAssistant:'
  { imageFile: '9.webp' },
])

// 5. Las opciones de Splide quedan idénticas
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
@media (max-width: 767.98px) {
  .rubros-section {
    padding: 1.6rem 0 0 0;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .rubros-section {
    padding: 1.8rem 0 0 0;
  }
}

@media (min-width: 992px) {
  .rubros-section {
    padding: 2.5rem 0 0rem 0;
  }
}

.rubros-section {
  background-color: #f8f8f8;
  width: 100%;
  overflow: hidden;
}

.section-title {
  font-weight: 700;
  font-size: 1.6rem;
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
