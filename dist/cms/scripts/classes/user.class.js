/**
 * User Class, handle authentication
 * @constructor
 */
var User = function () {
    var root = this;

    root.input = {};

    root.input.email = $('#email');
    root.input.password = $('#password');
    root.input.name = $('#name');

    root.form = $('#form');
    root.formType = 'login';


    $('.register').on('click', function (event) {
        event.preventDefault();

        if ($('.name').hasClass('show')) {
            $('.name').removeClass('show');
            $('#submit').attr('value', 'login');
            $('#login h1').text('login');
            $('.register').text('register');
            root.formType = 'login';
        } else {
            $('.name').addClass('show');
            $('#submit').attr('value', 'register');
            $('#login h1').text('register');
            $('.register').text('I already have a account');
            root.formType = 'register';
        }
    });

    root.form.on('submit', function (event) {
        event.preventDefault();

        if (root.formType === 'login') {
            root.login(root.input.email.val(), root.input.password.val());
        }

        if (root.formType === 'register') {
            root.register(root.input.name.val(), root.input.email.val(), root.input.password.val());
        }
    });

    $('.logout').on('click', function () {
        root.logout();
    });
};


User.prototype.register = function (name, email, password) {
    $.ajax({
        url : 'http://lesleyduyndam.nl/api/user/register',
        data : {
            'name' : name,
            'email' : email,
            'password': password,
            'request_type' : 'POST'
        },
        error : function (error) {
            console.error(error.error());
        },
        success : function (response) {
            window.location.replace(response);
            console.dir(window.location);
            console.dir(response);
        }
    });
};

User.prototype.login = function (email, password) {
    $.ajax({
        url : 'http://lesleyduyndam.nl/api/user/login',
        data : {
            'email' : email,
            'password': password,
            'request_type' : 'GET'
        },
        error : function (error) {
            console.error(error.error());
        },
        success : function (response) {
            if (response){
                window.location.replace(response);
            }
            $('.alert-box').addClass('show');
            console.dir(response);
        }
    });
};

User.prototype.logout = function () {

    $.ajax({
        url : 'http://lesleyduyndam.nl/api/user/logout',
        error : function (error) {
            console.error(error.error());
        },
        success : function (response) {
            if (response){
                window.location.replace(response);
            }
            console.dir(response);
        }
    });
};