// UserManager Users
ava.collections.UserManager = Backbone.Collection.extend({
	model: ava.models.User
});
// userManager users
var userManager = new ava.collections.UserManager([ted,belle]);



ava.collections.Menu = Backbone.Collection.extend({
	model: ava.models.MenuItem
});

ava.collections.CircleBtn = Backbone.Collection.extend({
	model: ava.models.CircleBtnItem
});

var menu = new ava.collections.Menu([{id: "1", title: "test1"},
	{id: "2", title: "test2"}, {id: "3", title: "test3"},
	{id: "4", title: "test4"}, {id: "5", title: "test5"},
	{id: "6", title: "test6"}, {id: "7", title: "test7"},
	{id: "8", title: "test8"}, {id: "9", title: "test9"},
	{id: "10", title: "test10"}, {id: "11", title: "test11"},
	{id: "12", title: "test12"}, {id: "13", title: "test13"},
	{id: "14", title: "test14"}, {id: "15", title: "test15"},
	{id: "16", title: "test16"}, {id: "17", title: "test17"}]);


ava.collections.Tab = ava.collections.Menu.extend({
	model: ava.models.TabItem
});


var tab = new ava.collections.Tab([{href: "section_1", title: "test"},
	{href: "circleBtn", title: "circle button"}, {href: "layout", title: "計算機"},
	{href: "section_4", title: "test4"}, {href: "section_5", title: "test5"},
	{href: "section_6", title: "test6"}, {href: "section_7", title: "test7"},
	{href: "section_8", title: "test8"}, {href: "section_9", title: "test9"},
	{href: "section_10", title: "test10"}, {href: "section_11", title: "test11"},
	{href: "section_12", title: "test12"}, {href: "section_13", title: "test13"},
	{href: "section_14", title: "test14"}, {href: "section_15", title: "test15"},
	{href: "section_16", title: "test16"}, {href: "section_17", title: "test17"}]);



var circleBtn = new ava.collections.Menu([
	{img_1: "img/circleBtn/01_gr.png", img_2: "img/circleBtn/01_bl.png", name: "大象", price: 200},
	{img_1: "img/circleBtn/02_gr.png", img_2: "img/circleBtn/02_bl.png", name: "長頸鹿", price: 30},
	{img_1: "img/circleBtn/03_gr.png", img_2: "img/circleBtn/03_bl.png", name: "狼", price: 500},
	{img_1: "img/circleBtn/04_gr.png", img_2: "img/circleBtn/04_bl.png", name: "犀牛", price: 800},
		{img_1: "img/circleBtn/01_bl.png", img_2: "img/circleBtn/01_bl.png", name: "大象", price: 300},
	{img_1: "img/circleBtn/02_bl.png", img_2: "img/circleBtn/02_bl.png", name: "GIRAFFE", price: 100},
	{img_1: "img/circleBtn/03_bl.png", img_2: "img/circleBtn/03_bl.png", name: "WOLF", price: 299},
	{img_1: "img/circleBtn/04_bl.png", img_2: "img/circleBtn/04_bl.png", name: "RHINOCEROS", price: 99},
		{img_1: "img/circleBtn/01_gr.png", img_2: "img/circleBtn/01_bl.png", name: "大象", price: 39},
	{img_1: "img/circleBtn/02_gr.png", img_2: "img/circleBtn/02_bl.png", name: "GIRAFFE", price: 79},
	{img_1: "img/circleBtn/03_gr.png", img_2: "img/circleBtn/03_bl.png", name: "WOLF", price: 89},
	{img_1: "img/circleBtn/04_gr.png", img_2: "img/circleBtn/04_bl.png", name: "RHINOCEROS", price: 999}
	,	{img_1: "img/circleBtn/01_bl.png", img_2: "img/circleBtn/01_bl.png", name: "大象", price: 99999},
	{img_1: "img/circleBtn/02_bl.png", img_2: "img/circleBtn/02_bl.png", name: "GIRAFFE", price: 1999},
	{img_1: "img/circleBtn/03_bl.png", img_2: "img/circleBtn/03_bl.png", name: "WOLF", price: 699},
	{img_1: "img/circleBtn/04_bl.png", img_2: "img/circleBtn/04_bl.png", name: "RHINOCEROS", price: 799},
		{img_1: "img/circleBtn/01_gr.png", img_2: "img/circleBtn/01_bl.png", name: "大象", price: 888},
	{img_1: "img/circleBtn/02_gr.png", img_2: "img/circleBtn/02_bl.png", name: "GIRAFFE", price: 77777},
	{img_1: "img/circleBtn/03_gr.png", img_2: "img/circleBtn/03_bl.png", name: "WOLF", price: 666},
	{img_1: "img/circleBtn/04_gr.png", img_2: "img/circleBtn/04_bl.png", name: "RHINOCEROS", price: 5555555}
	]);




