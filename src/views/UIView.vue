<template>
  <div>
    <!-- <VideoPlayer
      :license-server="licenseServer"
      :manifest-url="manifestUrl"
      :poster-url="posterUrl"
    /> -->
    <Banner :banner-item="appData.banner"/>
    <GridList v-for="(grid, index) in appData.grid" :key="index" :title="grid.title" :program-items="grid.items" :grid-id="index"/>
  </div>
</template>

<script>
// import VideoPlayer from '@components/player/VideoPlayer.vue';
import Banner from '@components/banner/Banner.vue';
import GridList from '@components/grid/GridList.vue';
// import { VK_UP, isKey } from '@state/keycodes'
export default {
  components: { Banner, GridList },
  props: {
    appData: {
      type: Object,
      default: () => {}
    },
  },
  data() {
    return {
      licenseServer: 'https://widevine-proxy.appspot.com/proxy',
      manifestUrl:
        'https://dash.akamaized.net/dash264/TestCases/1c/qualcomm/2/MultiRate.mpd',
      posterUrl:
        'https://upload.wikimedia.org/wikipedia/commons/a/a7/Big_Buck_Bunny_thumbnail_vlc.png'
    };
  },
  mounted() {
    this.registerFocusListerner()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    registerFocusListerner() {
      window.addEventListener('sn:willfocus', this.onWillFocus)
      window.addEventListener('keydown', this.onKeyDown)
    },
    unregisterFocusListerner() {
      window.removeEventListener('sn:willfocus', this.onWillFocus)
      window.removeEventListener('keydown', this.onKeyDown)
    },
    onWillFocus() {
    },
    onKeyDown(event) {
      console.log(event.keyCode)
    },
    destroy() {
      this.unregisterFocusListerner()
    }
  }
};
</script>