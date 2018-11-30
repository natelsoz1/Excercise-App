<template>
  <div id="app" class="container">
    <div class="display-3">
      <img alt="Zexercise logo" src="./assets/logo.png" id="logo" >
      Zexcercise
    </div>
    <Nav />
    <router-view/>
  </div>
</template>

<style lang="scss">
@import "../node_modules/bootstrap/scss/bootstrap.scss";
#logo { height: 75px;}
</style>

<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue';

export default {
  name: 'home',
  components: {
    Nav
  }
}
</script>
