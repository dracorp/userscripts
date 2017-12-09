// ==UserScript==
// @name           Focus on input
// @name:pl        Skupienie na wejściu
// @description    Sets focus on input control, and sets a text
// @description:pl Ustawia skupienie na kontrolce input i zaznacza wprowadzony tekst
// @namespace      https://github.com/dracorp/userscripts
// @include        http://sjp.pl/*
// @include        https://sjp.pl/*
// @version        3
// @grant          none
// @require        https://code.jquery.com/jquery-3.2.1.slim.min.js
// @updateURL      https://github.com/dracorp/userscripts/raw/master/sjp.user.js
// @downloadURL    https://github.com/dracorp/userscripts/raw/master/sjp.user.js
// @supportURL     https://github.com/dracorp/userscripts/issues
// @icon           https://raw.githubusercontent.com/dracorp/userscripts/master/images/sjp.png
// ==/UserScript==

(function() {
    'use strict';
    var input = $('input:text');
    input[0].focus();
    input[0].select();
    input[0].click();
})();

