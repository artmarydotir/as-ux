import Vue from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import '../node_modules/@aasaam/noto-font/dist/font-face.css';
import '@/assets/styles/style.scss';
import '@/assets/styles/variables.scss';


Vue.config.productionTip = false;
Vue.use(CKEditor);

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app');
