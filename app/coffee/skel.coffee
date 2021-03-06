# Init Skell breakpoints
skel.breakpoints
  xlarge: "(max-width: 1680px)"
  large:  "(max-width: 1280px)"
  medium: "(max-width: 980px)"
  small:  "(max-width: 736px)"
  xsmall: "(max-width: 480px)"

# Set layout configuration
skel.layout
  reset: "normalize"
  grid: true
  containers: true
  breakpoints:
    medium:
      containers: "90%"
    small:
      containers: "95%"
      grid:
        gutters: 20
    xsmal:
      grid:
        gutters: 10

# Set viewport configuration
skel.viewport
  width: 1280
  scalable: true
  breakpoints:
    medium:
      width: "device-width"
    small:
      scalable: false
