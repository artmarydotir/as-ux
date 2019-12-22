import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import TagForm from '../views/TagForm.vue';
import ListTag from '../views/ListTag.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/addTag',
    name: 'addTag',
    component: TagForm,
  },
  {
    path: '/listTag',
    name: 'tagList',
    component: ListTag,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
