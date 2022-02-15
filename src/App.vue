<template>
  <div class="container" v-if="!loading">
    <NavBar :navbar-item="appData.navbar"/>
    <router-view :app-data="appData" />
  </div>
  <div v-else>Loading...</div>
</template>

<script>
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
  mounted() {
    this.initNavigation()
    axios.get('/data.json').then((res) => {
      this.appData = res.data
      this.loading = false
      setTimeout(() => {
        // Make the *currently existing* navigable elements focusable.
        window.SpatialNavigation.makeFocusable();
        // Focus the first navigable element.
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
    },
    destroy() {
      window.SpatialNavigation.uninit()
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
