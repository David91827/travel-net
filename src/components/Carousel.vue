<template>
  <div class="carousel-container">
    <div class="carousel" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="carousel-item" v-for="(image, index) in images" :key="index">
        <img :src="image" alt="carousel image" />
      </div>
    </div>
    <button @click="prevSlide" class="carousel-control prev">‹</button>
    <button @click="nextSlide" class="carousel-control next">›</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Carousel',
  props: {
    images: {
      type: Array as () => string[],
      required: true,
    },
  },
  setup(props) {
    const currentIndex = ref(0);

    function nextSlide() {
      currentIndex.value = (currentIndex.value + 1) % props.images.length;
    }

    function prevSlide() {
      currentIndex.value =
        (currentIndex.value - 1 + props.images.length) % props.images.length;
    }

    return {
      currentIndex,
      nextSlide,
      prevSlide,
    };
  },
});
</script>

<style scoped>
.carousel-container {
  position: relative;
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  margin: auto;
}

.carousel {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.carousel-item {
  min-width: 100%;
}

.carousel-item img {
  width: 100%;
  display: block;
}

.carousel-control {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.7); /* 半透明黑色背景 */
  border: 2px solid #ffffff; /* 白色边框 */
  border-radius: 50%; /* 圆形按钮 */
  width: 40px; /* 按钮大小 */
  height: 40px; /* 按钮大小 */
  font-size: 1.5rem; /* 字体大小 */
  color: white; /* 字体颜色 */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
</style>

