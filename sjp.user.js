// ==UserScript==
// @name        sjp.pl
// @description Ustawia skupienie na kontrolce input i zaznacza wprowadzony tekst
// @namespace   dracorp.pl
// @include     http://sjp.pl/*
// @include     https://sjp.pl/*
// @version     0.1
// @grant       none
// ==/UserScript==

window.onload = function(){
    var input = document.getElementById("sl");
    input.focus();
    input.select();
};
