<template>
  <div class="hotel-card">
    <img :src="hotel.image" alt="Hotel Image" class="hotel-image" />
    <h2>{{ hotel.title }}</h2>
    <p>{{ hotel.description }}</p>
    <p><strong>分類:</strong> {{ hotel.category }}</p>
    <button @click="hotelDetails">查看詳情</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HotelCard',
  props: {
    hotel: {
      type: Object as PropType<{
        id: number;
        image: string;
        title: string;
        description: string;
        category: string;
      }>,
      required: true
    }
  },
  setup(props) {
    const router = useRouter();

    function hotelDetails() {
      router.push(`/hotel/${props.hotel.id}`);
    }

    return {
      hotelDetails
    };
  }
});
</script>

<style scoped>
button {
  margin: 15px;
  color: whitesmoke;
  background-color: #0000CC;
  border: none;
  border-radius: 7px;
  font-size: 18px;
  cursor: pointer;
}

.hotel-card {
   background-color:#fff;
 width:40%;
 height:650px;
  border-radius:15px;
  padding: 10px;
  margin:20px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.hotel-image {
  max-width: 100%;
  height: 70%;
  border-radius: 8px;
}
</style>
