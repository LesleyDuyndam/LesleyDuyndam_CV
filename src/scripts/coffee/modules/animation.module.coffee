root = exports ? this
###
  LOOP module class
    - A module will be instantiated only once
###

class ANIMATION
  constructor: () ->
    @counter = 0
    @events   = []



  ###
Check if the loop is st
###
  running: false



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

  started: () ->
    @counter != 0



  ###
    Pause the loop
  ###
  pause: () ->
    if @running
      @running = false
      @counter = 0


root.animation = new ANIMATION()