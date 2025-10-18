<template>
  <div class="hero-section" @touchstart="handleTouchStart" @touchend="handleTouchEnd">
    <div class="interactive-carousel-container">
      <div class="slides-wrapper">
        <transition name="fade" mode="out-in">
          <div class="text-slide" :key="currentSlideIndex">
            <h1>{{ slides[currentSlideIndex].title }}</h1>
            <p>{{ slides[currentSlideIndex].text }}</p>
            <button class="btn btn-accent-green btn-lg mt-3">
              {{ slides[currentSlideIndex].button }}
            </button>
          </div>
        </transition>
      </div>
    </div>

    <div class="carousel-controls">
      <button @click="prevSlide" class="control-btn">&lt;</button>
      <button @click="nextSlide" class="control-btn">&gt;</button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const slides = ref([
  {
    title: 'Soluciones en Prevención de Riesgos',
    text: 'Fortalecemos la seguridad y sostenibilidad en tu organización.',
    button: 'Más Información',
  },
  {
    title: 'Gestión Normativa y Documentación',
    text: 'Te ayudamos a cumplir con toda la normativa legal vigente.',
    button: 'Nuestros Servicios',
  },
  {
    title: 'Capacitación y Formación',
    text: 'Equipos preparados para un entorno laboral seguro.',
    button: 'Ver Cursos',
  },
])

const currentSlideIndex = ref(0)
let slideInterval = null

const nextSlide = () => {
  currentSlideIndex.value = (currentSlideIndex.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentSlideIndex.value =
    (currentSlideIndex.value - 1 + slides.value.length) % slides.value.length
}

const touchStartX = ref(0)

const handleTouchStart = (event) => {
  touchStartX.value = event.touches[0].clientX
}

const handleTouchEnd = (event) => {
  const touchEndX = event.changedTouches[0].clientX
  const difference = touchStartX.value - touchEndX
  const threshold = 50

  if (difference > threshold) {
    nextSlide()
  } else if (difference < -threshold) {
    prevSlide()
  }
}

onMounted(() => {
  slideInterval = setInterval(nextSlide, 5000)
})

onUnmounted(() => {
  clearInterval(slideInterval)
})
</script>

<style scoped>
.hero-section {
  height: 100vh;
  position: relative;
  color: #f8f8f8;
  overflow: hidden;
}

.hero-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/img/hero-carousel.jpg');
  background-size: cover;
  background-position: center;
  background-color: #0d3c65;
  background-blend-mode: multiply;
}

.interactive-carousel-container,
.slides-wrapper {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 75%;
  max-width: 1320px;
  text-align: left;
}

@media (max-width: 991.98px) {
  .interactive-carousel-container {
    width: 90%;
  }
}

.text-slide h1 {
  font-size: 3.5rem;
  font-weight: 700;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* 3. Estilos para los controles, ahora usan el 100% de la pantalla */
.carousel-controls {
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  padding: 0 4rem; /* Ajusta este valor para acercar o alejar las flechas de los bordes */
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  pointer-events: none;
}

.control-btn {
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid white;
  color: white;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
  pointer-events: all;
}

.control-btn:hover {
  background-color: rgba(255, 255, 255, 0.4);
}

/* --- NUEVO: Estilo para botón de acento --- */
.btn-accent-green {
  border: none;
  padding: 0.9rem 1.5rem;
}

:deep(.btn-accent-green) {
  /* Usamos :deep() para aplicar estilo al botón que está en el template */
  background-color: #097539;
  color: #f8f8f8;
  border: none;
  font-weight: 600;
}
:deep(.btn-accent-green:hover) {
  background-color: #097539;
  color: #f8f8f8;
}
</style>
