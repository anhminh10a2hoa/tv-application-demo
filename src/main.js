import Vue from 'vue'
import App from './App.vue'
import '@assets/js/spatial_navigation.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

new Vue({
  render: (h) => h(App),
}).$mount('#app')