ava.collections.Territories = ava.collections.UtilityForCollection.extend({
// ava.collections.Territories = Backbone.Collection.extend({
	model: ava.models.Territory,
	url: "https://backgridjs.com/examples/territories.json"
});
var territories = new ava.collections.Territories();

var territoriesTest = new ava.collections.Territories();



ava.collections.TodoList = ava.collections.UtilityForCollection.extend({
// ava.collections.TodoList = Backbone.Collection.extend({
	model: ava.models.Todo,
	localStorage: new Backbone.LocalStorage("todos-backbone"),

	done: function() {
		return this.where({done: true});
	},
	remaining: function() {
		return this.without.apply(this, this.done());
	},
	// nextOrder: function() {
	// 	if (!this.length) return 1;
	// 	return this.last().get("order") + 1;
	// },
	// comparator: 'order'

	// url: "https://backgridjs.com/examples/territories.json"

	calcuTotalPrice: function () {
		var totalPrice = 0;
		this.reduce(function(memo, value) {
			if(!value.get("done")){
				totalPrice += value.get("price");
			}
		}, 0);
		return totalPrice;
	},
	getColumns: function () {
		ava.collections.TodoList.__super__.getColumns.call(this);


		if(this.columns){
			this.columns = $.grep(this.columns , function(value) {

			  var name = value.name;

			  if(name == "title"){
			  	value.editable = false;
			  	value.label = "商品名稱"
			  }

			  if(name == "price"){
			  	// value.editable = false;
			  	value.label = "價格"
			  }

			  if (name != "id" && name != "test123" && name != "priceFormat" && name != "done") {
			  	return value;
			  }
			});
		}
	}

});


var todos = new ava.collections.TodoList();


// todos.getColumns();

// todos.fetch({success: todos.getColumns});



ava.collections.BaseCollection = ava.collections.UtilityForCollection.extend({
	model: ava.models.BaseModel,
	url: function(){
		return this.options.url;
	},
	initialize: function(models, options){
		this.options=options;
	}
});



var comboxs = new ava.collections.BaseCollection([], {url: "https://backgridjs.com/examples/territories.json"});

// comboxs.fetch({
// 	success: function(comboxs){
// 		comboxs.getColumns();
// 	}
// });
// comboxs.getColumns();


var comboxsDataFromSysParms = new ava.collections.BaseCollection([], {url: "https://backgridjs.com/examples/territories.json"});
// comboxsDataFromSysParms.fetch();




var	RealtimeInfo = [
		// {'name': '項目', 'value': "總計"},//volumeToday
		{'name': '本日業績', 'value': ""},//volumeToday
		{'name': '去年本日業績', 'value': ""},//volumeLastYearToday
		{'name': '本月業績', 'value': ""},//volumeThisMonth
		{'name': '去年本月業績', 'value': ""},//volumeLastYearThisMonth
		{'name': '現有庫存 ', 'value': ""},//deposit
		{'name': '可售金額', 'value': ""},//volumeAvailable

	];

var	RealtimeInfoTest = [
	// {'name': '項目', 'value': "總計"},//volumeToday
	{'name': '本日業績', 'value': "-10"},//volumeToday
	{'name': '去年本日業績', 'value': "-10"},//volumeLastYearToday
	{'name': '本月業績', 'value': "-10"},//volumeThisMonth
	{'name': '去年本月業績', 'value': "-10"},//volumeLastYearThisMonth
	{'name': '現有庫存 ', 'value': "-10"},//deposit
	{'name': '可售金額', 'value': "-10"},//volumeAvailable

];

// var RealtimeInfoCollection = new Backbone.Collection(RealtimeInfo);


ava.collections.RealtimeInfoList = ava.collections.UtilityForCollection.extend({
	model: ava.models.RealtimeInfo,
	localStorage: new Backbone.LocalStorage("RealtimeInfos-backbone"),

	// done: function() {
	// 	return this.where({done: true});
	// },
	// remaining: function() {
	// 	return this.without.apply(this, this.done());
	// },
	// nextOrder: function() {
	// 	if (!this.length) return 1;
	// 	return this.last().get("order") + 1;
	// },
	// comparator: 'order'

	// url: "https://backgridjs.com/examples/territories.json"

	// calcuTotalPrice: function () {
	// 	var totalPrice = 0;
	// 	this.reduce(function(memo, value) {
	// 		if(!value.get("done")){
	// 			totalPrice += value.get("price");
	// 		}
	// 	}, 0);
	// 	return totalPrice;
	// },
	getColumns: function () {
		ava.collections.RealtimeInfoList.__super__.getColumns.call(this);


		if(this.columns){
			this.columns = $.grep(this.columns , function(value) {

			  var name = value.name;

			  // if(name == "title"){
			  // 	value.editable = false;
			  // 	value.label = "商品名稱"
			  // }

			  // if(name == "price"){
			  // 	// value.editable = false;
			  // 	value.label = "價格"
			  // }

			  // if (name != "id" && name != "test123" && name != "priceFormat" && name != "done") {
			  // 	return value;
			  // }
			});
		}
	}

});

