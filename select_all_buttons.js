function createElementFromHTML(htmlString) {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();
    return div.firstChild;
}

var tabMap = {"loadrules":"loadrules","tags":"manage","extensions":"customizations"};

function createSelectAllButton(tab_name){
    var parentRef, boxesRef, button, before = 0;
    button = createElementFromHTML('<div class="tab-menu-item select-all-button tmui"><a class="btn"><i class="icon-edit"></i><span>Select All</span></a></div>');
    switch (tab_name) {
        case 'data sources':
            parentRef = '#defineContainer_headerControls > div > div:last';
            button = '<div id="select-all-data-sources" class="tab-menu-item select-all-button"><a class="btn"><i class="icon-edit"></i><span>Select All</span></a></div>';
            boxesRef = '#defineObjectsList > div > input[type="checkbox"]';
            break;
        case 'loadrules':
            parentRef = '#loadrulesContainer_headerControls';
            boxesRef = '#loadrules_content > div > h3 > a > div > input';
            button.style.float = 'left';
            button.style.marginLeft = '10px';
            break;
        case 'tags':
            parentRef = '#manageContainer_headerControls';
            boxesRef = '#manage_content > div > h3 > a > div.container_bulk_select > input';
            button.style.float = 'left';
            button.style.marginLeft = '10px';
            break;
        case 'extensions':
            parentRef = '#customize_filter_menu_button';
            boxesRef = '#customize_content > div > h3 > a > div.container_bulk_select > input';
            button.style.marginRight = '5px';
            before = 1;
            break;
    }
    $(document).one('DOMNodeInserted', '.select-all-button', function(e) {
        e.target.addEventListener('click', function() {
            if ($(boxesRef).prop('checked') == true) {
                $(boxesRef).prop('checked', false);
            } else {
                $(boxesRef).prop('checked', true);
            }
        });
    });
    (before) ? $(parentRef).before(button) : $(parentRef).prepend(button);
}

function insertSelectAllButton(tab_name) {
    if (tab_name === 'data sources'){
        if($('#defineContainer_headerControls').find('.select-all-button').length === 0){
            createSelectAllButton(tab_name)
        }
    } else if ($('#tabs-' + tabMap[tab_name]).find('.select-all-button').length == 0) {
        createSelectAllButton(tab_name)
    }
}


utui.util.pubsub.subscribe(utui.constants.views.TAB_CLICK, function(e) {
    if (e.screen_name) {
        insertSelectAllButton(e.screen_name.toLowerCase());
    }
});