/**
 * Form Class, handles server communication
 * @param element
 * @constructor
 */
var Form = function (element) {
    var root = this;

    root.$element = element;
    $('.js-add-item').on('click', function () {
        console.dir('clicked');
        $('.form-wrapper').toggleClass('show');
    });
};

Form.prototype.get = function (callback) {
    var input, data;

    data = {};
    data.url = $('.form-wrapper .form').attr('data-type');

    input = $('.form .input');

    input.each(function () {
        data[$(this).attr('id')] = $(this).val();
    });

    callback(data);
};


Form.prototype.clear = function () {

};