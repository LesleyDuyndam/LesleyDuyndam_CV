(function() {
  (function($) {
    var Scrontroll, animation, header, i, j, label, labels, len, len1, root, scroll;
    root = typeof exports !== "undefined" && exports !== null ? exports : this;
    animation = root.loop;
    scroll = root.scroll;
    Scrontroll = new SCRONTROLL();
    header = $(' header ');

    /*
      Scrontroll.js not finished/ stable enough to replace all scroll events.
      Although, the (very bare!) stable version is used for detecting scroll direction
     */
    header.addClass('show big');
    Scrontroll.watch('direction', (function(_this) {
      return function(direction) {
        if (direction !== void 0) {
          if (direction === 'atTop' || direction === 'atBottom') {
            header.addClass('big', 'show');
          }
          if (direction === 'up') {
            header.removeClass('big').addClass('show');
          }
          if (direction === 'down') {
            return header.removeClass('big').removeClass('show');
          }
        }
      };
    })(this));
    if (device.mobile() || device.tablet() && device.portrait()) {
      $(' #burger ').click(function() {
        $(' ul#nav-ul ').toggleClass('show');
        return header.toggleClass('show-mobile');
      });
      $(' ul#nav-ul ').click(function() {
        $(' ul#nav-ul ').removeClass('show');
        return header.toggleClass('show-mobile');
      });
    }
    labels = [
      {
        text: 'HTML5',
        value: 90
      }, {
        text: 'CSS',
        value: 85
      }, {
        text: 'JavaScript',
        value: 83
      }, {
        text: 'Illustrator',
        value: 80
      }, {
        text: 'CoffeeScript',
        value: 75
      }, {
        text: 'jQuery',
        value: 70
      }, {
        text: 'Wordpress',
        value: 65
      }, {
        text: 'AngularJS',
        value: 45
      }, {
        text: 'NodeJS',
        value: 40
      }
    ];
    this.charts = [];
    this.animationStarted = false;
    this.animationContainer = document.getElementById('skills');
    this.animationTrigger = {
      top: this.animationContainer.offsetTop,
      bottom: this.animationContainer.nextElementSibling.offsetTop
    };
    if (device.mobile()) {
      for (i = 0, len = labels.length; i < len; i++) {
        label = labels[i];
        this.charts.push(new root.CHART('chart-wrapper', label, {
          stroke: 5,
          ringColor: 'rgba(68, 63, 53, 1)'
        }));
      }
    } else {
      for (j = 0, len1 = labels.length; j < len1; j++) {
        label = labels[j];
        this.charts.push(new root.CHART('chart-wrapper', label, {
          animate: true,
          speed: 2,
          stroke: 5,
          ringColor: 'rgba(68, 63, 53, 1)'
        }));
      }
      animation.addTickEvent(function() {
        var chart, k, len2, ref;
        animation.running = false;
        ref = this.charts;
        for (k = 0, len2 = ref.length; k < len2; k++) {
          chart = ref[k];
          animation.running = animation.running || chart.animatePath();
        }
        if (!animation.running) {
          return animation.pause();
        }
      });
    }
    scroll.addEvent(function() {
      if (window.pageYOffset > this.animationTrigger.top && window.pageYOffset < this.animationTrigger.bottom && !this.animationStarted) {
        animation.play();
        return this.animationStarted = true;
      }
    });
    return scroll.listen();
  })(jQuery);

}).call(this);
