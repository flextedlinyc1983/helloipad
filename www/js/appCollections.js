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
	RealtimeInfo_Today:"http://192.168.0.58:8080/flaps2/PDA/PISConsole/getRealtimeInfo.jsp?isSum=0&57t3o34O=1"
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
                  value = '店櫃名稱';
                  break;
              case 'volumeToday':
                  value = "本日";
                  break;
              case 'volumeLastYearToday':
                  value = "去年本日 >";
                  break;
              case 'volumeThisMonth':
                  value = "本月";
                  break;
              case 'volumeLastYearThisMonth':
                  value = "去年本月 <>";
                  break;
              case 'deposit':
                  value = "庫存";
                  break;
              case 'volumeAvailable':
                  value = '可售金額 <>';
                  break;
              case 'target':
                  value = "本月目標";
                  break;
              case 'targetRate':
                  value = "達成率 <>";
                  break;
              case 'saleTotal':
                  value = '銷售金額';
                  break;
              case 'preSaleTotal':
                  value = "訂金金額 <>";
                  break;
              case 'customer':
                  value = "客數";
                  break;
              case 'customerUPrice':
                  value = "客單價 <>";
                  break;
              case 'saleAmount':
                  value = '商品件數';
                  break;
              case 'customerAVAmount':
                  value = "平均客件數";
                  break;
              case 'memberCount':
                  value = "新增會員數 <";
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
		var oJson = xml2json($.parseXML(data));
		return oJson.Info.Pos;
	},

	getResults: function () {

        var self = this;

        this.fetch({
            // data: {api_key: 'secretkey'}, 
            type: 'POST',
            dataType : "text",
            add:true,
            reset: true,
            beforeSend: function (){     
            	$('#RealtimeInfo_Today_Test-table').hide();       
                $.mobile.loading('show');                
            },
            success: function (collection, response, options) {
                // you can pass additional options to the event you trigger here as well
                self.options.columns.reset(self.getColumnsFromCollection(collection));
                self.trigger('successOnFetch');
            },
            error: function (collection, response, options) {
                // you can pass additional options to the event you trigger here as well
                self.trigger('errorOnFetch');
            },
            complete: function(xhr,status){
            	$('#RealtimeInfo_Today_Test-table').show();
            	$('.pinned #RealtimeInfo_Today_Test-table').show();

	        	var tableHeight = $(window).height()-$("div[data-role=footer]").height() - 16 - $('#RealtimeInfo_Today_Test-table thead').height();
	        	$('#RealtimeInfo_Today_Test-table tbody').css('height',tableHeight.toString());

                $.mobile.loading('hide');
            
            }
        });
    }



 });	



ava.views.Column_New_Collection = Backbone.Collection.extend({
	model: ava.models.Column_New_Model,

 });