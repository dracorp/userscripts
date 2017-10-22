// ==UserScript==
// @name        sjp.pl
// @description Ustawia skupienie na kontrolce input i zaznacza wprowadzony tekst
// @namespace   dracorp.pl
// @include     http://sjp.pl/*
// @include     https://sjp.pl/*
// @version     2
// @grant       none
// @updateURL   https://github.com/dracorp/userscripts/raw/master/sjp.user.js
// @downloadURL https://github.com/dracorp/userscripts/raw/master/sjp.user.js
// @supportURL  https://github.com/dracorp/userscripts/issues
// ==/UserScript==

window.onload = function(){
    var input = document.getElementById("sl");
    input.focus();
    input.select();
};
