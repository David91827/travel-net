<template>
  <div>
    <section class="search-filter">
      <input v-model="searchQuery" type="text" placeholder="搜尋住宿..." />
      <select v-model="selectedCategory">
        <option value="">縣市篩選</option>
        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>
    </section>
    
    <section class="tours">
    <div>
    <div v-if="filteredHotels.length === 0" class="no-results">
        <h2>找不到您要的資訊</h2>
      </div>
    </div>
      <HotelCard v-for="hotel in filteredHotels" :key="hotel.id" :hotel="hotel" />
    </section>
   
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount } from 'vue';
import HotelCard from '../components/HotelCard.vue';

const hotelsData = [
  {
    id: 1,
    title: "天方夜譚民宿",
    image: "/images/50c12a99_z.jpg",
    description: "位於九份老街旁，黃色外牆格外顯眼",
    category: "雙北"
  },
  {
    id: 2,
    title: "水筠間民宿",
    image: "/images/9713_201510261427186481_268.jpg",
    description: "具樣各式各樣主題房型的民宿。",
    category: "宜花東"
  },
  // 更多住宿数据
];

export default defineComponent({
  components: { HotelCard },
  setup() {
    const searchQuery = ref('');
    const selectedCategory = ref('');
    
    const categories = ['雙北', '桃竹苗', '中彰投', '雲嘉南', '高屏', '宜花東'];

    const hotels = ref(hotelsData);

    const filteredHotels = computed(() => {
      return hotels.value.filter(hotel => {
        const matchesQuery = hotel.title.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesCategory = !selectedCategory.value || hotel.category === selectedCategory.value;
        return matchesQuery && matchesCategory;
      });
    });

     

   

    return {
      searchQuery,
      selectedCategory,
      categories,
      filteredHotels
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
   display: flex;
  flex-wrap: wrap;
  justify-content: center; /* 居中对齐 */
  gap: 1rem; /* 调整卡片间距 */
  padding: 1rem; /* 设置容器内边距 */
  box-sizing: border-box; /* 确保内边距不会影响到总宽度 */
  
   background: radial-gradient(circle, #D9F3FA, #44D2EF); /* 设置页面的背景颜色，例如浅灰色 */}
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
.no-results {
  font-size: 1.5rem;
  color: black;
  text-align: center;
  margin-top: 2rem;
}

.top-button:hover {
  background-color: #3333ff;
}
</style>
