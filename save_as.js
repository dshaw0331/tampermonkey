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


utui.util.pubsub.subscribe(utui.constants.profile.LOADED, function() {
    $(document).on('click', '#global_save', function() {
        when(function() {
            return ($('span:contains(Save As)').is(':visible'));
        }, function() {
            setTimeout(function(){
                console.log('inside saveAs when callback')
                $('#checkBtn_dev').not('.publish_connector_connected').click();
                $('#checkBtn_qa').not('.publish_connector_connected').click();
                //Fix tab order
                $('input[name*=forceFTP]').attr('tabindex', 999);
                $('.ui-button-text:contains(Publish)').attr('tabindex', 1);
                var origSaveTitle = $('#profile_legend_revision').text().trim();
                var saveTitle = $('#profile_legend_revision').text().trim().replace(/\d{4}\.\d{2}\.\d{2}\.\d{4}/g, '').replace(/\d{4}\/\d{2}\/\d{2}\ \d{2}:\d{2}/g, '').trim();  
                if (!saveTitle.match(/ -$/)) {saveTitle += ' -';}
                if(origSaveTitle != $('#savepublish_version_title').val()){
                    $('#savepublish_version_title').val($('#savepublish_version_title').val().replace(/Version/, saveTitle).replace(/(\d{4})\.(\d{2})\.(\d{2})\.(\d{2})(\d{2})/, '$1/$2/$3 $4:$5'));
                    $('#publish_notes').focus();
                }
            },300)
        });
    });
})

