<template>
  <nav class="navbar navbar-expand-lg fixed-top">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">
        <img src="@/assets/logos/SEGURCON-logo.webp" alt="Segurcon SPA Logo" width="120" />
      </RouterLink>

      <!--
        PASO 3: MODIFICAR EL BOTÓN
        - Quitamos data-bs-toggle y data-bs-target
        - Añadimos la ref="togglerButtonRef"
        - Añadimos el evento @click="handleTogglerClick"
      -->
      <button
        ref="togglerButtonRef"
        class="navbar-toggler"
        type="button"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
        @click="handleTogglerClick"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!--
        PASO 4: MODIFICAR EL CONTENEDOR COLAPSABLE
        - Añadimos la ref="collapseElementRef"
      -->
      <div class="collapse navbar-collapse" id="navbarNav" ref="collapseElementRef">
        <ul class="navbar-nav">
          <!--
            PASO 5: AÑADIR EVENTO DE CIERRE A LOS LINKS
            - Añadimos @click="closeNavbarCollapse" a CADA link del menú
          -->
          <li class="nav-item">
            <RouterLink class="nav-link" to="/" @click="closeNavbarCollapse">INICIO</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/quienes-somos" @click="closeNavbarCollapse"
              >QUIÉNES SOMOS</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/servicios" @click="closeNavbarCollapse"
              >SERVICIOS</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contacto" @click="closeNavbarCollapse"
              >CONTACTO</RouterLink
            >
          </li>
        </ul>

        <div class="navbar-button-wrapper">
          <!-- También añadimos el evento al botón de cotizar -->
          <a
            href="https://wa.me/56978079116"
            class="btn btn-accent"
            target="_blank"
            rel="noopener noreferrer"
            @click="closeNavbarCollapse"
            >COTIZA AQUÍ</a
          >
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
// PASO 1: IMPORTAR TODO LO NECESARIO
import { ref, onMounted, onUnmounted } from 'vue'
// Importamos la clase 'Collapse' directamente desde Bootstrap
import { Collapse } from 'bootstrap'

// PASO 2: COPIAR TODA LA LÓGICA DE MANEJO MANUAL
// --- Lógica para el menú colapsable ---
const collapseElementRef = ref(null)
const togglerButtonRef = ref(null)
let bsCollapseInstance = null // Mantenemos nuestra instancia manual

onMounted(() => {
  if (collapseElementRef.value) {
    // Creamos la instancia de Bootstrap pero le decimos que NO la abra al inicio
    bsCollapseInstance = new Collapse(collapseElementRef.value, {
      toggle: false,
    })
  }
  // Añadimos el listener para "clic afuera"
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  // Limpiamos todo al cambiar de vista
  document.removeEventListener('click', handleClickOutside)
  if (bsCollapseInstance) {
    bsCollapseInstance.dispose()
  }
})

// Función para cerrar el menú (la usaremos en los links)
function closeNavbarCollapse() {
  if (
    bsCollapseInstance &&
    collapseElementRef.value &&
    collapseElementRef.value.classList.contains('show')
  ) {
    bsCollapseInstance.hide()
  }
}

// Función para el clic EN el botón (toggle)
function handleTogglerClick() {
  if (bsCollapseInstance) {
    bsCollapseInstance.toggle()
  }
}

// Función para clics afuera
function handleClickOutside(event) {
  const isTogglerClick =
    togglerButtonRef.value &&
    (togglerButtonRef.value === event.target || togglerButtonRef.value.contains(event.target))
  const isMenuOpen = collapseElementRef.value && collapseElementRef.value.classList.contains('show')

  // Si el menú está abierto Y el clic NO FUE en el botón Y el clic NO FUE dentro del menú... ciérralo.
  if (isMenuOpen && !isTogglerClick && !collapseElementRef.value.contains(event.target)) {
    closeNavbarCollapse()
  }
}
</script>

<style scoped>
/* --- TUS ESTILOS ORIGINALES (SIN CAMBIOS) --- */
.navbar {
  min-height: 130px;
  max-height: 130px;
  background-color: #f8f8f8;
  box-shadow: 0 4px 5px rgba(0, 0, 0, 0.15);
}

.navbar .container {
  width: 75%;
  max-width: 1320px;
  position: relative;
}

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

@media (max-width: 991.98px) {
  .navbar .container {
    width: 90%;
  }

  .navbar-collapse {
    text-align: center;
    padding-top: 1rem;
  }

  .navbar-collapse {
    background-color: #f8f8f8;
    padding: 1rem;
    border-radius: 0.25rem;
    margin-top: 0.5rem;
    text-align: center;
    margin-top: 0.3rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.5);
  }

  .btn-accent {
    margin-top: 1rem;
    width: 150px;
  }
}

.navbar .nav-link {
  color: #2c3e50 !important;
  font-weight: 500;
  white-space: nowrap;
  font-size: 0.95rem;
}

.btn-accent {
  background-color: #097539;
  color: #f8f8f8;
  border: none;
  font-weight: 600;
  padding: 0.7rem 1.5rem;
  transition:
    background-color 0.3s,
    color 0.3s;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
}
.btn-accent:hover {
  background-color: #f1c40f;
  color: #2c3e50;
}
</style>
