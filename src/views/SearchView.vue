<script>
import Keyboard from '@components/keyboard/keyboard.vue'

export default {
  components: { Keyboard },
  data() { 
    return {
      input: '',
      showNoResults: false,
    }
  },
  methods: {
    onChange(input) {
      this.input = input
      this.showNoResults = false
      if (this.input.length > 2) {
        this.loading = false
        this.resultsForVideo = []
        this.resultsForAudio = []
        this.search()
      }
    },
    onKeyPress(button) {
      if (button === '{enter}') {
        this.search()
      }
    },
    onInputChange(input) {
      this.input = input.target.value
    },
    search() {

    }
  }
}
</script>


<template>
  <div class="container">
    <div class="group">
      <input
        :value="input"
        class="input"
        placeholder="Search..."
        @input="onInputChange"
      />
    </div>
    <Keyboard
      class="keyboard"
      :input="input"
      @onChange="onChange"
      @onKeyPress="onKeyPress"
    />
    <div v-show="showNoResults" class="text">
      <h3>No results for '{{ input }}'</h3>
    </div>
  </div>
</template>

<style lang="scss">
@import '@design';

.container {
  width: 100%;
  margin: 1rem 0 0;

  .group {
    position: relative;
    width: 50%;
    margin: 0 auto 0.5rem;

    .input {
      width: 95%;
      padding: 0.5rem 0.5rem 0.5rem 2rem;
      line-height: 2;
      outline: none;
      border-radius: 25px;
    }
  }

  .grid {
    width: 85%;
    margin: 0 auto;
  }

  .text {
    text-align: center;
  }
}
</style>