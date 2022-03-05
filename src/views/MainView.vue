<template>
  <div>
    <Banner :banner-item="appData.banner"/>
    <GridList v-for="(grid, index) in appData.grid" :key="index" :title="grid.title" :program-items="grid.items" :grid-id="index"/>
  </div>
</template>

<script>
import Banner from '@components/banner/Banner.vue';
import GridList from '@components/grid/GridList.vue';
export default {
  components: { Banner, GridList },
  props: {
    appData: {
      type: Object,
      default: () => {}
    },
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
    },
    unregisterFocusListerner() {
      window.removeEventListener('sn:willfocus', this.onWillFocus)
    },
    onWillFocus() {
    },
    destroy() {
      this.unregisterFocusListerner()
    }
  }
};
</script>