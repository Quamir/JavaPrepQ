<template>
  <section>
    <vue-header/>
    <router-view></router-view>
    <vue-footer/>
  </section>
</template>

<script>
import VueHeader from './components/VueHeader.vue';
import VueFooter from './components/VueFooter.vue';
export default {
  components: { VueHeader, VueFooter }

}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0;
}
</style>
