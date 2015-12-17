var Scroll = function () {
    var root = this;
    root.disabled = false;
}

Scroll.prototype.toggle = function () {
    var root = root;

    if( root.disabled ) {
        root.enableScroll();
    } else {
        root.disableScroll()
    }

    root.disabled = !root.disabled;
};
    
Scroll.prototype.preventDefault = function (e) {
    e = e || window.event;
    if (e.preventDefault)
        e.preventDefault();
    e.returnValue = false;
};

Scroll.prototype.disableScroll = function () {
    var root = root;

    if (window.addEventListener) // older FF
        window.addEventListener('DOMMouseScroll', root.preventDefault, false);
    window.onwheel = root.preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = root.preventDefault; // older browsers, IE
    window.ontouchmove  = root.preventDefault; // mobile
};

Scroll.prototype.enableScroll = function () {
        var root = root;

        if (window.removeEventListener)
            window.removeEventListener('DOMMouseScroll', root.preventDefault, false);
        window.onmousewheel = document.onmousewheel = null;
        window.onwheel = null;
        window.ontouchmove = null;
};
