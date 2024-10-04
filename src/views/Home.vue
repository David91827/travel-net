<template>
<div class="os">
  <div class="cover-photo">
  
    <img :src="coverPhoto" alt="Cover Photo" class="cover-image" />
     </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    
    const coverPhoto = '/travel-net/images/螢幕擷取畫面 2024-09-06 025306.png';

    return { coverPhoto };
  }
});
</script>

<style scoped>
.cover-photo {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  text-align: center;
  margin-top:80px;
}
.os{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  box-sizing: border-box;
  background: radial-gradient(circle, #D9F3FA, #44D2EF);
}


</style>
