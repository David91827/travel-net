<template>
  <div class="os">
    <div style="border:10px #0066CC solid;width:70%;">
      <h1>關於我們</h1>
      <div v-html="content"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const content = ref('');

// 当组件挂载时，加载 .txt 文件内容
onMounted(async () => {
  try {
    const response = await fetch('/travel-net/hi.txt'); // 确保路径正确
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const text = await response.text();
    content.value = text;
  } catch (error) {
    console.error('Error fetching .txt file:', error);
  }
});
</script>

<style scoped>
.os {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  background: radial-gradient(circle, #D9F3FA, #44D2EF);
}
</style>
