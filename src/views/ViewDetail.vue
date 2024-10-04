<template>
  <div class="view-detail">
    <div v-if="view" class="info-box">
      <h1>{{ view.title }}</h1>
      <Carousel :images="view.images" />
      <div style="background-color:#E5CCFF;width:100%;height:10%;text-align:left"> 
        <p><strong>地點:</strong> {{ view.location }}</p>
        <p><strong>開放時間:</strong> {{ view.hours }}</p>
         <p v-if="view.price"><strong>門票價格:</strong> {{ view.price }}</p>      
      </div>
       <div style="border:10px #0066CC solid;text-align:left">
        <p v-html="view.description"></p>
        <button v-if="view.website" @click="openWebsite">相關網站</button>
        </div>
      <button @click="goBack">回上一頁</button>
    </div>
    <div v-else class="no-results">
        <h2>資料維護中</h2>
        </div> 
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'; // 确保 onMounted 被导入
import { useRoute, useRouter } from 'vue-router';
import Carousel from '../components/Carousel.vue'; 
const viewData = [
  {
    id: 1,
    images: ['/travel-net/images/pic_7927_32.jpg', '/travel-net/images/GMC_3130 (4) (1).jpg', '/travel-net/images/台北101觀景台門票-Klook客路.jpg', '/travel-net/images/35fc7ff9cef741e5681c0715b0248131.jpg'], // 确保你的数据中包含图片路径数组
    title: '台北101大樓',
    descriptionFile: '/travel-net/txt/關於台北101.txt',
    location: '110台北市信義區信義路五段7號',
    hours: '每日 09:00 - 22:00',
    price: 'NT$ 600',
     website: 'https://www.taipei-101.com.tw/',
  },
  {
    id: 2,
    images: ['/travel-net/images/20230202080741-ba2a536c.jpg', '/travel-net/images/TP2_696614296.jpg', '/travel-net/images/1024x768_attractions-image-spliqtzae0q8byeeqgqdfw.jpg', '/travel-net/images/1024x768_attractions-image-fwfaxumoiegq42wwkiwkpg.jpg'], // 确保你的数据中包含图片路径数组
    title: '九份老街',
    descriptionFile: '/travel-net/txt/關於九份老街.txt',
    location: '新北市瑞芳區基山街',
    hours: '平日08:00 - 19:00 , 假日08:00 - 22:00',
    website: 'https://newtaipei.travel/zh-tw/attractions/detail/109990',
  },
  
];

export default defineComponent({
  name: 'ViewDetail',
  components: { Carousel },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const viewId = parseInt(route.params.id as string, 10);
    const view = ref(viewData.find(v => v.id === viewId) || null);

    // Load description from txt file
    onMounted(async () => {
      if (view.value.descriptionFile) {
        try {
          const response = await fetch(view.value.descriptionFile);
          view.value.description = await response.text();
        } catch (error) {
          console.error('Failed to load description:', error);
        }
      }
    });

    function goToRecommendations() {
      router.push('/recommendations'); // 返回景點列表頁面
    }

    function goBack() {
      router.back();
    }
function openWebsite() {
  if (view.value.website) {
    window.open(view.value.website, '_blank');
  }
}
    return {
      view,
      goBack,
      goToRecommendations,
      openWebsite
    };
  }
});
</script>

<style scoped>
.info-box {
  padding: 15px;
  margin: 20px auto;
  border-radius: 10px;
  background-color: #f9f9f9;
  width: 80%; /* 可根据需要调整宽度 */
  max-width: 1000px; /* 限制最大宽度 */
  text-align: center; /* 如果需要文本左对齐，可以添加这行 */
}

.view-detail {
  background: radial-gradient(circle, #D9F3FA, #44D2EF);
  text-align: center;
  padding: 20px;
}

.view-image {
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
}
.no-results {
  font-size: 1.5rem;
  color: black;
  text-align: center;
  margin-top: 2rem;
}

p {
  font-size: 20px;
}

button {
  margin: 15px;
  color: whitesmoke;
  background-color: #0000CC;
  border: none;
  border-radius: 7px;
  font-size: 25px;
  cursor: pointer;
}
</style>
