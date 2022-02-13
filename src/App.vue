<template>
  <div class="container" v-if="!loading">
    <!-- <VideoPlayer
      :license-server="licenseServer"
      :manifest-url="manifestUrl"
      :poster-url="posterUrl"
    /> -->
    <NavBar />
    <Banner :banner-item="appData.banner"/>
    <GridList v-for="grid in appData.grid" :key="grid.title" :title="grid.title" :program-items="grid.items"/>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
// import VideoPlayer from '@components/player/VideoPlayer.vue';
import NavBar from '@components/navbar/NavBar.vue';
import Banner from '@components/banner/Banner.vue';
import GridList from '@components/grid/GridList.vue';
import axios from 'axios';
export default {
  components: { NavBar, Banner, GridList },
  data() {
    return {
      appData: null,
      loading: true,
      licenseServer: 'https://widevine-proxy.appspot.com/proxy',
      manifestUrl:
        'https://dash.akamaized.net/dash264/TestCases/1c/qualcomm/2/MultiRate.mpd',
      posterUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/Big_Buck_Bunny_thumbnail_vlc.png'
    };
  },
  mounted() {
    this.initNavigation()
    // this.registerKeyListener()
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
  beforeUnmount() {
    this.destroy()
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
      this.releaseKeyListener()
    }
  }
};
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