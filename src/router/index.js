import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import TagForm from '../views/TagForm.vue';
import ListTag from '../views/ListTag.vue';
import TypeTag from '../views/TypeTag.vue';
import ListType from '../views/ListType.vue';

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
    path: '/typeList',
    name: 'typeList',
    component: ListType,
  },
  {
    path: '/typeTag',
    name: 'typeTag',
    component: TypeTag,
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
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
