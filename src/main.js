// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')


import Vue from 'vue';
import App from './App.vue';
// import router from './router/index'; // 추가

import router from './router';


Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router, // 추가
}).$mount('#app');
