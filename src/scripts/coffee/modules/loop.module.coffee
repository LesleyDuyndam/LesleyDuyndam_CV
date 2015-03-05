root = exports ? this
###
  LOOP class
###

class root.LOOP
  constructor: () ->
    @running = false
    @counter = 0
    @events   = []

  ###
    Add callbacks to the tick event
  ###
  addTickEvent: ( callback ) ->
    @events.push callback

  ###
    Create the tick event
  ###
  tick: () ->
    if @running
      callback() for callback in @events
      @counter++
      window.requestAnimationFrame => @tick()



  ###
    Start the loop
  ###
  play: () ->
    if !@running
      @running = true
      window.requestAnimationFrame => @tick()



  ###
    Pause the loop
  ###
  pause: () ->
    if @running
      @running = false
      @counter = 0
