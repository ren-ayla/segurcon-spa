<template>
  <section class="contact-section py-5">
    <div class="container">
      <div class="row gy-5">
        <div class="col-lg-5 col-md-12 border-lg-end border-elegant-gray pe-lg-5 pb-4 pb-lg-0">
          <h2 class="section-title">Contacto</h2>
          <p class="lead">
            Contáctanos hoy y conversemos sobre cómo podemos ayudarte a fortalecer la seguridad y
            sostenibilidad en tu organización.
          </p>
        </div>

        <div class="col-lg-7 col-md-12 ps-lg-5">
          <div class="d-flex flex-column gap-4">
            <div class="contact-info-item d-flex align-items-center">
              <i class="bi bi-telephone-fill contact-icon"></i>
              <div class="ms-3">
                <h5 class="mb-1">Teléfono</h5>
                <a href="tel:+56978079116" class="contact-link">+569 7807 9116</a>
              </div>
            </div>

            <div class="contact-info-item d-flex align-items-center">
              <i class="bi bi-envelope-fill contact-icon"></i>
              <div class="ms-3">
                <h5 class="mb-1">Email</h5>
                <a href="mailto:andreasoto@segurcon.cl" class="contact-link"
                  >andreasoto@segurcon.cl</a
                >
              </div>
            </div>
          </div>

          <hr class="my-4 separator" />

          <div class="whatsapp-cta">
            <h5 class="mb-2">Vía Chat</h5>
            <p>Haz clic en el botón para iniciar una conversación directa por WhatsApp.</p>
            <a href="https://wa.me/56978079116" target="_blank" class="btn btn-accent-whatsapp">
              <i class="bi bi-whatsapp me-2"></i> Iniciar Chat
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// ¡Limpio!
</script>

<style scoped>
@media (max-width: 767.98px) {
  .contact-section {
    width: 100%;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .contact-section {
    width: 100%;
  }
}

@media (min-width: 992px) {
  .contact-section {
    width: 85%;
  }
}

.contact-section {
  --color-primary: #0d3c65; /* Azul principal */
  --color-secondary: #097539; /* Verde secundario */
  --color-accent: #f1c40f; /* Amarillo acento */
  --color-text-dark: #2c3e50; /* Texto oscuro */
  --color-bg-light: #f8f8f8; /* Fondo claro */
  --color-border-gray: #dee2e6; /* Gris de Bootstrap */
  background-color: var(--color-bg-light);
  border-radius: 15px;
  margin-inline: auto;
  padding: 3rem;
  margin-top: 1.6rem;
}

.section-title {
  font-weight: 700;
  font-size: 2.3rem;
  color: var(--color-primary);
  margin-bottom: 1rem;
}

.lead {
  font-size: 1.1rem;
  font-weight: 400;
  color: var(--color-text-dark);
}

/* --- Columna Derecha --- */
.contact-icon {
  font-size: 2.2rem;
  color: var(--color-secondary);
  flex-shrink: 0;
}

.contact-info-item h5 {
  font-weight: 600;
  color: var(--color-primary);
}

.contact-link {
  color: var(--color-text-dark);
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.2s;
  font-weight: 400;
}

.contact-link:hover {
  color: var(--color-secondary);
  text-decoration: underline;
}

/* --- Barra Divisora (Tu punto 2) --- */
/* Esta clase la aplica Bootstrap solo en 'lg' y más grandes */
.border-lg-end {
  border-right-width: 1px !important;
  border-right-style: solid !important;
  border-color: var(--color-border-gray) !important;
}

.separator {
  color: rgba(128, 128, 128, 0.867);
}

/* --- Botón WhatsApp (Tu punto 1) --- */
.btn-accent-whatsapp {
  background-color: var(--color-secondary);
  color: var(--color-bg-light);
  border: none;
  font-weight: 600;
  padding: 0.7rem 1.5rem;
  transition:
    background-color 0.3s,
    color 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
}
.btn-accent-whatsapp:hover {
  background-color: var(--color-accent);
  color: var(--color-text-dark);
}

/* Ajuste responsivo para la barra:
  En pantallas pequeñas ('md' e inferiores), la barra vertical no existe,
  así que le ponemos una barra horizontal inferior a la Col 1.
*/
@media (max-width: 991.98px) {
  .border-lg-end {
    border-right: none !important;
  }
  .col-lg-5 {
    border-bottom: 1px solid var(--color-border-gray);
  }
}
</style>
