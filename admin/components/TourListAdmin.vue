<template>
  <div>
    <h2>行程列表</h2>
    <ul>
      <li v-for="tour in tours" :key="tour.id">
        {{ tour.title }}
        <router-link :to="`/edit/${tour.id}`">编辑</router-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  setup() {
    const tours = ref([]);

    onMounted(async () => {
      const response = await fetch('/data/tours.json');
      tours.value = await response.json();
    });

    return {
      tours
    };
  }
});
</script>
