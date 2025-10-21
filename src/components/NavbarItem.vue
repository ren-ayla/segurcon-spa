<template>
  <nav :class="['navbar', 'navbar-expand-lg', 'fixed-top', navbarClass]">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
        <div class="logo-background">
          <img src="@/assets/logos/SEGURCON-logo.png" alt="Segurcon SPA Logo" width="120" />
        </div>
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
          <li class="nav-item"><RouterLink class="nav-link" to="/">Inicio</RouterLink></li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/quienes-somos">Quiénes Somos</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/servicios">Servicios</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contacto">Contacto</RouterLink>
          </li>
        </ul>

        <div class="navbar-button-wrapper">
          <RouterLink class="btn btn-accent" to="/contacto">Cotiza Aquí</RouterLink>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const navbarClass = ref('navbar-transparent')
const handleScroll = () => {
  window.scrollY > 150
    ? (navbarClass.value = 'navbar-solid')
    : (navbarClass.value = 'navbar-transparent')
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
/* --- ESTILOS GENERALES Y CONTENEDOR --- */
.navbar {
  min-height: 160px;
  max-height: 160px;
}

/* 2. Modificamos el .container estándar de Bootstrap SOLO dentro del .navbar */
.navbar .container {
  width: 75%;
  max-width: 1320px; /* Un máximo razonable para pantallas muy grandes */
  position: relative; /* Importante para que nuestros elementos absolutos funcionen */
}

.logo-background {
  background-color: #f1f1f1; /* Nuestro blanco anti-flash, siempre visible */
  padding: 0.4rem;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5); /* Sombra sutil opcional */
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
    gap: 2rem;
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
    background-color: #097539; /* Mismo color del navbar al hacer scroll */
    padding: 1rem;
    border-radius: 0.25rem;
    margin-top: 0.5rem; /* Un pequeño margen para separarlo del logo */
    text-align: center;
  }
}

/* --- Estilos de color y links --- */
.navbar-transparent {
  background-color: transparent !important;
  transition: background-color 0.3s ease-in-out;
}

.navbar-solid {
  background-color: #0d3c65 !important;
  transition: background-color 0.3s ease-in-out;
}

.navbar .nav-link {
  color: #f8f8f8 !important;
  font-weight: 400;
  white-space: nowrap;
}

/* --- NUEVO: Estilo para botón de acento --- */
.btn-accent {
  background-color: #f1c40f; /* Color Acento */
  color: #2c3e50; /* Color Letras Claro */
  border: none;
  font-weight: 600;
  padding: 0.7rem 1.5rem;
  transition:
    background-color 0.3s,
    color 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}
.btn-accent:hover {
  background-color: #f39c12; /* Color Acento Oscuro */
  color: #2c3e50;
}
</style>
