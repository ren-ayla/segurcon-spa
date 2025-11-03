<template>
  <div class="content-wrapper">
    <div class="container">
      <slot></slot>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
.content-wrapper {
  position: relative;
  top: -30px;
  background-color: #f1f1f1;
  max-width: 1400px;
  margin-inline: auto;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  box-shadow: 0 -10px 30px rgba(0, 0, 0, 0.08);
  grid-row: 2 / 3; /* Le decimos: "vive en la fila 2" */
  grid-column: 1 / 2;
  z-index: 10;
}

/* Ajuste responsivo para móviles */
@media (max-width: 767.98px) {
  .content-wrapper {
    width: 100%;
    border-radius: 0px;
    padding: 0rem 0rem;
  }
}

@media (min-width: 768px) and (max-width: 991.98px) {
  .content-wrapper {
    width: 90%;
    padding: 2rem 0rem 0rem;
  }
}

@media (min-width: 991.98px) {
  .content-wrapper {
    width: 83%;
    padding: 2rem 2rem 0rem;
  }
}
</style>
