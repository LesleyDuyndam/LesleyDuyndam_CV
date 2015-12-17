
(( $ ) ->
  root = exports ? this
  header = $(' #header ')

  ###
    Scrontroll.js not finished/ stable enough to replace all scroll events.
    Although, the (very bare!) stable version is used for detecting scroll direction
  ###
  scrontroll  = new SCRONTROLL()

  hideHeader = false
  forceShowHeader = false

  header.addClass( 'show' )
  scrontroll.watch 'direction', ( direction ) =>

    if direction isnt undefined
      if direction is 'atTop' or direction is 'atBottom'
        header.addClass( 'show' )

      if direction is 'up' and !hideHeader
        header.addClass( 'show' )

      if direction is 'down' and !forceShowHeader
        header.removeClass( 'show' )



#  Click events
  if( device.mobile() || device.tablet() && device.portrait() || device.desktop() && device.portrait() )

    mobile_menu = $(' ul#nav-ul ')
    burger      = $(' #burger ')

    burger.click () ->
      mobile_menu.toggleClass 'show'
      header.toggleClass 'show-mobile'

    mobile_menu.click () ->
      mobile_menu.removeClass 'show'
      header.toggleClass 'show-mobile'


  $(' a ', ' nav#nav').click ->
    forceShowHeader = true
    window.setTimeout( ->
      forceShowHeader = false
    , 500)


  $( 'button.portfolio_button' ).click ->

    hideHeader = true
    window.setTimeout( ->
      hideHeader = false
    , 500)

    header.removeClass( 'show' )



    parent = $( @.parentNode )
    sibling = $(' div.item_content ' ,parent )
    button_img = $(' img.button_node ', parent )
    button_text = $(' span.button_node ', parent )

#    Change the state of the item
    if sibling.hasClass 'closed'
      sibling.removeClass 'closed'
      sibling.addClass 'open'
      button_img.attr 'src', "images/icons/close_icon.svg"
      button_text.html 'Close'
      #    Scroll to top of the item
      $('html, body').animate({
        scrollTop: $( 'header', parent).offset().top
      }, 150)

    else
      sibling.removeClass 'open'
      sibling.addClass 'closed'
      button_img.attr 'src', "images/icons/read_icon.svg"
      button_text.html 'Read more'
      #    Scroll to top of the item
      $('html, body').animate({
        scrollTop: parent.offset().top
      }, 150)

  @labels = []
  @charts = []

  @label_elements = $('#chart-wrapper .wrapper');

  for element in @label_elements
    @labels.push(
      element : $(element)[0]
      text    : $(element).attr('data-name')
      value   : parseInt($(element).attr('data-value'))
    )

# Only animate chart, if device is NOT mobile
  if( device.mobile() )

    for label in @labels
      @charts.push( new root.CHART( 'chart-wrapper', label, {
        stroke    : 5
        ringColor : 'rgba(68, 63, 53, 1)'
      }))
      
  else
    for label in @labels
      @charts.push( new root.CHART( 'chart-wrapper', label, {
        animate   : true
        speed     : 2
        stroke    : 5
        ringColor : 'rgba(68, 63, 53, 1)'
      }))



#    Function to call on every new animation tick
#    Every new tick, active flag begins false. If a chart is
#    not finished, it wil set active flag to true.

    animation = root.animation
    scroll = root.scroll

    target = document.getElementById( 'skills' )
    trigger = {
      top: target.offsetTop,
      bottom: target.nextElementSibling.offsetTop
    }

    animation.addTickEvent ->
      animation.running = false

      for chart in @charts
        animation.running = animation.running || chart.animatePath()

      if( !animation.running )
        animation.pause()

    scroll.addEvent ->
      if( window.pageYOffset > trigger.top && window.pageYOffset < trigger.bottom && !animation.started() )
        animation.play()

) jQuery