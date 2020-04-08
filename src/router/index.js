import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Dashboard from '../views/Dashboard.vue';
import TagForm from '../views/TagForm.vue';
import ListTag from '../views/ListTag.vue';
import TypeTag from '../views/TypeTag.vue';
import ListType from '../views/ListType.vue';
import UserAdd from '../views/UserAdd.vue';
// Users
import Forgot from '@/components/User/Forgot.vue';
import Recovery from '@/components/User/Recovery.vue';
import Profile from '@/components/User/ProfileUser.vue';
import profileEdit from '@/components/User/profileEdit.vue';

import UserList from '@/components/User/UserList.vue';

// Group
import AddGroup from '@/components/Group/AddGroup.vue';
import ListGroup from '@/components/Group/ListGroup.vue';
// Services
import serviceForm from '@/components/Service/serviceForm.vue';
import serviceList from '@/components/Service/serviceList.vue';
// Comments
import commentDashboard from '@/views/comment/dashboard.vue';
import commentList from '@/views/comment/list.vue';
// Menu
import addMenu from '@/views/menu/add.vue';
import listMenu from '@/views/menu/list.vue';

// Doc
import menuDoc from '@/components/menu/doc.vue';


Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: 'custom-login' },
    component: Home,
  },
  {
    path: '/addTag',
    name: 'addTag',
    component: TagForm,
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
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
    path: '/user/forgot',
    meta: { layout: 'custom-login' },
    name: 'forgot',
    component: Forgot,
  },
  {
    path: '/user/recovery',
    meta: { layout: 'custom-login' },
    name: 'recovery',
    component: Recovery,
  },
  {
    path: '/user/profile',
    name: 'userProfile',
    component: Profile,
  },
  {
    path: '/user/editprofile',
    name: 'profileEdit',
    component: profileEdit,
  },
  {
    path: '/user/list',
    name: 'userList',
    component: UserList,
  },
  {
    path: '/user/add',
    name: 'UserAdd',
    component: UserAdd,
  },
  {
    path: '/group/add',
    name: 'addGroup',
    component: AddGroup,
  },
  {
    path: '/group/list',
    name: 'listGroup',
    component: ListGroup,
  },
  {
    path: '/service/add',
    name: 'serviceForm',
    component: serviceForm,
  },
  {
    path: '/service/edit/:id',
    name: 'serviceForm',
    component: serviceForm,
  },
  {
    path: '/service/list',
    name: 'serviceList',
    component: serviceList,
  },
  {
    path: '/comment/list',
    name: 'commentList',
    component: commentList,
  },
  {
    path: '/comment/dashboard',
    name: 'commentDashboard',
    component: commentDashboard,
  },
  {
    path: '/menu/add',
    name: 'addMenu',
    component: addMenu,
  },
  {
    path: '/menu/list',
    name: 'listMenu',
    component: listMenu,
  },
  // docs >>>>>>>>>>>
  {
    path: '/menu/doc',
    name: 'menuDoc',
    component: menuDoc,
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
