// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')


import Vue from 'vue';
import App from './App.vue';
// import router from './router/index'; // 추가

import "./assets/css/common.css";
import "./assets/css/reset.css";
import router from './router';
import commonComponets from './components/Common';


Vue.config.productionTip = false;

Vue.use(commonComponets);

new Vue({
  render: h => h(App),
  router, // 추가
}).$mount('#app');
