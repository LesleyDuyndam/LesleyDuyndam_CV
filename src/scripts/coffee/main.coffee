root = exports ? this

animation = new root.LOOP()
scroll = new root.SCROLL()

labels = [
  { text: 'HTML5', value: 90 },
  { text: 'CSS', value: 85 },
  { text: 'JavaScript', value: 83 },
  { text: 'Illustrator', value: 80 },
  { text: 'CoffeeScript', value: 75 },
  { text: 'jQuery', value: 70 },
  { text: 'Wordpress', value: 65 },
  { text: 'AngularJS', value: 45 },
  { text: 'NodeJS', value: 40 }
]
@charts = []
@animationStarted = false;
@animationContainer = document.getElementById( 'skills' )
@animationTrigger = {
  top: @animationContainer.offsetTop,
  bottom: @animationContainer.nextElementSibling.offsetTop
}

if( device.mobile() )
  for label in labels
    @charts.push( new root.CHART( 'chart-wrapper', label, {
      stroke    : 5
      ringColor : 'rgba(68, 63, 53, 1)'
    }))
else
  for label in labels
    @charts.push( new root.CHART( 'chart-wrapper', label, {
      animate   : true
      speed     : 2
      stroke    : 5
      ringColor : 'rgba(68, 63, 53, 1)'
    }))

  animation.addTickEvent ->
    active = false

    for char in @charts
      active = active || char.animatePath()

    if( !active )
      animation.pause()



scroll.addEvent ->
  if( window.pageYOffset > @animationTrigger.top && window.pageYOffset < @animationTrigger.bottom && !@animationStarted )
    animation.play()
    @animationStarted = true

scroll.listen()