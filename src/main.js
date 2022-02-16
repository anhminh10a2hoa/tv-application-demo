import Vue from 'vue'
import App from './App.vue'
import '@assets/js/spatial_navigation.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import Vuex from "vuex";
import router from './router'
import store from './state/store'

Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Vuex);

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app')
