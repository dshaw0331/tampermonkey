utui.util.pubsub.subscribe(utui.constants.profile.LOADED, function() {

    /************** Add common utility functions Start ***************************/
    var keepTrying = function(func, callback, sleep) {
        if (typeof(sleep) == 'undefined') {
            sleep = 100;
        }
        var args = Array.prototype.slice.call(arguments, 2);
        var timer = setInterval(function() {
            var functionResponse = func.apply(null, args);
            // console.log('functionResponse: '+functionResponse);
            if (functionResponse) {
                clearInterval(timer);
                // console.log('done trying: '+func);
                callback();
            } else {
                // console.log('tried: '+func);
            }
        }, sleep);
    }
    var when = function(test, run, sleep) {
        var args = Array.prototype.slice.call(arguments, 2);
        keepTrying(test, function() {
                run.apply(null, args);
            },
            sleep);
    }
    /************** Add common utility functions End ***************************/


    function setupDataMappingShortcuts() {
        //Clear the mapping toolbox text so that we know once it has been updated.
        $('#dialog-managetoolbox-content').text('');
        //Auto click Select Destination when you change Data Source under Data Mappings
        $('select[id*=mapselect]').on('change', function() {
            var datasource = $(this).val().split('.');
            $('span:contains("Select Destination")').click();
            when(function() {
                return ($('#ui-dialog-title-dialog-managetoolbox').length && $('#ui-dialog-title-dialog-managetoolbox:contains("' + datasource[1] + ' (' + datasource[0] + ')")') && $('#dialog-managetoolbox-content').text().length);
            }, function() {
                // console.log('Mapping toolbox has finished loading');
                //Add click handler to the cancel button to move focus to the last entry
                $('div[aria-labelledby="ui-dialog-title-dialog-managetoolbox"] span:contains(Cancel)').click(function() {
                    //Put focus in the last entry
                    $('ul[id*=mapcontent] input[type=text]:last').focus();
                })
                if ($('#dialog-managetoolbox-content:contains("There is no toolbox available for this vendor")').length) {
                    // console.log('No toolbox available.  Clicking Cancel');
                    //Just click Cancel
                    $('div[aria-labelledby="ui-dialog-title-dialog-managetoolbox"] span:contains(Cancel)').click();
                } else {
                    //If you doubleclick an option, auto select apply
                    $('div[id*=managetoolbox_] option').on('dblclick', function() {
                        $('div[aria-labelledby="ui-dialog-title-dialog-managetoolbox"] span:contains(Apply)').click();
                    });
                }
            });
        });

        $('span:contains("Add Destination")').on('click', function() {
            var variableText = $(this).closest('.managemap_div').find('.managemap_label').text().trim();
            when(function() {
                return ($('#ui-dialog-title-dialog-managetoolbox').length && $('#ui-dialog-title-dialog-managetoolbox:contains("' + variableText + '")') && $('#dialog-managetoolbox-content').text().length);
            }, function() {
                $('div[id*=managetoolbox_] option').on('dblclick', function() {
                    $('div[aria-labelledby="ui-dialog-title-dialog-managetoolbox"] span:contains(Apply)').click();
                });
            });
        });

        //Setup import/export tag mappings
        insertMappingsBulkRow()

        //CSS Fix
        $('.variable_map_container').css('max-height', '330px');
        $('.noItemsMapVariable').css('top', '75px');
    }

    function insertMappingsBulkRow() {
        if (!$('#mappingsBulkRow').length) {
            $('<tr id="mappingsBulkRow" class="tmui"><td></td></tr>')
                .appendTo('#wizard_variables_wrapper tbody');
            $('<span id="mappingsImport" class="btn btn-small actionAddMapping i-color-add"><i class="icon-arrow-down"></i> Import from CSV</span>')
                .appendTo('#mappingsBulkRow td')
                .click(function() {
                    showImportExportPopup('', 'div[aria-labelledby="ui-dialog-title-manage_dialog_wizard"]');
                });
            if ($('.noItemsMapVariable[style*="display: none;"]').length) {
                $('<span id="mappingsExport" class="btn btn-small actionAddMapping i-color-add"><i class="icon-arrow-up"></i> Export to CSV</span>')
                    .css('margin-left', '10px')
                    .appendTo('#mappingsBulkRow td')
                    .click(exportMappings);
            }
        }
    }

    function showImportExportPopup(content, prepend) {
        $('#popup').remove();
        var close = $('<button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"><span class="ui-button-text">Close</span></button>').click(function() {
            $('#popup').remove();
        });
        close.css('cursor', 'pointer')
            .css('float', 'right')
            .css('margin-right', '10px');
        $('<div id="popup" class="ui-dialog ui-widget ui-widget-content ui-corner-all"><div class="ui-dialog-titlebar ui-widget-header ui-corner-all ui-helper-clearfix"><span class="ui-dialog-title">Bulk Add Data Mappings</span></div><span class="alert" style="color:red;margin-left:20px;font-size:16px;"></span><br/><span class="helpText" style="margin-left:20px; display:block;">Format: data layer variable, type (js,dom,meta,cp,qp,customization2), destination</span><textarea id="popupText" rows="10" cols="80" /></div>')
            .attr('style', 'position: absolute; z-index: 10000; left: 30%;top: 200px; width: 400px; height: 280px')
            .append(close)
            .prependTo(prepend);
        $('#popupText')
            .css('width', '90%')
            .css('margin-top', '4%')
            .css('margin-left', '4%')
            .css('margin-bottom', '5px')
            .val(content);
        if (!content) {
            //Create import button
            $('<button type="button" class="ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only"><span class="ui-button-text">Import</span></button>')
                .click(importMappings)
                .css('cursor', 'pointer')
                .css('float', 'left')
                .css('margin-left', '10px')
                .appendTo('#popup');
            //Create import checkbox to create data elements
            $('<input type="checkbox" id="createDataLayerOption" />')
                .css('float', 'left')
                .css('margin-left', '10px')
                .appendTo('#popup');
            $('<label title="If data layer name isn\'t found, checking the box will create it.">Create Data Layer Elements?</label>')
                .css('float', 'left')
                .css('margin-top', '3px')
                .appendTo('#popup');
            $('#popup .alert').text('');
            //Insert helpful text
            // $('#popup .helpText').text('Format: data layer variable, type (js,dom,meta,cp,qp), destination');
        }
        $('#popupText')[0].setSelectionRange(0, $('#popupText').val().length);
    }

    function getDataLayerNames() {
        var data = utui.data.define;
        var obj = {};
        Object.keys(data).forEach(function(key) {
            if (data[key].name) {
                obj[data[key].name] = 1;
            }
        });
        return obj;
    }

    function exportMappings() {
        var csv = '';
        var data = utui.data.manage[$('#manage_editmapping_id').val()].map;
        Object.keys(data).forEach(function(key) {
            csv += data[key].key + ',' + data[key].type + ',' + data[key].variable + '\n';
        });
        //Pass a message if there aren't any mappings when the user clicks export
        if (!csv) {
            csv = 'NOTHING CURRENTLY MAPPED!';
        }
        showImportExportPopup(csv, 'div[aria-labelledby="ui-dialog-title-manage_dialog_wizard"]');
    }

    function importMappings() {
        var contentLines = $('#popupText').val().split('\n');
        var inputData = [];
        var dataLayer = getDataLayerNames();
        for (var i = 0; i < contentLines.length; i++) {
            if (contentLines[i].length) {
                var obj = {};
                var content = contentLines[i].split(',');
                obj.key = content[0];
                obj.type = content[1];
                obj.variable = content.splice(2).join(',');
                if ($('#createDataLayerOption').is(':checked')) {
                    //arguments are: title,name,type,desc,bundleobj(optional)
                    var id = dsapi.getNextId();
                    utui.define.addDataSource(id, "", obj.key, obj.type, "");
                } else if (obj.type != 'dom' && !obj.key.match(/_corder|_ctotal|_csubtotal|_cship|_ctax|_cstore|_ccurrency|_cpromo|_ctype|_ccustid|_ccity|_cstate|_czip|_ccountry|_cprod|_cprodname|_csku|_cbrand|_ccat|_ccat2|_cquan|_cprice|_cpdisc/) && !dataLayer[obj.key]) {
                    $('#popup .alert').text('\'' + obj.type + '.' + obj.key + '\' is not in your data layer!');
                    return false;
                }
                inputData.push(obj);
            }
        }
        if (!inputData.length) {
            $('#popup .alert').text('No data to import!');
            return false;
        }
        //Must close the mapping toolbox because the user can't see the mappings this way and it is very confusing
        $('#popup span:contains(Close)').click();
        //Existing Tag
        $('span:contains(Apply):visible').click();
        //New Tag
        $('span:contains(Finish):visible').click();
        console.log('Mapping data for tag id: ' + $('#manage_editmapping_id').val());
        console.log(JSON.stringify(inputData));
        utui.automator.addMapping($('#manage_editmapping_id').val(), inputData);
        (function(id) {
            setTimeout(function() {
                $('.manage_container div[data-uid="' + id + '"]').siblings('.container_variables').find('.variableValue').text('' + Object.keys(utui.data.manage[id].map).length);
                $('.manage_container div[data-uid="' + id + '"]').siblings('.container_variables').addClass('valuePositive');
                utui.profile.toggleUnsavedChangesBtn();
            }, 250);
        })($('#manage_editmapping_id').val());
    }

    function createEditTemplatesBtn() {
        return '<div class="wizard_config"><div class="wizard_label"><a style="padding-left:0px;" href="#" class="edit-templates-btn actionAdvConfigEdit btn btn-small i-color-edit tmui" original-title="This will launch a window that will allow you to view and/or manage the code behind your tag."><i class="icon-edit"></i> Edit Templates</a></div></div><br/><br/>';
    }

    //Wait for jquery before running code
    when(function() {
        return typeof jQuery == 'function';
    }, function() {
        //When the user opens the tag template wizard
        $(document).on('click', 'span.actionEditSettings, span.actionEditRules, span.actionMapping', function(e) {

            //fetch UID for current tag
            window.current_tag_uid = $(e.target).closest('.manage_container').attr('data-id');

            //Update text box length for pixel URL's
            $('div.wizard_item input').not('.wizard_title').css('width', '495px');

            //Create Edit Templates Button at the top
            $(createEditTemplatesBtn()).insertBefore('.dialogSectionHeader:contains(Properties)');

            //Create Edit Templates Button above advanced settings
            $(createEditTemplatesBtn()).insertAfter('#tagConfigBasicSettings');

            //Add click handler to open tag template
            $('.edit-templates-btn').on('click', function() {
                utui.adminlib.getTemplateList(window.current_tag_uid);
            });

            //Auto expand advanced settings
            $('div.dialogSectionHeader:contains("Advanced Settings")').unbind('click')
            $('#tagConfigAdvSettings .dialog_section_body').slideToggle({
                duration: 'fast',
                queue: false
            });
            $('#tagConfigAdvSettings .dialogSectionHeader i').toggleClass('icon-caret-right').toggleClass('icon-caret-down');
            setupDataMappingShortcuts();
        });

        //When the user adds a new template
        $(document).on('mousedown', 'button.js-addtag-btn', function(e) {
            //Wait for the tag template wizard to show up
            when(function() {
                return ($('div.dialogSectionHeader:contains("Advanced Settings")').is(':visible'));
            }, function() {
                //Update text box length for pixel URL's
                $('div.wizard_item input').not('.wizard_title').css('width', '495px');
                setupDataMappingShortcuts();
            });
        });

        //When a user saves a tag template, perform a save on the tag too
        $(document).on('mousedown', 'span:contains("Save Profile Template")', markTagAsNotSaved);

        function markTagAsNotSaved() {
            var tag_id = $('span:contains("Save Profile Template")').closest('.ui-dialog').find('#admin_template_select').val().match(/(\d+)/);
            if (tag_id) {
                var containerId = $('.manage_container[data-id="' + tag_id[1] + '"]').attr('id');
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
            } else {
                console.log('Saved a template that doesn\'t have a UID');
            }
        }

        console.log('Shortcuts and Optimazations for Tag Wizard Loaded');
    });
    /************** Shortcuts and Optimazations for Tag Wizard End ***************************/
})