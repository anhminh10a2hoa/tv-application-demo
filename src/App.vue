<template>
  <router-view />
</template>

<script>
export default {
  mounted() {
    this.initNavigation()
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
