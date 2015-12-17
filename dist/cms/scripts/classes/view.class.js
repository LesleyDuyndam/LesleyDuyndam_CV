
/**
 * View Class, handles the view
 * @param element
 * @constructor
 */
var View = function (element) {
    var root = this;

    root.$element = element;
    root.loadedIndex = [];

    root.form = function (data, type) {
        var $form, $buttons, $output;

        $output = $('<div class="form-wrapper"></div>');
        $buttons = $('' +
            '<section class="buttons">' +
                '<div class="button-holder">' +
                    '<button class="cancel">cancel</button>' +
                    '<button class="save">save</button>' +
                '</div>' +
            '</section>');

        $form = $('<form class="form"></form>');
        cms.forKey(data, function (key){
            if (key === 'id' || key === 'synced' || key === 'timestamp') return;
            $form.append(
                '<fieldset>' +
                    '<label for="' + key + '">' + key + '</label>' +
                    '<input type="text" id="' + key + '" class="input">' +
                '</fieldset>');
        });

        $form.attr('data-type', type);

        $output.append($form);
        $output.append($buttons);

        return $output;
    };

    root.list = function (data, type) {
      var $list, $header_row;
        $list = $('<ul class="list"></ul>');

        $header_row = $('<li class="row header"></li>');
        cms.forKey(data[data.length - 1], function (key,value){
            if (key === 'id') return;
            $header_row.append('<div class="column ' + key + '">' + key + '</div>');
        });

        $list.append($header_row);

        for (var _row = data.length - 1; _row >= 0; _row--) {
            var $row, $menu;

            if (data[_row].deleted) break;

            $row = $('<li class="row"></li>');

            if (data[_row].synced != undefined) {
                if (data[_row].synced) {
                    $row.addClass('synced');
                    //$row.data('synced', true);
                } else {
                    $row.addClass('not_synced');
                    //$row.data('synced', false);
                }
            }

            $row.attr({
                'data-id': data[_row].id,
                'data-type': type
            });

            cms.forKey(data[_row], function (key,value){

                if (key === 'timestamp'){
                    var date, time, date_array;

                    date_array = value.split(' ');
                    date = date_array[0];
                    time = date_array[1];

                    $row.append('<div class="column time">' + date + '</div>');

                } else if (key != 'id' && key != 'synced') {
                    $row.append('<div class="column ' + key + '">' + value + '</div>');
                }
            });

            $menu = '<div class="column menu">';
            $menu +=    '<button class="edit"></button>';
            $menu +=    '<button class="delete"></button>';
            if (data[_row]['synced'] != undefined) $menu += '<button class="sync"></button>';
            $menu += '</div>';

            $row.append($menu);
            $list.append($row);
        }
        return $list;
    };

    $('.body-overlay').on('click', function (event) {
        if (event.target === event.currentTarget) {
            cms.view.close();
        }
    });
};

View.prototype.render = function (type, data) {
    var root, $output, $form_content;
    root = this;
    $('.cms-view .content section').remove();

    $form_content = $('<div class="form-content"></div>');
    $form_content.append('<div class="add-item-wrapper"><button class="js-add-item add-item">Add item</button></div>');
    $form_content.append(root.form(data[0], type));
    console.dir($form_content);
    $output = $('<section class="async_data type_list_single"></section>');
    $output.attr({'data-type':type});
    $output.append('<h2>' + type + '</h2>');
    $output.append(root.list(data, type));
    $output.append($form_content);

    $('.cms-view .content').append($output);
    $('body').addClass('cms-view-active');
    $('#header').addClass('hide');
    root.loadedIndex.forEach(function(callback, index) {
        callback();
    });
};

View.prototype.close = function () {
    $('body').removeClass('cms-view-active');
    $('#header').removeClass('hide');
};

View.prototype.loaded = function (callback) {
    var root = this;
    root.loadedIndex.push(callback);

};