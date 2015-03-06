###
  Make website responsive
###

(( $ ) ->

  $( document ).ready ->

    addBurger = () ->
      if( device.mobile() || device.tablet() )

        if( $(' #burger ').length == 0 )

          burger = $(' <img></img> ')
            .attr({
              src: 'images/icons/burger.svg',
              id: 'burger'
            })

          burger = $(' #nav ').append( burger )

        else
          burger = $(' #burger ')


        burger.click () ->
          $( ' #nav ul ' ).toggleClass( 'show' )

      else
        $(' #burger ').remove()

    addBurger()

    window.addEventListener 'orientationchange', (e) ->
      addBurger()

) jQuery