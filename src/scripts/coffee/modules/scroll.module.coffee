root = exports ? this
###
  SCROLL module class
  - A module will be instantiated only once
###

class SCROLL
  constructor: () ->
    @events = []

  addEvent: ( callback ) ->
    @events.push callback

  listen: () ->
    parent = @
    window.addEventListener 'scroll', () ->
      callback() for callback in parent.events

root.scroll = new SCROLL()