import { createRouter, createWebHistory } from 'vue-router';
import AdminHome from '../views/AdminHome.vue';
import EditTour from '../views/EditTour.vue';

const routes = [
  { path: '/', component: AdminHome },
  { path: '/edit/:id', component: EditTour, props: true }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
