<template>
  <section class="about-section">
    <div class="container about-container">
      <div class="quienes-somos text-center">
        <h2 class="section-title">¿Quiénes Somos?</h2>
        <p class="lead-text">
          En <span class="lead-text-highlight">SEGURCON SPA</span>, protegemos a las Personas y al
          Medio Ambiente, entregando soluciones en prevención de riesgos que fortalecen la seguridad
          y sostenibilidad en cada organización.
        </p>
      </div>

      <div class="nuestro-enfoque">
        <h2 class="section-title-2 text-center">Nuestro Enfoque</h2>

        <div class="row align-items-center feature-row">
          <div class="col-md-6">
            <img :src="imagenSeguridad" alt="Casco con Logo 'Safety First'" class="feature-image" />
          </div>
          <div class="col-md-6">
            <div class="feature-text">
              <h3>Seguridad</h3>
              <p>
                Protegemos a las personas y el entorno mediante la identificación y control de
                peligros, cumplimiento de normas de seguridad y capacitación en uso de equipos y
                respuesta a emergencias.
                <br />
                <br />
                <span class="feature-text-highlight">
                  Nuestro Compromiso: Operaciones seguras.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="row align-items-center feature-row">
          <div class="col-md-6 order-md-2">
            <img
              :src="imagenSalud"
              alt="Profesionales de la Industria de la Limpieza con Equipo de Protección"
              class="feature-image"
            />
          </div>
          <div class="col-md-6 order-md-1">
            <div class="feature-text">
              <h3>Salud Ocupacional</h3>
              <p>
                Cuidamos el bienestar de los trabajadores con programas de promoción y prevención en
                salud, evaluaciones médicas periódicas y la creación de espacios de trabajo seguros
                y ergonómicos.
                <br /><br />
                <span class="feature-text-highlight">
                  Nuestro Objetivo: Personas sanas, equipos más productivos.
                </span>
              </p>
            </div>
          </div>
        </div>

        <div class="row align-items-center feature-row">
          <div class="col-md-6">
            <img :src="imagenAmbiente" alt="Energía Verde y Sustentable" class="feature-image" />
          </div>
          <div class="col-md-6">
            <div class="feature-text">
              <h3>Medio Ambiente</h3>
              <p>
                Protegemos el planeta a través del uso eficiente de recursos y energía, el manejo
                responsable de residuos y el cumplimiento de normativas ambientales.
                <br /><br />
                <span class="feature-text-highlight">
                  Nuestro Compromiso: Operar de forma sostenible y reducir el impacto ambiental.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import imagenSeguridad from '@/assets/img/about/seguridad.webp'
import imagenSalud from '@/assets/img/about/salud.webp'
import imagenAmbiente from '@/assets/img/about/ambiente.webp'
</script>

<style scoped>
.about-section {
  background-color: #f1f1f1; /* Fondo blanco para esta sección */
  position: relative;
  z-index: 10;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.08);
  margin-inline: auto; /* Esto centra la sección horizontalmente */
  margin-top: 3rem;
}

.about-container {
  margin: auto;
}

/* --- Estilos para "¿Quiénes Somos?" --- */
.quienes-somos {
  margin-bottom: 4rem;
}

.lead-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #2c3e50; /* Gris carbón */
  margin: 0 auto; /* Centra el párrafo si es más angosto */
}

.lead-text-highlight {
  color: #097539; /* Verde secundario */
  font-weight: 700;
}

/* --- Estilos para "Nuestro Enfoque" --- */
.feature-image {
  width: 100%;
  height: 300px; /* Mantenemos la altura fija para un look uniforme */
  object-fit: cover; /* ¡Esta es la magia! Evita que la imagen se deforme */
  border-radius: 15px; /* Mantenemos los bordes redondeados */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); /* Sombra sutil para dar profundidad */
}

.feature-text {
  padding: 0 2rem;
}

.feature-text h3 {
  font-weight: 600;
  font-size: 1.8rem;
  color: #097539; /* Verde secundario */
  margin-bottom: 1rem;
}

.feature-text p {
  font-size: 1rem;
  line-height: 1.7;
  color: #2c3e50;
}

.feature-text-highlight {
  color: #0d3c65; /* Azul principal */
  font-weight: 600;
}

/* --- Ajustes Responsivos --- */
@media (max-width: 767.98px) {
  .about-section {
    width: 90%; /* Ocupa más espacio en móviles */
    padding: 5rem 0 0rem 0;
  }

  .about-container {
    width: 90%;
  }

  .lead-text {
    max-width: 500px;
  }

  .section-title {
    font-weight: 700;
    font-size: 2rem;
    color: #0d3c65; /* Azul principal */
    margin-bottom: 1.5rem;
  }

  .section-title-2 {
    font-weight: 700;
    font-size: 2rem;
    color: #0d3c65; /* Azul principal */
    margin-bottom: 2.5rem;
  }

  .feature-text {
    padding: 1.5rem 0;
    text-align: center;
  }
  .feature-row {
    padding-bottom: 1rem;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .about-section {
    width: 90%;
    padding: 5rem 0 1rem 0;
  }

  .about-container {
    width: 95%; /* Ocupa más espacio en tablets */
  }

  .lead-text {
    max-width: 600px;
  }

  .section-title {
    font-weight: 700;
    font-size: 2.6rem;
    color: #0d3c65; /* Azul principal */
    margin-bottom: 1.5rem;
  }

  .section-title-2 {
    font-weight: 700;
    font-size: 2.6rem;
    color: #0d3c65; /* Azul principal */
    padding-bottom: 3rem;
  }

  .feature-row {
    padding-bottom: 2.5rem;
  }
}

@media (min-width: 992px) {
  .about-section {
    width: 83%; /* Hacemos que la sección ocupe el 85% del ancho */
    max-width: 1400px; /* Un límite para pantallas ultra-anchas */
    padding: 5rem 0 4rem 0;
  }

  .about-container {
    max-width: 1090px;
  }

  .lead-text {
    max-width: 800px;
  }

  .section-title {
    font-weight: 700;
    font-size: 2.35rem;
    color: #0d3c65; /* Azul principal */
    padding-bottom: 1.5rem;
  }

  .section-title-2 {
    font-weight: 700;
    font-size: 2.35rem;
    color: #0d3c65; /* Azul principal */
    padding-bottom: 3rem;
  }

  .feature-row {
    padding-bottom: 2.5rem;
  }
}
</style>
