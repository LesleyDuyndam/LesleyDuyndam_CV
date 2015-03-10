(function() {
  var LOOP, root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;


  /*
    LOOP module class
      - A module will be instantiated only once
   */

  LOOP = (function() {
    function LOOP() {
      this.counter = 0;
      this.events = [];
    }


    /*
    Check if the loop is st
     */

    LOOP.prototype.running = false;


    /*
      Add callbacks to the tick event
     */

    LOOP.prototype.addTickEvent = function(callback) {
      return this.events.push(callback);
    };


    /*
      Create the tick event
     */

    LOOP.prototype.tick = function() {
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

  root.loop = new LOOP();

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
    }

    SCROLL.prototype.addEvent = function(callback) {
      return this.events.push(callback);
    };

    SCROLL.prototype.listen = function() {
      var parent;
      parent = this;
      return window.addEventListener('scroll', function() {
        var callback, i, len, ref, results;
        ref = parent.events;
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          callback = ref[i];
          results.push(callback());
        }
        return results;
      });
    };

    return SCROLL;

  })();

  root.scroll = new SCROLL();

}).call(this);
