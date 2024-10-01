<template>
  <header class="main-header">
    <nav>
      <ul>
        <li><router-link to="/">首頁</router-link></li>
        <li><router-link to="/about">關於我們</router-link></li>
        <li><router-link to="/packages">包裝行程</router-link></li>
        <li><router-link to="/recommendations">熱門景點</router-link></li>
        <li><router-link to="/accommodation">合作民宿</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
});
</script>

<style scoped>
.main-header {
  background-color: #007bff;
  padding: 10px 0;
}

nav ul {
  display: flex;
  justify-content: center;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

nav ul li {
  margin: 0 15px;
}

nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

nav ul li a:hover {
  text-decoration: underline;
}
</style>
