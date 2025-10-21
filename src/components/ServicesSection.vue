<template>
  <section class="services-section">
    <div class="container services-container px-0">
      <h2 class="section-title">Nuestros Servicios</h2>
      <p class="section-subtitle">
        Soluciones Integrales en Seguridad, Salud Ocupacional y Medio Ambiente.
      </p>

      <div class="row g-0">
        <div v-for="(service, index) in services" :key="index" class="col-12 col-md-6 col-lg-4">
          <ServiceCard
            :title="service.title"
            :description="service.description"
            :imageUrl="service.imageUrl"
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

const services = ref([
  {
    title: 'Gestión Normativa y Documentación',
    description: 'Te ayudamos a cumplir con toda la normativa legal vigente.',
    imageUrl: 'src/assets/img/services/service-1.webp',
    linkUrl: '/servicios/gestion-normativa',
  },
  {
    title: 'Identificación y Control de Riesgos',
    description: 'Evaluamos y gestionamos los riesgos laborales en tu empresa.',
    imageUrl: 'src/assets/img/services/service-2.webp',
    linkUrl: '/servicios/control-riesgos',
  },
  {
    title: 'Capacitación y Formación',
    description: 'Equipos preparados para un entorno laboral seguro.',
    imageUrl: 'src/assets/img/services/service-3.webp',
    linkUrl: '/servicios/capacitacion',
  },
  {
    title: 'Programas Preventivos a Medida',
    description: 'Desarrollamos programas adaptados a las necesidades de tu empresa.',
    imageUrl: 'src/assets/img/services/service-4.webp',
    linkUrl: '/servicios/programas-preventivos',
  },
  {
    title: 'Seguimiento y Acompañamiento Cultural',
    description: 'Fomentamos una cultura de seguridad sostenible en tu organización.',
    imageUrl: 'src/assets/img/services/service-5.webp',
    linkUrl: '/servicios/seguimiento-cultural',
  },
  {
    title: 'Cumplimiento Legal y Auditorías',
    description: 'Aseguramos que tu empresa cumpla con todas las normativas vigentes.',
    imageUrl: 'src/assets/img/services/service-6.webp',
    linkUrl: '/servicios/auditorias',
  },
  {
    title: 'Investigación de Accidentes e Incidentes',
    description: 'Analizamos y prevenimos futuros incidentes en el lugar de trabajo.',
    imageUrl: 'src/assets/img/services/service-7.webp',
    linkUrl: '/servicios/investigacion-accidentes',
  },
  {
    title: 'Asesoría Técnica Especializada',
    description: 'Brindamos soporte técnico en seguridad y salud ocupacional.',
    imageUrl: 'src/assets/img/services/service-8.webp',
    linkUrl: '/servicios/asesoria-tecnica',
  },
  {
    title: 'Servicios Específicos',
    description:
      '• Asesoría Completa en Prevención de Riesgos.\n • Apoyo en cumplimiento Legal y Protocolos Ministeriales.\n • Apoyo a la Gran Minería e Industria.',
    imageUrl: 'src/assets/img/services/service-9.webp',
    linkUrl: '/servicios/cumplimiento-legal',
  },
])
</script>

<style scoped>
.services-section {
  background-color: #f1f1f1; /* Fondo blanco anti-flash */
  position: relative;
  z-index: 10;
  /* --- INICIO DE LA SOLUCIÓN --- */
  width: 85%; /* Hacemos que la sección ocupe el 85% del ancho */
  max-width: 1400px; /* Un límite para pantallas ultra-anchas */
  margin-inline: auto; /* Esto centra la sección horizontalmente */
  /* --- FIN DE LA SOLUCIÓN --- */
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
  font-size: 2.6rem;
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
