#work save with jQuery

(( $ ) ->


# If the DOM is ready
  $( document ).ready ->

    article   = $( ' article ' )




    $.fn.adjustHeight = () ->
      this.each ( index, object ) ->
        height = ( window.innerHeight - ( window.innerHeight / 5 ) ) - parseInt( $( ' header ' ).css( 'height' ) )
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

        child.css( 'margin-top', ( parent.innerHeight - child[ index ].height ) / 2 )







    article.adjustHeight()

    $( ' img#intro-img ' ).load ->
      $( this ).pullToMiddle()


    $( window ).resize ->
      article.adjustHeight()
      $( ' img#intro-img ' ).pullToMiddle()

) jQuery