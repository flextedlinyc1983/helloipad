$(document).on('mobileinit', function() {
	// alert('mobileinit');


    $.mobile.ajaxEnabled = false;
    $.mobile.linkBindingEnabled = false;
    $.mobile.hashListeningEnabled = false;
    $.mobile.pushStateEnabled = false;
    $.mobile.defaultPageTransition = "fade";
    // $.mobile.defaultPageTransition = "slide";
    // $.mobile.autoInitializePage = false;
if(screen.availWidth >= 600){
$.event.special.swipe.scrollSupressionThreshold = (screen.availWidth) / 60;
$.event.special.swipe.horizontalDistanceThreshold = (screen.availWidth) / 60;
$.event.special.swipe.verticalDistanceThreshold = (screen.availHeight) / 13;
}
	// Remove page from DOM when it's being replaced
    // $('div[data-role="page"]').on('pagehide', null, function (event, ui) {


	// $('div[data-role="page"]').on('pagecontainerhide', null, function (event, ui) {
 //        $(event.currentTarget).remove();
 //    });


	$(document).on('pagehide', ":jqmData(role='page')", function (event, ui) {
        $(event.currentTarget).remove();
    });


// $(document).bind('pagebeforeshow', function (event, data) {
// 	var url = $.mobile.path.parseUrl(data.toPage).hash;
// });

// $(":mobile-pagecontainer").bind('pagebeforechange', function (event, data) {
// 	var url = $.mobile.path.parseUrl(data.toPage).hash;
// });
	

});

