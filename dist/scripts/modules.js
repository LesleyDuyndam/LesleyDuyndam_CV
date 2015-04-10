(function() {
  var ANIMATION, root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;


  /*
    LOOP module class
      - A module will be instantiated only once
   */

  ANIMATION = (function() {
    function ANIMATION() {
      this.counter = 0;
      this.events = [];
    }


    /*
    Check if the loop is st
     */

    ANIMATION.prototype.running = false;


    /*
      Add callbacks to the tick event
     */

    ANIMATION.prototype.addTickEvent = function(callback) {
      return this.events.push(callback);
    };


    /*
      Create the tick event
     */

    ANIMATION.prototype.tick = function() {
      var callback, i, len, ref;
      if (this.running) {
        ref = this.events;
        for (i = 0, len = ref.length; i < len; i++) {
          callback = ref[i];
          callback();
        }
        this.counter++;
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

    ANIMATION.prototype.play = function() {
      if (!this.running) {
        this.running = true;
        return window.requestAnimationFrame((function(_this) {
          return function() {
            return _this.tick();
          };
        })(this));
      }
    };

    ANIMATION.prototype.started = function() {
      return this.counter !== 0;
    };


    /*
      Pause the loop
     */

    ANIMATION.prototype.pause = function() {
      if (this.running) {
        this.running = false;
        return this.counter = 0;
      }
    };

    return ANIMATION;

  })();

  root.animation = new ANIMATION();

}).call(this);

(function() {
  var SCROLL, root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;


  /*
    SCROLL module class
    - A module will be instantiated only once
   */

  SCROLL = (function() {
    function SCROLL() {
      this.events = [];
      this.wait = false;
      this.start_time = 0;
    }

    SCROLL.prototype.addEvent = function(callback) {
      var parent;
      this.events.push(callback);
      parent = this;
      return window.addEventListener('scroll', function() {
        var i, len, ref, results;
        ref = parent.events;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          callback = ref[i];
          results.push(callback());
        }
        return results;
      });
    };

    SCROLL.prototype.pause = function(ms) {
      this.wait = true;
      return this.start_time = new Date() + ms;
    };

    return SCROLL;

  })();

  root.scroll = new SCROLL();

}).call(this);
