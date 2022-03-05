<script>
import { isKey, VK_ENTER } from '@state/keycodes'
import { updateDpad } from '@state/helpers'
import Keyboard from 'simple-keyboard'
import 'simple-keyboard/build/css/index.css'

export default {
  props: {
    keyboardClass: {
      default: 'simple-keyboard',
      type: String,
    },
    input: {
      type: String,
      required: false,
      default: '',
      focus: null,
    },
    enter: {
      default: 'Enter',
      type: String,
    },
    backspace: {
      default: 'Backspace',
      type: String,
    },
    space: {
      default: 'Space',
      type: String,
    },
  },
  data: () => ({
    keyboard: null,
    onKeyDownHandler: null,
    onKeyUpHandler: null,
  }),
  watch: {
    input(input) {
      this.keyboard.setInput(input)
    },
  },
  mounted() {
    this.keyboard = new Keyboard({
      onChange: this.onChange,
      onKeyPress: this.onKeyPress,
      onInit: this.onInit,
      onRender: this.onRender,
      useMouseEvents: false,
      layout: {
        shift: [
          'q w e r t y u i o p',
          'a s d f g h j k l z',
          'x c v b n m',
          '{shift} {numbers} {chars} {space} {enter} {backspace}',
        ],
        default: [
          'Q W E R T Y U I O P',
          'A S D F G H J K L Z',
          'X C V B N M',
          '{numbers} {chars} {space} {enter} {backspace}',
        ],
        numbers: [
          '1 2 3 4 5 6 7 8 9 0',
          '{abc} {chars} {space} {enter} {backspace}',
        ],
        chars: [
          '_ # + - ! ? @ $ % ( ) . , :',
          '£ & / = * € [ ]',
          '{abc} {numbers} {space} {enter} {backspace}',
        ],
      },
      display: {
        '{numbers}': '123',
        '{enter}': `${this.enter}`,
        '{escape}': 'esc ⎋',
        '{tab}': 'tab ⇥',
        '{backspace}': `${this.backspace}`,
        '{capslock}': 'caps lock ⇪',
        '{shift}': 'ABC',
        '{controlleft}': 'ctrl ⌃',
        '{controlright}': 'ctrl ⌃',
        '{altleft}': 'alt ⌥',
        '{altright}': 'alt ⌥',
        '{metaleft}': 'cmd ⌘',
        '{metaright}': 'cmd ⌘',
        '{abc}': 'abc',
        '{space}': `${this.space}`,
        '{chars}': '#+-',
      },
    })
  },
  beforeDestroy() {
    this.keyboard.destroy()
    this.unregisterKeyListerner()
  },
  methods: {
    onChange(input) {
      this.$emit('onChange', input)
    },
    onKeyPress(button) {
      this.$emit('onKeyPress', button)

      /**
       * Handle the shift and caps lock buttons
       */
      if (button === '{shift}' || button === '{lock}') this.handleShift()
      /**
       * Handle the numbers button
       */
      if (button === '{numbers}' || button === '{abc}' || button === '{chars}')
        this.handleOthers(button)
    },
    onEnterDown($event) {
      const button =
        $event.target && $event.target.dataset && $event.target.dataset.skbtn
          ? $event.target.dataset.skbtn
          : document.activeElement
          ? document.activeElement.getAttribute('data-skBtn')
          : null
      if (button) {
        this.keyboard.handleButtonClicked(button)
      }
    },
    onKeyDown($event) {
      const isKeyboardKey =
        $event.target && this.hasClass($event.target, 'hg-button')
      if (isKeyboardKey && isKey($event.keyCode, VK_ENTER)) {
        $event.stopPropagation()
        $event.preventDefault()
        this.onEnterDown($event)
      }
    },
    onKeyUp($event) {
      // Prevent bubbling to d-pad controller
      const isKeyboardKey =
        $event.target && this.hasClass($event.target, 'hg-button')
      if (isKeyboardKey && isKey($event.keyCode, VK_ENTER)) {
        $event.stopPropagation()
        $event.preventDefault()
      }
    },
    onInit($event) {
      updateDpad()
      this.registerKeyListerner()
      this.$emit('onInit', $event)
    },
    onRender() {
      updateDpad()
      if (this.focus) {
        const buttons = document.getElementsByClassName(this.focus)
        this.focus = null
        if (!buttons || buttons.length < 1) return
        buttons[0].focus()
      }
    },
    handleShift() {
      const currentLayout = this.keyboard.options.layoutName
      const shiftToggle = currentLayout === 'default' ? 'shift' : 'default'
      this.focus = 'hg-button-shift'

      this.keyboard.setOptions({
        layoutName: shiftToggle,
      })
    },
    handleOthers(button) {
      const toggle =
        // eslint-disable-next-line
        button === '{abc}' ? 'default' : button.replace(/[\{\}]/g, '')
      this.focus = toggle !== 'default' ? 'hg-button-abc' : 'hg-button-numbers'

      this.keyboard.setOptions({
        layoutName: toggle,
      })
    },
    registerKeyListerner() {
      this.onKeyDownHandler = this.onKeyDown.bind(this)
      document.addEventListener('keydown', this.onKeyDownHandler, true)
      this.onKeyUpHandler = this.onKeyUp.bind(this)
      document.addEventListener('keyup', this.onKeyUpHandler, true)
    },
    unregisterKeyListerner() {
      document.removeEventListener('keydown', this.onKeyDownHandler, true)
      document.removeEventListener('keyup', this.onKeyUpHandler, true)
      this.onKeyDownHandler = null
      this.onKeyUpHandler = null
    },
    hasClass(element, className) {
      return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1
    },
  },
}
</script>

<template>
  <div :class="keyboardClass"></div>
</template>