RealtimeInfoCollection = new ava.collections.RealtimeInfoList();


ava.collections.RealtimeInfoListToday = ava.collections.RealtimeInfoList.extend({
	model: ava.models.RealtimeInfo_today,
	localStorage: new Backbone.LocalStorage("RealtimeInfos_today-backbone"),

	// done: function() {
	// 	return this.where({done: true});
	// },
	// remaining: function() {
	// 	return this.without.apply(this, this.done());
	// },
	// nextOrder: function() {
	// 	if (!this.length) return 1;
	// 	return this.last().get("order") + 1;
	// },
	// comparator: 'order'

	// url: "https://backgridjs.com/examples/territories.json"

	// calcuTotalPrice: function () {
	// 	var totalPrice = 0;
	// 	this.reduce(function(memo, value) {
	// 		if(!value.get("done")){
	// 			totalPrice += value.get("price");
	// 		}
	// 	}, 0);
	// 	return totalPrice;
	// },
	getColumns: function () {
		ava.collections.RealtimeInfoListToday.__super__.getColumns.call(this);


		if(this.columns){
			this.columns = $.grep(this.columns , function(value) {

			  var name = value.name;

			  // if(name == "title"){
			  // 	value.editable = false;
			  // 	value.label = "商品名稱"
			  // }

			  // if(name == "price"){
			  // 	// value.editable = false;
			  // 	value.label = "價格"
			  // }

			  // if (name != "id" && name != "test123" && name != "priceFormat" && name != "done") {
			  // 	return value;
			  // }
			});
		}
	}

});

RealtimeInfoCollection_Today = new ava.collections.RealtimeInfoList({model: ava.models.RealtimeInfo_today});
// RealtimeInfoCollection_today.push({
//         code: "",
//         name: "",
//         volumeToday: "",
//         volumeThisMonth: "",
//         volumeLastYearToday: "",
// 		volumeLastYearThisMonth:"",
// 		deposit: "",
// 		volumeAvailable: "",
// 		target: "",
// 		targetRate: "",
// 		preSaleTotal:"",
// 		saleTotal: "",
// 		customer: "",
// 		customerUPrice:"",
// 		saleAmount: "",
// 		customerAVAmount: "",
// 		memberCount: "",
// 		isWithdraw: ""
//       });
        // RealtimeInfoCollection.push({'name': '本日業績', 'value': ""});
        // RealtimeInfoCollection.push({'name': '去年本日業績', 'value': ""});
        // RealtimeInfoCollection.push({'name': '本月業績', 'value': ""});
        // RealtimeInfoCollection.push({'name': '去年本月業績', 'value': ""});
        // RealtimeInfoCollection.push({'name': '現有庫存', 'value': ""});
        // RealtimeInfoCollection.push({'name': '可售金額', 'value': ""});


var urls= {
	RealtimeInfo_Today: getIpFromDataConfig(setIpBySelf) + "/flaps2/PDA/PISConsole/getRealtimeInfo.jsp?isSum=0&57t3o34O=1"
}


