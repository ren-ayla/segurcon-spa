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
  background-color: #f1f1f1;
  width: 85%;
  max-width: 1400px;
  margin-inline: auto;
  padding: 4rem 2rem 0rem;
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
    padding: 3rem 1.5rem;
  }
}
</style>
