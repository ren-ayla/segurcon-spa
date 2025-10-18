<template>
  <NavbarItem />
  <HeroCarousel />
</template>

<script>
import NavbarItem from './components/NavbarItem.vue'
import HeroCarousel from './components/HeroCarousel.vue'

export default {
  name: 'App',
  components: {
    NavbarItem,
    HeroCarousel,
  },
}
</script>

<style global>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>

