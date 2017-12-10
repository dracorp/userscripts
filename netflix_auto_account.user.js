// ==UserScript==
// @name         Netflix Default Account
// @namespace    https://github.com/dracorp/userscripts
// @version      0.1
// @description  Auto choice an account for Netflix
// @author       dracorp
// @match        https://www.netflix.com/*
// @require      https://code.jquery.com/jquery-3.2.1.slim.min.js
// @grant        none
// @updateURL    https://github.com/dracorp/userscripts/raw/master/netflix_auto_account.user.js
// @downloadURL  https://github.com/dracorp/userscripts/raw/master/netflix_auto_account.user.js
// @icon         https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico
// @supportURL   https://github.com/dracorp/userscripts/issues
// ==/UserScript==

(function() {
    'use strict';
    var account = 'Piotr';

    $('a.profile-link > span.profile-name').each(function(index){
        var name = $(this).text();
        console.log(index + ': ' + name);
        if ( account === name ) {
            window.location.href = $(this).parent().attr('href');
        }
    });
})();
