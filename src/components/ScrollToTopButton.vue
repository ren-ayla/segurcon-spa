<template>
  <transition name="fade">
    <button
      v-if="isVisible"
      @click="scrollToTop"
      class="scroll-to-top-btn"
      aria-label="Volver arriba"
    >
      <i class="bi bi-arrow-up-circle-fill"></i>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// 1. Estado Reactivo
// Controla si el botón debe ser visible o no
const isVisible = ref(false)

// 2. Métodos
// Función que se ejecuta al hacer scroll
const handleScroll = () => {
  // Si el scroll vertical es mayor a 200px, muestra el botón
  isVisible.value = window.scrollY > 200
}

// Función que se ejecuta al hacer clic en el botón
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth', // <-- La magia para que sea suave
  })
}

// 3. Lifecycle Hooks
// Cuando el componente se "monta" (carga), empezamos a escuchar el scroll
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

// Cuando el componente se "desmonta" (cambia de página), dejamos de escuchar
onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.scroll-to-top-btn {
  position: fixed; /* Fijo en la pantalla */
  bottom: 25px;
  right: 25px;
  z-index: 1000; /* Asegura que esté por encima de otros elementos */

  /* Estilos del botón */
  background-color: #097539; /* Verde (color secundario de tu proyecto) */
  color: white;
  border: none;
  border-radius: 50%; /* Círculo perfecto */
  width: 50px;
  height: 50px;
  font-size: 1.8rem; /* Tamaño del ícono */
  cursor: pointer;

  /* Centrar el ícono (flexbox) */
  display: flex;
  align-items: center;
  justify-content: center;

  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  transition:
    background-color 0.3s,
    transform 0.3s;
}

.scroll-to-top-btn:hover {
  background-color: #0d3c65; /* Azul (color primario de tu proyecto) */
  transform: scale(1.1); /* Un pequeño efecto al pasar el mouse */
}

/* --- 💻 Media Query (Tu solicitud) --- */
/* Para pantallas más pequeñas, hacemos el botón un poco más chico */
@media (max-width: 767.98px) {
  .scroll-to-top-btn {
    bottom: 20px;
    right: 20px;
    width: 45px;
    height: 45px;
    font-size: 1.5rem;
  }
}

/* --- 🌟 Transición de Vue --- */
/* Estilos para la animación de 'fade' */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
