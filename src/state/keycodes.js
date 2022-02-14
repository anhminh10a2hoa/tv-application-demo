/***
	Determine keyCodes
***/
const defaults = {
  VK_RED: 82, // r
  VK_GREEN: 71, // g
  VK_YELLOW: 89, // y
  VK_BLUE: 66, // b
  VK_LEFT: 37,
  VK_UP: 38,
  VK_RIGHT: 39,
  VK_DOWN: 40,
  VK_ENTER: 13,
  VK_0: 48,
  VK_1: 49,
  VK_2: 50,
  VK_3: 51,
  VK_4: 52,
  VK_5: 53,
  VK_6: 54,
  VK_7: 55,
  VK_8: 56,
  VK_9: 57,
  VK_PLAY: 415,
  VK_PAUSE: 19,
  VK_PLAY_PAUSE: 463,
  VK_STOP: 413,
  VK_FAST_FWD: 417,
  VK_REWIND: 412,
  VK_HOME: 771,
  VK_END: 35,
  VK_BACK: 220,
  VK_BACK_SPACE: 8,
  VK_TELETEXT: 459,
}

export const VK_LEFT = 'VK_LEFT'
export const VK_RIGHT = 'VK_RIGHT'
export const VK_UP = 'VK_UP'
export const VK_DOWN = 'VK_DOWN'
export const VK_ENTER = 'VK_ENTER'
export const VK_RED = 'VK_RED'
export const VK_BLUE = 'VK_BLUE'
export const VK_YELLOW = 'VK_YELLOW'
export const VK_GREEN = 'VK_GREEN'
export const VK_0 = 'VK_0'
export const VK_1 = 'VK_1'
export const VK_2 = 'VK_2'
export const VK_3 = 'VK_3'
export const VK_4 = 'VK_4'
export const VK_5 = 'VK_5'
export const VK_6 = 'VK_6'
export const VK_7 = 'VK_7'
export const VK_8 = 'VK_8'
export const VK_9 = 'VK_9'
export const VK_PLAY = 'VK_PLAY'
export const VK_PAUSE = 'VK_PAUSE'
export const VK_PLAY_PAUSE = 'VK_PLAY_PAUSE'
export const VK_STOP = 'VK_STOP'
export const VK_FAST_FWD = 'VK_FAST_FWD'
export const VK_REWIND = 'VK_REWIND'
export const VK_HOME = 'VK_HOME'
export const VK_END = 'VK_END'
export const VK_BACK = 'VK_BACK'
export const VK_BACK_SPACE = 'VK_BACK_SPACE'
export const VK_TELETEXT = 'VK_TELETEXT'

export function isKey(code, key) {
  // If window KeyEvent registered
  if (
    typeof window.KeyEvent !== 'undefined' &&
    typeof window.KeyEvent.VK_LEFT !== 'undefined'
  ) {
    if (key === VK_PLAY_PAUSE) {
      const playPause =
        typeof window.KeyEvent.VK_PLAY_PAUSE !== 'undefined'
          ? window.KeyEvent.VK_PLAY_PAUSE
          : 463
      return code === playPause
    } else if (window.KeyEvent[key]) {
      return code === window.KeyEvent[key]
    } else if (key === VK_TELETEXT || key === VK_BACK_SPACE) {
      return (
        (key === VK_TELETEXT && code === 459) ||
        (key === VK_BACK_SPACE && code === 8)
      )
    }
    // Need to use defaults
  } else {
    return defaults[key] && defaults[key] === code
  }

  return false
}

export function keyName(code) {
  if (code === 459) {
    return VK_TELETEXT
  } else if (code === 8) {
    return VK_BACK_SPACE
  }
  // If window KeyEvent registered
  if (
    typeof window.KeyEvent !== 'undefined' &&
    typeof window.KeyEvent.VK_LEFT !== 'undefined'
  ) {
    const playPause =
      typeof window.KeyEvent.VK_PLAY_PAUSE !== 'undefined'
        ? window.KeyEvent.VK_PLAY_PAUSE
        : 463
    if (playPause === code) {
      return VK_PLAY_PAUSE
    }
    for (const key of Object.keys(defaults)) {
      if (window.KeyEvent[key] && window.KeyEvent[key] === code) {
        return key
      }
    }
    // Need to use defaults
  } else {
    for (const key of Object.keys(defaults)) {
      if (defaults[key] === code) {
        return key
      }
    }
  }

  return null
}
