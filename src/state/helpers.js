const spatialNavDefaultId = 'default'

export function updateDpad() {
  if (Object.prototype.hasOwnProperty.call(window, 'SpatialNavigation')) {
    window.SpatialNavigation.init()
    window.SpatialNavigation.clear()
    // Define navigable elements (anchors and elements with "dpad-focusable" class).
    window.SpatialNavigation.add(spatialNavDefaultId, {
      selector: '.dpad-focusable, .hg-button',
      straightOnly: false,
      rememberSource: true,
      defaultElement: 'button',
    })

    // Make the *currently existing* navigable elements focusable.
    window.SpatialNavigation.makeFocusable(spatialNavDefaultId)

    // Focus the first navigable element.
    window.SpatialNavigation.focus(spatialNavDefaultId)
    // Set current active route as focused element
    const active = document.getElementsByClassName('active')[0] || null
    if (!active) {
      const first = document.getElementsByClassName('dpad-focusable')[0]
      if (first) {
        first.focus()
      }
      return
    }
    const focusable =
      active.getElementsByTagName('a').length === 1
        ? active.getElementsByTagName('a')[0]
        : null
    if (focusable) {
      focusable.focus()
    }
  }
}