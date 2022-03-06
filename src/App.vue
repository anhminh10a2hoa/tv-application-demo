<template>
  <div class="app" id="app" v-if="!loading" ref="main">
    <NavBar :navbar-item="appData.navbar"/>
    <router-view :app-data="appData" />
    <ExitModal :open="true"/>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import { isKey, VK_BACK_SPACE, VK_BACK } from '@state/keycodes'
import { updateDpad } from '@state/helpers'
import axios from 'axios';
import NavBar from '@components/navbar/NavBar.vue';
import ExitModal from '@components/modal/ExitModal.vue';
export default {
  components: { NavBar, ExitModal },
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
        console.log(willfocus)
        setTimeout(() => {
          window.SpatialNavigation.makeFocusable();
          window.SpatialNavigation.focus();
        }, 0)
      }
    }
  },
  mounted() {
    window.addEventListener('sn:focused', this.adjustScroll)
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
      updateDpad()
      window.addEventListener('keydown', this.onKeyDown)
    },
    destroy() {
      window.SpatialNavigation.uninit()
      window.removeEventListener('keydown', this.onKeyDown)
      window.removeEventListener('sn:focused', this.adjustScroll)
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
    },
    adjustScroll($event) {
      const focused = $event.target
      if (focused) {
        const mainY =
          this.$refs.main.getBoundingClientRect().y ||
          this.$refs.main.getBoundingClientRect().top
        const focusedY =
          focused.getBoundingClientRect().y ||
          focused.getBoundingClientRect().top
        const relY2 = focusedY - mainY
        let offset = relY2 * -1
        offset = offset > -450 ? 0 : focused.classList.contains('swiper-slide') ? offset + 50 : offset
        this.offset = offset
        
      } else {
        this.offset = 0
      }
      this.$nextTick(() => {
        document.getElementById('app').scrollTop = 0
        this.$refs.main.style.transform = `translateY(${this.offset}px)`
      })
    },
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
  padding: 0;
  margin: 0;
  overflow: hidden;
  font-family: Tiresias, TiresiasScreenfont, sans-serif;
  font-size: 18px;
  background: $color-background;
  color: #000;
  background-image: none !important;
  height: 100%;
}

.app {
  width: $size-app-width;
  overflow: hidden;
  position: absolute;
  left: 0px;
  transition: 0.3s ease-in;
  transition-property: transform;
  overscroll-behavior: auto;
}

.dpad-focusable {
  &:focus {
    outline: none;
  }
}

.simple-keyboard {
  color: $color-black;
  font-weight: 600;

  &.hg-theme-default {
    width: 88%;
    margin: 0 auto;
    background-color: transparent;

    .hg-row {
      display: block;
      text-align: center;

      .hg-button {
        display: inline-block;
        min-width: 3rem;
        height: 2.5rem;
        padding: 0 0.325rem;
        font-size: 1.2rem;
        color: $color-white;
        background: rgba(0, 0, 0, 0.47);
        border: none;
        box-shadow: none;

        span {
          line-height: 2.5rem;
          vertical-align: middle;
        }

        &:focus {
          color: $color-text-keyboard-focus;
          background: $color-grey-light;
        }

        &.hg-button-space,
        &.hg-button-backspace,
        &.hg-button-shift,
        &.hg-button-enter,
        &.hg-button-numbers,
        &.hg-button-abc,
        &.hg-button-chars {
          background: $color-grey;

          &:focus {
            color: $color-text-keyboard-focus;
            background: $color-grey-light;
          }
        }
      }
    }
  }
}
</style>
