import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import TourDetails from '../views/TourDetails.vue';
import AboutUs from '../views/AboutUs.vue'; // 确保路径正确
import PackageTours from '../views/PackageTours.vue'; // 确保路径正确
import Accommodation from '../views/Accommodation.vue'; // 确保路径正确
import Recommendations from '../views/Recommendations.vue'; // 确保路径正确
import Day2Detail from '../views/Day2Detail.vue';
import ViewDetail from '../views/ViewDetail.vue';
import HotelDetail from'../views/HotelDetail.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: AboutUs },
  { path: '/packages', component: PackageTours },
  { path: '/tour/:id', component: TourDetails },
  { path: '/tours/:id', component: Day2Detail }, 
  { path: '/accommodation', component: Accommodation },
  { path: '/recommendations', component: Recommendations },
  { path: '/view/:id',component: ViewDetail},
  { path: '/hotel/:id',component:HotelDetail}
];

const router = createRouter({
  history: createWebHistory('/travel-net/'),
  routes
});

export default router;
