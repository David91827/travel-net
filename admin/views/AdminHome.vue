<template>
  <div>
    <h1>后台管理系统</h1>
    <AddTour />
    <TourListAdmin />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AddTour from '../components/AddTour.vue';
import TourListAdmin from '../components/TourListAdmin.vue';

export default defineComponent({
  components: {
    AddTour,
    TourListAdmin
  }
});
</script>
