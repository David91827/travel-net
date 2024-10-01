<template>
  <div>
    <h2>新增行程</h2>
    <form @submit.prevent="addTour">
      <input v-model="title" placeholder="标题" />
      <input v-model="image" placeholder="图片链接" />
      <textarea v-model="description" placeholder="描述"></textarea>
      <button type="submit">添加行程</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const title = ref('');
    const image = ref('');
    const description = ref('');

    const addTour = async () => {
      const newTour = { title: title.value, image: image.value, description: description.value };
      const response = await fetch('/data/tours.json');
      const tours = await response.json();
      tours.push(newTour);
      await fetch('/data/tours.json', {
        method: 'PUT',
        body: JSON.stringify(tours),
        headers: { 'Content-Type': 'application/json' }
      });
    };

    return {
      title,
      image,
      description,
      addTour
    };
  }
});
</script>
