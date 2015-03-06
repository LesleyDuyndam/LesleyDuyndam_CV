#root = exports ? this
####
#  Event Handler class
####
#
#class root.EVENT_HANDLER
#  construct: ( @settings ) ->
#    @callbacks  = []
#    @index      = []
#    @stats      =
#      'counter'   : 0,
#      'startTime' : null,
#      'lastTime'  : null
#
## Register a function to call back on event
#  registerCallback: ( name, callback, options ) ->
#
#    if( options == undefined || options.active == true )
#      active = true
#    else
#      active = false
#
#    @callbacks.push
#      'name'      : name
#      'time'      : new Date 'milliseconds'
#      'counter'   : 0
#      'active'    : active
#      "callback"  : callback
#
#
#
#  call: () ->
#    event =
#      'time'  : new Date( 'millisecond' )
#      'calls' : 0
#
#    for callback in @callbacks
#      do ( callback ) ->
#        callback()
#
#  registerEvent: ( event )->
#
#
####
#  type
#  - timer
#    - requestAnimationFrame ( auto )
#    - setInterval
#  - user_input
#    -
#
####
#
#_animation = new root.EVENT_HANDLER(
#  'type'        : 'timer',
#  'setInterval' : false,
#  'autoStart'   : false
#)
#
#_animation.registerCallback( 'animateChart',  ->
#
#,
#  'active' = false
#)
#
#_animation.start()
