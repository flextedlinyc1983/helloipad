
ava.router = Backbone.Router.extend({

	routes: {
		"": "portal",
		"home": "home",
        "login" : "login",
        "page1" : "page1",
        "myModal" : "myModal",
        "RealtimeInfo_Today" : "RealtimeInfo_Today",
        "RealtimeInfo_Today_Test" : "RealtimeInfo_Today_Test",
        "RealtimeInfo_Today_G1": "RealtimeInfo_Today_G1",

        "RealtimeInfo_Today_Test/getPosInfo/:codeNumber" : "getPosInfo",

        "getBrandStatistics" : "getBrandStatistics",
	},

    // initialize: function () {

    //     Backbone.history.start();
    // },



    getBrandStatistics : function () {

        if(window.localStorage.getItem('loginSuccess') == "false"){
            Backbone.history.navigate('', {trigger: true, replace: true});
            return true;
        }

        // console.log('#getBrandStatistics');
        var page = new ava.views.PageView({attributes : {"id" : "getBrandStatistics"}});
        this.changePageForMobile(page);



        var columns = new ava.views.Column_New_Collection([
            {'column':$.i18n.prop('msg_getBrandStatistics_brandName')},
            {'column':$.i18n.prop('msg_getBrandStatistics_volumeToday')},
            {'column':$.i18n.prop('msg_getBrandStatistics_volumeAccuMonth')},

        ]);

        var self = this;
        var test = new ava.views.Table_getBrandStatistics_Collection([],{domainName: window.localStorage.getItem('ipAdress'),
            urlPath: window.localStorage.getItem('AppName') + "/PDA/PISConsole/getBrandStatistics.jsp",columns:columns});


        var tableView = new ava.views.Table_getBrandStatistics_View({collection: test, columns: columns, className: "table",
        attributes : {"id":"getBrandStatistics-table"}});
        this.putElementOnPageContent(tableView.render().$el, "getBrandStatistics", true);


        test.getResults();
        this.pageCollection = test;

    },


    getPosInfo : function (codeNumber) {


        if(window.localStorage.getItem('loginSuccess') == "false"){
            Backbone.history.navigate('', {trigger: true, replace: true});
            return true;
        }

        // console.log('#getPosInfo');
        var page = new ava.views.PageView({attributes : {"id" : "getPosInfo"}});
        this.changePageForMobile(page);



        var columns = new ava.views.Column_New_Collection([
            {'column':$.i18n.prop('msg_getPosInfo_time')},
            {'column':$.i18n.prop('msg_getPosInfo_customer')},
            {'column':$.i18n.prop('msg_getPosInfo_dollar')},
            {'column':$.i18n.prop('msg_getPosInfo_count')},
        ]);

        var self = this;
        // codeNumber = 'RM012';
        var test = new ava.views.Table_GetPosInfo_Collection([],{domainName:window.localStorage.getItem('ipAdress'),
            urlPath: window.localStorage.getItem('AppName') + "/PDA/PISConsole/getLastSell.jsp?code=" + codeNumber,columns:columns});


        var tableView = new ava.views.Table_GetPosInfo_View({collection: test, columns: columns, className: "table",
        attributes : {"id":"getPosInfo-table"}});
        this.putElementOnPageContent(tableView.render().$el, "getPosInfo", true);


        test.getResults();
        this.pageCollection = test;

    },

    initialize:function () {
        // Handle back button throughout the application
        // $('.back').live('click', function(event) {
        $('body').on('click', '.back', function(event) {
            window.history.back();
            return false;
        });
        this.firstPage = true;

        this.pageCollection = null;
    },

    getPageCollection: function () {
       return  this.pageCollection;
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
    RealtimeInfo_Today_Test:function (e) {

        if(window.localStorage.getItem('loginSuccess') == "false"){
            window.history.go(-1);
            return true;
        }

        // console.log('#RealtimeInfo_Today_Test');
        var page = new ava.views.PageView({attributes : {"id" : "RealtimeInfo_Today_Test"}});
        // delete
        if(typeof(pagesData['portal']) != "undefined"){
            page.setNowpage(pagesData['portal'].group);
            delete pagesData['portal'];
        }

        this.changePageForMobile(page);




        // var columns = new ava.views.Column_New_Collection([{'column':'項目1', "persist": true},{'column':'項目2', "persist": false},{'column':'項目3', "persist": false},
        //     {'column':'項目4', "persist": false},{'column':'項目5', "persist": false},{'column':'項目6', "persist": false},{'column':'項目7', "persist": false},{'column':'項目8', "persist": false},{'column':'項目9', "persist": false}]);

        var columns = new ava.views.Column_New_Collection([]);

        // var columns = new ava.views.Column_New_Collection([
        //     {'column':'店櫃名稱', "persist": true},
        //     {'column':'本日', "persist": false},
        //     {'column':'去年本日', "persist": false},
        //     {'column':'本月', "persist": false},

        //     {'column':'去年本月', "persist": false},
        //     {'column':'商品件數', "persist": false},
        //     {'column':'平均客件數', "persist": false},
        //     {'column':'新增會員數', "persist": false},

        //     {'column':'客數', "persist": false},
        //     {'column':'客單價', "persist": false},
        //     {'column':'銷售金額', "persist": false},
        //     {'column':'訂金金額', "persist": false},

        //     {'column':'本月目標', "persist": false},
        //     {'column':'達成率', "persist": false},
        //     {'column':'庫存', "persist": false},
        //     {'column':'可售金額', "persist": false}]);

        var self = this;

        var test = new ava.views.Table_New_Customize_Collection([],{domainName:window.localStorage.getItem('ipAdress'),
            urlPath: window.localStorage.getItem('AppName') + "/PDA/PISConsole/getRealtimeInfo.jsp?isSum=0&57t3o34O=1",columns:columns,page:page});

        // var tableView = new ava.views.Table_New_View({collection: test, columns: columns, className: "tablesaw tablesaw-swipe tablesaw-fix-persist",
        //     attributes : {"id":"RealtimeInfo_Today_Test-table", "data-tablesaw-mode":"swipe"}});
        var tableView = new ava.views.Table_New_View({collection: test, columns: columns, className: "table",page:page,
        attributes : {"id":"RealtimeInfo_Today_Test-table"}});
        this.putElementOnPageContent(tableView.render().$el, "RealtimeInfo_Today_Test", true);


        test.getResults();
        this.pageCollection = test;

        //fixed-Header
        $('#RealtimeInfo_Today_Test-table').parent().addClass("container");


        // test.fetch({
        //     // data: {api_key: 'secretkey'},
        //     type: 'POST',
        //     dataType : "text",
        //     add:true,
        //     reset: true,
        //     success: function(collection, response, options){
        //         console.log(collection);
        //         console.log(response);
        //         console.log(options);

        //         columns.reset(self.getColumnsFromCollection(collection,self));

        //     },
        //     error: function (collection, response, options) {
        //         console.log(collection);
        //         console.log(response);
        //         console.log(options);            }
        // });





        // this.setTimeoutGetResults(test);


    },

    setTimeoutGetResults: function (test) {

        var self = this;
        timeoutGetResults = setTimeout(function () {
            test.getResults();
            self.setTimeoutGetResults(test);
        }, 30000);

    },

    // getColumnsFromCollection: function (collection,self) {
    //     var columns = []
    //     for(var item in collection.models){

    //         // console.log(collection.models[item].attributes);
    //         var obj = collection.models[item].attributes;
    //         var column;
    //         for(column in obj){
    //             var columnName = self.getColumnName(column);
    //             if (obj.hasOwnProperty(column) && columnName != "")
    //                 columns.push({'column': columnName });
    //         }
    //         // console.log(columns);
    //         break;

    //     }
    //     return columns;
    // },


    // getColumnName: function (name) {

    //         var value = '';
    //         switch (name) {
    //           case "name":
    //               value = '店櫃名稱';
    //               break;
    //           case 'volumeToday':
    //               value = "本日";
    //               break;
    //           case 'volumeLastYearToday':
    //               value = "去年本日";
    //               break;
    //           case 'volumeThisMonth':
    //               value = "本月";
    //               break;
    //           case 'volumeLastYearThisMonth':
    //               value = "去年本月";
    //               break;
    //           case 'deposit':
    //               value = "庫存";
    //               break;
    //           case 'volumeAvailable':
    //               value = '可售金額';
    //               break;
    //           case 'target':
    //               value = "本月目標";
    //               break;
    //           case 'targetRate':
    //               value = "達成率";
    //               break;
    //           case 'saleTotal':
    //               value = '銷售金額';
    //               break;
    //           case 'preSaleTotal':
    //               value = "訂金金額";
    //               break;
    //           case 'customer':
    //               value = "客數";
    //               break;
    //           case 'customerUPrice':
    //               value = "客單價";
    //               break;
    //           case 'saleAmount':
    //               value = '商品件數';
    //               break;
    //           case 'customerAVAmount':
    //               value = "平均客件數";
    //               break;
    //           case 'memberCount':
    //               value = "新增會員數";
    //               break;
    //           default:
    //               value = "";
    //         }

    //         return value;

    // },

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
        // console.log('#portal');
        var page = new ava.views.PortalView({className: "isSum1", attributes : {"id" : "portal"}});
        this.changePageForMobile(page);




        if(window.localStorage.getItem('loginSuccess') == "true") {

            //local language

            //local Language for css setting
            document.documentElement.lang = window.localStorage.getItem('sLang');


            // var columns = new ava.views.Column_New_Collection([
            //     {'column':'name'},
            //     {'column':'value'},
            // ]);
            var columns = new ava.views.Column_New_Collection([
                {'column':$.i18n.prop('msg_portal_item')},
                {'column':$.i18n.prop('msg_portal_total')},
            ]);

            var self = this;
            var test = new ava.views.Table_portal_Collection([],{domainName: window.localStorage.getItem('ipAdress'),
                urlPath: window.localStorage.getItem('AppName') + "/PDA/PISConsole/getRealtimeInfo.jsp?isSum=1",columns:columns});


            var tableView = new ava.views.Table_portal_View({collection: test, columns: columns, className: "table RealtimeInfo",
            attributes : {"id":"portal-table"}});
            this.putElementOnPageContent(tableView.render().$el, "portal", true);


            test.getResults();

            this.pageCollection = test;

        }else{
            
            if(window.localStorage.getItem('registerSuccess') == "true"){
                var companyInfoView = new ava.views.CompanyInfoView({className: "CompanyInfo"});
                this.putElementOnPageContent(companyInfoView.render().$el, "portal", true);
                this.setCompanyInfoScreen();    
            }            

            this.pageCollection = null;
        }

    },

    setCompanyInfoScreen: function () {
        var width = $(window).width();
        var height = $(window).height() - $("div[data-role=header]").outerHeight();
        $('.CompanyInfo').css({'height': height + 'px','width': width + 'px'});

    },

    // portal:function () {




    //     console.log('#portal');
    //     var portal = new ava.views.PortalView({className: "isSum1"});
    //     this.changePageForMobile(portal);
    //     // portal.loginGetData();
    //     // console.log(RealtimeInfo);





    //     if(window.localStorage.getItem('loginSuccess') == "true") {
    //         this.loginGetData();
    //         this.loginGetData();
    //         // RealtimeInfoCollection = new Backbone.Collection(RealtimeInfo);
    //         var tableView = new ava.views.TableView({collection: RealtimeInfoCollection, className: "RealtimeInfo"
    //         , attributes: {"style": 'table-layout: fixed;'}
    //         });
    //         this.putElementOnPageContent(tableView.render().$el, "portal-content");

    //         this.timeout("isSum1");

    //     }else{
    //         this.putElementOnPageContent("尚未登入", "portal-content");
    //     }



    // },

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
                                    // var testoJson = [];
                                    // for (var i = 0; i < 20; i++) {
                                    //     testoJson.push(oJson.Info.Pos[i]);
                                    // }
                                    // RealtimeInfoCollection_Today.reset(testoJson);
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
            // console.log("setRealtimeInfoData" + err);
        }


    },

    loginGetData:function (address,page) {

    // loginGetData:function (event) {
        // event.preventDefault(); // Don't let this button submit the form
        // $('.alert-error').hide(); // Hide any errors on a new submit
        // var url = '../api/login';
        var url;
        if(!address){
            url = getIpFromDataConfig(setIpBySelf) + '/flaps2/PDA/PISConsole/getRealtimeInfo.jsp?isSum=1&FMieQ4fK=1';
        }else{
            url = address;
        }
        // var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz&page_limit=20&page=1';
        // console.log('Loggin in... ');
        var formValues = {
            // code: $('#code').val(),
            // pwd: $('#pwd').val()
            // code: '',
            // pwd: ''
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
                // console.log(["Login request details: ", data]);

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
        // console.log('#page1');
        this.changePageForMobile(new ava.views.Page1View());
    },
    //login here
    myModal:function () {
        // console.log('#myModal');
        var loginView = new ava.views.ModalView({model: new ava.models.LoginModel(), className: "landscapeModal"});
        // Backbone.Validation.bind(loginView);
        this.changePageForMobile(loginView);
        // loginView.delegateEvents();

        this.pageCollection = null;
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
        // var length = $('div[data-role=page]').find('div[data-role=content]').length;
        // var content = $('div[data-role=page]').find('div[data-role=content]').eq(length-1);
        //  var strId = content.attr("id");
        // if(strId == pageName){

        //     if(pageName == "RealtimeInfo_Today-content"){
        //         $('div[data-role=page]').find('div[data-role=content] .table-container').html(view);

        //     }else{
        //         $('div[data-role=page]').find('div[data-role=content]').html(view);
        //     }



        //     // if(fixedHeader){
        //     //     $('div[data-role=page]').find('div[data-role=content]').prepend('<div id="bottom_anchor"></div>');
        //     // }
        // }else if ( $($('div[data-role=page]')[0]).attr('id') == pageName ){
        //     $($('div[data-role=page]')[0]).find('div[data-role=content]').append(view);
        // }else if ( $($('div[data-role=page]')[1]).attr('id') == pageName ){
        //     $($('div[data-role=page]')[1]).find('div[data-role=content]').append(view);
        // }






        var nowHashPath = "";
        var strs = window.location.hash.substring(1).split('/');
        if(strs[0] == ""){
            nowHashPath = "portal";
        }else if(typeof(strs[1] ) == "undefined"){
            //RealtimeInfo_Today_Test
            //getBrandStatistics
            nowHashPath = strs[0];
        }else{
            //getPosInfo
            nowHashPath = strs[1];
        }
        $('div[id=' + nowHashPath + "]").find('div[data-role=content]').append(view);
    },

    clearTimeout : function () {
        // alert('clearTimeout')
        //  var path = Backbone.history.getFragment();
        // if( typeof(RealtimeInfo_Today_Test_Timeout) != 'undefined' && path != "RealtimeInfo_Today_Test"){
        //     RealtimeInfo_Today_Test_Timeout.clear();
        // }else {

        // }

        // if( typeof(getBrandStatistics_Timeout) != 'undefined' && path != "getBrandStatistics"){
        //     getBrandStatistics_Timeout.clear();
        // }else {

        // }

        // if( typeof(portal_Timeout) != 'undefined' && path != ""){
        //     portal_Timeout.clear();
        // }else {

        // }
        try{
            var path = Backbone.history.getFragment();
            if( typeof(RealtimeInfo_Today_Test_Timeout) != 'undefined' ){
                RealtimeInfo_Today_Test_Timeout.clear();
            }else {

            }

            if( typeof(getBrandStatistics_Timeout) != 'undefined' ){
                getBrandStatistics_Timeout.clear();
            }else {

            }

            if( typeof(portal_Timeout) != 'undefined' ){
                portal_Timeout.clear();
            }else {

            }
        }catch(err) {
            // console.log(err);
        }
    },

    clearTimeoutForPause : function () {

        // try{
        //     // alert('clearTimeoutForPause');
        //     var path = window.location.hash.substring(1);
        //     switch (path) {
        //         case "":
        //             portal_Timeout.clear();
        //             break;
        //         case 'getBrandStatistics':
        //             getBrandStatistics_Timeout.clear();
        //             break;
        //         case 'RealtimeInfo_Today_Test':
        //             RealtimeInfo_Today_Test_Timeout.clear();
        //             break;
        //     }
        // }catch(err) {
        //     console.log(err);
        // }

       try{
            if( typeof(portal_Timeout) != 'undefined'){
                portal_Timeout.clear();
            }
            if( typeof(getBrandStatistics_Timeout) != 'undefined'){
                getBrandStatistics_Timeout.clear();
            }
            if( typeof(RealtimeInfo_Today_Test_Timeout) != 'undefined'){
                RealtimeInfo_Today_Test_Timeout.clear();
            }

        }catch(err) {
            // console.log(err);
        }
    }

});

var appRouter;
$(document).ready(function () {



    // alert("document ready");

    // document.addEventListener("touchstart", function() {},false);

    loadBundles( window.localStorage.getItem('sLang') || getChooseLanguageFromNvLang(navigator.language) || "");


    appRouter = new ava.router();

    Backbone.history.start();

    Backbone.history.on('route', function () {

        appRouter.clearTimeout();

        // var path = Backbone.history.getFragment();
        // if( typeof(RealtimeInfo_Today_Test_Timeout) != 'undefined' && path != "RealtimeInfo_Today_Test"){
        //     RealtimeInfo_Today_Test_Timeout.clear();
        // }else {

        // }

        // if( typeof(getBrandStatistics_Timeout) != 'undefined' && path != "getBrandStatistics"){
        //     getBrandStatistics_Timeout.clear();
        // }else {

        // }

        // if( typeof(portal_Timeout) != 'undefined' && path != ""){
        //     portal_Timeout.clear();
        // }else {

        // }
    });

    tabOperation.init();

});
