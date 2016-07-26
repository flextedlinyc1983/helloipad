
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
        
        this.getBasePage(new ava.views.LayoutView({model: {template: "#homeLayout-template", layoutTemplate:"#homeLayout-template"}, className: "home-container"}));
        new MyView();
        this.putElement(new ava.views.LayoutView({model: {template:"#tabOneLayout-template", tagId:"tabOneLayout"}, className: "tabOneLayout"}),'#content-first');


        //btns
        this.putElement(new ava.views.CircleBtnMenuView({collection: circleBtn}), ".home-body-right");





        // this.putElement(new ava.views.CircleBtnMenuView({collection: circleBtn, className: "inner circleBtn testRight"}), ".home-body-left");


        // this.putElement(gridTerritory.render(), ".home-body-left-down");
        // this.addCustomClass(".home-body-left-down", "customGrid");
        // territories.fetch({reset: true});
        // this.addCustomClass(".home-body-left", "customGrid");

// $.backgridFixedHeader({
 //   grid: gridTerritory, //this is the grid variable
 //   container: $('.home-body-left-down') //this is the container where you want to put backgrid
 // });





        // this.putElement(gridTerritoryTest.render(), ".home-body-right");
        // territoriesTest.fetch({reset: true});
        // this.addCustomClass(".home-body-right", "customGrid");





        //交易單
        this.putElement(new ava.views.LayoutView({model: {template:"#todoapp-template", tagId:"todoapp"}, className: "todoapp"}),'.home-body-left-top');
        var todoAppView = new ava.views.TodoAppView({collection: todos,el:$("#todoapp")});






        //clock
        // this.putElement(new ava.views.LayoutView({model: {template:"#clock-template", tagId:"clock"}, className: "clock"}),'.home-header');


        // this.getBasePage(new ava.views.TabView({className: "work-section", model: {id: "work"}}));

        // this.getTabPage(new ava.views.ListTabView({className: "tabs-nav", collection: tab})
        //     , new ava.views.TabSectionView({tagName: "div", className: "", collection: tab}));

        // //btns
        // // this.getSectionPage(new ava.views.CircleBtnMenuView({collection: circleBtn}),'#circleBtn');

        // this.getSectionPage(new ava.views.LayoutView({model: {layoutTemplate:"#layout-template"}, className: "layoutCustom"}),'#layout');
        // // this.getSectionPage(new ava.views.LayoutView({model: "", className: "layoutCustom"}),'#layout');

        // this.putElement(new ava.views.CalculatorView({}),'.layout-body-left');
        // this.putElement(new ava.views.InputView ({className:"ans-calc", model: {id:"answer", type: "text", disabled: "disabled"}}),'.layout-header');





        // this.putElement(new ava.views.LayoutView({model: {template:"#form-combox-template", tagId:"form-combox-template"}, className: "form-combox-template"}),'.home-body-right');

        // var comboxName = new ava.views.ComboxView(
        //     {collection: comboxs, tagName: "select",
        //         subView: ava.views.ComboxItemView, className:"combox"}
        //     ,{tagName: "div", templateName: "#comboxName-item-template",rmOutsideTag:true,
        //         className:""});
        // this.putElement(comboxName,'#comboxName');

        // var comboxUrl = new ava.views.ComboxView(
        //     {collection: comboxs, tagName: "select",
        //         subView: ava.views.ComboxItemView, className:"combox"}
        //     ,{tagName: "div", templateName: "#comboxUrl-item-template",rmOutsideTag:true,
        //         className:""});
        // this.putElement(comboxUrl,'#comboxUrl');

        // var comboxDate = new ava.views.ComboxView(
        //     {collection: comboxs, tagName: "select",
        //         subView: ava.views.ComboxItemView, className:"combox"}
        //     ,{tagName: "div", templateName: "#comboxDate-item-template",rmOutsideTag:true,
        //         className:""});
        // this.putElement(comboxDate,'#comboxDate');

        // var comboxPercentage = new ava.views.ComboxView(
        //     {collection: comboxs, tagName: "select",
        //         subView: ava.views.ComboxItemView, className:"combox"}
        //     ,{tagName: "div", templateName: "#comboxPercentage-item-template",rmOutsideTag:true,
        //         className:""});
        // this.putElement(comboxPercentage,'#comboxPercentage');




        var clock = new ava.views.ClockView(
            {tagName: "div", className:"clock", templateName: "#clock-template"});
        this.putElement(clock,'.home-clock-header');



this.putElement(new ava.views.LayoutView({model: {template:"#form-combox-template", tagId:"form-combox-template"}, className: "form-combox-template"}),'.home-body-left-top');
        var comboxPercentageDataFromSysParms = new ava.views.ComboxDataFromSysParmsView(
            {collection: comboxsDataFromSysParms, tagName: "select",
                subView: ava.views.ComboxItemView, className:"combox"}
            ,{tagName: "div", templateName: "#comboxPercentage-item-template",rmOutsideTag:true,
                className:""});
        this.putElement(comboxPercentageDataFromSysParms,'#comboxPercentageDataFromSysParms');

        var comboxDateDataFromSysParms = new ava.views.ComboxDataFromSysParmsView(
            {collection: comboxsDataFromSysParms, tagName: "select",
                subView: ava.views.ComboxItemView, className:"combox"}
            ,{tagName: "div", templateName: "#comboxDate-item-template",rmOutsideTag:true,
                className:""});
        this.putElement(comboxDateDataFromSysParms,'#comboxDateDataFromSysParms');


        // new MyView();
        // this.putElement(new ava.views.CircleBtnMenuView({collection: circleBtn}),'#content-tab4-div');
    },


    // getGridPage: function () {
    //     this.putElement(todoGrid.render(), ".home-body-right");
    //     todoGrid.fetch({reset: true});
    //     this.addCustomClass(".home-body-right", "customGrid");
    // },

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
    },
    addCustomClass: function (pos,className) {
        // alert('addCustomClass');
        $(document).find(pos).addClass(className);
    }
    
});


$(document).ready(function () {
    // alert("document ready");

    // document.addEventListener("touchstart", function() {},false);


    app = new ava.router();

    tabOperation.init();

});

