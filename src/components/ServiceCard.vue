<template>
  <RouterLink :to="linkUrl" class="service-card-link">
    <div class="service-card" :style="{ backgroundImage: `url(${imageUrl})` }">
      <div class="card-content">
        <h3>{{ title }}</h3>
        <p class="service-description">{{ description }}</p>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
  /*PROP PARA URL LINK*/
  linkUrl: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
/* Estilos para que los links cards se porten bien */
.service-card-link {
  text-decoration: none;
  display: block;
}
/*Ajustes para cada pantalla*/
@media (max-width: 767.98px) {
  .service-card {
    height: 120px;
  }
  .card-content h3,
  .card-content p {
    position: absolute;
    transition: opacity 0.3s ease-in-out;
    padding: 0 1rem;
  }

  .card-content h3 {
    font-size: 1.1rem;
    font-weight: 500;
    opacity: 1;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  }

  .service-description {
    font-size: 0.95rem;
    line-height: 1.5;
    font-weight: 300;
    opacity: 0;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
    white-space: pre-line;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .service-card {
    height: 150px;
  }

  .card-content h3,
  .card-content p {
    position: absolute;
    transition: opacity 0.3s ease-in-out;
    padding: 0 1rem;
  }

  .card-content h3 {
    font-size: 1.2rem;
    font-weight: 600;
    opacity: 1;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  }

  .service-description {
    font-size: 0.95rem;
    line-height: 1.5;
    font-weight: 300;
    opacity: 0;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.8);
    white-space: pre-line;
  }
}

@media (min-width: 992px) {
  .service-card {
    height: 180px;
  }
  .card-content h3,
  .card-content p {
    position: absolute;
    transition: opacity 0.3s ease-in-out;
    padding: 0 1rem;
  }

  .card-content h3 {
    font-size: 1.2rem;
    font-weight: 600;
    opacity: 1;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
  }

  .service-description {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: 300;
    opacity: 0;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 1);
    white-space: pre-line;
  }
}

/*Estilos Generales*/
.service-card {
  position: relative;
  background-size: cover;
  background-position: center;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  padding: 1.5rem;
  color: white;
  transition: transform 0.3s ease;
  /* --- AJUSTE 1: Centrado Vertical y Horizontal --- */
  align-items: center; /* Centra el contenido verticalmente */
  justify-content: center; /* Centra el contenido horizontalmente */
}

.service-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.1));
  opacity: 1;
  transition: opacity 0.4s ease;
}

.service-card:hover::before {
  opacity: 0.3;
}

/* .service-card:hover {
    transform: translateY(-10px);
} */

.card-content {
  position: relative; /* Ancla para los textos absolutos */
  z-index: 2;
  text-align: center; /* Centra el texto de h3 y p */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* --- MAGIA DEL HOVER--- */
.service-card:hover .card-content h3 {
  opacity: 0; /* Ocultamos el título al pasar el mouse */
}

.service-card:hover .service-description {
  opacity: 1; /* Mostramos la descripción al pasar el mouse */
}
</style>
