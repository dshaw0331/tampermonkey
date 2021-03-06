    // ==UserScript==
// @name         Single Tool Test
// @namespace     TIQ
// @require       http://code.jquery.com/jquery-2.1.1.min.js
// @require       https://raw.githubusercontent.com/ccampbell/mousetrap/master/mousetrap.min.js
// @require       https://raw.github.com/ccampbell/mousetrap/master/plugins/global-bind/mousetrap-global-bind.min.js
// @require       https://code.jquery.com/ui/1.11.2/jquery-ui.js
// @require       https://cdnjs.cloudflare.com/ajax/libs/localforage/1.5.0/localforage.min.js
// @run-at        document-end
// @version       3.0
// @description   Addons to TealiumIQ
// @include       *my.tealiumiq.com/tms
// @updateURL     https://solutions.tealium.net/hosted/tampermonkey/tealiumiq.user.js
// ==/UserScript==



// import MouseTrap
/* mousetrap v1.6.2 craig.is/killing/mice */
(function(p,t,h){function u(a,b,d){a.addEventListener?a.addEventListener(b,d,!1):a.attachEvent("on"+b,d)}function y(a){if("keypress"==a.type){var b=String.fromCharCode(a.which);a.shiftKey||(b=b.toLowerCase());return b}return m[a.which]?m[a.which]:q[a.which]?q[a.which]:String.fromCharCode(a.which).toLowerCase()}function E(a){var b=[];a.shiftKey&&b.push("shift");a.altKey&&b.push("alt");a.ctrlKey&&b.push("ctrl");a.metaKey&&b.push("meta");return b}function v(a){return"shift"==a||"ctrl"==a||"alt"==a||
"meta"==a}function z(a,b){var d,e=[];var c=a;"+"===c?c=["+"]:(c=c.replace(/\+{2}/g,"+plus"),c=c.split("+"));for(d=0;d<c.length;++d){var k=c[d];A[k]&&(k=A[k]);b&&"keypress"!=b&&B[k]&&(k=B[k],e.push("shift"));v(k)&&e.push(k)}c=k;d=b;if(!d){if(!n){n={};for(var h in m)95<h&&112>h||m.hasOwnProperty(h)&&(n[m[h]]=h)}d=n[c]?"keydown":"keypress"}"keypress"==d&&e.length&&(d="keydown");return{key:k,modifiers:e,action:d}}function C(a,b){return null===a||a===t?!1:a===b?!0:C(a.parentNode,b)}function e(a){function b(a){a=
a||{};var b=!1,l;for(l in n)a[l]?b=!0:n[l]=0;b||(w=!1)}function d(a,b,r,g,F,e){var l,D=[],h=r.type;if(!f._callbacks[a])return[];"keyup"==h&&v(a)&&(b=[a]);for(l=0;l<f._callbacks[a].length;++l){var d=f._callbacks[a][l];if((g||!d.seq||n[d.seq]==d.level)&&h==d.action){var c;(c="keypress"==h&&!r.metaKey&&!r.ctrlKey)||(c=d.modifiers,c=b.sort().join(",")===c.sort().join(","));c&&(c=g&&d.seq==g&&d.level==e,(!g&&d.combo==F||c)&&f._callbacks[a].splice(l,1),D.push(d))}}return D}function h(a,b,d,g){f.stopCallback(b,
b.target||b.srcElement,d,g)||!1!==a(b,d)||(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation?b.stopPropagation():b.cancelBubble=!0)}function c(a){"number"!==typeof a.which&&(a.which=a.keyCode);var b=y(a);b&&("keyup"==a.type&&x===b?x=!1:f.handleKey(b,E(a),a))}function k(a,d,r,g){function l(d){return function(){w=d;++n[a];clearTimeout(p);p=setTimeout(b,1E3)}}function e(d){h(r,d,a);"keyup"!==g&&(x=y(d));setTimeout(b,10)}for(var c=n[a]=0;c<d.length;++c){var f=c+1===d.length?e:l(g||
z(d[c+1]).action);m(d[c],f,g,a,c)}}function m(a,b,c,g,e){f._directMap[a+":"+c]=b;a=a.replace(/\s+/g," ");var h=a.split(" ");1<h.length?k(a,h,b,c):(c=z(a,c),f._callbacks[c.key]=f._callbacks[c.key]||[],d(c.key,c.modifiers,{type:c.action},g,a,e),f._callbacks[c.key][g?"unshift":"push"]({callback:b,modifiers:c.modifiers,action:c.action,seq:g,level:e,combo:a}))}var f=this;a=a||t;if(!(f instanceof e))return new e(a);f.target=a;f._callbacks={};f._directMap={};var n={},p,x=!1,q=!1,w=!1;f._handleKey=function(a,
c,e){var g=d(a,c,e),f;c={};var l=0,k=!1;for(f=0;f<g.length;++f)g[f].seq&&(l=Math.max(l,g[f].level));for(f=0;f<g.length;++f)g[f].seq?g[f].level==l&&(k=!0,c[g[f].seq]=1,h(g[f].callback,e,g[f].combo,g[f].seq)):k||h(g[f].callback,e,g[f].combo);g="keypress"==e.type&&q;e.type!=w||v(a)||g||b(c);q=k&&"keydown"==e.type};f._bindMultiple=function(a,b,c){for(var d=0;d<a.length;++d)m(a[d],b,c)};u(a,"keypress",c);u(a,"keydown",c);u(a,"keyup",c)}if(p){var m={8:"backspace",9:"tab",13:"enter",16:"shift",17:"ctrl",
18:"alt",20:"capslock",27:"esc",32:"space",33:"pageup",34:"pagedown",35:"end",36:"home",37:"left",38:"up",39:"right",40:"down",45:"ins",46:"del",91:"meta",93:"meta",224:"meta"},q={106:"*",107:"+",109:"-",110:".",111:"/",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'"},B={"~":"`","!":"1","@":"2","#":"3",$:"4","%":"5","^":"6","&":"7","*":"8","(":"9",")":"0",_:"-","+":"=",":":";",'"':"'","<":",",">":".","?":"/","|":"\\"},A={option:"alt",command:"meta","return":"enter",
escape:"esc",plus:"+",mod:/Mac|iPod|iPhone|iPad/.test(navigator.platform)?"meta":"ctrl"},n;for(h=1;20>h;++h)m[111+h]="f"+h;for(h=0;9>=h;++h)m[h+96]=h.toString();e.prototype.bind=function(a,b,d){a=a instanceof Array?a:[a];this._bindMultiple.call(this,a,b,d);return this};e.prototype.unbind=function(a,b){return this.bind.call(this,a,function(){},b)};e.prototype.trigger=function(a,b){if(this._directMap[a+":"+b])this._directMap[a+":"+b]({},a);return this};e.prototype.reset=function(){this._callbacks={};
this._directMap={};return this};e.prototype.stopCallback=function(a,b){return-1<(" "+b.className+" ").indexOf(" mousetrap ")||C(b,this.target)?!1:"INPUT"==b.tagName||"SELECT"==b.tagName||"TEXTAREA"==b.tagName||b.isContentEditable};e.prototype.handleKey=function(){return this._handleKey.apply(this,arguments)};e.addKeycodes=function(a){for(var b in a)a.hasOwnProperty(b)&&(m[b]=a[b]);n=null};e.init=function(){var a=e(t),b;for(b in a)"_"!==b.charAt(0)&&(e[b]=function(b){return function(){return a[b].apply(a,
arguments)}}(b))};e.init();p.Mousetrap=e;"undefined"!==typeof module&&module.exports&&(module.exports=e);"function"===typeof define&&define.amd&&define(function(){return e})}})("undefined"!==typeof window?window:null,"undefined"!==typeof window?document:null);


