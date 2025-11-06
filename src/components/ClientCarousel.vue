<template>
  <section class="client-section">
    <div>
      <h2 class="section-title text-center">Clientes que Avalan nuestra Gestión</h2>

      <div class="carousel-container">
        <div class="carousel-viewport">
          <div class="carousel-track track-1">
            <div class="client-logo" v-for="(logo, index) in row1Logos" :key="`r1-${index}`">
              <img :src="logo.url" :alt="logo.alt" />
            </div>
          </div>

          <div class="carousel-track track-2">
            <div class="client-logo" v-for="(logo, index) in row2Logos" :key="`r2-${index}`">
              <img :src="logo.url" :alt="logo.alt" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

/**
 * ¡IMPORTANTE, REN!
 * Aquí es donde pones tus 8 imágenes.
 * Divide 4 para la fila 1 y 4 para la fila 2.
 * Escribe el nombre exacto del archivo y su texto alt.
 */
const row1Base = [
  { file: 'cliente-1.webp', alt: 'Logo Cliente 1' },
  { file: 'cliente-2.webp', alt: 'Logo Cliente 2' },
  { file: 'cliente-3.webp', alt: 'Logo Cliente 3' },
  { file: 'cliente-4.webp', alt: 'Logo Cliente 4' },
  { file: 'cliente-9.webp', alt: 'Logo Cliente 9' },
]

const row2Base = [
  { file: 'cliente-5.webp', alt: 'Logo Cliente 5' },
  { file: 'cliente-6.webp', alt: 'Logo Cliente 6' },
  { file: 'cliente-7.webp', alt: 'Logo Cliente 7' },
  { file: 'cliente-8.webp', alt: 'Logo Cliente 8' },
  { file: 'cliente-10.webp', alt: 'Logo Cliente 10' },
  { file: 'cliente-11.webp', alt: 'Logo Cliente 11' },
]

// --- Lógica de Assets (Vite) ---

/**
 * Función helper para obtener la URL del logo usando el estándar de Vite.
 * Asume que tus logos están en: /src/assets/logos/clients/
 * Si están en otra carpeta, ajusta la ruta ('../assets/logos/clients/')
 */
const getLogoUrl = (name) => {
  // Ajusta la ruta si es necesario
  return new URL(`../assets/logos/clients/${name}`, import.meta.url).href
}

// Computamos las listas duplicadas para el efecto infinito
const row1Logos = computed(() => {
  const combined = [...row1Base, ...row1Base] // Duplicamos
  return combined.map((logo) => ({
    url: getLogoUrl(logo.file),
    alt: logo.alt,
  }))
})

const row2Logos = computed(() => {
  const combined = [...row2Base, ...row2Base] // Duplicamos
  return combined.map((logo) => ({
    url: getLogoUrl(logo.file),
    alt: logo.alt,
  }))
})
</script>

<style scoped>
/* Variables de color de la marca */
/* --- Estilos de la Sección --- */
.client-section {
  --color-primary: #097539;
  --color-secondary: #0d3c65;
  --color-text-dark: #2c3e50;
  padding: 3rem 0 1.5rem 0;
  background-color: #ffffff; /* Fondo blanco para que destaque el marco */
}

.section-title {
  font-weight: 700;
  color: var(--color-secondary);
}

/* --- Contenedor del Carrusel (El Marco) --- */
.carousel-container {
  position: relative;
  padding: 2.5rem 0; /* Espacio vertical entre las barras y los logos */

  /* Las barras de color que pediste */
  border-top: 5px solid var(--color-primary); /* Azul arriba */
  border-bottom: 5px solid var(--color-secondary); /* Verde abajo */
}

/* --- Viewport (El Escenario) --- */
.carousel-viewport {
  width: 100%;
  overflow: hidden; /* Oculta la magia */

  /* Efecto moderno: difuminado en los bordes */
  mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
  -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);

  /* Usamos grid para apilar las dos filas verticalmente */
  display: grid;
  gap: 1rem; /* Este es el espacio entre la fila 1 y la fila 2 */
}

/* --- Pista de Carrusel (Los Actores) --- */
.carousel-track {
  display: flex; /* Pone los logos en fila */

  /* Cálculo: (Ancho del logo + padding) * (Nº logos * 2) */
  /* (250px + 40px) * 8 = 2320px */
  /* Lo definimos dinámicamente con 'width: max-content' es más simple */
  width: max-content;

  /* Animación */
  animation: slide 40s linear infinite;
}

/* La Fila 2 va en reversa */
.carousel-track.track-2 {
  animation-direction: reverse;
}

/* Animación de deslizamiento infinito */
@keyframes slide {
  from {
    transform: translateX(0);
  }
  to {
    /* Movemos la mitad del ancho total (porque duplicamos el contenido) */
    transform: translateX(-50%);
  }
}

/* --- El Logo Individual --- */
.client-logo {
  flex-shrink: 0; /* Evita que los logos se encojan */
  width: 250px; /* Ancho fijo para cada logo */
  height: 120px; /* Esta es la altura que pediste (más grande) */
  padding: 0 20px; /* Espacio entre logos */

  /* Centrado perfecto */
  display: grid;
  place-items: center;
}

.client-logo img {
  max-width: 100%;
  max-height: 90px; /* La imagen no ocupa el 100% de la altura */
  object-fit: contain;

  /* Efecto profesional: grises por defecto */
  opacity: 0.8;
  transition: all 0.3s ease;
}

/* Efecto hover: color y escala */
.client-logo:hover img {
  opacity: 1;
  transform: scale(1.15);
}

/* --- 100% Responsivo --- */

/* Tablets */
@media (min-width: 992px) {
  .section-title {
    font-size: 2.35rem;
    margin-bottom: 2.5rem;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .section-title {
    font-size: 2.5rem;
    width: 90%;
    margin-inline: auto;
  }
  .client-logo {
    width: 200px;
    height: 100px;
    padding: 0 15px;
  }
}

/* Móviles */
@media (max-width: 767.98px) {
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
    width: 95%;
    margin-inline: auto;
  }
  .carousel-container {
    padding: 1.5rem 0;
  }
  .carousel-viewport {
    gap: 1.5rem;
  }
  .client-logo {
    width: 150px; /* Logos más pequeños en móvil */
    height: 80px;
    padding: 0 10px;
  }
  .carousel-viewport {
    /* Reducimos el fade en móvil para más espacio visible */
    mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
    -webkit-mask-image: linear-gradient(to right, transparent, black 5%, black 95%, transparent);
  }
}
</style>
