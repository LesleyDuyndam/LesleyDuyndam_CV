#Chart class to display skills as an interactive pie chart
root = exports ? this

class root.CHART
  constructor: ( @parent, @label, params ) ->

    @animate    = params.animate || false
    @speed      = params.speed || 1
    @stroke     = params.stroke || 10
    @total      = params.total || 100
    @ringColor  = params.ringColor || 'rgba( 0, 0, 0, 1)'

    @value      = -@speed;
    @finished   = false;



#   Create div.wrapper.@label[ text]
    wrapper = document.createElement( 'div' )
    wrapper.classList.add( 'wrapper' )
    wrapper.classList.add( @label.text )

#   Add the div to the parent
    wrapper = document.getElementById( @parent ).appendChild( wrapper )

#   Check if @width = true

    if params.width == undefined
      @width = wrapper.clientWidth

    if params.height == undefined
      @height = wrapper.clientWidth

    Raphael.prototype.center =  {
      x : this.width / 2,
      y : this.height / 2
    }

#   Create the Raphael svg object
    @paper = Raphael( wrapper, parseInt( @width ), parseInt( @height ) )

    # Determine the shortest side (x or y) and make the radius 1/3 of it
    if @paper.width >= @paper.height
      @radius = ( @paper.height / 3 )
    else
      @radius = ( @paper.width / 3 )

#    Create the charts path for the first time
    @createPath()

#   Draw the chart
    @ring = @paper.path( @path )
    #    Draw the path
    @ring.attr( 'stroke', @ringColor )
    @ring.attr( 'stroke-width', ( @paper.width / 100 ) * @stroke )

#    Draw the centered text
    @svgText = @paper.text( @paper.center.x, @paper.center.y, @label.text ).attr({
      "font-size": @radius * 0.2,
      "fill": 'rgba( 68, 63, 53, 1)',
      "font-weight": 100
    });



# Generate the chart path
  createPath: () ->

#   Keep track of the charts progress during the animation
    if( @animate && @value < @label.value )
#     Chart is not finished animating, update the value
      @value += @speed
    else
#     Chart is finished animating, flag as finished
      @value = @label.value
      @finished = true

    @alpha = 360 / @total * @value
    @a     = (90 - @alpha) * Math.PI / 180
    @x     = @paper.center.x + @radius * Math.cos(@a)
    @y     = @paper.center.y - @radius * Math.sin(@a)

#   Check if value is the same als the total (a full circle) and export the path
    if ( @total == @label.value )
      @path = [
        ["M", @paper.center.x, @paper.center.y - @radius],
        ["A", @radius, @radius, 0, 1, 1, @paper.center.x - 0.01, @paper.center.y - @radius]
      ]

    else
      @path = [
        ["M", @paper.center.x, @paper.center.y - @radius],
        ["A", @radius, @radius, 0, +( @alpha > 180), 1, @x, @y]
      ]

    return !@finished

  animatePath: () ->
    if( @createPath() )
      @ring.attr( 'path', @path )
      return true
    else
      return false