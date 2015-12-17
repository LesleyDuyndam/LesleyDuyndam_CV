var snippets = {};

snippets.forKey = function (source_object, callback) {
    for (var key in source_object) {
        if (source_object.hasOwnProperty(key)) {
            callback(key, source_object[key]);
        }
    }
};

snippets.setCookie = function (key, value, exdays) {
    var d = new Date();
    exdays = exdays || 365;
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = key + "=" + value + "; " + expires;
};

snippets.getCookie = function (key) {
    var name = key + "=";
    var cookieArray = document.cookie.split(';');
    for(var i=0; i<cookieArray.length; i++) {
        var cookie = cookieArray[i];
        while (cookie.charAt(0)==' ') cookie = cookie.substring(1);
        if (cookie.indexOf(name) == 0) return cookie.substring(name.length,cookie.length);
    }
    return "";
};

snippets.getLocal = function (key) {
    var data, session_id;
    session_id = this.getCookie('PHPSESSID');

    if (localStorage.getItem(key)) {
        data = JSON.parse(localStorage.getItem(key));

        if ( session_id !== data.session_id){
            localStorage.removeItem(key);
        } else {
            delete data.session_id;
            return data;
        }
    }
};

snippets.saveLocal = function (key, local_data) {
    console.dir(local_data);
    if (Object.prototype.toString.call( local_data ) === '[object Array]' ) local_data = {content : local_data};

    local_data.session_id = this.getCookie('PHPSESSID');
    delete local_data.content[local_data.content.length - 1]['request_type'];
    delete local_data.content[local_data.content.length - 1]['url'];

    localStorage.setItem(key, JSON.stringify(local_data));
};