// import MouseTrap bind global 
(function(a){var c={},d=a.prototype.stopCallback;a.prototype.stopCallback=function(e,b,a,f){return this.paused?!0:c[a]||c[f]?!1:d.call(this,e,b,a)};a.prototype.bindGlobal=function(a,b,d){this.bind(a,b,d);if(a instanceof Array)for(b=0;b<a.length;b++)c[a[b]]=!0;else c[a]=!0};a.init()})(Mousetrap);


    window.truncate = function(str, len) {
    if (str.length > len) {
        str = str.substr(0, len - 3) + '...';
    }
    return str;
}
        //Create a style sheet that will hide the original profile buttons and format the auto complete box
        $('<style id="quickSwitchStyleSheet">\
        #profile_account-autocomplete,#lastaccount button[title="Show All Items"],#profile_profileid-autocomplete,#lastprofile button[title="Show All Items"],#lastrevision{\
          display:none;\
        }\
        .menu_list_container{width: 205px;}\
        .ui-autocomplete{width: 160px !important;}\
        #select_account,#select_profile{width: 154px;}\
        #profile_menu_list input{max-width: 152px;position:relative;bottom:8px;}\
        .ui-autocomplete .ui-menu-item {\
          text-decoration: none;\
          display: block;\
          padding: .2em .4em;\
          line-height: 1.5;\
          zoom: 1;\
        }\
        .ui-button-icon-only{\
          height: 23px;\
          top: 6px;\
        }\
        .quickSwitch{\
          display: inline-block !important;\
          padding-left: 6px !important;\
        }\
        #quickSwitchSort{\
          padding-left: 10px !important;\
        }\
        .quickSwitchFavIcon{\
          color: #E8D033;\
          cursor: pointer;\
        }\
      </style>').appendTo('head');
        window.buildRecentHistory = function() {
            var html = '<div class="menulistheaderfont">Recent History (Sortable)    <i id="acct_refresh" class="icon-refresh" style="cursor: pointer;" title="Refresh Account List"></i></div><ul id="quickSwitchSort" style="list-style-type:none;">';
            var recentProfiles = JSON.parse(localStorage.getItem('recent_history'));
            if (!recentProfiles) {
                storeHistory();
                recentProfiles = JSON.parse(localStorage.getItem('recent_history'));
            }
            for (var i = 0; i < recentProfiles.length; i++) {
                var favIcon = recentProfiles[i].favorite ? "icon-star" : "icon-star-empty";
                if (i === 0) {
                    //This is the default profile, change the icon
                    favIcon = 'icon-user';
                }
                html += '<li><div class="menulistitem"><i class="' + favIcon + ' quickSwitchFavIcon"></i><a class="menulistfont wordwrap quickSwitch" href="#" data-account="' + recentProfiles[i].account + '" data-profile="' + recentProfiles[i].profile + '">' + i + ': ' + window.truncate(recentProfiles[i].account + '/' + recentProfiles[i].profile, 25) + '</a></div></li>';
            }
            html += '</ul><div class="menudivider"></div>';
            return html;
        }
        window.storeHistory = function(account, profile, defaultProfile) {
            var updatedProfileList = [];
            var nonFavList = [];
            var profileMaxLength = 10;
            var recentProfiles = JSON.parse(localStorage.getItem('recent_history'));
            if (recentProfiles) {
                var nonFavListCounter = 0;
                for (var i = 1; i < recentProfiles.length; i++) {
                    if (!recentProfiles[i].favorite && !(recentProfiles[i].account === account && recentProfiles[i].profile === profile)) {
                        nonFavList.push(recentProfiles[i]);
                    }
                }
                if (defaultProfile) {
                    recentProfiles[0].account = account;
                    recentProfiles[0].profile = profile;
                    recentProfiles[0].favorite = true;
                    $('.quickSwitch:contains("0: ")').text('0: ' + account + '/' + profile);
                    $('.quickSwitch:contains("0: ")').attr('data-account', account);
                    $('.quickSwitch:contains("0: ")').attr('data-profile', profile);
                    updatedProfileList = recentProfiles;
                } else {
                    if (recentProfiles[0].account === account && recentProfiles[0].profile === profile) {
                        //All we did was switch back to the default profile
                        return true;
                    }
                    //Default profile doesn't change.  Just add it.
                    updatedProfileList.push(recentProfiles[0]);
                    var accountProfileExists = 0;
                    for (var i = 1; i < recentProfiles.length; i++) {
                        if (recentProfiles[i].account === account && recentProfiles[i].profile === profile) {
                            accountProfileExists = i;
                            if (recentProfiles[i].favorite) {
                                //This is a favorite profile, return since no sorting is needed
                                return true;
                            }
                            nonFavList.unshift(recentProfiles[i]);
                            break;
                        }
                    }
                    if (accountProfileExists) {
                        //Reorder the list based on favorites
                        for (var i = 1; i < recentProfiles.length; i++) {
                            //Don't rewrite the account/profile we are swtiching to
                            if (accountProfileExists !== i) {
                                if (!recentProfiles[i].favorite) {
                                    updatedProfileList.push(nonFavList[nonFavListCounter]);
                                    nonFavListCounter++;
                                } else {
                                    updatedProfileList.push(recentProfiles[i]);
                                }
                            } else {
                                updatedProfileList.push(nonFavList[nonFavListCounter]);
                                nonFavListCounter++;
                            }
                        }
                    } else {
                        var obj = {};
                        obj.account = account;
                        obj.profile = profile;
                        obj["default"] = false;
                        obj.favorite = false;
                        //Add the new account/profile to the front of the nonFavList array
                        nonFavList.unshift(obj);
                        //Ensure that we won't add more than 10 items in the array.
                        var profileLength = recentProfiles.length > profileMaxLength ? profileMaxLength : recentProfiles.length;
                        for (var i = 1; i < profileLength; i++) {
                            if (!recentProfiles[i].favorite) {
                                updatedProfileList.push(nonFavList[nonFavListCounter]);
                                nonFavListCounter++;
                            } else {
                                updatedProfileList.push(recentProfiles[i]);
                            }
                        }
                        if (typeof nonFavList[nonFavListCounter] !== 'undefined' && updatedProfileList.length < profileMaxLength) {
                            updatedProfileList.push(nonFavList[nonFavListCounter]);
                        }
                    }
                }
            } else {
                var obj = {};
                obj.account = 'services-' + $('.admin-menu-name').text().split(' ')[0].toLowerCase();
                obj.profile = 'main';
                obj["default"] = true;
                obj.favorite = true;
                updatedProfileList.push(obj);
            }
            localStorage.setItem("recent_history", JSON.stringify(updatedProfileList));
            return true;
        }
        window.updateHistory = function() {
            var updatedProfileList = [];
            $('#quickSwitchSort .menulistitem').each(function(i) {
                var obj = {};
                obj.favorite = $(this).find('i').hasClass('icon-star');
                var updatedText = $(this).find('.quickSwitch').text().replace(/\d+: /, i + ': ');
                $(this).find('.quickSwitch').text(updatedText);
                obj.account = $(this).find('.quickSwitch').data('account');
                obj.profile = $(this).find('.quickSwitch').data('profile');
                if (i) {
                    obj["default"] = false;
                } else {
                    //Only set index 0 to true
                    obj["default"] = true;
                    obj.favorite = true;
                }
                updatedProfileList.push(obj);
            });
            localStorage.setItem("recent_history", JSON.stringify(updatedProfileList));
        }
        window.performSwitch = function(context, account, profile) {
            if (context) {
                account = $(context).attr('data-account');
                profile = $(context).attr('data-profile');
            }
            //Perform the switch
            utui.profile.getRevision({
                account: account,
                profile: profile,
                revision: 'latestversion'
            }, function() {
                afterSwitch('', account, profile);
            });

        }

        window.afterSwitch = function(data, account, profile) {
            storeHistory(account, profile);
            $('#recentprofilesQuickSwitch').html(buildRecentHistory());
            $('#acct_refresh').click(function() {
                updateAccountList();
            });
            $('.quickSwitch').click(function() {
                performSwitch(this);
            });
            $('#quickSwitchSort').sortable({
                items: 'li:not(:first)',
                update: function() {
                    updateHistory();
                }
            });
            //Update the profile list
            getAccountProfiles(account);
            //Remove the status message about a publish message
            setTimeout(function(){
              $('#global_status_close_icon').click();
            },500);
        }

        window.getAccountProfiles = function(account) {
            if ($('#profile_account option[value="' + account + '"]').length) {
                utui.profile.getProfiles(null, {
                    account: account
                }, function(data) {
                    if (data.profiles) {
                        //Put the profiles in alphabetical order
                        var profiles = data.profiles.sort();
                        $('#select_profile').autocomplete({
                            source: profiles,
                            delay: 0,
                            minLength: 0
                        });
                        $('#select_profile').val(profiles[0] || '');
                    } else {
                    }
                }, null, 1);
            }
        }
        window.updateAccountList = function() {
            // make an ajax request to get all of the accounts for this user
            $("#acct_refresh").animate({
                'opacity': '0.3'
            }, 500);
            utui.service.get(utui.service.restapis.GET_ACCOUNTS, {}, null, function(data) {
                $("#acct_refresh").animate({
                    'opacity': '1'
                }, 200);
                if (data) {
                    var accounts = data.accounts;
                    utui.login.accounts = accounts.sort();
                    //Grab all accounts
                    var sorted_accounts = utui.login.accounts.sort(utui.util.caseInsensitiveSort);
                    $('#select_account').autocomplete({
                        source: sorted_accounts,
                        delay: 0,
                        minLength: 0,
                        select: function(event, ui) {
                            getAccountProfiles(ui.item.label);
                        }
                    });
                    // Update TIQ select list
                    $profileSelect = $("#profile_account");
                    for (var i = 0; i < sorted_accounts.length; i++) {
                        var account = sorted_accounts[i];
                        $profileSelect.append($("<option></option>").attr("value", account).text(account));
                    }
                }
            });
        }

        function highlight(input){input.setSelectionRange(0, input.value.length)}
        // function visible(input){return input && input.offsetWidth > 0 && input.offsetHeight > 0}

        var keepTrying = function(test, callback, sleep, maxAttempts) {
            if (typeof(sleep) == 'undefined') {
                sleep = 100;
            }
            var totalAttempts = 0;
            var args = Array.prototype.slice.call(arguments, 2);
            var incrementAttempts = function() {
                totalAttempts++;
                if (typeof maxAttempts !== 'undefined') {
                    if (totalAttempts > maxAttempts) {
                        clearInterval(timer);
                        console.log('Reached maximum number of attempts.  Going to stop checking.')
                    }
                }
            }
            var timer = setInterval(function() {
                try {
                    if (test.apply(null, args)) {
                        clearInterval(timer);
                        // console.log('done trying: '+test);
                        callback();
                    } else {
                        // console.log('tried: '+test);
                        incrementAttempts();
                    }
                } catch (e) {
                    console.log('Failure in check: ' + e);
                    incrementAttempts();
                }
            }, sleep);
        }
        var when = function(test, run, sleep, maxAttempts) {
            var args = Array.prototype.slice.call(arguments, 2);
            keepTrying(test, function() {
                run.apply(null, args);
            },
            sleep, maxAttempts);
        }


        window.setupQuickSwitchV2 = function() {
            //Setup Recent History
            $('#recentprofiles').hide();
            if (!$('#recentprofilesQuickSwitch').length) {
                $('<div id="recentprofilesQuickSwitch">' + buildRecentHistory() + '</div>').insertAfter('#recentprofiles');
                $('#acct_refresh').click(function() {
                    updateAccountList();
                });
                $('.quickSwitch').click(function() {
                    performSwitch(this);
                });
                //Make the list sortable
                $('#quickSwitchSort').sortable({
                    items: 'li:not(:first)',
                    update: function() {
                        updateHistory();
                    }
                });
                //Hide the original load button and create our own.
                $('button:contains("Load Version")').hide();
                $('<div class="config"><button id="quickSwitchLoadVersion" class="btn">Load Version</button></div>')
                    .insertBefore('#loadversion_button')
                    .click(function() {
                    var account = $('#select_account').val();
                    var profile = $('#select_profile').val();
                    performSwitch(null, account, profile);
                });
                $('<li class="menu-li"><a id="quickSwitchDefaultProfile" href="#">Set Quick Switch Default Profile</a></li>')
                    .insertAfter($('#editUser_menuBtn').parent());
                $('#quickSwitchDefaultProfile').click(function() {
                    $('#adminMenu_listing').hide();
                    var account = utui.data.settings.account;
                    var profile = utui.data.settings.profileid;
                    storeHistory(account, profile, true);
                });
                //Capture number inputs to allow for quick switch
                Mousetrap.bindGlobal(['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'], function(e, key) {
                    if ($('#recentprofilesQuickSwitch').is(':visible')) {
                        setTimeout(function() {
                            if (key == $('#select_account').val()) {
                                $('#recentprofilesQuickSwitch a:contains("' + key + ': ")').click();
                            }
                        }, 300);
                    }
                });
                //Set default focus in the account field
                $('#profile_menu_button').click(function() {
                        //Update the text at the top of the history window
                        //Get the current account and profile
                        var current_account = $('#profile_legend_account').text();
                        var current_profile = $('#profile_legend_profile').text();
                        //Grab all accounts
                        var accounts = [];
                        $('#profile_account option').each(function() {
                            accounts.push($(this).text());
                        });
                        //Create our own account selector
                        if (!$('#select_account').length) {
                            $('<input id="select_account" class="ui-widget ui-widget-content ui-corner-left" value="' + current_account + '"/>')
                                .insertAfter('#profile_account-autocomplete')
                                .change(function() {
                                if ($(this).val().length > 1) {
                                    getAccountProfiles($(this).val());
                                }
                                })
                                .focus(function(e){highlight(e.target)});
                            $('<button type="button" tabindex="-1" title="Show All Accounts" class="ui-button ui-widget ui-state-default ui-button-icon-only ui-corner-right ui-button-icon"><span class="ui-button-icon-primary ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-text"> </span></button>')
                                .insertAfter('#select_account')
                                // .mousedown(function(e){highlight(e.target.parentElement.parentElement.parentElement.getElementsByTagName('input')[0])})
                                .click(function() {$('#select_account').focus().autocomplete("search", "");});
                            //Turn on auto complete for accounts
                            $('#select_account').autocomplete({
                                source: accounts,
                                delay: 0,
                                minLength: 0,
                                select: function(event, ui) {
                                    getAccountProfiles(ui.item.label);
                                }
                            });
                        } else {
                            $('#select_account').val(current_account);
                        }
                        //Grab all profiles
                        var profiles = [];
                        $('#profile_profileid option').each(function() {
                            profiles.push($(this).text());
                        });
                        //Create our own profile selector
                        if (!$('#select_profile').length) {
                            $('<input id="select_profile" class="ui-widget ui-widget-content ui-corner-left" value="' + current_profile + '"/>')
                                .focus(function(e){highlight(e.target)})
                                .insertAfter('#profile_profileid-autocomplete');
                            $('<button type="button" tabindex="-1" title="Show All Profiles" class="ui-button ui-widget ui-state-default ui-button-icon-only ui-corner-right ui-button-icon"><span class="ui-button-icon-primary ui-icon ui-icon-triangle-1-s"></span><span class="ui-button-text"> </span></button>')
                                .insertAfter('#select_profile')
                                // .mousedown(function(e){highlight(e.target.parentElement.parentElement.parentElement.getElementsByTagName('input')[0])})
                                .click(function() {$('#select_profile').focus().autocomplete("search", "");});
                            //Turn on auto complete for profiles
                            $('#select_profile').autocomplete({
                                source: profiles,
                                delay: 0,
                                minLength: 0
                            });
                        } else {
                            $('#select_profile').val(current_profile);
                        }
                        //Setup the tab index
                        $('#select_account').attr('tabindex', 1);
                        $('#select_profile').attr('tabindex', 2);
                        $('#quickSwitchLoadVersion').attr('tabindex', 3);
                        //Setup auto highlight of account and profile when there is focus
                        $('#select_account,#select_profile').on('focus', function() {
                            $(this)[0].setSelectionRange(0, $(this).val().length);
                        });
                        //Setup sticky/favorite profiles
                        $('.quickSwitchFavIcon').click(function() {
                            if ($(this).hasClass('icon-star')) {
                                $(this).removeClass('icon-star');
                                $(this).addClass('icon-star-empty');
                            } else if ($(this).hasClass('icon-star-empty')) {
                                $(this).addClass('icon-star');
                                $(this).removeClass('icon-star-empty');
                            }
                            updateHistory();
                        });
                    when(function(){return (document.getElementById('select_account') && document.getElementById('select_account').value.length)}, 
                    function(){
                        document.getElementById('select_account').focus()
                    })

                });
                //Open the profile selection window
                Mousetrap.bindGlobal('ctrl+z', function(e, key) {
                    $('#profile_menu_button').click();
                });
            }
        }


    markTagAsNotSaved = function(tag_id) {
        var containerId = $('.manage_container[data-id="' + tag_id + '"]').attr('id');
        var tagObj = utui.manage.containerMap[containerId];
        utui.profile.setActionPerformed({
            action: utui.constants.tags.UPDATED,
            data: {
                id: tagObj.id,
                tag_name: tagObj.tag_name || utui.util.getTagNameFromTagId(tagObj.tag_id),
                name: tagObj.title,
                kind: utui.constants.tags.TYPE,
                operation: utui.constants.operation.UPDATED,
                container: containerId
            }
        }, true);

        utui.manage.newTagFlag = false;
        utui.manage.saveData();

        utui.util.pubsub.publish(utui.constants.tags.UPDATED, {
            action: utui.constants.tags.UPDATED,
            data: {
                id: tagObj.id,
                tag_name: tagObj.tag_name || utui.util.getTagNameFromTagId(tagObj.tag_id),
                name: tagObj.title
            }
        });
    }

