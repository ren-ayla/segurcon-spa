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
                <i :class="['bi', step.icon]"></i>
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

// Los datos no cambian, solo la forma en que los mostramos.
const processSteps = ref([
  {
    number: '01',
    icon: 'bi-clipboard-check',
    title: 'Evaluación Inicial',
    text: 'Realizamos un diagnóstico de las necesidades de seguridad de tu empresa.',
  },
  {
    number: '02',
    icon: 'bi-calendar2-week',
    title: 'Plan de Acción Personalizado',
    text: 'Desarrollamos un programa de visitas y soporte remoto ajustado a las normativas.',
  },
  {
    number: '03',
    icon: 'bi-file-earmark-text',
    title: 'Seguimiento y Reportes',
    text: 'Emitimos informes detallados después de cada visita para asegurar la mejora continua.',
  },
  {
    number: '04',
    icon: 'bi-arrow-repeat',
    title: 'Implementación Continua',
    text: 'Aseguramos la implementación efectiva del programa a través de visitas y soporte remoto.',
  },
])
</script>

<style scoped>
.process-section {
  padding: 1rem 0;
  background-color: #f1f1f1; /* Un fondo ligeramente distinto para separar secciones */
}

.section-title {
  font-weight: 700;
  font-size: 2.1rem;
  color: #0d3c65; /* Azul principal */
  margin-bottom: 4rem;
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0; /* Evita que el ícono se encoja */
  background-color: #eaf2f8; /* Azul claro */
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
