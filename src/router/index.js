import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@src/views/MainView.vue'
import PlayerView from '@src/views/PlayerView.vue'
import SearchView from '@src/views/SearchView.vue'

Vue.use(Router)

export default new Router({
  base: '/',
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: MainView },
    { path: '/player', name: 'player', component: PlayerView },
    { path: '/search', name: 'search', component: SearchView },
  ]
})
