// ==UserScript==
// @name        joemonster.org key navigation
// @namespace   dracorp.pl
// @include     http://joemonster.org/mg/*
// @include     http://joemonster.org/filmy/*
// @include     http://joemonster.org/art/*
// @version     0.1
// @grant       none
// @require     https://code.jquery.com/jquery-2.1.1.min.js
// vim: syntax=jquery
// ==/UserScript==
//
(function($){
    "use strict";
    $.log = function(msg) {
        console.log(msg);
    };
    $.fn.extend({
        log: function(){
            console.log(this);
        }
    });
})(jQuery);

$(document).keydown( function(e){
    "use strict";
    var $keys = {
        left:   37,
        right:  39
    };
    var key = e.which;
    var pathname = $(location).attr("pathname").split("/")[1];

    $.log(key);
    //key.log();
    if(pathname === "filmy"){
        switch(key){
            case $keys.left:
                $.log($("a#prevMovie:contains(\u00AB)")[0].click());
                break;
            case $keys.right:
                $.log($("a#nextMovie:contains('nast')")[0].click());
                break;
        }
    } else if (pathname === "mg"){
        switch(key){
            case $keys.left:
                $.log($("a.navmenu_pic:contains('poprzedni')")[0].click());
                break;
            case $keys.right:
                $.log($("a.navmenu_pic:contains('nast')")[0].click());
                break;

       }
    } else if (pathname === "art"){
        switch(key){
            case $keys.left:
                $.log($("a#next_art")[0].click());
                break;
            case  $keys.right:
                $.log($("a#prev_art")[0].click());
                break;
        }
    }
})();
