(function() {
  (function($) {
    var animation, burger, element, forceShowHeader, header, hideHeader, i, j, k, label, len, len1, len2, mobile_menu, ref, ref1, ref2, results, root, scroll, scrontroll, target, trigger;
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
    this.labels = [];
    this.charts = [];
    this.label_elements = $('#chart-wrapper .wrapper');
    ref = this.label_elements;
    for (i = 0, len = ref.length; i < len; i++) {
      element = ref[i];
      this.labels.push({
        element: $(element)[0],
        text: $(element).attr('data-name'),
        value: parseInt($(element).attr('data-value'))
      });
    }
    if (device.mobile()) {
      ref1 = this.labels;
      results = [];
      for (j = 0, len1 = ref1.length; j < len1; j++) {
        label = ref1[j];
        results.push(this.charts.push(new root.CHART('chart-wrapper', label, {
          stroke: 5,
          ringColor: 'rgba(68, 63, 53, 1)'
        })));
      }
      return results;
    } else {
      ref2 = this.labels;
      for (k = 0, len2 = ref2.length; k < len2; k++) {
        label = ref2[k];
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
        var chart, l, len3, ref3;
        animation.running = false;
        ref3 = this.charts;
        for (l = 0, len3 = ref3.length; l < len3; l++) {
          chart = ref3[l];
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
