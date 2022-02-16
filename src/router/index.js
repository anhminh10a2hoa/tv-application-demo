import Vue from 'vue'
import Router from 'vue-router'
import UIView from '@src/views/UIView.vue'
import PlayerView from '@src/views/PlayerView.vue'

Vue.use(Router)

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: UIView },
    { path: '/players', name: 'player', component: PlayerView },
    { path: '/features', name: 'feature', component: PlayerView },
  ]
})
