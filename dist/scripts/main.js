(function() {
  (function($) {
    var animation, i, j, label, labels, len, len1, root, scroll;
    root = typeof exports !== "undefined" && exports !== null ? exports : this;
    animation = new root.LOOP();
    scroll = new root.SCROLL();
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
        var active, char, k, len2, ref;
        active = false;
        ref = this.charts;
        for (k = 0, len2 = ref.length; k < len2; k++) {
          char = ref[k];
          active = active || char.animatePath();
        }
        if (!active) {
          return animation.pause();
        }
      });
    }
    if (device.mobile() || device.tablet() && device.portrait()) {
      $(' #burger ').click(function() {
        return $(' #nav ul ').toggleClass('show');
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
