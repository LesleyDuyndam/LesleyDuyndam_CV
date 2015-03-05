(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;


  /*
    LOOP class
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

}).call(this);

(function() {
  var root;

  root = typeof exports !== "undefined" && exports !== null ? exports : this;


  /*
    SCROLL class
   */

  root.SCROLL = (function() {
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

}).call(this);
