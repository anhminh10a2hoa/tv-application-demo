import Vue from 'vue'
import App from './App.vue'
import '@assets/js/spatial_navigation.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router'
Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
