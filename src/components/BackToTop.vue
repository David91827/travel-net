<!-- src/components/BackToTop.vue -->
<template>
  <button v-if="isVisible" class="back-to-top" @click="scrollToTop">
    ⬆️
  </button>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount } from 'vue';

export default defineComponent({
  name: 'BackToTop',
  setup() {
    const isVisible = ref(false);

    const handleScroll = () => {
      
      isVisible.value = window.scrollY > 500;
    };

    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // 添加滚动监听事件
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    // 在组件销毁前移除事件监听
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });

    return {
      isVisible,
      scrollToTop
    };
  }
});
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: #0000CC;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 15px;
  font-size: 24px;
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.back-to-top:hover {
  background-color: #0033CC;
}
</style>
