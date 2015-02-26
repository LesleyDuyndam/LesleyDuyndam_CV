#work save with jQuery Hoppa

(( $ ) ->


# If the DOM is ready
  $( document ).ready ->
    $.fn.adjustHeight = () ->
      return this.each ( index, object ) ->
        height = ( window.innerHeight - ( window.innerHeight / 3 ) ) - parseInt( $( ' header ' ).css( 'height' ) )
        $( object ).css( 'min-height', height )






    $.fn.pullToMiddle = () ->
      return this.each ( index, object ) ->

        child         = $ object
        parent_object = child.parent()

        parent =
          height  : parent_object.innerHeight()
          margin  : parseInt( parent_object.css( 'margin-top' ) ) + parseInt( parent_object.css( 'margin-bottom' ) )
          padding : parseInt( parent_object.css( 'padding-top' ) ) + parseInt( parent_object.css( 'padding-bottom' ) )

        parent.innerHeight = parent.height - ( parent.margin + parent.padding )

        console.log( child[ index ].height )

        marginTop = ( parent.innerHeight - child[ index ].height ) / 2

        console.log( marginTop )

        child.css( 'margin-top', marginTop )






    article   = $( ' article ' )
    toMiddle  = $( ' .to-middle ' )


    article.adjustHeight()

    $( ' img ' ).load ->
      toMiddle.pullToMiddle()


    $( window ).resize ->
      article.adjustHeight()
      toMiddle.pullToMiddle()


) jQuery