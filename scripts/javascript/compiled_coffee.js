(function() {
  var Chart, charts, i, label, labels, len;

  Chart = (function() {
    function Chart(parent1, width, height, ringColor, label1) {
      var container, makePath, paper, parent, text, wrapper;
      this.parent = parent1;
      this.width = width;
      this.height = height;
      this.ringColor = ringColor;
      this.label = label1;
      parent = document.getElementById(this.parent);
      wrapper = document.createElement('div');
      wrapper.classList.add('wrapper');
      wrapper.classList.add(this.label.text);
      container = parent.appendChild(wrapper);
      if (this.width === true) {
        this.width = parseInt(wrapper.clientWidth);
      }
      if (this.height === true) {
        this.height = parseInt(wrapper.clientWidth);
      }
      paper = Raphael(container, this.width, this.height);
      makePath = function(value, total) {
        if (paper.width >= paper.height) {
          this.radius = paper.height / 3;
        } else {
          this.radius = paper.width / 3;
        }
        this.xloc = paper.width / 2;
        this.yloc = paper.height / 2;
        this.alpha = 360 / total * value;
        this.a = (90 - alpha) * Math.PI / 180;
        this.x = this.xloc + this.radius * Math.cos(a);
        this.y = this.yloc - this.radius * Math.sin(a);
        this.path;
        if (total === value) {
          this.path = [["M", this.xloc, this.yloc - this.radius], ["A", this.radius, this.radius, 0, 1, 1, this.xloc - 0.01, this.yloc - this.radius]];
        } else {
          this.path = [["M", this.xloc, this.yloc - this.radius], ["A", this.radius, this.radius, 0, +(alpha > 180), 1, x, y]];
        }
        return this.path;
      };
      this.ring = paper.path(makePath(80, 100));
      this.ring.attr('stroke', this.ringColor);
      this.ring.attr('stroke-width', paper.width / 5);
      text = document.createElement('span');
      text.className = 'label';
      text.innerHTML = this.label.text;
      paper.canvas.parentNode.insertBefore(text, paper.canvas);
    }

    return Chart;

  })();

  labels = [
    {
      text: 'HTML5',
      value: 80
    }, {
      text: 'CSS',
      value: 70
    }, {
      text: 'JavaScript',
      value: 80
    }, {
      text: 'CoffeeScript',
      value: 70
    }, {
      text: 'AngularJS',
      value: 50
    }, {
      text: 'jQuery',
      value: 60
    }
  ];

  charts = [];

  for (i = 0, len = labels.length; i < len; i++) {
    label = labels[i];
    charts.push(new Chart('skills', true, true, 'rgba(68, 63, 53, 1)', label));
  }

}).call(this);

(function() {
  (function($) {
    return $(document).ready(function() {
      var article;
      article = $(' article ');
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
      article.adjustHeight();
      $(' img#intro-img ').load(function() {
        return $(this).pullToMiddle();
      });
      return $(window).resize(function() {
        article.adjustHeight();
        return $(' img#intro-img ').pullToMiddle();
      });
    });
  })(jQuery);

}).call(this);
