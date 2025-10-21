<template>
  <header id="inicio">
    <NavbarItem />
  </header>

  <RouterView />
  <ProcessSection />
</template>

<script>
import NavbarItem from './components/NavbarItem.vue'

export default {
  name: 'App',
  components: {
    NavbarItem,
  },
}
</script>

<style global>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #f1f1f1;
}
</style>
