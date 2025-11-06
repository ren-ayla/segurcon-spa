<template>
  <header id="inicio">
    <NavbarItem />
  </header>

  <RouterView />

  <ScrollToTopButton />
</template>

<script>
import NavbarItem from './components/NavbarItem.vue'
import ScrollToTopButton from './components/ScrollToTopButton.vue'

export default {
  name: 'App',
  components: {
    NavbarItem,
    ScrollToTopButton,
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
  padding-top: 130px;
}
</style>