ava.views.Table_New_Collection = Backbone.Collection.extend({

    getResults: function () {

        var self = this;

        this.fetch({
            reset: true,
            success: function (collection, response, options) {
                // you can pass additional options to the event you trigger here as well
                self.trigger('successOnFetch');
            },
            error: function (collection, response, options) {
                // you can pass additional options to the event you trigger here as well
                self.trigger('errorOnFetch');
            }
        });
    },

    url: function(){
		return this.options.domainName + this.options.urlPath;
	},
	initialize: function(models, options){
		this.options = options;
	},
	parse: function (data) {
		// var oJson = xml2json(data);
		var oJson = xml2json($.parseXML(data));
		return oJson;
	},

	getColumnsFromCollection: function (collection) {
        var columns = []
        for(var item in collection.models){

            // console.log(collection.models[item].attributes);
            var obj = collection.models[item].attributes;

			var data = reorderSum0ForColumn(obj);

            var index;
            for(index in data){
                var columnName = this.getColumnName(data[index]);
                columns.push({'column': columnName, 'persist': false});
            }
            break;

            // var column;
            // for(column in obj){
            //     var columnName = this.getColumnName(column);
            //     if (obj.hasOwnProperty(column) && columnName != "")
            //     {
            //     	// var persist = (column == "name") ? true : false;
            //     	var persist = false;
            //         columns.push({'column': columnName, 'persist': persist});
            //     }
            // }
            // // console.log(columns);
            // break;

        }
        return columns;
    },

    getColumnName: function (name) {

            var value = '';
            switch (name) {
              case "name":
                  value = $.i18n.prop('msg_RealtimeInfo_Today_Test_name');
                  break;
              case 'volumeToday':
                  value = $.i18n.prop('msg_RealtimeInfo_Today_Test_volumeToday');
                  break;
              case 'volumeLastYearToday':
                  value = $.i18n.prop('msg_RealtimeInfo_Today_Test_volumeLastYearToday');
                  break;
              case 'volumeThisMonth':
                  value = $.i18n.prop('msg_RealtimeInfo_Today_Test_volumeThisMonth');
                  break;
              case 'volumeLastYearThisMonth':
                  value = $.i18n.prop('msg_RealtimeInfo_Today_Test_volumeLastYearThisMonth');
                  break;
              case 'deposit':
                  value = $.i18n.prop('msg_RealtimeInfo_Today_Test_deposit');
                  break;
              case 'volumeAvailable':
                  value = $.i18n.prop('msg_RealtimeInfo_Today_Test_volumeAvailable');
                  break;
              case 'target':
                  value = $.i18n.prop('msg_RealtimeInfo_Today_Test_target');
                  break;
              case 'targetRate':
                  value = $.i18n.prop('msg_RealtimeInfo_Today_Test_targetRate');
                  break;
              case 'saleTotal':
                  value = $.i18n.prop('msg_RealtimeInfo_Today_Test_saleTotal');
                  break;
              case 'preSaleTotal':
                  value = $.i18n.prop('msg_RealtimeInfo_Today_Test_preSaleTotal');
                  break;
              case 'customer':
                  value = $.i18n.prop('msg_RealtimeInfo_Today_Test_customer');
                  break;
              case 'customerUPrice':
                  value = $.i18n.prop('msg_RealtimeInfo_Today_Test_customerUPrice');
                  break;
              case 'saleAmount':
                  value = $.i18n.prop('msg_RealtimeInfo_Today_Test_saleAmount');
                  break;
              case 'customerAVAmount':
                  value = $.i18n.prop('msg_RealtimeInfo_Today_Test_customerAVAmount');
                  break;
              case 'memberCount':
                  value = $.i18n.prop('msg_RealtimeInfo_Today_Test_memberCount');
                  break;
              default:
                  value = "";
            }

            return value;

    },
 });

