<template>
  <div class="hotel-detail">
    <div v-if="hotel" class="info-box">
      <h1>{{ hotel.title }}</h1>
      <Carousel :images="hotel.images" />
      <div style="background-color:#E5CCFF;width:100%;height:10%;text-align:left"> 
        <p><strong>地點:</strong> {{ hotel.location }}</p>
        <p><strong>入住時間:</strong> {{ hotel.checkin }}</p>
               <p><strong>退房時間:</strong> {{ hotel.checkout }}</p>
      </div>
       <div style="border:10px #0066CC solid;text-align:left">
        <p v-html="hotel.description"></p>
        <button v-if="hotel.website" @click="openWebsite">相關網站</button>
      </div>
      <button @click="goToAccommodation">合作民宿</button><button @click="goBack">回上一頁</button>
    </div>
    <div v-else class="no-results">
        <h2>資料維護中</h2>
        </div> 
  </div>
</template>

<script lang="ts">
import { defineComponent, ref ,onMounted} from 'vue';
import { useRoute, useRouter } from 'vue-router';
import Carousel from '../components/Carousel.vue'; // 確保路徑正確

const hotelData = [
  {
    id: 1,
    images: ['/images/m02368_1b.jpg', '/images/GMC_3130 (4) (1).jpg',   '/images/35fc7ff9cef741e5681c0715b0248131.jpg'], // 確保包含圖片路徑
    title: '天方夜譚民宿',
    descriptionFile: '/txt/55.txt',
    location: '224新北市瑞芳區汽車路88號',
    checkin: '14:00 ~ 20:00',
    checkout: '08:00 ~ 11:00',
    website: 'https://arabian-night.mmweb.tw/'
  },
  
];

export default defineComponent({
  name: 'HotelDetail',
  components: { Carousel },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const hotelId = parseInt(route.params.id as string, 10);
    const hotel = ref(hotelData.find(h => h.id === hotelId) || null);

    function goBack() {
      router.back();
    }
     function goToAccommodation() {
      router.push('/Accommodation'); // 返回景點列表頁面
    }
   function openWebsite() {
  if (hotel.value.website) {
    window.open(hotel.value.website, '_blank');
  }
}
    onMounted(async () => {
      if (hotel.value.descriptionFile) {
        try {
          const response = await fetch(hotel.value.descriptionFile);
          hotel.value.description = await response.text();
        } catch (error) {
          console.error('Failed to load description:', error);
        }
      }
    });

    return {
      hotel,
      goBack,
      goToAccommodation,
      openWebsite
    };
  }
});
</script>

<style scoped>
image{
    width:40%;
}
.info-box {
  padding: 15px;
  margin: 20px auto;
  border-radius: 10px;
  background-color: #f9f9f9;
  width: 80%;
  max-width: 1000px;
  text-align: center;
}

.hotel-detail {
  background: radial-gradient(circle, #D9F3FA, #44D2EF);
  text-align: center;
  padding: 20px;
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
