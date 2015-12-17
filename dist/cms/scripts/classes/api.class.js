/**
 * Api Class, handles server communication
 * @param basePath
 * @constructor
 */
var Api = function (basePath) {
    var root = this;

    root.basePath = basePath;
};

Api.prototype.get = function (url, params, callback) {
    var root, request, local_items;

    root = this;
    local_items = cms.getLocal(url);

    if (local_items) return callback(local_items.content);

    params = params || {};
    params.request_type = 'GET';

    request = {

        url     : root.basePath + '/' + url,
        type    : 'GET',
        data    : params,
        dataType: "json",

        success : function (result) {

            result.forEach(function (data){
                if (data) data.synced = true;
            });

            callback(result);

            var local_items = {};
            local_items.content = result;
            cms.saveLocal(url, local_items);
        },

        error   : function (error) {
            callback(false, error);
        }
    };
    $.ajax(request);
};


Api.prototype.post = function (url, data, callback) {
    var root, request, local_items, new_item;

    root = this;
    new_item = data;
    new_item.request_type = 'POST';
    delete new_item.url;

    local_items = cms.getLocal(url);
    
    request = {

        url     : root.basePath + '/' + url,
        type    : 'GET',
        data    : new_item,
        dataType: "json",

        success : function () {
            new_item.timestamp = 'now';
            new_item.synced = true;
            if (local_items) local_items.content.push(new_item);
            callback(local_items);

            cms.saveLocal(url, local_items);
        },

        error   : function (error) {
            new_item.timestamp = 'now';
            new_item.synced = false;
            if (local_items) local_items.content.push(new_item);
            callback(local_items);

            cms.saveLocal(url, local_items);
        }
    };
    $.ajax(request);
};

Api.prototype.delete = function (url, parameters, callback, index) {
    var root, request, local_items;

    root = this;
    parameters.request_type = 'DELETE';
    index = index || false;

    local_items = cms.getLocal(url).content;

    request = {

        url     : root.basePath + '/' + url,
        type    : 'GET',
        data    : parameters,
        dataType: "json",

        success : function (response) {
            console.log('=================== response ==================')
            console.dir(response);
            console.dir(index);
            if (index && local_items[index]){
                console.dir(local_items[index]);
                local_items[index].deleted = true;
                local_items[index].synced = true;
            }
            cms.saveLocal(url, local_items);
            callback(true);
        },

        error   : function (error) {

            if (index && local_items[index]){
                local_items[index].deleted = true;
                local_items[index].synced = false;
            }
            cms.saveLocal(url, local_items);
            callback(false);
        }
    };
    $.ajax(request);
};