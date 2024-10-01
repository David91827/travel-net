<template>
  <div id="app">
    <Header />
    <router-view />
    <BackToTop />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import BackToTop from './components/BackToTop.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,BackToTop
  },
});
</script>



<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
