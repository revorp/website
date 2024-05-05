import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/apply',
    name: 'apply',
    component: () => import('../views/Apply.vue')
  },
];

export default routes;
