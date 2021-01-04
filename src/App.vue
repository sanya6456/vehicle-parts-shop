<template>
  <Navigation/>
  <div class="landing-page">
      <router-view/>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue';

export default {
  name: 'App',
  components: {
    Navigation,
  }
}
</script>

<style lang="scss">
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
#app {
  font-family: Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.landing-page{
  min-height: 100vh;
  width: 100%;
  margin: 0;
}
</style>
