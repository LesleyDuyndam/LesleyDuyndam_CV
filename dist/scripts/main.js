(function() {
  (function($) {
    var animation, burger, forceShowHeader, header, hideHeader, i, j, label, labels, len, len1, mobile_menu, results, root, scroll, scrontroll, target, trigger;
    root = typeof exports !== "undefined" && exports !== null ? exports : this;
    header = $(' #header ');

    /*
      Scrontroll.js not finished/ stable enough to replace all scroll events.
      Although, the (very bare!) stable version is used for detecting scroll direction
     */
    scrontroll = new SCRONTROLL();
    hideHeader = false;
    forceShowHeader = false;
    header.addClass('show');
    scrontroll.watch('direction', (function(_this) {
      return function(direction) {
        if (direction !== void 0) {
          if (direction === 'atTop' || direction === 'atBottom') {
            header.addClass('show');
          }
          if (direction === 'up' && !hideHeader) {
            header.addClass('show');
          }
          if (direction === 'down' && !forceShowHeader) {
            return header.removeClass('show');
          }
        }
      };
    })(this));
    if (device.mobile() || device.tablet() && device.portrait() || device.desktop() && device.portrait()) {
      mobile_menu = $(' ul#nav-ul ');
      burger = $(' #burger ');
      burger.click(function() {
        mobile_menu.toggleClass('show');
        return header.toggleClass('show-mobile');
      });
      mobile_menu.click(function() {
        mobile_menu.removeClass('show');
        return header.toggleClass('show-mobile');
      });
    }
    $(' a ', ' nav#nav').click(function() {
      forceShowHeader = true;
      return window.setTimeout(function() {
        return forceShowHeader = false;
      }, 500);
    });
    $('button.portfolio_button').click(function() {
      var button_img, button_text, parent, sibling;
      hideHeader = true;
      window.setTimeout(function() {
        return hideHeader = false;
      }, 500);
      header.removeClass('show');
      parent = $(this.parentNode);
      sibling = $(' div.item_content ', parent);
      button_img = $(' img.button_node ', parent);
      button_text = $(' span.button_node ', parent);
      if (sibling.hasClass('closed')) {
        sibling.removeClass('closed');
        sibling.addClass('open');
        button_img.attr('src', "images/icons/close_icon.svg");
        button_text.html('Close');
        return $('html, body').animate({
          scrollTop: $('header', parent).offset().top
        }, 150);
      } else {
        sibling.removeClass('open');
        sibling.addClass('closed');
        button_img.attr('src', "images/icons/read_icon.svg");
        button_text.html('Read more');
        return $('html, body').animate({
          scrollTop: parent.offset().top
        }, 150);
      }
    });
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
    if (device.mobile()) {
      results = [];
      for (i = 0, len = labels.length; i < len; i++) {
        label = labels[i];
        results.push(this.charts.push(new root.CHART('chart-wrapper', label, {
          stroke: 5,
          ringColor: 'rgba(68, 63, 53, 1)'
        })));
      }
      return results;
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
      animation = root.animation;
      scroll = root.scroll;
      target = document.getElementById('skills');
      trigger = {
        top: target.offsetTop,
        bottom: target.nextElementSibling.offsetTop
      };
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
      return scroll.addEvent(function() {
        if (window.pageYOffset > trigger.top && window.pageYOffset < trigger.bottom && !animation.started()) {
          return animation.play();
        }
      });
    }
  })(jQuery);

}).call(this);
