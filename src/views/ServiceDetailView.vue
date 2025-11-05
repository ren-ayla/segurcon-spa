<template>
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

      <section v-if="service.includes && service.includes.length > 0" class="includes-section">
        <h2 class="section-title">¿Qué Incluye Nuestro Servicio?</h2>
        <div class="row gy-4">
          <div v-for="(item, index) in service.includes" :key="index" class="col-md-6 col-lg-4">
            <div class="card include-card h-100">
              <div class="card-body text-center">
                <i :class="['bi', item.icon]"></i>
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        v-if="service.contentSections && service.contentSections.length > 0"
        class="dynamic-content-section"
      >
        <div v-for="(section, idx) in service.contentSections" :key="idx" class="content-block">
          <h2 v-if="section.title" class="section-title-alt">{{ section.title }}</h2>

          <div v-if="section.type === 'paragraphs'">
            <p v-for="(p, pIdx) in section.items" :key="pIdx" class="content-paragraph">
              {{ p }}
            </p>
          </div>

          <ul v-if="section.type === 'list'" class="list-styled">
            <li v-for="(li, liIdx) in section.items" :key="liIdx" :class="section.color">
              {{ li }}
            </li>
          </ul>
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

      <ContactSectionServices />
    </div>
  </div>

  <div v-else class="not-found">
    <h2>Servicio no encontrado (ERROR 404)</h2>
    <p>El servicio que buscas no existe. Por favor, vuelve al inicio.</p>
    <RouterLink to="/" class="btn btn-primary">Volver al Inicio</RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { servicesData } from '@/data/servicesData.js'
import ContactSectionServices from '@/components/ContactSectionServices.vue'

const route = useRoute()
const serviceSlug = computed(() => route.params.slug)

const service = computed(() => servicesData[serviceSlug.value])
</script>

<style scoped>
/* --- Estilos Generales --- */
.content-wrapper {
  padding: 4rem 1rem;
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

/* --- 3. Tarjetas "Incluye" (Igual que antes) --- */
.includes-section {
  margin-bottom: 4rem;
}
.include-card {
  background-color: #eaf2f8;
  border-radius: 15px;
  border: none;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.include-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
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

/* * ===================================================
 * ¡NUEVOS ESTILOS PARA EL CONTENIDO DINÁMICO!
 * ===================================================
*/
.dynamic-content-section {
  max-width: 800px; /* Para centrar el contenido de texto */
  margin: 0 auto 4rem auto;
}
.content-block {
  margin-bottom: 2.5rem;
}
.section-title-alt {
  /* Título de sección más sutil */
  font-weight: 700;
  font-size: 1.8rem;
  color: #0d3c65;
  margin-bottom: 1.5rem;
  text-align: left;
}
.content-paragraph {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #2c3e50;
}
.list-styled {
  list-style-type: none;
  padding-left: 0;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #2c3e50;
}
.list-styled li {
  position: relative;
  padding-left: 2.2rem; /* Espacio para la viñeta */
  margin-bottom: 0.75rem;
}
.list-styled li::before {
  /* La viñeta de color */
  content: '•';
  position: absolute;
  left: 0;
  top: 0;
  font-size: 2rem;
  line-height: 1;
}
.list-styled li.green::before {
  color: #097539; /* Verde de la paleta */
}
.list-styled li.yellow::before {
  color: #f1c40f; /* Amarillo de la paleta */
}

/* --- 4. Metodología (Timeline) (Igual que antes) --- */
.timeline {
  position: relative;
  max-width: 800px;
  margin: 0 auto;
}
.timeline::after {
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

/* --- 5. CTA (No existe en tu código, lo quité) --- */

.not-found {
  padding: 250px 2rem;
  text-align: center;
}

/* --- Ajustes Responsivos --- */
@media (max-width: 991.98px) {
  .hero-overlay h1 {
    font-size: 2.8rem;
  }
  .section-title {
    font-size: 2.2rem;
  }
}
@media (max-width: 767.98px) {
  .service-detail-page {
    padding-top: 150px;
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
  .timeline::after {
    display: none;
  }
  .timeline-item {
    padding: 2.5rem 0 0 0;
    text-align: center;
  }
  .timeline-step {
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    top: 0;
    margin-bottom: 1rem;
  }
  .timeline-content {
    text-align: center;
  }
  .dynamic-content-section {
    padding: 0 1rem;
  }
  .section-title-alt {
    text-align: center;
  }
}
</style>
