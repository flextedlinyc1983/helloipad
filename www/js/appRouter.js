
ava.router = Backbone.Router.extend({

	routes: {
		"": "portal",
		"home": "home",
        "login" : "login",
        "page1" : "page1",
        "myModal" : "myModal",
        "RealtimeInfo_Today" : "RealtimeInfo_Today",
        "RealtimeInfo_Today_G1": "RealtimeInfo_Today_G1"
	},

    // initialize: function () {

    //     Backbone.history.start();
    // },

    initialize:function () {
        // Handle back button throughout the application
        // $('.back').live('click', function(event) {
        $('body').on('click', '.back', function(event) {
            window.history.back();
            return false;
        });
        this.firstPage = true;
    },

    login: function () {
        alert("test");
        
        var loginModel = new ava.models.LoginModel();
        var loginView = new ava.views.LoginView( {model:loginModel});
        loginView.render().showModal({
            x: event.pageX,
            y: event.pageY
        });

    },

    
    RealtimeInfo_Today:function () {




        console.log('#RealtimeInfo_Today');
        var page = new ava.views.RealtimeInfo_Today();
        this.changePageForMobile(page);
        // portal.loginGetData();
        // console.log(RealtimeInfo);
        




        if(window.localStorage.getItem('loginSuccess') == "true") {
            this.loginGetData(urls.RealtimeInfo_Today,"RealtimeInfo_Today");
            // this.loginGetData();
            // RealtimeInfoCollection = new Backbone.Collection(RealtimeInfo);
            //RealtimeInfoCollection_today
            
            // var tableView = new ava.views.Table_TodayView({collection: RealtimeInfoCollection_Today, className: "ui-responsive",
            //     attributes : {"data-mode":"columntoggle", "data-role": "table", "data-column-btn-text": "欄位選項", "id":"RealtimeInfo_Today-table"}
            // });
            
            var tableView = new ava.views.Table_TodayView({collection: RealtimeInfoCollection_Today, className: "fixedHeader",
                attributes : {"id":"RealtimeInfo_Today-table", "data-role": "table","style":"table-layout: auto"}
            });

            this.putElementOnPageContent(tableView.render().$el, "RealtimeInfo_Today-content", true);  




            // this.timeout();

        }else{
            this.putElementOnPageContent("尚未登入");  
        }
      


    },
    portal:function () {




        console.log('#portal');
        var portal = new ava.views.PortalView({className: "isSum1"});
        this.changePageForMobile(portal);
        // portal.loginGetData();
        // console.log(RealtimeInfo);
        




        if(window.localStorage.getItem('loginSuccess') == "true") {
            this.loginGetData();
            this.loginGetData();
            // RealtimeInfoCollection = new Backbone.Collection(RealtimeInfo);
            var tableView = new ava.views.TableView({collection: RealtimeInfoCollection, className: "RealtimeInfo"
            , attributes: {"style": 'table-layout: fixed;'}
            });            
            this.putElementOnPageContent(tableView.render().$el, "portal-content");  

            this.timeout("isSum1");

        }else{
            this.putElementOnPageContent("尚未登入", "portal-content");  
        }
      


    },

    timeout: function (className) {
        var period = 0;
        if (typeof(firstTime) == "undefined"){
            firstTime = 1;
            period = 800;

        }else if(firstTime == 1){
            firstTime = 2;
            period = 1500;
        }else{
            period = 3000;
        }
        var self = this;

        var isNowPageClassname = false;
        
        if( $(':jqmData(role=page)').length == 1 ){
            var nowPageClassname = $(':jqmData(role=page)').attr('class');   
            if(nowPageClassname.indexOf(className) != -1)
            {
                isNowPageClassname = true;
            } 
        }else{
            $(':jqmData(role=page)').each(function (argument) {
                var classes = $(this).attr('class');
                if(classes.indexOf(className) != -1){
                    isNowPageClassname = true
                }
            });
        }
        
        if(isNowPageClassname) {
            RealtimeInfoTimeout = setTimeout(function () {
                // Do Something Here
                // Then recall the parent function to
                // create a recursive loop.

                self.loginGetData();
                // RealtimeInfoCollection = new Backbone.Collection(RealtimeInfo);
                // var tableView = new ava.views.TableView({collection: RealtimeInfoCollection, className: "RealtimeInfo"});
                // self.putElementOnPageContent(tableView.render().$el);  
                self.timeout(className);
            }, period);
        }else{
            alert('stop timeout: ' + className);
        }
    },

    setRealtimeInfoData: function (oJson,page) {

        // RealtimeInfo = [
        //     {'name': '本日業績', 'value': oJson.Info.Pos.volumeToday},
        //     {'name': '去年本日業績', 'value': oJson.Info.Pos.volumeLastYearToday},
        //     {'name': '本月業績', 'value': oJson.Info.Pos.volumeThisMonth},
        //     {'name': '去年本月業績', 'value': oJson.Info.Pos.volumeLastYearThisMonth},
        //     {'name': '現有庫存', 'value': oJson.Info.Pos.deposit},
        //     {'name': '可售金額', 'value': oJson.Info.Pos.volumeAvailable}
            
        // ];

        try {
            var pageContentId = $(':jqmData(role=content)').attr('id');
            if(!page && pageContentId != "portal-content"){

            }
            else{

                switch (page) {
                              case "RealtimeInfo_Today":
                                  RealtimeInfoCollection_Today.reset((oJson.Info.Pos));                              
                                  break;
                              case 1:
                                  day = "Monday";
                                  break;
                              case 2:
                                  day = "Tuesday";
                                  break;
                              case 3:
                                  day = "Wednesday";
                                  break;
                              case 4:
                                  day = "Thursday";
                                  break;
                              case 5:
                                  day = "Friday";
                                  break;
                              case 6:
                                  day = "Saturday";
                              default:
                                    RealtimeInfoCollection.reset();
                                    RealtimeInfoCollection.push({'name': '本日業績', 'value': oJson.Info.Pos.volumeToday});
                                    RealtimeInfoCollection.push({'name': '去年本日業績', 'value': oJson.Info.Pos.volumeLastYearToday});
                                    RealtimeInfoCollection.push({'name': '本月業績', 'value': oJson.Info.Pos.volumeThisMonth});
                                    RealtimeInfoCollection.push({'name': '去年本月業績', 'value': oJson.Info.Pos.volumeLastYearThisMonth});
                                    RealtimeInfoCollection.push({'name': '現有庫存', 'value': oJson.Info.Pos.deposit});
                                    RealtimeInfoCollection.push({'name': '可售金額', 'value': oJson.Info.Pos.volumeAvailable});
                }

            }
        }
        catch(err) {
            console.log("setRealtimeInfoData" + err);
        }

        
    },

    loginGetData:function (address,page) {
        
    // loginGetData:function (event) {
        // event.preventDefault(); // Don't let this button submit the form
        // $('.alert-error').hide(); // Hide any errors on a new submit
        // var url = '../api/login';
        var url;
        if(!address){
            url = 'http://192.168.0.58:8080/flaps2/PDA/PISConsole/getRealtimeInfo.jsp?isSum=1&FMieQ4fK=1';
        }else{
            url = address;
        }
        // var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz&page_limit=20&page=1';
        // console.log('Loggin in... ');
        var formValues = {
            // code: $('#code').val(),
            // pwd: $('#pwd').val()
            // code: 'flextier99',
            // pwd: '0827203'
            code: window.localStorage.getItem('code') + "111",
            pwd: window.localStorage.getItem('pwd')
        };

        $.ajax({
            context: this,
            url:url,
            // type:'GET',
            type:'POST',
            // crossDomain: true,
            // headers: { 'Access-Control-Allow-Origin': '*',
            // 'Content-Type':'application/x-www-form-urlencoded' },
            // dataType:"json",
            // data: formValues,
            beforeSend: function (){
            // alert('beforesend');
             // $.mobile.showPageLoadingMsg();
             if(page){
                $.mobile.loading('show');
              }
            },
            success:function (data, textStatus, jqXHR) {
                console.log(["Login request details: ", data]);

                var oJson = xml2json(data);

                // alert(JSON.stringify(oJson));

                this.setRealtimeInfoData(oJson,page);
               
                // if(data.error) {  // If there is an error, show the error messages
                //     $('.alert-error').text(data.error.text).show();
                // }
                // else { // If not, send them back to the home page
                //     window.location.replace('#');
                // }
            },
            error: function(xhr, textStatus, errorThrown){
               alert('request failed');
            },
            complete: function(xhr,status){
             if(page){
                $.mobile.loading('hide');
              }
            }
        });


    },

    page1:function () {
        console.log('#page1');
        this.changePageForMobile(new ava.views.Page1View());
    },
    //login here
    myModal:function () {
        console.log('#myModal');
        var loginView = new ava.views.ModalView({model: new ava.models.LoginModel()});
        // Backbone.Validation.bind(loginView);
        this.changePageForMobile(loginView);
        
    },

    changePageForMobile:function (page) {
        $(page.el).attr('data-role', 'page');
        page.render();
        $('body').append($(page.el));
        var transition = $.mobile.defaultPageTransition;
        // We don't want to slide the first page
        if (this.firstPage) {
            transition = 'none';
            this.firstPage = false;
        }
        // $.mobile.changePage($(page.el), {changeHash:false, transition: transition});
        $(":mobile-pagecontainer").pagecontainer( "change", $(page.el), { changeHash: false, transition: transition});
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
    },
    putElementOnPageContent: function (view, pageName, fixedHeader) {
        var length = $('div[data-role=page]').find('div[data-role=content]').length;
        var content = $('div[data-role=page]').find('div[data-role=content]').eq(length-1);
         var strId = content.attr("id");
        if(strId == pageName){

            if(pageName == "RealtimeInfo_Today-content"){
                $('div[data-role=page]').find('div[data-role=content] .table-container').html(view); 
                
            }else{
                $('div[data-role=page]').find('div[data-role=content]').html(view);    
            }

            

            // if(fixedHeader){
            //     $('div[data-role=page]').find('div[data-role=content]').prepend('<div id="bottom_anchor"></div>');
            // }
        }
    },
    
});


$(document).ready(function () {
    // alert("document ready");

    // document.addEventListener("touchstart", function() {},false);


    var app = new ava.router();
    Backbone.history.start();

    tabOperation.init();

});

