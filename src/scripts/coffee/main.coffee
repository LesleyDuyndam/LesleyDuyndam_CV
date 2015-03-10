
(( $ ) ->
  root = exports ? this


#  Load Modules
  animation = root.loop
  scroll = root.scroll

#  $(".live-tile").liveTile()

# Give the data for the animated donut charts
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

# Only animate chart, if device is NOT mobile
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

#    Function to call on every new animation tick
#    Every new tick, active begins false. If a chart is
#    not finished, it wil set active to true.

    animation.addTickEvent ->
      animation.running = false

      for chart in @charts
        animation.running = animation.running || chart.animatePath()

      if( !animation.running )
        animation.pause()



  if( device.mobile() || device.tablet() && device.portrait() )
    $(' #burger ').click () ->
      $( ' #nav ul ' ).toggleClass( 'show' )


  scroll.addEvent ->
    if( window.pageYOffset > @animationTrigger.top && window.pageYOffset < @animationTrigger.bottom && !@animationStarted )
      animation.play()
      @animationStarted = true

  scroll.listen()
) jQuery