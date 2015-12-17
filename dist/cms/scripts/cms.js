var cms = snippets;


$(document).ready(function () {
    cms.api     = new Api('http://lesleyduyndam.nl/api');
    cms.user    = new User();
    cms.menu    = new Menu($('.backend-panel ul'));
    cms.view    = new View($('.cms-view'));
    cms.form    = new Form($('.form'));
    cms.scroll  = new Scroll($('html, body'));

    cms.menu.register('posts', function () {
        cms.api.get('posts', false, function (data) {
            if (data) cms.view.render('posts', data);
        });
    });

    cms.menu.register('labs', function () {
        cms.api.get('labs', false, function (data) {
            if (data) cms.view.render('labs', data);
        });
    });

    cms.menu.register('skills', function () {
        cms.api.get('skills', false, function (data) {
            if (data) cms.view.render('skills', data);
        });
    });

    cms.view.loaded(function () {
        $('button.delete').on('click', function () {
            var id, $parent;
            $parent = $(this).parent().parent();

            cms.api.delete($('.async_data').attr('data-type'), {
                'id' : $parent.data('id')
            }, function (response) {
                $parent.css({'display':'none'});
                console.dir(response);
            }, $parent.index());
        });
    });

    cms.view.loaded(function () {
        $('button.save').on('click', function () {
            cms.form.get(function (request) {
                cms.api.post(request.url, request, function (response) {
                    console.dir(response);
                });
            });
        });
    });

    cms.view.loaded(function () {
        $('button.cancel').on('click', function () {
            cms.form.clear();
            $('.form-wrapper').toggleClass('show');
        });
    });

    cms.view.loaded(function () {
        $('.js-add-item').on('click', function () {
            console.dir('clicked');
            $('.form-wrapper').toggleClass('show');
        });
    });

});