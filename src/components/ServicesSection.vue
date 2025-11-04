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
    imageFile: 'gestion-normativa.webp', // <-- Solo el nombre
    linkUrl: '/servicios/gestion-normativa-y-documentacion',
  },
  {
    title: 'Seguridad Industrial',
    description:
      'Prevenir accidentes laborales derivados de condiciones inseguras o actos inseguros',
    imageFile: 'seguridad-industrial.webp', // <-- Solo el nombre
    linkUrl: '/servicios/seguridad-industrial',
  },
  {
    title: 'Gestión Ambiental',
    description:
      'Minimizar el impacto de las actividades laborales sobre el medio ambiente y cumplir la normativa ambiental.',
    imageFile: 'gestion-ambiental.webp', // <-- Solo el nombre
    linkUrl: '/servicios/gestion-ambiental',
  },
  {
    title: 'Identificación y Control de Riesgos',
    description: 'Evaluamos y gestionamos los riesgos laborales en tu empresa.',
    imageFile: 'control-riesgos.webp', // <-- Solo el nombre
    linkUrl: '/servicios/identificacion-y-control-de-riesgos',
  },
  {
    title: 'Higiene Industrial',
    description:
      'Identificar, evaluar y controlar los agentes contaminantes del ambiente laboral que pueden generar enfermedades profesionales.',
    imageFile: 'higiene-industrial.webp', // <-- Solo el nombre
    linkUrl: '/servicios/higiene-industrial',
  },
  {
    title: 'Medicina del Trabajo',
    description:
      'Proteger la salud de los trabajadores mediante la vigilancia médica y la promoción de hábitos saludables.',
    imageFile: 'medicina-del-trabajo.webp', // <-- Solo el nombre
    linkUrl: '/servicios/medicina-del-trabajo',
  },
  {
    title: 'Capacitación y Formación',
    description: 'Equipos preparados para un entorno laboral seguro.',
    imageFile: 'capacitacion-y-formacion.webp', // <-- Solo el nombre
    linkUrl: '/servicios/capacitacion-y-formacion',
  },
  {
    title: 'Programas Preventivos a Medida',
    description: 'Desarrollamos programas adaptados a las necesidades de tu empresa.',
    imageFile: 'programas-preventivos.webp', // <-- Solo el nombre
    linkUrl: '/servicios/programas-preventivos-a-medida',
  },
  {
    title: 'Cumplimiento Legal y Auditorías',
    description: 'Aseguramos que tu empresa cumpla con todas las normativas vigentes.',
    imageFile: 'cumplimiento-legal.webp', // <-- Solo el nombre
    linkUrl: '/servicios/cumplimiento-legal-y-auditorias',
  },
  {
    title: 'Prevención y Protección contra Incendios',
    description:
      'Evitar la ocurrencia de incendios y reducir sus consecuencias en caso de que ocurran.',
    imageFile: 'prevencion-incendios.webp', // <-- Solo el nombre
    linkUrl: '/servicios/prevencion-y-proteccion-contra-incendios',
  },
  {
    title: 'Asesoría Técnica Especializada',
    description: 'Brindamos soporte técnico en seguridad y salud ocupacional.',
    imageFile: 'asesoria-tecnica.webp', // <-- Solo el nombre
    linkUrl: '/servicios/asesoria-tecnica-especializada',
  },
  {
    title: 'Ver todos los Servicios+',
    description: 'Accede a la lista completa de Servicios.',
    imageFile: 'mas-servicios.png', // <-- Solo el nombre
    linkUrl: '/servicios',
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
