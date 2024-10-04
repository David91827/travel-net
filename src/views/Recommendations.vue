<template>
  <div>
    <section class="search-filter">
      <input v-model="searchQuery" type="text" placeholder="搜尋景點..." />
      <select v-model="selectedCategory">
        <option value="">縣市篩選</option>
        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>
    </section>
    
    <section class="tours">
    <div v-if="filteredAttractions.length === 0" class="no-results">
        <h2>找不到您要的資訊</h2>
      </div>
      <ViewCard v-for="attraction in filteredAttractions" :key="attraction.id" :view="attraction" />
    </section>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount } from 'vue';
import ViewCard from '../components/ViewCard.vue';

// 示例数据
const attractionsData = [
  {
    id: 1,
    title: "台北101",
    image: "/travel-net/images/pic_7927_32.jpg",
    description: "台北市的地標建築，擁有觀景台可俯瞰台北市區。",
    category: "雙北"
  },
  {
    id: 2,
    title: "九份老街",
    image: "/travel-net/images/20230202080741-ba2a536c.jpg",
    description: "新北市的古老街道，擁有許多小吃和手工藝品。",
    category: "雙北"
  },
  {
    id: 3,
    title: "阿里山",
    image: "/travel-net/images/9fe0ea01a2bf479fafdaac07f25c5af4.jpg",
    description: "嘉義縣的著名山脈，擁有壯麗的日出和雲海。",
    category: "雲嘉南"
  },
  {
    id: 4,
    title: "蓮池潭",
    image: "/travel-net/images/pic_2149_18.jpg",
    description: "高雄市的美麗湖泊，擁有悠閒的散步小徑和美麗的風景。",
    category: "高屏"
  },
  // 其他数据
];

export default defineComponent({
  components: { ViewCard },
  setup() {
    const searchQuery = ref('');
    const selectedCategory = ref('');
     const showTopButton = ref(false); // 控制Top按钮的显示
    const categories = ['雙北', '桃竹苗', '中彰投', '雲嘉南', '高屏', '宜花東'];

    const attractions = ref(attractionsData);

    const filteredAttractions = computed(() => {
      return attractions.value.filter(attraction => {
        const matchesQuery = attraction.title.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesCategory = !selectedCategory.value || attraction.category === selectedCategory.value;
        return matchesQuery && matchesCategory;
      });
    });

      const handleScroll = () => {
      showTopButton.value = window.scrollY > 200; // 滚动超过200px时显示按钮
    };

    // 滚动到页面顶部
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });

    onBeforeUnmount(() => {
      window.removeEventListener('scroll', handleScroll);
    });


    return {
      searchQuery,
      selectedCategory,
      categories,
      filteredAttractions,
      showTopButton,
      scrollToTop
    };
  }
});
</script>

<style scoped>

.search-filter {
  padding: 1rem;
  background-color: #f9f9f9;
  text-align: center;
}
.search-filter input, .search-filter select {
  margin: 0.5rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.tours {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 居中对齐 */
  gap: 1rem; /* 调整卡片间距 */
  padding: 1rem; /* 设置容器内边距 */
  box-sizing: border-box; /* 确保内边距不会影响到总宽度 */
  
   background: radial-gradient(circle, #D9F3FA, #44D2EF); /* 设置页面的背景颜色，例如浅灰色 */

}
.tours .tour-card {
  
  max-width: calc(50% - 1rem); /* 限制最大宽度 */
  box-sizing: border-box;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
  background-color:#fff
}
.top-button {
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: #0000CC;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px 15px;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  transition: opacity 0.3s ease;
}

.top-button:hover {
  background-color: #3333ff;
}
.no-results {
  font-size: 1.5rem;
  color: black;
  text-align: center;
  margin-top: 2rem;
}
</style>