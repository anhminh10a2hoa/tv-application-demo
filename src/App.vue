<template>
  <div class="container" v-if="!loading">
    <NavBar :navbar-item="appData.navbar"/>
    <router-view :app-data="appData" />
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import { isKey, VK_BACK_SPACE, VK_BACK } from '@state/keycodes'
import axios from 'axios';
import NavBar from '@components/navbar/NavBar.vue';
export default {
  components: { NavBar },
  data() {
    return {
      appData: null,
      loading: true
    }
  },
  watch: {
    $route (to, from){
      if(to.name !== from.name) {
        const willfocus = document.getElementById(to.name + '_navbar')
        willfocus.focus();
        setTimeout(() => {
        window.SpatialNavigation.makeFocusable();
        window.SpatialNavigation.focus();
      }, 0)
      }
    }
  },
  mounted() {
    this.initNavigation()
    axios.get('/data.json').then((res) => {
      this.appData = res.data
      this.loading = false
      setTimeout(() => {
        window.SpatialNavigation.makeFocusable();
        window.SpatialNavigation.focus();
      }, 0)
    }).catch((err) => {
      console.log(err)
    })
  },
  methods: {
    initNavigation() {
      // Initialize
      window.SpatialNavigation.init()
      window.SpatialNavigation.add('app', {
        selector: '.dpad-focusable',
        straightOnly: true,
        straightOverlapThreshold: 0.5,
        rememberSource: true,
      })
      window.addEventListener('keydown', this.onKeyDown)
    },
    destroy() {
      window.SpatialNavigation.uninit()
      window.removeEventListener('keydown', this.onKeyDown)
    },
    onKeyDown($event) {
      if(isKey($event.keyCode, VK_BACK_SPACE) || isKey($event.keyCode, VK_BACK)) {
        console.log(this.$route)
        if(document.activeElement.classList.contains('navbar-item')) {
          if(this.$route.name !== 'home') {
            this.$router.push('/')
          }
        } else {
          document.getElementsByClassName('navbar-item')[0].focus()
        }
      }
    }
  },
  beforeDestroy() {
    this.destroy()
  },
}
</script>

<style lang="scss">
@import '@design';
html,
body {
  width: $size-app-width;
  height: $size-app-height;
}

body {
  width: $size-app-width;
  height: $size-app-height;
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-family: Tiresias, TiresiasScreenfont, sans-serif;
  font-size: 18px;
  background: $color-background;
  color: #000;
  background-image: none !important;
}

.container {
  width: $size-app-width;
  height: $size-app-height;
  overflow: hidden;
  position: absolute;
  top: 0px;
  left: 0px;
}

.dpad-focusable {
  &:focus {
    outline: none;
  }
}
</style>
