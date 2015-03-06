root = exports ? this
###
  Event Handler class
###

class root.EVENT_HANDLER
  construct: () ->
    @callbacks  = []
    @index      = []
    @stats      =
      'counter'   : 0,
      'startTime' : null,
      'lastTime'  : null

# Register a function to callback on event
  register: ( callback ) ->
    @callbacks.push callback