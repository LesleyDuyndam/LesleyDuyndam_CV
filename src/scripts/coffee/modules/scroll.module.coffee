root = exports ? this
###
  SCROLL class
###

class root.SCROLL
  constructor: () ->
    @events = []

  addEvent: ( callback ) ->
    @events.push callback

  listen: () ->
    parent = @
    window.addEventListener 'scroll', ( event ) ->
      callback() for callback in parent.events