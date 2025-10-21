<template>
  <PageHero />
  <div v-if="service" class="service-detail-page">
    <section class="hero-service" :style="{ backgroundImage: `url(${service.imageUrl})` }">
      <div class="hero-overlay">
        <h1>{{ service.title }}</h1>
      </div>
    </section>

    <div class="container content-wrapper">
      <section class="intro-section">
        <p class="lead">{{ service.intro }}</p>
      </section>

      <section class="includes-section">
        <h2 class="section-title">¿Qué Incluye Nuestro Servicio?</h2>
        <div class="row gy-4">
          <div v-for="(item, index) in service.includes" :key="index" class="col-md-6 col-lg-4">
            <div class="include-card">
              <i :class="['bi', item.icon]"></i>
              <h3>{{ item.title }}</h3>
              <p>{{ item.text }}</p>
            </div>
          </div>
        </div>
      </section>

      <section
        v-if="service.methodology && service.methodology.length > 0"
        class="methodology-section"
      >
        <h2 class="section-title">Nuestra Metodología</h2>
        <div class="timeline">
          <div v-for="(step, index) in service.methodology" :key="index" class="timeline-item">
            <div class="timeline-step">{{ step.step }}</div>
            <div class="timeline-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <h2>¿Listo para fortalecer la seguridad en tu empresa?</h2>
        <p>Contáctanos hoy y conversemos sobre cómo podemos ayudarte.</p>
        <RouterLink to="/contacto" class="btn btn-accent btn-lg">Solicitar Asesoría</RouterLink>
      </section>
    </div>
  </div>

  <div v-else class="not-found">
    <h2>Servicio no encontrado</h2>
    <p>El servicio que buscas no existe. Por favor, vuelve al inicio.</p>
    <RouterLink to="/" class="btn btn-primary">Volver al Inicio</RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { servicesData } from '@/data/servicesData.js'
import PageHero from '@/components/PageHero.vue'

const route = useRoute()
const serviceSlug = computed(() => route.params.slug)

const service = computed(() => servicesData[serviceSlug.value])
</script>

<style scoped>
/* --- Estilos Generales --- */
/* .service-detail-page {
  padding-top: 180px;
} */

.content-wrapper {
  padding: 4rem 1rem; /* Añadimos padding lateral base */
}

.section-title {
  text-align: center;
  font-weight: 700;
  font-size: 2.5rem;
  color: #0d3c65;
  margin-bottom: 3rem;
}

/* --- 1. Hero Banner --- */
.hero-service {
  height: 40vh;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}
.hero-overlay {
  background-color: rgba(13, 60, 101, 0.6);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}
.hero-overlay h1 {
  font-size: 3.2rem;
  font-weight: 700;
}

/* --- 2. Intro --- */
.intro-section .lead {
  font-size: 1.25rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem auto;
  color: #2c3e50;
}

/* --- 3. Tarjetas "Incluye" --- */
.includes-section {
  margin-bottom: 4rem;
}
.include-card {
  background-color: #fff;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 4px M20px rgba(0, 0, 0, 0.05);
  text-align: center;
  height: 100%;
}
.include-card i {
  font-size: 3rem;
  color: #097539;
}
.include-card h3 {
  font-size: 1.4rem;
  font-weight: 600;
  color: #0d3c65;
  margin: 1rem 0;
}

/* --- 4. Metodología (Timeline) --- */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}
.timeline::after {
  /* La línea vertical */
  content: '';
  position: absolute;
  width: 3px;
  background-color: #097539;
  top: 0;
  bottom: 0;
  left: 30px;
}
.timeline-item {
  padding: 10px 40px 30px 80px;
  position: relative;
}
.timeline-step {
  position: absolute;
  left: 0;
  top: 10px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #0d3c65;
  color: white;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #f1f1f1;
  z-index: 1;
}
.timeline-content h3 {
  font-weight: 600;
  color: #0d3c65;
}

/* --- 5. CTA --- */
.cta-section {
  text-align: center;
  padding: 3rem;
  background-color: #eaf2f8;
  border-radius: 15px;
  margin-top: 4rem;
}
.cta-section h2 {
  font-weight: 700;
  color: #0d3c65;
}

.not-found {
  padding: 250px 2rem;
  text-align: center;
}

/* 🚀 --- INICIO: AJUSTES RESPONSIVE --- 🚀 */

/* Para Tablets (hasta 992px) */
@media (max-width: 991.98px) {
  .hero-overlay h1 {
    font-size: 2.8rem;
  }
  .section-title {
    font-size: 2.2rem;
  }
}

/* Para Móviles (hasta 768px) */
@media (max-width: 767.98px) {
  .service-detail-page {
    padding-top: 150px; /* Reducimos espacio si el navbar es más pequeño en móvil */
  }
  .hero-service {
    height: 35vh;
  }
  .hero-overlay h1 {
    font-size: 2.2rem;
  }
  .content-wrapper {
    padding: 3rem 1rem;
  }
  .section-title {
    font-size: 2rem;
  }
  .intro-section .lead {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }
  .cta-section h2 {
    font-size: 1.5rem;
  }

  /* --- Reestructuración del Timeline para Móvil --- */
  .timeline::after {
    display: none; /* Ocultamos la línea vertical */
  }
  .timeline-item {
    padding: 2.5rem 0 0 0; /* Espacio superior, sin padding lateral */
    text-align: center; /* Centramos todo el contenido */
  }
  .timeline-step {
    position: relative; /* Lo devolvemos al flujo normal */
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    margin-bottom: 1rem; /* Espacio entre el círculo y el texto */
  }
  .timeline-content {
    text-align: center;
  }
}
</style>
