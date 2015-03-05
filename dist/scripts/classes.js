(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;

  root.CHART = (function() {
    function CHART(parent, width, height, ringColor, label, total) {
      var wrapper;
      this.parent = parent;
      this.width = width;
      this.height = height;
      this.ringColor = ringColor;
      this.label = label;
      this.total = total != null ? total : 100;
      this.value = -1;
      this.finished = false;
      wrapper = document.createElement('div');
      wrapper.classList.add('wrapper');
      wrapper.classList.add(this.label.text);
      wrapper = document.getElementById(this.parent).appendChild(wrapper);
      if (this.width) {
        this.width = wrapper.clientWidth;
      }
      if (this.height) {
        this.height = wrapper.clientWidth;
      }
      Raphael.prototype.center = {
        x: this.width / 2,
        y: this.height / 2
      };
      this.paper = Raphael(wrapper, parseInt(this.width), parseInt(this.height));
      if (this.paper.width >= this.paper.height) {
        this.radius = this.paper.height / 3;
      } else {
        this.radius = this.paper.width / 3;
      }
      this.createPath();
      this.ring = this.paper.path(this.path);
      this.ring.attr('stroke', this.ringColor);
      this.ring.attr('stroke-width', this.paper.width / 5);
      this.svgText = this.paper.text(this.paper.center.x, this.paper.center.y, this.label.text).attr({
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
      this.x = this.paper.center.x + this.radius * Math.cos(this.a);
      this.y = this.paper.center.y - this.radius * Math.sin(this.a);
      if (this.total === this.label.value) {
        this.path = [["M", this.paper.center.x, this.paper.center.y - this.radius], ["A", this.radius, this.radius, 0, 1, 1, this.paper.center.x - 0.01, this.paper.center.y - this.radius]];
      } else {
        this.path = [["M", this.paper.center.x, this.paper.center.y - this.radius], ["A", this.radius, this.radius, 0, +(this.alpha > 180), 1, this.x, this.y]];
      }
      return !this.finished;
    };

    CHART.prototype.animatePath = function() {
      if (this.createPath()) {
        this.ring.attr('path', this.path);
        return true;
      } else {
        return false;
      }
    };

    return CHART;

  })();

}).call(this);
