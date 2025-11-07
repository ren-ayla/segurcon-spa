<template>
  <section class="about-intro-section">
    <div class="container about-intro-container">
      <div class="row justify-content-center">
        <div class="col-12 text-center info-block quienes-somos-block">
          <h3>¿Quiénes Somos?</h3>
          <hr class="separator" />
          <p>
            En <span class="info-highlight">SEGURCON SPA</span>, protegemos a las Personas y al
            Medio Ambiente, entregando soluciones en prevención de riesgos que fortalecen la
            seguridad y sostenibilidad en cada organización.
          </p>
          <p class="slogan">"Seguridad que cuida, confianza que perdura.”</p>
        </div>
      </div>

      <div class="row justify-content-center gy-4">
        <div class="col-md-6 text-center info-block">
          <h3>Misión</h3>
          <hr class="separator" />
          <p>
            Proteger a las personas y al Medio Ambiente, entregando soluciones integrales en
            prevención de riesgos que promuevan una cultura segura y sostenible en cada
            organización.
          </p>
        </div>

        <div class="col-md-6 text-center info-block">
          <h3>Visión</h3>
          <hr class="separator" />
          <p>
            Ser referentes en Seguridad y Medio Ambiente, transformando la prevención en un valor
            esencial para empresas responsables y sostenibles.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Este componente es puramente visual, no necesita lógica.
</script>

<style scoped>
.about-intro-container {
  width: 85%;
  margin: auto;
}

/* --- Estilos Generales para los Bloques --- */
.info-block {
  padding: 1rem;
}

.info-block h3 {
  font-size: 2.2rem;
  font-weight: 700;
  color: #0d3c65; /* Azul principal */
  margin-bottom: 0.75rem;
}

.info-block p {
  font-size: 1rem;
  color: #2c3e50; /* Gris carbón */
  line-height: 1.7;
}

.info-highlight {
  color: #097539; /* Verde secundario */
  font-weight: 700;
}

/* --- Estilos Específicos para "Quiénes Somos" (más grande) --- */
.quienes-somos-block {
  margin-bottom: 2.3rem;
}

.quienes-somos-block p {
  font-size: 1.1rem; /* Texto más grande */
}

/* --- Estilos para la Barra Separadora --- */
.separator {
  width: 80px;
  height: 4px;
  margin: 0 auto 1.5rem auto; /* Centra la barra */
  background-color: #097539; /* Verde secundario */
  border: none;
  opacity: 1;
}

/* --- Estilo para el Lema --- */
.slogan {
  font-family: 'Courier New', Courier, monospace;
  font-style: italic;
  font-weight: 600;
  color: #097539 !important; /* Verde secundario */
  margin-top: 1.5rem;
  font-size: 1.3rem !important;
  opacity: 0.9;
  overflow-wrap: break-word;
}

/* --- Ajustes Responsivos --- */
@media (max-width: 767.98px) {
  .quienes-somos-block h3 {
    font-size: 2.2rem;
    padding: 1.5rem 0 0 0;
  }

  .about-intro-container {
    width: 95%;
  }

  .about-intro-section {
    padding: 1.3rem 0 3rem;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .about-intro-container {
    width: 90%;
  }

  .about-intro-section {
    padding-bottom: 3rem;
  }

  .quienes-somos-block h3 {
    font-size: 2.4rem;
    padding: 1.5rem 0 0 0;
  }
}

@media (min-width: 992px) {
  .about-intro-section {
    width: 83%;
    margin: auto;
    padding-bottom: 3rem;
  }

  .quienes-somos-block h3 {
    font-size: 2.5rem; /* Título más grande */
    padding-top: 1.5rem;
  }
}
</style>
