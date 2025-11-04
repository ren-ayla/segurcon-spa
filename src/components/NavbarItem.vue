<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
        <img src="@/assets/logos/SEGURCON-logo.webp" alt="Segurcon SPA Logo" width="120" />
      </RouterLink>

      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item"><RouterLink class="nav-link" to="/">INICIO</RouterLink></li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/quienes-somos">QUIÉNES SOMOS</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/servicios">SERVICIOS</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contacto">CONTACTO</RouterLink>
          </li>
        </ul>

        <div class="navbar-button-wrapper">
          <RouterLink class="btn btn-accent" to="/contacto">COTIZA AQUÍ</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// ¡Limpio! Toda la lógica de scroll que comentaste fue eliminada.
</script>

<style scoped>
/* --- ESTILOS GENERALES Y CONTENEDOR --- */
.navbar {
  min-height: 130px;
  max-height: 130px;
  background-color: #f8f8f8;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);
}

/* 2. Modificamos el .container estándar de Bootstrap SOLO dentro del .navbar */
.navbar .container {
  width: 75%;
  max-width: 1320px; /* Un máximo razonable para pantallas muy grandes */
  position: relative; /* Importante para que nuestros elementos absolutos funcionen */
}

/* --- ESTILOS PARA LA VERSIÓN DESKTOP (992px en adelante) --- */
@media (min-width: 992px) {
  .navbar-brand {
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
  }

  .navbar-nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    gap: 1.7rem;
  }

  .navbar-button-wrapper {
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    display: block;
  }

  .navbar-collapse {
    width: 100%;
  }
}

/* --- ESTILOS PARA LA VERSIÓN MÓVIL (menos de 992px) --- */
@media (max-width: 991.98px) {
  .navbar .container {
    width: 90%;
  }

  /* El menú desplegado se centrará correctamente */
  .navbar-collapse {
    text-align: center;
    padding-top: 1rem;
  }

  /* Le damos un fondo al menú desplegado */
  .navbar-collapse {
    background-color: #f8f8f8; /* Mismo color del navbar al hacer scroll */
    padding: 1rem;
    border-radius: 0.25rem;
    margin-top: 0.5rem; /* Un pequeño margen para separarlo del logo */
    text-align: center;
    margin-top: 0.3rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  }

  .btn-accent {
    margin-top: 1rem; /* Espacio arriba del botón */
    width: 150px;
  }
}

/* --- Estilos de color y links --- */
.navbar .nav-link {
  color: #2c3e50 !important;
  font-weight: 500;
  white-space: nowrap;
  font-size: 0.95rem;
}

/* --- NUEVO: Estilo para botón de acento --- */
.btn-accent {
  background-color: #097539; /* Color Acento */
  color: #f8f8f8; /* Color Letras Claro */
  border: none;
  font-weight: 600;
  padding: 0.7rem 1.5rem;
  transition:
    background-color 0.3s,
    color 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}
.btn-accent:hover {
  background-color: #f1c40f; /* Color Acento Oscuro */
  color: #2c3e50;
}
</style>
