root = exports ? this
###
  SCROLL module class
  - A module will be instantiated only once
###

class SCROLL
  constructor: () ->
    @events = []
    @wait = false
    @start_time = 0

  addEvent: ( callback ) ->
    @events.push callback
    parent = @
    window.addEventListener 'scroll', () ->
      callback() for callback in parent.events


  pause: ( ms ) ->
    @wait = true;
    @start_time = new Date() + ms

root.scroll = new SCROLL()