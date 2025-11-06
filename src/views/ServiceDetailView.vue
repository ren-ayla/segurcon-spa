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
        <div class="row gy-4 justify-content-center">
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
        v-if="service.featureCards && service.featureCards.length > 0"
        class="feature-grid-wrapper"
      >
        <div class="container-fluid">
          <div class="row gy-4 gx-lg-4 justify-content-center">
            <div
              v-for="(card, index) in service.featureCards"
              :key="index"
              class="col-lg-6 col-md-12"
            >
              <div class="feature-card h-100">
                <div class="card-body">
                  <h3 class="card-title">{{ card.title }}</h3>
                  <ul class="list-styled">
                    <li v-for="(li, liIdx) in card.items" :key="liIdx" :class="card.color">
                      {{ li }}
                    </li>
                  </ul>
                </div>
              </div>
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
    </div>
  </div>

  <div v-else class="not-found">
    <h2>Servicio no encontrado (ERROR 404)</h2>
    <p>El servicio que buscas no existe. Por favor, vuelve al inicio.</p>
    <RouterLink to="/" class="btn btn-dark">Volver al Inicio</RouterLink>
  </div>

  <ContactSectionServices />
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { servicesData } from '@/data/servicesData.js'
// Renombraste el componente de contacto, ¡bien visto!
import ContactSectionServices from '@/components/ContactSectionServices.vue'

const route = useRoute()
const serviceSlug = computed(() => route.params.slug)

const service = computed(() => servicesData[serviceSlug.value])

// ¡Ya no necesitamos los computed 'paragraphSections' y 'listSections'!
// El template ahora es más limpio y lee directo de 'service'.
</script>

<style scoped>
/* --- Estilos Generales --- */
.content-wrapper {
  padding: 3.5rem 1rem 0rem 1rem;
}
.section-title {
  text-align: center;
  font-weight: 700;
  font-size: 2.5rem;
  color: #0d3c65;
  margin-bottom: 2.8rem;
}

/* --- Hero Banner --- */
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

/* --- 2. Intro (LEAD) --- */
.intro-section .lead {
  font-size: 1.25rem;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 4rem auto;
  color: #2c3e50;
}

/* --- 3. Tarjetas "Incluye" --- */
/* Arreglos Movil */
@media (max-width: 767.98px) {
  .intro-section {
    width: 90%;
    margin-inline: auto;
  }

  .includes-section {
    width: 90%;
    margin-inline: auto;
  }
}

.includes-section {
  margin-bottom: 2.6rem;
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
 * SOLUCION NUEVO GRID 2x2 PARA SERVICIOS DE 3 o 4 VIÑETAS
 * ===================================================
*/
.feature-grid-wrapper {
  width: 90%; /* Ancho de 80% en desktop */
  margin-inline: auto; /* Centrado */
  margin-bottom: 2rem;
}
.feature-card {
  background-color: #eaf2f8; /* Fondo blanco */
  border-radius: 15px;
  border: 1px solid #dee2e6; /* Borde gris sutil */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}
.feature-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
}
.feature-card .card-body {
  padding: 2rem;
}
.feature-card .card-title {
  font-weight: 700;
  font-size: 1.5rem;
  color: #0d3c65; /* Azul primario */
  margin-bottom: 1.5rem;
}
.list-styled {
  list-style-type: none;
  padding-left: 0;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #2c3e50;
}
.list-styled li {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 0.75rem;
}
/* La viñeta de color */
.list-styled li::before {
  content: '•';
  position: absolute;
  left: 0;
  top: 0;
  font-size: 1.8rem;
  line-height: 1;
}
.list-styled li.green::before {
  color: #097539;
}
.list-styled li.yellow::before {
  color: #f1c40f;
}

.list-styled li.orange::before {
  color: orangered;
}

/* --- 4. Metodología (Timeline) --- */
.methodology-section {
  margin-top: 2rem;
}
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

/* --- Error 404 --- */
.not-found {
  padding: 250px 2rem;
  text-align: center;
}

/*  --- AJUSTES RESPONSIVE ---  */

@media (max-width: 991.98px) {
  /* En tablet */
  .hero-overlay h1 {
    font-size: 2.8rem;
  }
  .section-title {
    font-size: 2.2rem;
  }
  .feature-grid-wrapper {
    width: 90%; /* Ajustamos el ancho para tablet */
  }
}

@media (max-width: 767.98px) {
  /* En móvil */
  .hero-service {
    height: 35vh;
  }
  .hero-overlay h1 {
    font-size: 2.2rem;
  }
  .content-wrapper {
    padding: 3rem 0 0rem 0;
  }
  .section-title {
    font-size: 2rem;
  }
  .intro-section .lead {
    font-size: 1.1rem;
    margin-bottom: 3rem;
  }

  /* Ajustes para el grid 2x2 en móvil */
  .feature-grid-wrapper {
    width: 95%; /* Ajustamos el ancho para móvil */
  }
  .feature-card .card-body {
    padding: 1.5rem;
  }
  .feature-card .card-title {
    font-size: 1.3rem;
  }

  /* --- Reestructuración del Timeline para Móvil --- */
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
}
</style>
