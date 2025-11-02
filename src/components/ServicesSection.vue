<template>
  <section class="services-section">
    <div class="container services-container px-0">
      <h2 class="section-title">Nuestros Servicios</h2>
      <p class="section-subtitle">
        Soluciones Integrales en Seguridad, Salud Ocupacional y Medio Ambiente.
      </p>

      <div class="row g-0">
        <div v-for="service in services" :key="service.title" class="col-12 col-md-6 col-lg-4">
          <ServiceCard
            :title="service.title"
            :description="service.description"
            :imageUrl="getServiceImageUrl(service.imageFile)"
            :linkUrl="service.linkUrl"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ServiceCard from './ServiceCard.vue'

// 1. (NUEVO) La función de Vite para construir la URL
function getServiceImageUrl(name) {
  // Le decimos la carpeta base donde están las imágenes de servicios
  return new URL(`/src/assets/img/services/${name}`, import.meta.url).href
}

// 2. (ACTUALIZADO) El 'ref' ahora solo guarda el nombre del archivo.
//    Cambié 'imageUrl' por 'imageFile' para que sea más claro.
const services = ref([
  {
    title: 'Gestión Normativa y Documentación',
    description: 'Te ayudamos a cumplir con toda la normativa legal vigente.',
    imageFile: 'service-1.webp', // <-- Solo el nombre
    linkUrl: '/servicios/gestion-normativa',
  },
  {
    title: 'Identificación y Control de Riesgos',
    description: 'Evaluamos y gestionamos los riesgos laborales en tu empresa.',
    imageFile: 'service-2.webp', // <-- Solo el nombre
    linkUrl: '/servicios/control-riesgos',
  },
  {
    title: 'Capacitación y Formación',
    description: 'Equipos preparados para un entorno laboral seguro.',
    imageFile: 'service-3.webp', // <-- Solo el nombre
    linkUrl: '/servicios/capacitacion',
  },
  {
    title: 'Programas Preventivos a Medida',
    description: 'Desarrollamos programas adaptados a las necesidades de tu empresa.',
    imageFile: 'service-4.webp', // <-- Solo el nombre
    linkUrl: '/servicios/programas-preventivos',
  },
  {
    title: 'Seguimiento y Acompañamiento Cultural',
    description: 'Fomentamos una cultura de seguridad sostenible en tu organización.',
    imageFile: 'service-5.webp', // <-- Solo el nombre
    linkUrl: '/servicios/seguimiento-cultural',
  },
  {
    title: 'Cumplimiento Legal y Auditorías',
    description: 'Aseguramos que tu empresa cumpla con todas las normativas vigentes.',
    imageFile: 'service-6.webp', // <-- Solo el nombre
    linkUrl: '/servicios/auditorias',
  },
  {
    title: 'Investigación de Accidentes e Incidentes',
    description: 'Analizamos y prevenimos futuros incidentes en el lugar de trabajo.',
    imageFile: 'service-7.webp', // <-- Solo el nombre
    linkUrl: '/servicios/investigacion-accidentes',
  },
  {
    title: 'Asesoría Técnica Especializada',
    description: 'Brindamos soporte técnico en seguridad y salud ocupacional.',
    imageFile: 'service-8.webp', // <-- Solo el nombre
    linkUrl: '/servicios/asesoria-tecnica',
  },
  {
    title: 'Servicios Específicos',
    description:
      '• Asesoría Completa en Prevención de Riesgos.\n • Apoyo en cumplimiento Legal y Protocolos Ministeriales.\n • Apoyo a la Gran Minería e Industria.',
    imageFile: 'service-9.webp', // <-- Solo el nombre
    linkUrl: '/servicios/cumplimiento-legal',
  },
])
</script>

<style scoped>
@media (max-width: 767.98px) {
  .services-section {
    width: 90%;
    margin-inline: auto;
    padding-bottom: 2.8rem;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .services-section {
    width: 90%;
    margin-inline: auto;
    padding-bottom: 3rem;
  }
}

@media (min-width: 991.98px) {
  .services-section {
    width: 83%; /* Hacemos que la sección ocupe el 85% del ancho */
    max-width: 1400px; /* Un límite para pantallas ultra-anchas */
    margin-inline: auto; /* Esto centra la sección horizontalmente */
  }
}

.services-section {
  background-color: #f1f1f1; /* Fondo blanco anti-flash */
  position: relative;
  z-index: 10;
}

/* El contenedor interno ahora se ajusta a su padre */
.services-container {
  /* Ya no necesita un ancho del 90%, ahora ocupa todo el espacio disponible */
  width: 100%;
  margin-inline: auto;
}

.section-title {
  text-align: center;
  font-weight: 700;
  font-size: 2.3rem;
  color: #0d3c65; /* Azul principal */
  margin-bottom: 1rem;
}

.section-subtitle {
  text-align: center;
  font-size: 1.1rem;
  color: #2c3e50; /* Gris carbón */
  margin-bottom: 3.5rem;
  max-width: 600px;
  margin-inline: auto;
}

/* Espaciado entre tarjetas un poco más grande en desktop */
@media (min-width: 992px) {
  .row {
    --bs-gutter-x: 0rem;
    --bs-gutter-y: 0rem;
  }
}
</style>
