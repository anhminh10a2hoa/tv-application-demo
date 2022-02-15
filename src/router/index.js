import Vue from 'vue'
import Router from 'vue-router'
import UIView from '@src/views/UIView.vue'
import PlayerView from '@src/views/PlayerView.vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: UIView },
    { path: '/players', component: PlayerView },
  ]
})