ava.views.Table_New_Customize_Collection = ava.views.Table_New_Collection.extend({
	parse: function (data) {
		// var oJson = xml2json(data);
		try {

			var str = $($(data).find('table tr')[0]).text().trim();
			if( str == "系統登入" ){
				window.localStorage.setItem('loginSuccess', false);
				$('table').hide({duration: 0});
				relogin();
				return [];
			}

			var oJson = xml2json($.parseXML(data));
			return oJson.Info.Pos;
		}
		catch(err) {
    		// console.log(err);
    		// window.location.replace('#');
    		window.history.back('');
		}

	},

	getResults: function () {

        var self = this;

        this.fetch({
            // data: {api_key: 'secretkey'},
            type: 'POST',
            dataType : "text",
            timeout:10000,
            add:true,
            reset: true,
            beforeSend: function (){

            	$.mobile.loading('show');

            	if($('#RealtimeInfo_Today_Test-table tbody tr').length == 0){
            		$('#RealtimeInfo_Today_Test-table').hide({duration: 0});
            	}


            },
            success: function (collection, response, options) {
            	if(window.location.hash == "#RealtimeInfo_Today_Test" && window.localStorage.getItem('loginSuccess') == "true" ){
	                // you can pass additional options to the event you trigger here as well

	                if($('#RealtimeInfo_Today_Test-table thead th').length == 0){
	                	self.options.columns.reset(self.getColumnsFromCollection(collection));
	            	}

	                self.trigger('successOnFetch');

	                //set timeout
	                // setTimeout(_.bind(self.getResults, self),60000);
	                RealtimeInfo_Today_Test_Timeout = new Timeout(_.bind(self.getResults, self), timeoutPollingPeriod);
	            }else{
	            	//$('table').hide();
	            }
            },
            error: function (collection, response, options) {
                // you can pass additional options to the event you trigger here as well
                self.trigger('errorOnFetch');

                if(response.readyState == 0){
                 	// alert($.i18n.prop('msg_networkError'));
                 	navigator.notification.alert($.i18n.prop('msg_networkError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
              	}else if(response.readyState == 4){
              		// alert($.i18n.prop('msg_serverError'));
              		navigator.notification.alert($.i18n.prop('msg_serverError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
              	}
            },
            complete: function(xhr,status){
            	if(window.location.hash == "#RealtimeInfo_Today_Test" && window.localStorage.getItem('loginSuccess') == "true" ){

            		var selfCollection = self;


	            	$('#RealtimeInfo_Today_Test-table').show({
						duration:10,
	            		complete: function (){

	            			// for small device table header setting
		        			if( $('#RealtimeInfo_Today_Test-table thead').height() < 57){
								$('#RealtimeInfo_Today_Test-table thead').css('height',57);
							}


	            			var tableHeight = $(window).height() -2 -$("div[data-role=footer]").outerHeight() - $('#RealtimeInfo_Today_Test-table thead').height();
		        			$('#RealtimeInfo_Today_Test-table tbody').css('height',tableHeight.toString());


	            			//set last time scroll position
	            			if(typeof(pagesData['#RealtimeInfo_Today_Test']) != "undefined"){
								$('table tbody').height(pagesData['#RealtimeInfo_Today_Test'].scrollHeight);

	            				var $table = $('table');
	            				$table.removeClass('showG1');
	            				$table.addClass('showG' + pagesData['#RealtimeInfo_Today_Test'].pagegroupPositon);
	            				selfCollection.options.page.setNowpage(Number(pagesData['#RealtimeInfo_Today_Test'].pagegroupPositon));


	            				$('table tbody').scrollTop(pagesData['#RealtimeInfo_Today_Test'].scrollPositon);

	            				// delete
	            				delete pagesData['#RealtimeInfo_Today_Test'];
	            			}





	            		}
	            	});
	            	$('.pinned #RealtimeInfo_Today_Test-table').show();









					// if($('table tbody').hasScrollBar())
					// 	alert('okok');
				}

				$.mobile.loading('hide');

            }
        });
    }



 });



ava.views.Column_New_Collection = Backbone.Collection.extend({
	model: ava.models.Column_New_Model,
 });




ava.views.Table_GetPosInfo_Collection = ava.views.Table_New_Collection.extend({
	parse: function (data) {
		try {

			data = data.replace('../images/button.png','');

			var str = $($(data).find('table tr')[0]).text().trim();
			if( str == "系統登入" ){
				window.localStorage.setItem('loginSuccess', false);
				relogin();
				return [];
			}

			if($(data).find('table thead td').length != 0){
				var tbl = $(data).find('table tr:has(td)').map(function(i, v) {
		    				var $td =  $('td', this);

		    				var time = $td.eq(0).text().replace(/\s/g, '');
		    				var customer = $td.eq(1).text().replace(/\s/g, '');
		    				var dollar = $td.eq(2).text().replace(/\s/g, '');
		    				var count = $td.eq(3).text().replace(/\s/g, '');

		    				if( i > 0 && (time != "" || customer != "" || dollar != "" || count != "") ) {
		        				return {
		                 			id: i,
		                 			time: time,
		                 			customer: customer,
		                 			dollar: dollar,
		                 			count: count,
		               			}
		               		}
						  }).get();
				return tbl;
			}else{
				return [];
			}

		}
		catch(err) {
    		// console.log(err);
		}
	},

	getPathLocation : function () {
        var pathSplit = window.location.hash.split('/');
    	var pathSplitLength = pathSplit.length;
    	var pathLocation = false;
    	if(pathSplitLength-2 >= 0 && pathSplit[pathSplitLength-2] == "getPosInfo"){
    		pathLocation = true;
    	}
    	return pathLocation	;
	},

	getResults: function () {

        var self = this;

        this.fetch({
            // data: {api_key: 'secretkey'},
            type: 'GET',
            dataType : "HTML",
            timeout:10000,
            add:true,
            reset: true,
            beforeSend: function (){

            	// if($('#getPosInfo-table tbody tr').length == 0){
            	// 	$('#getPosInfo-table').hide();
            	// }

				if($('#getPosInfo-table tbody tr').length == 0){
            		$('#getPosInfo-table tbody').hide();
				}

                $.mobile.loading('show');
            },
            success: function (collection, response, options) {


            	if(self.getPathLocation() && window.localStorage.getItem('loginSuccess') == "true" ){

	                // you can pass additional options to the event you trigger here as well

	                if($('#getPosInfo-table thead th').length == 0){
	                	self.options.columns.reset(self.getColumnsFromCollection(collection));
	            	}

	                self.trigger('successOnFetch');

	                //set timeout
	                // setTimeout(_.bind(self.getResults, self),60000);
	                // _Timeout = new Timeout(_.bind(self.getResults, self), 60000);
            	}else{
	            	// $('table').hide();
	            }
            },
            error: function (collection, response, options) {
                // you can pass additional options to the event you trigger here as well
                self.trigger('errorOnFetch');

                if(response.readyState == 0){
                    // alert($.i18n.prop('msg_networkError'));
                    navigator.notification.alert($.i18n.prop('msg_networkError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
              	}else if(response.readyState == 4){
              		// alert($.i18n.prop('msg_serverError'));
              		navigator.notification.alert($.i18n.prop('msg_serverError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
              	}
            },
            complete: function(xhr,status){
            	if(self.getPathLocation() && window.localStorage.getItem('loginSuccess') == "true" ){
		            // 	$('#getPosInfo-table').show({
		            // 		complete: function () {
		            // 			var tableHeight = $(window).height() - 2 -$("div[data-role=footer]").outerHeight() - $('#getPosInfo-table thead').height();
			        			// $('#getPosInfo-table tbody').css('height',tableHeight.toString());

		            // 		}
		            // 	});
		            // console.log('test');
					$('#getPosInfo-table tbody').show({
						duration: 10,
	            		complete: function () {
	            			var tableHeight = $(window).height() - 2 -$("div[data-role=footer]").outerHeight() - $('#getPosInfo-table thead').height();
		        			$('#getPosInfo-table tbody').css('height',tableHeight.toString());
		        			// console.log('height: ' + $('#getPosInfo-table thead').height());

	            		}
	            	});



	            	// $('.pinned #RealtimeInfo_Today_Test-table').show();

            	}

            	$.mobile.loading('hide');
            }
        });
    },

    getColumnsFromCollection: function (collection) {
        var columns = []
        for(var item in collection.models){

            // console.log(collection.models[item].attributes);
            var obj = collection.models[item].attributes;


            var index;
            for(index in obj){
            	if(index != "id"){
                	var columnName = this.getColumnName(index);
                	columns.push({'column': columnName});
                }
            }
            break;
        }
        return columns;
    },

	getColumnName: function (name) {

        var value = '';
            switch (name) {
              case "time":
                  value = '時間';
                  break;
              case 'customer':
                  value = "客次";
                  break;
              case 'dollar':
                  value = "金額";
                  break;
              case 'count':
                  value = "數量";
                  break;
              default:
                  value = "";
            }

            return value;

    },

 });










ava.views.Table_getBrandStatistics_Collection = ava.views.Table_New_Collection.extend({
	parse: function (data) {

		try {

			var str = $($(data).find('table tr')[0]).text().trim();
			if( str == "系統登入" ){
				window.localStorage.setItem('loginSuccess', false);
				relogin();
				return [];
			}

			// var oJson = xml2json(data);
			var oJson = xml2json($.parseXML(data));
			return oJson.Info.Pos;
		}
		catch(err) {
    		// console.log(err);
    		// window.location.replace('#');
    		window.history.back('');
		}
	},

	getResults: function () {

        var self = this;

        this.fetch({
            // data: {api_key: 'secretkey'},
            type: 'GET',
            dataType : "HTML",
            timeout:10000,
            add:true,
            reset: true,
            beforeSend: function (){

            	// if($('#getBrandStatistics-table tbody tr').length == 0){
            	// 	$('#getBrandStatistics-table').hide();
            	// }

            	if($('#getBrandStatistics-table tbody tr').length == 0){
            		$('#getBrandStatistics-table tbody').hide();
            	}

                $.mobile.loading('show');
            },
            success: function (collection, response, options) {
            	if(window.location.hash == "#getBrandStatistics" && window.localStorage.getItem('loginSuccess') == "true" ){
	                // you can pass additional options to the event you trigger here as well

	                if($('#getBrandStatistics-table thead th').length == 0){
	                	self.options.columns.reset(self.getColumnsFromCollection(collection));
	            	}

	                self.trigger('successOnFetch');

	                //set timeout
	                // setTimeout(_.bind(self.getResults, self),60000);
	                getBrandStatistics_Timeout = new Timeout(_.bind(self.getResults, self), timeoutPollingPeriod);
	            }else{
	            	//$('table').hide();
	            }
            },
            error: function (collection, response, options) {
                // you can pass additional options to the event you trigger here as well
                self.trigger('errorOnFetch');

                if(response.readyState == 0){
                  	// alert($.i18n.prop('msg_networkError'));
                  	navigator.notification.alert($.i18n.prop('msg_networkError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
              	}else if(response.readyState == 4){
              		// alert($.i18n.prop('msg_serverError'));
              		navigator.notification.alert($.i18n.prop('msg_serverError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
              	}
            },
            complete: function(xhr,status){
            	if(window.location.hash == "#getBrandStatistics" && window.localStorage.getItem('loginSuccess') == "true" ){
		            // 	$('#getBrandStatistics-table').show({
		            // 		complete: function () {
		            // 			var tableHeight = $(window).height() - 2 -$("div[data-role=footer]").outerHeight() - $('#getBrandStatistics-table thead').height();
			        			// $('#getBrandStatistics-table tbody').css('height',tableHeight.toString());
		            // 		}
		            // 	});
	            	$('#getBrandStatistics-table tbody').show({
	            		duration: 10,
	            		complete: function () {
	            			var tableHeight = $(window).height() - 2 -$("div[data-role=footer]").outerHeight() - $('#getBrandStatistics-table thead').height();
		        			$('#getBrandStatistics-table tbody').css('height',tableHeight.toString());
	            		}
	            	});

	            	// $('.pinned #RealtimeInfo_Today_Test-table').show();


				}

                $.mobile.loading('hide');

            }
        });
    },

    getColumnsFromCollection: function (collection) {
        var columns = []
        for(var item in collection.models){

            // console.log(collection.models[item].attributes);
            var obj = collection.models[item].attributes;


            var index;
            for(index in obj){
            	if(index != "code"){
                	var columnName = this.getColumnName(index);
                	columns.push({'column': columnName});
                }
            }
            break;
        }
        return columns;
    },

	getColumnName: function (name) {

        var value = '';
            switch (name) {
              case "name":
                  value = '品牌名稱';
                  break;
              case 'todayFeat':
                  value = "本日業績";
                  break;
              case 'monthlyFeat':
                  value = "本月累積業績";
                  break;
              default:
                  value = "";
            }

            return value;

    },

 });






ava.views.Table_portal_Collection = ava.views.Table_New_Collection.extend({
	parse: function (data) {

		try {

			var str = $($(data).find('table tr')[0]).text().trim();
			if( str == "系統登入" ){
				window.localStorage.setItem('loginSuccess', false);
				relogin();
				return [];
			}

			if( $(data).find('table tr:has(td)').length > 0 ){

			    // var tbl = $(data).find('table tr:has(td)').map(function(i, v) {

		     //        if(i >= 2 && i <= 7){
		     //          var name =  $($('td', this)[0]).find('span').text().trim();
		     //          var value =  $($('td', this)[1]).find('div').text();
		     //          return {item:{name:name, value:value}};
		     //        }

		     //    }).get();

		     //    return tbl;
		     this.getResults();
		     return [];

			}else{

				// var oJson = xml2json(data);
				var oJson = xml2json($.parseXML(data));
				var data = oJson.Info.Pos;

				var result = [];
				for(var key in data){
		      		switch (key) {
		              case "volumeToday":
		                  result[0] = {name: $.i18n.prop('msg_portal_volumeToday'), value: data[key]};
		                  break;
		              case 'volumeLastYearToday':
		                  result[1] = {name: $.i18n.prop('msg_portal_volumeLastYearToday'), value: data[key]};
		                  break;
		              case 'volumeThisMonth':
		                  result[2] = {name: $.i18n.prop('msg_portal_volumeThisMonth'), value: data[key]};
		                  break;
		              case 'volumeLastYearThisMonth':
		                  result[3] = {name: $.i18n.prop('msg_portal_volumeLastYearThisMonth'), value: data[key]};
		                  break;
		              case 'deposit':
		                  result[4] = {name: $.i18n.prop('msg_portal_deposit'), value: data[key]};
		                  break;
		              case 'volumeAvailable':
		                  result[5] = {name: $.i18n.prop('msg_portal_volumeAvailable'), value: data[key]};
		                  break;
		              default:
		            }
		      	}

		      	var res = _.map(result, function (val) {
		        	return {item: val};
		    	});
		    	return res;
	    	}

	 	}
		catch(err) {
    		// console.log(err);
		}
	},

	getResults: function () {
		appRouter.clearTimeoutForPause();
        var self = this;

        this.fetch({
            // data: {api_key: 'secretkey'},
            type: 'GET',
            dataType : "HTML",
            timeout:10000,
            add:true,
            reset: true,
            beforeSend: function (){

            	// if($('#portal-table tbody tr').length == 0){
            	// 	$('#portal-table').hide();
            	// }

            	if($('#portal-table tbody tr').length == 0){
            		$('#portal-table tbody').hide();
            	}

                $.mobile.loading('show');
            },
            success: function (collection, response, options) {
            	if(window.location.hash == "" && window.localStorage.getItem('loginSuccess') == "true"){
	                // you can pass additional options to the event you trigger here as well

	             //    if($('#getBrandStatistics-table thead th').length == 0){
	             //    	self.options.columns.reset(self.getColumnsFromCollection(collection));
	            	// }

	                self.trigger('successOnFetch');

	                //set timeout
	                // setTimeout(_.bind(self.getResults, self),60000);
	                portal_Timeout = new Timeout(_.bind(self.getResults, self), timeoutPollingPeriod);
            	}else{
	            	// $('table').hide();
	            }
            },
            error: function (collection, response, options) {
                // you can pass additional options to the event you trigger here as well
                self.trigger('errorOnFetch');

                if(response.readyState == 0){
                    // alert($.i18n.prop('msg_networkError'));
                    navigator.notification.alert($.i18n.prop('msg_networkError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
              	}else if(response.readyState == 4){
              		// alert($.i18n.prop('msg_serverError'));
              		navigator.notification.alert($.i18n.prop('msg_serverError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
              	}
            },
            complete: function(xhr,status){
            	if(window.location.hash == "" && window.localStorage.getItem('loginSuccess') == "true"){
	            // 	$('#portal-table').show({
	            // 		complete: function () {
	            // 			//$("div[data-role=header]").outerHeight()  63px
	            // 			var tableHeight = $(window).height() - 2 - 63 - $('#portal-table thead').height();
				        	// $('#portal-table tbody').css('height',tableHeight.toString());

	            // 		}
	            // 	});
	            	$('#portal-table tbody').show({
	            		duration: 10,
	            		complete: function () {
	            			//$("div[data-role=header]").outerHeight()  63px

										//for ios status bar
										if(typeof (StatusBarLength) != "undefined"){
											StatusBarLength = 0;
										}else{
											StatusBarLength = 20;
										}

	            			var tableHeight = $(window).height() - 2 - 63 - $('#portal-table thead').height() - StatusBarLength;
				        	$('#portal-table tbody').css('height',tableHeight.toString());

	            		}
	            	});

	            	// $('.pinned #RealtimeInfo_Today_Test-table').show();




            	}

             	$.mobile.loading('hide');
            }
        });
    },

 //    getColumnsFromCollection: function (collection) {
 //        var columns = []
 //        for(var item in collection.models){

 //            // console.log(collection.models[item].attributes);
 //            var obj = collection.models[item].attributes;


 //            var index;
 //            for(index in obj){
 //            	if(index != "code"){
 //                	var columnName = this.getColumnName(index);
 //                	columns.push({'column': columnName});
 //                }
 //            }
 //            break;
 //        }
 //        return columns;
 //    },

	// getColumnName: function (name) {

 //        var value = '';
 //            switch (name) {
 //              case "name":
 //                  value = '品牌名稱';
 //                  break;
 //              case 'todayFeat':
 //                  value = "本日業績";
 //                  break;
 //              case 'monthlyFeat':
 //                  value = "本月累積業績";
 //                  break;
 //              default:
 //                  value = "";
 //            }

 //            return value;

 //    },

 });


ava.collections.Connects = Backbone.Collection.extend({
  model: ava.models.Connect,

  localStorage: new Backbone.LocalStorage('connects-backbone'),
  comparator: function(item) {
      return item.get('connectId');
  },
  getMaxId: function () {
  	var max = 0;
	this.each(function(model){
		if(model.id > max){
			max = model.id;
	   }
	});
	return max;
  },
  checkRepeatByipAdressAndAppName: function (stripAdress, strAppName) {
  	var isRepeat = false;
  	var ipAdress = stripAdress;
  	var AppName = strAppName;
  	this.each(function(model){
		if(model.get('connectIpAdress') == ipAdress && model.get('connectAppName') == AppName){
			isRepeat = true;
	   }
	});
  	return isRepeat;
  },
  updateCodePwdsLang: function () {
  	    var connectIpAdress = window.localStorage.getItem('ipAdress') || '';
        var connectAppName = window.localStorage.getItem('AppName') || '';
        connectIpAdress = connectIpAdress.substring(7);
        connectAppName = connectAppName.substring(1);
        $(this.models).each(function(index, model){
			if(model.attributes['connectIpAdress'] == connectIpAdress && model.attributes['connectAppName'] == connectAppName){
				var jsonModel = {'connectCode': window.localStorage.getItem('code') || '',
					'connectPwd': window.localStorage.getItem('pwd') || '',
					'connectsLang': window.localStorage.getItem('sLang') || ''};
				model.set(jsonModel);
				model.save();
				// console.log('ok');
				return false;
		   }
		});
  },
  getConnectName: function () {
  	var connectIpAdress = window.localStorage.getItem('ipAdress') || '';
    var connectAppName = window.localStorage.getItem('AppName') || '';
    connectIpAdress = connectIpAdress.substring(7);
    connectAppName = connectAppName.substring(1);
  	var oModel = this.where({"connectIpAdress": connectIpAdress, "connectAppName": connectAppName});
  	
  	var array = [];
  	this.each(function(model){
  		if(window.localStorage.getItem('enterModalFromPortal') == "true"){
  			array.push({"connectName":model.get('connectName'), "checked":model.get('checked') });	
  		}else{
  			var booChoose = false;
  			if(model.get('connectName') == oModel[0].get("connectName")){
				booChoose = true;
  			}
  			array.push({"connectName":model.get('connectName'), "checked":booChoose });	
  		}
		
	});
	return array;
  },
  updateConnectByConnectName: function (str) {
  		
  },
  getNewNoRepeatConnectName: function (str) {  	
  	var self = this;
  	var newStr = str;
  	var array = [];
  	this.each(function(model){
		array.push(model.get('connectName'));
	});
	$(array).each(function(index,item){
			if(item == str){
				newStr = self.getNewNoRepeatConnectName(str + "New");
			}
	});
	return newStr;
  }

});
