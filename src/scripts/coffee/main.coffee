
(( $ ) ->
  root = exports ? this


#  Load Modules
  animation = root.loop

  scroll = root.scroll

  Scrontroll  = new SCRONTROLL()

  header = $(' header ')

  ###
    Scrontroll.js not finished/ stable enough to replace all scroll events.
    Although, the (very bare!) stable version is used for detecting scroll direction
  ###
  header.addClass( 'show big' )

  Scrontroll.watch 'direction', ( direction ) =>

    if direction isnt undefined
      if direction is 'atTop' or direction is 'atBottom'
        header.addClass( 'big', 'show' )

      if direction is 'up'
        header.removeClass( 'big' ).addClass( 'show' )

      if direction is 'down'
        header.removeClass( 'big' ).removeClass( 'show' )


  if( device.mobile() || device.tablet() && device.portrait() )
    $(' #burger ').click () ->
      $(' ul#nav-ul ').toggleClass( 'show' )
      header.toggleClass( 'show-mobile' )

    $(' ul#nav-ul ').click () ->
      $(' ul#nav-ul ').removeClass( 'show' )
      header.toggleClass( 'show-mobile' )




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
#    Every new tick, active flag begins false. If a chart is
#    not finished, it wil set active flag to true.

    animation.addTickEvent ->
      animation.running = false

      for chart in @charts
        animation.running = animation.running || chart.animatePath()

      if( !animation.running )
        animation.pause()



  scroll.addEvent ->
    if( window.pageYOffset > @animationTrigger.top && window.pageYOffset < @animationTrigger.bottom && !@animationStarted )
      animation.play()
      @animationStarted = true

  scroll.listen()

) jQuery