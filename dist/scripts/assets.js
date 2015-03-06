(function() {
  (function($) {
    return $(document).ready(function() {
      var intro;
      $.fn.adjustHeight = function() {
        return this.each(function(index, object) {
          var height;
          height = (window.innerHeight - (window.innerHeight / 5)) - parseInt($(' header ').css('height'));
          return $(object).css('min-height', height);
        });
      };
      $.fn.pullToMiddle = function() {
        return this.each(function(index, object) {
          var child, parent, parent_object;
          child = $(object);
          parent_object = child.parent();
          parent = {
            height: parent_object.innerHeight(),
            margin: parseInt(parent_object.css('margin-top')) + parseInt(parent_object.css('margin-bottom')),
            padding: parseInt(parent_object.css('padding-top')) + parseInt(parent_object.css('padding-bottom'))
          };
          parent.innerHeight = parent.height - (parent.margin + parent.padding);
          return child.css('margin-top', (parent.innerHeight - child[index].height) / 2);
        });
      };
      if (!device.mobile()) {
        intro = $(' article#intro ');
        intro.adjustHeight();
        $(' img#intro-img ').load(function() {
          return $(this).pullToMiddle();
        });
        return $(window).resize(function() {
          intro.adjustHeight();
          return $(' img#intro-img ').pullToMiddle();
        });
      }
    });
  })(jQuery);

}).call(this);


/*
  Make website responsive
 */

(function() {
  (function($) {
    return $(document).ready(function() {
      var burger;
      if (device.mobile() || device.tablet() && device.portrait()) {
        console.log('Device = mobile');
        burger = $(' <img></img> ').attr({
          src: 'images/icons/burger.svg',
          id: 'burger'
        });
        burger = $(' #nav ').append(burger);
        return burger.click(function() {
          return $(' #nav ul ').toggleClass('show');
        });
      }
    });
  })(jQuery);

}).call(this);
