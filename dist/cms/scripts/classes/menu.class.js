/**
 * Menu class, handles navigation
 * @param element
 * @constructor
 */
var Menu = function (element) {
    var root = this;
    root.$element = element;
    root.$buttons = root.$element.find('button');
    root.$anchors = root.$element.find('a');
    root.callbacks = {};

    root.$buttons.on('click', function () {
        var key = $(this).data('item');

        var itemCallbacks = root.callbacks[key];
        for (var i = 0; i < itemCallbacks.length; i++){
            itemCallbacks[i](true);
        }

        if ($('#' + key).length > 0){
            $('html, body').animate({
                scrollTop: $('#' + key).offset().top
            }, 350);
        }
    });
};

Menu.prototype.register = function (type, callback) {
    var root = this;
    if (!root.callbacks[type]) root.callbacks[type] = [];
    root.callbacks[type].push(callback);
};