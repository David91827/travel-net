<template>
  <div class="tour-detail">
    <div class="info-box">
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
        <button v-if="shouldShowDay2Link" @click="goToDay2">查看 Day2 行程</button>
      </div>
      <button @click="goToPackages">包裝行程</button> <button @click="goBack">回上一頁</button>
    </div>
    <button v-show="showTopButton" class="top-button" @click="scrollToTop">Top</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed , onMounted, onBeforeUnmount} from 'vue';
import { useRoute, useRouter } from 'vue-router';


// 示例数据
const toursData = [
  // 添加你的行程数据
  {
    id: 1,
    name: "台北市一日遊",
    date: "2024-10-01 10:00~20:00",
    image: "/images/FotoJet.jpg",
    description: "重要資訊",
    category: "雙北",
    location:"台北車站",
    price:"$1199",
    information:`<strong>10:00集合(請於出發10分鐘前抵達)<br>
    地點：台北車站大廳集合</strong><br><br>
    <img src="/images/5ef21cd6ec2ae_18f9da1ac7.jpg" alt="集合地点" style="max-width: 40%; height: auto;"><br><br>
    <strong>10:30抵達<br>
    <a href="http://localhost:5173/view/1" target="_self">台北101大樓</a></strong><br><br>
    先統一帶領至觀景台欣賞大台北風景<br>
    午餐於此地自理，包括自由活動<br><br>
    <strong>14:30集合<br>
    地點：101大樓正門口(如右圖)</strong><br><br>
    <img src="/images/台北101觀景台門票-Klook客路.jpg" style="max-width: 40%; height: auto;margin-right:10px">
    <img src="/images/a95bf6e5f447688d391a69b2e677547f5d13822f.jpg" style="max-width: 40%; height: auto;"><br><br>
    <strong>15:00抵達<br>故宮博物院</strong><br><br>
    會請專人導覽參觀(全程1.5小時)<br><br>
    <strong>17:00集合<br>
    地點：故宮一樓廣場(如右圖)</strong><br><br>
    <img src="/images/shutterstock_363902354.jpg" style="max-width: 40%; height: auto;margin-right:10px">
    <img src="/images/1920x1080_attractions-image-hrvtkvaowueb7-w8--qy9g.jpg" style="max-width: 40%; height: auto;"><br><br>
    <strong>17:30抵達<br>
    地點：士林夜市</strong><br><br>
    晚餐於此自理，包括自由活動<br><br>
    <strong>19:30集合<br>
    地點：捷運劍潭站1號出口(如右圖)</strong><br><br>
    <img src="/images/pic_154_14.jpg" style="max-width: 40%; height: auto;margin-right:10px">
    <img src="/images/place2021416144629.jpg" style="max-width: 40%; height: auto;"><br><br>
    <strong>20:00返回台北車站<br>
    行程結束</strong><br><br><br>
    <h2>如有興趣歡迎電話預訂！！</h2><br>
    <h1>公司電話：07-5558888<br>
    緊急連絡電話：0922697841<br>
    客服信箱：chc456@gmail.com</h1> `
  },
  {
    id: 2,
    name: "台北山城之旅",
    date: "2024-10-05 09:30 ~ 10-6 (共2天) ",
    image: "/images/FotoJet111.jpg",
    description: "重要資訊",
    category: "雙北",
    location:"台北車站",
    price:"$3280",
    information:`<h3>Day1</h3><br><strong>09:30集合(請於出發10分鐘前抵達)<br>
    地點：台北車站大廳集合</strong><br><br>
    <img src="/images/5ef21cd6ec2ae_18f9da1ac7.jpg" alt="集合地点" style="max-width: 40%; height: auto;"><br><br>
    <strong>10:45抵達<br>
    十分瀑布</strong><br><br>
    先統一帶領參觀十分瀑布(約30分鐘)<br>
    再帶隊(步行約10分鐘)至十分老街<br>
    午餐於此地自理，包括自由活動<br><br>
    <strong>13:30集合<br>
    地點：十分瀑布汽機車停車場(如右圖)</strong><br><br>
    <img src="/images/94160ADE-B67F-4E45-8921-3BFF501F6314_e.jpg" style="max-width: 30%; height: auto;margin-right:10px">
    <img src="/images/1024x768_attractions-image-tmsiy0lideumlazoib6e0q.jpg" style="max-width: 30%; height: auto;margin-right:10px">
    <img src="/images/20190815104311_74.jpg" style="max-width: 30%; height: auto;"><br><br>
    <strong>14:10抵達<br>水湳洞停車場</strong><br><br>
    欣賞陰陽海及俯瞰十三層遺址<br>
    原地拍照休息(約30分鐘)<br><br>
    <strong>14:40集合<br>
    地點：水湳洞停車場(如右圖)</strong><br><br>
   <img src="/images/1024x768_attractions-image-y8ggbhpeduqjcztypawkha.jpg" style="max-width: 30%; height: auto;margin-right:10px">
    <img src="/images/070682F7-1151-47AB-9427-8BDC1F09E8C4_e.jpg" style="max-width: 30%; height: auto;margin-right:10px">
    <img src="/images/1600703662-922575029-g_n.jpg" style="max-width: 30%; height: auto;"><br><br>
    <strong>14:45抵達<br>
    地點：黃金瀑布</strong><br><br>
       欣賞黃金瀑布<br>
    原地拍照休息(約15分鐘)<br><br>
    <strong>15:00集合<br>
    地點：黃金瀑布停車場(如右圖)</strong><br><br>
    <img src="/images/JQjOtQrfLMFcNEySsltwmTSlLP.jpg" style="max-width: 40%; height: auto;margin-right:10px">
    <img src="/images/黃金瀑布-6.jpg" style="max-width: 40%; height: auto;"><br><br>
    <strong>15:15抵達<br>
    地點：黃金博物館</strong><br><br>
    會請專人導覽參觀(全程1.5小時)<br><br>
    <strong>16:45集合<br>
    地點：黃金博物館入口(如右圖)</strong><br><br>
   <img src="/images/54fb3f5d585a030e4d1195f6219b0243.jpg" style="max-width: 30%; height: auto;margin-right:10px">
    <img src="/images/黃金-scaled.jpg" style="max-width: 30%; height: auto;margin-right:10px">
    <img src="/images/博物館門口-scaled.jpg" style="max-width: 30%; height: auto;"><br><br>
    <strong>17:00抵達<br>
    地點：九份老街</strong><br><br>
       晚餐於此自理，包括自由活動<br><br>
    <strong>19:30集合<br>
    地點：老街入口 (如右圖)</strong><br><br>
    <img src="/images/20230202080741-ba2a536c.jpg" style="max-width: 40%; height: auto;margin-right:10px">
    <img src="/images/49a1ce96f81fc7b2501da636e1b756b0.jpg" style="max-width: 40%; height: auto;"><br><br>
    <strong>帶隊步行5分鐘抵達住宿<br>
    地點：<a href="http://localhost:5173/hotel/1" target="_self">天方夜譚民宿</a><br>第一天結束</strong><br><br>
    <img src="/images/images (1).jpg" style="max-width: 40%; height: auto;"><br><br>`
  },
];

export default defineComponent({
  setup() {
    const route = useRoute();
    const router = useRouter();
    
    const tourId = parseInt(route.params.id as string, 10);

    // 查找对应的行程数据
    const tour = ref(toursData.find(t => t.id === tourId));

    // 计算是否显示Day2链接
    const shouldShowDay2Link = computed(() => {
      return tour.value && tour.value.id === 2;
    });

    function goToDay2() {
      router.push('/tours/3'); // 跳转到 Day2 行程的页面
    }
    function goToPackages(){
router.push('/packages');
    }
    function goBack() {
      router.back()
    }
    
    return {
      tour,
      shouldShowDay2Link,
      goToDay2,
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
  width: 80%; /* 可根据需要调整宽度 */
  max-width: 1000px; /* 限制最大宽度 */
  text-align: center; /* 如果需要文本左对齐，可以添加这行 */
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



p{
  font-size:20px;
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
