<template>
  <div>
    <div class="overlay" :class="{'is-visible': getOpenModal}" id="overlay"></div>
    <div class="modal" :class="{'is-visible': getOpenModal}" id="modal">
      Do you want to exit the application?
      <button class="modal-button" v-on:click="exit()">Exit</button>
      <button class="modal-button" v-on:click="cancel()">Cancel</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ExitModal',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters('setting', ['getOpenModal']),
  },
  methods: {
    ...mapActions('setting', ['setOpenModal']),
    exit() {
      this.setOpenModal(false)
    },
    cancel() {
      this.setOpenModal(false)
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import '@design';
.overlay {
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: $size-app-width;
  height: $size-app-height;
  background-color: rgba(0,0,0,0.3);
}

.modal {
  pointer-events: none;
  opacity: 0;
  transition: opacity 0.3s;
  position: absolute;
  top: 300px;
  left: 0;
  right: 0;
  width: 380px;
  margin: 0 auto;
  padding: 20px;
  background: $color-background-modal;
  border-radius: 4px;
  color: black;
  font-weight: 600;
  box-shadow: 0 3px 10px rgba(0,0,0,0.3);
  text-align: center;

  button {
    // background-color: 
    border-radius: 5px;
    width: 120px;
    height: 35px;
    margin: 8px;
    background-color: #ddd;
    color: #666;
    font-weight: bold;
    border: 0px solid;
    font-size: 14px;

    &:focus {
      color: #ddd;
      background-color: #42b983;
    }
  }
}

.is-visible {
  opacity: 1;
  pointer-events: auto;
  z-index: 999;
}
</style>
