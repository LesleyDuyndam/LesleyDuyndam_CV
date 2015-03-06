###
  Make website responsive
###

(( $ ) ->

  $( document ).ready ->

    if( device.mobile() || device.tablet() && device.portrait() )
      console.log( 'Device = mobile' )

      burger = $(' <img></img> ')
        .attr({
          src: 'images/icons/burger.svg',
          id: 'burger'
        })

      burger = $( ' #nav ' ).append( burger )

      burger.click () ->
        $( ' #nav ul ' ).toggleClass( 'show' )

) jQuery