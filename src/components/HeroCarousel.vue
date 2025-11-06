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
    title: 'Soluciones Integrales y Personalizadas',
    text: 'Soluciones Integrales y Personalizadas en Seguridad, Salud Ocupacional y Medio Ambiente.',
    button: 'Conocer Servicios',
  },
  {
    title: 'Soluciones en Prevención de Riesgos',
    text: 'Fortalecemos la seguridad y sostenibilidad en tu organización.',
    button: 'Más Información',
  },
  {
    title: 'Gestión Normativa y Documentación',
    text: 'Te ayudamos a cumplir con toda la normativa legal vigente.',
    button: 'Leer más',
  },
  {
    title: 'Capacitación y Formación',
    text: 'Equipos preparados para un entorno laboral seguro.',
    button: 'Ver más',
  },
  {
    title: 'Cumplimiento Legal y Auditorías',
    text: 'Apoyo en fiscalizaciones, elaboración de planes y medidas. Asesoría en SSOMA e implementación de estándares ISO (45001, 14001).',
    button: 'Más Información',
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
  slideInterval = setInterval(nextSlide, 8000)
})

onUnmounted(() => {
  clearInterval(slideInterval)
})
</script>

<style scoped>
/* Estilos generales Hero Section*/
.hero-section {
  height: 85vh;
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
  background-size: cover;
  background-position: center;
  background-color: #0d3c65;
  background-blend-mode: multiply;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
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
/* Estilos para los controles y botones, ahora usan el 100 de WIDTH de la pantalla */
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
  background-color: rgba(255, 255, 255, 0.096);
  border: 1px solid rgba(255, 255, 255, 0.13);
  color: #f1f1f1;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;
  pointer-events: all;
}

.control-btn:hover {
  background-color: #f1f1f14b;
}

/* Estilo para botón verde Hero Section --- */
.btn-accent-green {
  border: none;
  padding: 0.8rem 1.6rem;
  transition: transform 0.2s;
  font-weight: 500;
  font-size: 1.15rem;
}

:deep(.btn-accent-green) {
  /* Usamos :deep() para aplicar estilo al botón que está en el template */
  background-color: #097539;
  color: #f8f8f8;
  border: none;
}

:deep(.btn-accent-green:hover) {
  background-color: #097539;
  color: #f8f8f8;
  transform: scale(1.02);
}

/* Estilos para el contenido del slide Distintos tamaños*/
/* Para Móviles (hasta 768px) */
@media (max-width: 767.98px) {
  .hero-section::before {
    background-image: url('@/assets/img/hero-carousel-mobile.webp');
  }

  .interactive-carousel-container {
    width: 90%;
  }

  .text-slide h1 {
    font-size: 2.5rem;
    font-weight: 600;
  }

  .text-slide p {
    font-size: 1rem;
    line-height: 1.6; /* Mejoramos el espaciado entre líneas */
    font-weight: 300;
  }

  .btn-accent-green {
    padding: 0.6rem 1.4rem;
    font-size: 1rem;
    font-weight: 500;
  }

  /* Arreglo para botones de carousel en celular */
  /* Dentro de @media (max-width: 767.98px) */
  .carousel-controls {
    padding: 0 1rem; /* Reducimos el padding para que las flechas se vayan a los extremos */
  }

  .control-btn {
    width: 35px;
    height: 35px;
    font-size: 1rem;
  }
}
/* Para Tablets (768px a 991.98px) */
@media (min-width: 767.99px) and (max-width: 991.98px) {
  .hero-section::before {
    background-image: url('@/assets/img/hero-carousel-mobile.webp');
  }

  .interactive-carousel-container {
    width: 90%;
  }
  .text-slide h1 {
    font-size: 3rem;
    font-weight: 600;
  }
  .text-slide p {
    font-size: 1.05rem;
    font-weight: 300;
  }
  /* Arreglo para botones de carousel en Tablets/IPAD/NestHub/etc */
  /* Dentro de @media (min-width: 767.99px) and (max-width: 991.98px) */
  .carousel-controls {
    padding: 0 2rem; /* Reducimos el padding para que las flechas se vayan a los extremos */
  }

  .control-btn {
    width: 45px; /* Hacemos el botón más pequeño */
    height: 45px; /* Hacemos el botón más pequeño */
    font-size: 1rem; /* Achicamos el ícono de la flecha */
  }

  .btn-accent-green {
    font-weight: 500;
    font-size: 1.1rem;
    padding: 0.7rem 1.5rem;
  }
}
/* Para Desktops (992px en adelante) */
@media (min-width: 991.99px) {
  .hero-section::before {
    background-image: url('@/assets/img/hero-carousel-desktop.webp');
  }

  .text-slide h1 {
    font-size: 3rem;
    font-weight: 600;
  }

  .text-slide p {
    font-size: 1.1rem;
    font-weight: 300;
  }
}
</style>
