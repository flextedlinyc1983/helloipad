
ava.router = Backbone.Router.extend({

	routes: {
		"": "home",
		"home": "home",
	},

    initialize: function () {

        Backbone.history.start();
    },

    home: function () {

        // this.changePage(new ava.views.AdminView({tagName: "li", model: new ava.models.User("3", "Eric")}));

        // this.changePage(new ava.views.AdminView({}));


        // this.getBasePage(new ava.views.DivView({className: "Tab inner"}));
        // this.changePage(new ava.views.ListMenuView({collection: menu}));


        this.clearPage();

        this.getBasePage(new ava.views.LayoutView({model: {template: "#homeLayout-template"}, className: "home-container"}));
        
        

        this.getBasePage(new ava.views.TabView({className: "work-section", model: {id: "work"}}));

        this.getTabPage(new ava.views.ListTabView({className: "tabs-nav", collection: tab})
            , new ava.views.TabSectionView({tagName: "div", className: "", collection: tab}));


        this.getSectionPage(new ava.views.CircleBtnMenuView({collection: circleBtn}),'#circleBtn');

        this.getSectionPage(new ava.views.LayoutView({model: "", className: "layoutCustom"}),'#layout');

        this.putElement(new ava.views.CalculatorView({}),'.layout-body-left');
        this.putElement(new ava.views.InputView ({className:"ans-calc", model: {id:"answer", type: "text", disabled: "disabled"}}),'.layout-header');
    },

    changePage: function (page) {
        $(page.el).attr('data-role', 'page');
    	$('body').append(page.el);

    	$.mobile.initializePage();
        $(":mobile-pagecontainer").pagecontainer( "change", $(page.el),
                { changeHash: false});
    },

    getBasePage: function (page) {
        $('body').append(page.el);
    },

    getTabPage: function (page, page2) {
        $('body .section-header').append(page.el);
        $('body .section-body').append(page2.el);
    },

    clearPage: function () {
        $('body').html("");
        
    },
    getSectionPage: function (page,sectionId) {
        
        $('body .section-body ' + sectionId).append(page.el);
    },
    putElement: function (page,className) {
        
        $(className).append(page.el);
    }
    
});


$(document).ready(function () {
    // alert("document ready");

    // document.addEventListener("touchstart", function() {},false);


    app = new ava.router();

    tabOperation.init();

});

