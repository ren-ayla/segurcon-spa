<template>
  <header id="inicio">
    <NavbarItem />
  </header>

  <RouterView />

  <FooterComponent />

  <ScrollToTopButton />
</template>

<script>
import FooterComponent from './components/FooterComponent.vue'
import NavbarItem from './components/NavbarItem.vue'
import ScrollToTopButton from './components/ScrollToTopButton.vue'

export default {
  name: 'App',
  components: {
    NavbarItem,
    ScrollToTopButton,
    FooterComponent,
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
