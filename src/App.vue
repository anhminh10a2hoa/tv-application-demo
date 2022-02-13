<template>
  <div class="container">
    <!-- <VideoPlayer
      :license-server="licenseServer"
      :manifest-url="manifestUrl"
      :poster-url="posterUrl"
    /> -->
    <TopMenu />
  </div>
</template>

<script>
// import VideoPlayer from '@components/player/VideoPlayer.vue';
import TopMenu from '@components/topmenu/TopMenu.vue';
export default {
  components: { TopMenu },
  // data() {
  //   return {
  //     licenseServer: 'https://widevine-proxy.appspot.com/proxy',
  //     manifestUrl:
  //       'https://dash.akamaized.net/dash264/TestCases/1c/qualcomm/2/MultiRate.mpd',
  //     posterUrl:
  //       'https://upload.wikimedia.org/wikipedia/commons/a/a7/Big_Buck_Bunny_thumbnail_vlc.png'
  //   };
  // }
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
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-family: Tiresias, TiresiasScreenfont, sans-serif;
  font-size: 18px;
  color: #000;
  background: $color-background;
  background-image: none !important;
}
.container {
  max-width: 1280px;
  max-height: 720px;
  height: 720px;
  width: 1280px;
  position: absolute;
  top: 0;
  left: 0;
}
</style>