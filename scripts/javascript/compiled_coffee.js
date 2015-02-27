(function() {
  var CHART, root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.CHART = CHART = (function() {
    function CHART(parent, width, height, ringColor, label, total, duration) {
      var wrapper;
      this.parent = parent;
      this.width = width;
      this.height = height;
      this.ringColor = ringColor;
      this.label = label;
      this.total = total != null ? total : 100;
      this.duration = duration != null ? duration : 3000;
      this.value = 0;
      this.finished = false;
      wrapper = document.createElement('div');
      wrapper.classList.add('wrapper');
      wrapper.classList.add(this.label.text);
      wrapper = document.getElementById(this.parent).appendChild(wrapper);
      if (this.width === true) {
        this.width = wrapper.clientWidth;
      }
      if (this.height === true) {
        this.height = wrapper.clientWidth;
      }
      this.paper = Raphael(wrapper, parseInt(this.width), parseInt(this.height));
      if (this.paper.width >= this.paper.height) {
        this.radius = this.paper.height / 3;
      } else {
        this.radius = this.paper.width / 3;
      }
      this.xloc = this.paper.width / 2;
      this.yloc = this.paper.height / 2;
      this.createPath();
      this.ring = this.paper.path(this.path);
      this.ring.attr('stroke', this.ringColor);
      this.ring.attr('stroke-width', this.paper.width / 5);
      this.svgText = this.paper.text(this.xloc, this.yloc, this.label.text).attr({
        "font-size": this.radius * 0.2,
        "fill": 'rgba( 68, 63, 53, 1)',
        "font-weight": 100
      });
    }

    CHART.prototype.createPath = function() {
      if (this.value < this.label.value) {
        this.value++;
      } else {
        this.finished = true;
      }
      this.alpha = 360 / this.total * this.value;
      this.a = (90 - this.alpha) * Math.PI / 180;
      this.x = this.xloc + this.radius * Math.cos(this.a);
      this.y = this.yloc - this.radius * Math.sin(this.a);
      if (this.total === this.label.value) {
        return this.path = [["M", this.xloc, this.yloc - this.radius], ["A", this.radius, this.radius, 0, 1, 1, this.xloc - 0.01, this.yloc - this.radius]];
      } else {
        return this.path = [["M", this.xloc, this.yloc - this.radius], ["A", this.radius, this.radius, 0, +(this.alpha > 180), 1, this.x, this.y]];
      }
    };

    CHART.prototype.update = function() {
      return console.log(toString(this.path[0]) + toString(this.path[1]));
    };

    return CHART;

  })();

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

(function() {
  var animation, charts, i, label, labels, len, root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  animation = new root.LOOP();

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
    charts.push(new root.CHART('skills', true, true, 'rgba(68, 63, 53, 1)', label));
  }

  animation.addTickEvent(function() {
    var active, char, j, len1;
    console.log('update animations aangroepen');
    active = false;
    for (j = 0, len1 = charts.length; j < len1; j++) {
      char = charts[j];
      char.createPath();
      char.update();
      if (!char.finished) {
        active = true;
      }
    }
    if (!active) {
      return animation.pause();
    }
  });

  animation.play();

}).call(this);

(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;


  /*
    CANVAS class
   */

  root.LOOP = (function() {
    function LOOP() {
      this.running = false;
      this.counter = 0;
      this.events = [];
    }


    /*
      Add callbacks to the tick event
     */

    LOOP.prototype.addTickEvent = function(callback) {
      return this.events.push(callback);
    };


    /*
      Create the tick event
     */

    LOOP.prototype.tick = function(escapeRunning) {
      var callback, i, len, ref;
      if (escapeRunning === void 0) {
        this.counter++;
      }
      if (this.running || escapeRunning === true) {
        ref = this.events;
        for (i = 0, len = ref.length; i < len; i++) {
          callback = ref[i];
          callback();
        }
        return window.requestAnimationFrame((function(_this) {
          return function() {
            return _this.tick();
          };
        })(this));
      }
    };


    /*
      Start the loop
     */

    LOOP.prototype.play = function() {
      if (!this.running) {
        this.running = true;
        return window.requestAnimationFrame((function(_this) {
          return function() {
            return _this.tick();
          };
        })(this));
      }
    };


    /*
      Pause the loop
     */

    LOOP.prototype.pause = function() {
      if (this.running) {
        this.running = false;
        return this.counter = 0;
      }
    };

    return LOOP;

  })();

}).call(this);
