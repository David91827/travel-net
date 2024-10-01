<template>
  <div class="view-card">
    <img :src="view.image" alt="View Image" class="view-image" />
    <h2>{{ view.title }}</h2>
    <p>{{ view.description }}</p>
    <p><strong>分類:</strong> {{ view.category }}</p>
    <button @click="viewDetails">查看詳情</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'ViewCard',
  props: {
    view: {
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

    function viewDetails() {
      router.push(`/view/${props.view.id}`);
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
.view-card {
  background-color:#fff;
 width:40%;
  border-radius:15px;
  padding: 10px;
  margin:20px;
  text-align: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
}

.view-image {
  max-width: 100%;
  height: auto; /* 确保图片按比例缩放 */
  border-radius: 8px; /* 可选：让图片的边角也有圆角效果 */
}
</style>


