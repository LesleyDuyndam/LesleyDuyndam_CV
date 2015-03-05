(function() {
  var animation, i, label, labels, len, root, scroll;

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
    top: this.animationContainer.offsetTop + 50,
    bottom: this.animationContainer.nextElementSibling.offsetTop + 50
  };

  for (i = 0, len = labels.length; i < len; i++) {
    label = labels[i];
    this.charts.push(new root.CHART('skills', true, true, 'rgba(68, 63, 53, 1)', label));
  }

  animation.addTickEvent(function() {
    var active, char, j, len1, ref;
    active = false;
    ref = this.charts;
    for (j = 0, len1 = ref.length; j < len1; j++) {
      char = ref[j];
      active = active || char.animatePath();
    }
    if (!active) {
      return animation.pause();
    }
  });

  scroll.addEvent(function() {
    if (window.pageYOffset > this.animationTrigger.top && window.pageYOffset < this.animationTrigger.bottom && !this.animationStarted) {
      animation.play();
      return this.animationStarted = true;
    }
  });

  scroll.listen();

}).call(this);
