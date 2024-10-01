<template>
  <div class="tour-card">
    <img :src="tour.image" alt="Tour Image" />
    <h2>{{ tour.title }}</h2>
    <p>{{ tour.description }}</p>
    <p><strong>分類:</strong> {{ tour.category }}</p>
    <p><strong>日期:</strong> {{ tour.date }}</p>
    <button @click="viewDetails">查看詳情</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'TourCard',
  props: {
    tour: {
      type: Object as PropType<{
        id: number;
        image: string;
        title: string;
        description: string;
        category: string;
        date: string;
      }>,
      required: true
    }
  },
  setup(props) {
    const router = useRouter();

    function viewDetails() {
      router.push(`/tour/${props.tour.id}`);
    }

    return {
      viewDetails
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



.tour-card {
  
  width:40%;
  border-radius:15px;
  padding: 10px;
  margin:20px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}
.tour-card img {
  max-width: 100%;
  height: auto;
}
</style>
