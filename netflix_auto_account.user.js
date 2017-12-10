// ==UserScript==
// @name            Netflix Default Account
// @namespace       https://github.com/dracorp/userscripts
// @version         0.2
// @description     Auto select a profile for Netflix
// @description:pl  Auto wybór profilu dla Netflixa
// @author          dracorp
// @match           https://www.netflix.com/*
// @require         https://code.jquery.com/jquery-3.2.1.slim.min.js
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
    var profileName = GM_getValue("netflix-profile-name",'');

    // Add GM options
	GM_registerMenuCommand("Set Netflix profile", () => {
		const value = prompt("Set name for auto select profile for Netflix:");
		if (value !== null) {
			GM_setValue("netflix-profile-name", value);
			console.log('Netflix default profile will set to '+value);
		}
	});

    $('a.profile-link > span.profile-name').each(function(){
        var name = $(this).text();
        //console.log(name);
        if ( profileName === name ) {
            window.location.href = $(this).parent().attr('href');
            //console.log('Go '+profileName);
        }
    });
})();
