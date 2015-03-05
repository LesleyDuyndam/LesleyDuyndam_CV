root = exports ? this

animation = new root.LOOP()
scroll = new root.SCROLL()

labels = [
  { text : 'HTML5',  value : 90 },
  { text : 'CSS', value : 85},
  { text : 'JavaScript',  value : 80 },
  { text : 'CoffeeScript', value : 70},
  { text : 'NodeJS', value : 50},
  { text : 'AngularJS',  value : 50 },
  { text : 'jQuery', value : 70},
  { text : 'Wordpress', value : 75},
  { text : 'Illustrator', value : 85},
]
@charts = []
@animationStarted = false;
@animationContainer = document.getElementById( 'skills' )
@animationTrigger = {
  top: @animationContainer.offsetTop + 50,
  bottom: @animationContainer.nextElementSibling.offsetTop + 50
}



for label in labels
  @charts.push( new root.CHART 'skills', true, true, 'rgba(68, 63, 53, 1)', label )

animation.addTickEvent ->
  active = false

  for char in @charts
    active = active || char.animatePath()

  if( !active )
    animation.pause()



scroll.addEvent ->
  if( window.pageYOffset > @animationTrigger.top && window.pageYOffset < @animationTrigger.bottom && !@animationStarted  )
    animation.play()
    @animationStarted = true

scroll.listen()


#
#animation.addTickEvent ->
#  active = false
#
#  for char in @charts
#    if( char.createPath()  )
#      char.ring.attr( 'path', char.path )
#      active = true
#
#  if ( !active )
#    animation.pause()

#animation.play()

