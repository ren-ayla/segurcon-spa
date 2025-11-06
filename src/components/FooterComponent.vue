<template>
  <footer class="footer-section">
    <div class="container">
      <div class="row gy-4">
        <div class="col-lg-5 col-md-4 col-12 footer-col text-center text-md-start">
          <RouterLink to="/">
            <img :src="logoUrl" alt="Segurcon SPA Logo" class="footer-logo" />
          </RouterLink>
          <p class="footer-slogan mt-3">"Seguridad que cuida, confianza que perdura.”</p>
        </div>

        <div class="col-lg-3 col-md-4 col-12 footer-col text-center text-md-start">
          <h5 class="footer-title">Enlaces Rápidos</h5>
          <ul class="footer-links">
            <li><RouterLink to="/">Inicio</RouterLink></li>
            <li><RouterLink to="/quienes-somos">Quiénes Somos</RouterLink></li>
            <li><RouterLink to="/servicios">Servicios</RouterLink></li>
            <li><RouterLink to="/contacto">Contacto</RouterLink></li>
            <li>
              <a href="https://wa.me/56978079116" target="_blank" rel="noopener noreferrer"
                >Cotiza Aquí</a
              >
            </li>
            <li>
              <a href="https://wa.me/56978079116" target="_blank" rel="noopener noreferrer"
                >Trabaja con Nosotros</a
              >
            </li>
          </ul>
        </div>

        <div class="col-lg-3 col-md-4 col-12 footer-col text-center text-md-start">
          <h5 class="footer-title">Contacto</h5>
          <ul class="footer-contact">
            <li>
              <i class="bi bi-telephone-fill"></i>
              <a href="tel:+56978079116">+569 7807 9116</a>
            </li>
            <li>
              <i class="bi bi-envelope-fill"></i>
              <a href="mailto:andreasoto@segurcon.cl">andreasoto@segurcon.cl</a>
            </li>
            <li>
              <i class="bi bi-whatsapp"></i>
              <a href="https://wa.me/56978079116" target="_blank" rel="noopener noreferrer"
                >WhatsApp</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <hr class="footer-separator" />
          <p class="footer-copyright text-center">
            &copy; {{ new Date().getFullYear() }} SegurCon SPA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const logoUrl = new URL('@/assets/logos/logo-alt.webp', import.meta.url).href
</script>

<style scoped>
/* Variables de color de la marca (basadas en los otros componentes y el brochure) */
:root {
  --color-primary: #0d3c65; /* Azul principal */
  --color-secondary: #097539; /* Verde secundario */
  --color-text-dark: #2c3e50; /* Gris carbón (Nuestro fondo) */
  --color-text-light: #f1f1f1; /* Gris claro/Blanco */
}

.footer-section {
  background-color: #f1f1f1;
  color: var(--color-text-light);
  padding: 4rem 0 2rem 0;
  margin-top: 3rem; /* Añade un espacio antes de que comience el footer */
  box-shadow: 0 -8px 20px -5px rgba(0, 0, 0, 0.05);
}

@media (max-width: 767.98px) {
  .footer-logo {
    max-width: 200px; /* Ajusta el tamaño del logo como estimes */
    opacity: 0.9;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .footer-logo {
    max-width: 200px; /* Ajusta el tamaño del logo como estimes */
    opacity: 0.9;
  }
}

@media (min-width: 992px) {
  .footer-logo {
    max-width: 270px; /* Ajusta el tamaño del logo como estimes */
    opacity: 0.9;
  }
}

.footer-slogan {
  font-family: 'Courier New', Courier, monospace;
  font-style: italic;
  color: #097539;
  opacity: 0.8;
  font-size: 1rem;
}

.footer-title {
  font-weight: 700;
  font-size: 1.25rem;
  color: #0d3c65;
  margin-bottom: 1.5rem;
}

/* Estilos para ambas listas */
.footer-links,
.footer-contact {
  list-style: none;
  padding-left: 0;
}

.footer-links li,
.footer-contact li {
  margin-bottom: 0.8rem;
}

/* Estilos para todos los links del footer */
.footer-links a,
.footer-contact a {
  color: #2c3e50ea;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 1rem;
  font-weight: 500;
}

.footer-links a:hover,
.footer-contact a:hover {
  text-decoration: underline;
}

/* Iconos de contacto */
.footer-contact i {
  margin-right: 0.75rem;
  color: #097539;
  font-size: 1.2rem;
  width: 20px; /* Ayuda a alinear el texto verticalmente */
}

/* Separador y Copyright */
.footer-separator {
  border-top: 1px solid #2c3e5061;
  margin: 2.5rem 0 1.5rem 0;
}

.footer-copyright {
  color: #2c3e509a;
  font-size: 0.9rem;
  margin-bottom: 0;
}

/* --- Ajuste Responsivo para Móvil --- */
@media (max-width: 767.98px) {
  .footer-col {
    /* Forzamos el centrado en móvil, sobreescribiendo text-md-start */
    text-align: center !important;
  }

  .footer-logo {
    margin-inline: auto; /* Centra la imagen */
  }

  .footer-section {
    padding-top: 3rem;
  }

  .footer-title {
    margin-top: 1rem; /* Espacio extra entre columnas apiladas */
    margin-bottom: 1rem;
  }
}
</style>
