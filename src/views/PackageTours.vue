<template>
  <div>
    <section class="search-filter">
      <input v-model="searchQuery" type="text" placeholder="搜尋行程..." />
      <select v-model="selectedCategory">
        <option value="">縣市篩選</option>
        <option v-for="category in categories" :key="category" :value="category">{{ category }}</option>
      </select>
      <input v-model="selectedMonth" type="month" />
    </section>
    
     <section class="tours">
      <div v-if="filteredTours.length === 0" class="no-results">
        <h2>找不到您要的資訊</h2>
      </div>
      <TourCard v-else v-for="tour in filteredTours" :key="tour.id" :tour="tour" />
    </section>
   
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount } from 'vue'; // 确保这里正确导入 onMounted
import TourCard from '../components/TourCard.vue';

// 示例数据
const toursData = [
  {
    id: 1,
    title: "台北市一日遊",
    date: "2024-10-01",
    image: "/travel-net/images/FotoJet.jpg",
    description: "參觀台北101，故宮博物院，夜市小吃。",
    category: "雙北"
  },
  {
    id: 2,
    title: "台北山城之旅",
    date: "2024-11-05",
    image: "/travel-net/images/FotoJet111.jpg",
    description: "利用2天的時間，帶你體驗台北深度之旅。",
    category: "雙北"
  },
  
];

export default defineComponent({
  components: { TourCard },
  setup() {
    const searchQuery = ref('');
    const selectedCategory = ref('');
    const selectedDate = ref('');
    const showTopButton = ref(false); // 控制Top按钮的显示
    const categories = ['雙北', '桃竹苗', '中彰投', '雲嘉南', '高屏', '宜花東'];

    const tours = ref(toursData);


   const selectedMonth = ref('');

const filteredTours = computed(() => {
  return tours.value.filter(tour => {
    const matchesQuery = tour.title.toLowerCase().includes(searchQuery.value.toLowerCase());
    const matchesCategory = !selectedCategory.value || tour.category === selectedCategory.value;
    
    // 如果 selectedMonth 有值，則進行月份篩選
    const matchesMonth = !selectedMonth.value || tour.date.startsWith(selectedMonth.value);
    
    return matchesQuery && matchesCategory && matchesMonth;
  });
});

     const handleScroll = () => {
      showTopButton.value = window.scrollY > 100; // 滚动超过200px时显示按钮
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
      selectedMonth,
      categories,
      filteredTours,
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
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  background: radial-gradient(circle, #D9F3FA, #44D2EF);
}

.tours .tour-card {
  max-width: calc(50% - 1rem);
  box-sizing: border-box;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
  background-color:#fff;
}

.no-results {
  font-size: 1.5rem;
  color: black;
  text-align: center;
  margin-top: 2rem;
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
</style>