utui.util.pubsub.subscribe(utui.constants.profile.LOADED, function() {
    window.setupQuickSwitchV2()
        //Capture Save
        Mousetrap.bindGlobal('mod+s', function(e) {
            e.preventDefault();
            if ($('div[aria-labelledby="ui-dialog-title-admin_dialog"]:visible').length) {
                var versionSelected = $('#admin_template_select option:selected').text()
                if(versionSelected.indexOf('(Profile)')>-1){$('span:contains("Save Profile Template")').click();}else{$('span:contains("Save Version Template")').click()}
                var uid = versionSelected.split(':');
                uid = uid[uid.length-1]
                markTagAsNotSaved(uid)
            } else {
                //Click Save and Publish
                $('#global_save').click();
            }
        });

        //Capture Escape
        Mousetrap.bindGlobal('esc', function(e) {
            e.preventDefault();
            if($('.ui-dialog:visible').length){
                var dialog_array = $('.ui-dialog'), current_dialog, close_btn;
                $.each(dialog_array,function(index,dialog){if($(dialog).is(":visible")){current_dialog = dialog}});
                if($(current_dialog).find('span:contains("Cancel")').length){
                    close_btn = $(current_dialog).find('span:contains("Cancel")')
                } else if($(current_dialog).find('span:contains("Close")').length){
                    close_btn = $(current_dialog).find('span:contains("Close")')
                } else {
                    close_btn = $(current_dialog).find('span:contains("close")')
                }
                $(close_btn).click();
            } else if($('#account_message_popup:visible')) {
                var dialog = $('#account_message_popup');
                var close_btn = $(dialog).find('span:contains("Close")');
                $(close_btn).click()
            }
        });
})



