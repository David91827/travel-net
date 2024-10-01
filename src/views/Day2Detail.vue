<template>
  <div class="tour-detail">
    <div class="info-box" v-if="tour">
      <h1>{{ tour.name }}</h1>
      <img :src="tour.image" alt="Tour Image" class="tour-image" />
      <div style="background-color:#E5CCFF;width:100%;height:10%;text-align:left">
        <h2>{{ tour.description }}</h2>
        <p><strong>日期:</strong> {{ tour.date }}</p>
        <p><strong>集合地點：</strong>{{ tour.location }}</p>
        <p><strong>行程費用：</strong>{{ tour.price }}</p>
      </div>
      <div style="border:10px #0066CC solid">
        <h2>活動資訊</h2>
        <div v-html="tour.information"></div>
      </div>
<button @click="goToPackages">包裝行程</button> <button @click="goBack">回上一頁</button>
    </div>
    <p v-else>行程未找到</p> 
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const toursData = [
  
  {
    id: 3,
    name: "台北山城之旅 ",
    date: "2024-10-05 09:30 ~ 10-6 (共2天) ",
    image: "/images/FotoJet111.jpg",
    description: "重要資訊",
    category: "雙北",
    location: "台北車站",
    price: "$3280",
    information: `<h3>Day2</h3><br><strong>09:00集合<br>
    地點：民宿門口</strong><br><br><br>
    <strong>09:30抵達<br>
    地點：鼻頭角公園</strong><br><br>
    此地自由活動<br><br>
    <strong>11:30集合<br>
    地點：鼻頭角步道入口 (如右圖)</strong><br><br>
    <img src="/images/bcb02c09-5158-4102-9630-cfd47eb7a07c.jpg" style="max-width: 40%; height: auto;margin-right:10px">
    <img src="/images/20220520東北角行-鼻頭角步道-龍洞灣海洋公園-馬崗哨所-167.jpg" style="max-width: 40%; height: auto;"><br><br>
    <strong>12:00抵達<br>
    地點：海之星海鮮餐廳</strong><br><br>
    享用午餐<br><br>
    <strong>13:30集合<br>
    地點：餐廳門口</strong><br><br>
    <img src="/images/3f73c4f3-ac3a-48a7-9454-7f974217bf73.jpg" style="max-width: 40%; height: auto;"><br><br>
    <strong>14:10抵達<br>
    地點：野柳地質公園</strong><br><br>
    此地自由活動<br><br>
    <strong>15:40集合<br>
    地點：野柳地質公園停車場 (如右圖)</strong><br><br>
    <img src="/images/下載.jpg" style="max-width: 40%; height: auto;margin-right:10px">
    <img src="/images/4.jpg" style="max-width: 40%; height: auto;"><br><br>
    <strong>16:20抵達<br>
    地點：富貴角公園</strong><br><br>
    帶隊至富貴角燈塔(停留約1.5小時)<br><br>
    <strong>17:50離開</strong><br><br>
    <img src="/images/1200px-Wongwt_富貴角燈塔_(17227480422).jpg" style="max-width: 40%; height: auto;"><br><br>
    <strong>18:30抵達<br>
    地點：淡水老街</strong><br><br>
    此地晚餐自理，包括自由活動<br><br>
    <strong>20:30集合<br>
    地點：淡水捷運站前萊爾富 (如右圖)</strong><br><br>
     <img src="/images/w644.jpg" style="max-width: 30%; height: auto;margin-right:10px">
    <img src="/images/470960-Tamsui-Old-Street.jpg" style="max-width: 30%; height: auto;margin-right:10px">
    <img src="/images/DSCF8114.jpg" style="max-width: 30%; height: auto;"><br><br>
    <strong>21:15返回台北車站<br>
    行程結束</strong><br><br><br>
    <h2>如有興趣歡迎電話預訂！！</h2><br>
    <h1>公司電話：07-5558888<br>
    緊急連絡電話：0922697841<br>
    客服信箱：chc456@gmail.com</h1>`
  },
];

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    const tourId = parseInt(route.params.id as string, 10);

    const tour = ref(toursData.find(t => t.id === tourId));

    function goBack() {
      router.back();
    }

    function goToPackages(){
router.push('/packages');
}

    onMounted(() => {
      if (!tour.value) {
        console.error("行程未找到");
      }
    });
    

    return {
      tour,
      goBack,
      goToPackages
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
  width: 80%;
  max-width: 1000px;
  text-align: center;
}

.tour-detail {
   background: radial-gradient(circle, #D9F3FA, #44D2EF);
  text-align: center;
  padding: 20px;
}

.tour-image {
  width: 100%;
  max-width: 600px;
  margin: 20px auto;
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
