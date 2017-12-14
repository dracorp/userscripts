// ==UserScript==
// @name            Netflix Default Account
// @namespace       https://github.com/dracorp/userscripts
// @version         0.4
// @description     Auto select a profile for Netflix
// @description:pl  Auto wybór profilu dla Netflixa
// @author          dracorp
// @match           https://www.netflix.com/*
// @require         https://code.jquery.com/jquery-3.2.1.min.js
// @require         https://openuserjs.org/src/libs/sizzle/GM_config.min.js
// @grant           GM_getValue
// @grant           GM_setValue
// @grant           GM_registerMenuCommand
// @updateURL       https://github.com/dracorp/userscripts/raw/master/netflix_auto_account.user.js
// @downloadURL     https://github.com/dracorp/userscripts/raw/master/netflix_auto_account.user.js
// @icon            https://assets.nflxext.com/us/ffe/siteui/common/icons/nficon2016.ico
// @supportURL      https://github.com/dracorp/userscripts/issues
// ==/UserScript==

(function() {
    'use strict';

    var profileName = GM_config.getValue("netflix-profile-name",'');
    var autoLoad    = GM_config.getValue('auto-load',true);
    var profiles    = [];

    // get all profiles
    $.get("/profiles/manage", function(data){
        let profile = $('a.profile-link > span.profile-name', $(data));
        profile.each( function(index, value){
            let name = $(this).text();
            profiles.push(name);
        });
    });

    var fields = {
        'netflix-profile-name': {
            'label': 'Profile Name',
            'type': 'select',
            'options': profiles,
            'default': profileName,
            'title': 'Give us your profile name!',
        },
        'auto-load': {
            'type': 'checkbox',
            'default': autoLoad,
            'label':'Autoload',
            'title':'Do load profile at start?',
        },
    };

    GM_config.init({
        id: 'Netflix_Profile_config',
        title: 'Configurable Options Script',
        fields: fields,
    });

    GM_registerMenuCommand("Set Netflix profile", () => {
        GM_config.open();
    });

    if ( autoLoad === true ) {
        $('a.profile-link > span.profile-name').each(function(){
            var name = $(this).text();
            if ( profileName === name ) {
                window.location.href = $(this).parent().attr('href');
            }
        });
    }
})();
