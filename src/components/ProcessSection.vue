<template>
  <section class="process-section">
    <div class="container">
      <h2 class="section-title text-center">
        Proceso Eficiente para Implementar Nuestros Servicios
      </h2>

      <div class="row gy-4 justify-content-center">
        <div v-for="step in processSteps" :key="step.number" class="col-md-6 col-lg-5">
          <div class="step-card">
            <div class="step-header">
              <div class="step-icon">
                <img :src="getStepImageUrl(step.imageFile)" :alt="step.title" />
              </div>
              <div class="step-number">{{ step.number }}</div>
            </div>
            <div class="step-content">
              <h3>{{ step.title }}</h3>
              <p>{{ step.text }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// 1. Ya NO necesitamos los 'import' de las imágenes
// import imgStep1 from '@/assets/img/steps/step-1.svg' ... (etc.)

// 2. Esta es la nueva función "mágica" de Vite
function getStepImageUrl(name) {
  // Le decimos a Vite que busque las imágenes en la carpeta /src/assets/img/steps/
  // y que construya la URL final para producción.
  return new URL(`/src/assets/img/steps/${name}`, import.meta.url).href
}

// 3. El 'ref' ahora solo contiene el nombre del archivo
const processSteps = ref([
  {
    number: '01',
    imageFile: 'step-1.svg', // <-- Solo el nombre del archivo
    title: 'Evaluación Inicial',
    text: 'Realizamos un diagnóstico de las necesidades de seguridad de tu empresa.',
  },
  {
    number: '02',
    imageFile: 'step-2.svg', // <-- Solo el nombre del archivo
    title: 'Plan de Acción Personalizado',
    text: 'Desarrollamos un programa de visitas y soporte remoto ajustado a las normativas.',
  },
  {
    number: '03',
    imageFile: 'step-3.svg', // <-- Solo el nombre del archivo
    title: 'Seguimiento y Reportes',
    text: 'Emitimos informes detallados después de cada visita para asegurar la mejora continua.',
  },
  {
    number: '04',
    imageFile: 'step-4.svg', // <-- Solo el nombre del archivo
    title: 'Implementación Continua',
    text: 'Aseguramos la implementación efectiva del programa a través de visitas y soporte remoto.',
  },
])
</script>

<style scoped>
@media (max-width: 767.98px) {
  .process-section {
    width: 95%;
    margin-inline: auto;
    padding: 1.3rem 0 2.8rem 0;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .process-section {
    width: 90%;
    margin-inline: auto;
    padding: 3rem 0 3rem 0;
  }
}

@media (min-width: 992px) {
  .process-section {
    width: 83%;
    margin-inline: auto;
    padding: 3rem 0;
  }
}

.process-section {
  background-color: #f1f1f1; /* Un fondo ligeramente distinto para separar secciones */
  border-radius: 30px;
  margin-top: 2.5rem;
  margin-bottom: 1.5rem;
}

.section-title {
  font-weight: 700;
  font-size: 1.9rem;
  color: #0d3c65; /* Azul principal */
  margin-bottom: 3rem;
}

.step-card {
  background-color: #f1f1f1;
  border-radius: 15px;
  padding: 2rem;
  display: flex; /* Usamos flexbox para alinear el ícono y el texto */
  align-items: flex-start; /* Alinea los items arriba */
  gap: 1.5rem; /* Espacio entre el ícono y el contenido */
  height: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.step-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.08);
}

.step-header {
  position: relative;
}

.step-icon {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  flex-shrink: 0; /* Evita que el ícono se encoja */
  background-color: #eaf2f8; /* Azul claro */
  overflow: hidden;
}

.step-icon img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.step-icon i {
  font-size: 2.2rem;
  color: #0d3c65; /* Azul principal */
}

.step-number {
  position: absolute;
  top: -10px;
  right: -10px;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: #fff;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #097539; /* Verde secundario */
  border: 2px solid #fff;
}

.step-content h3 {
  font-size: 1.3rem;
  font-weight: 700;
  color: #2c3c53;
  margin-top: 0;
  margin-bottom: 0.5rem;
}

.step-content p {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 0;
}

/* --- Ajustes Responsivos --- */
@media (max-width: 767.98px) {
  .section-title {
    font-size: 2rem;
  }
  .step-card {
    flex-direction: column; /* Apila el ícono y el texto en móvil */
    align-items: center; /* Centra todo */
    text-align: center;
  }
  .step-icon {
    margin-bottom: 1rem;
  }
}
</style>
