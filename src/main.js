import Vue from 'vue';
import CKEditor from '@ckeditor/ckeditor5-vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import './plugins/pinCode';
// import './plugins/drag';
import '../node_modules/@aasaam/noto-font/dist/font-face.css';
import '@/assets/styles/style.scss';
import '@/assets/styles/variables.scss';
import './filters';
// import store from './store';

import Default from '@/layouts/Default.vue';
import CustomLogin from '@/layouts/CustomLogin.vue';

Vue.component('default-layout', Default);
Vue.component('custom-login-layout', CustomLogin);

Vue.config.productionTip = false;
Vue.use(CKEditor);

new Vue({
  router,
  vuetify,
  // store,
  render: h => h(App),
}).$mount('#app');
