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

var RealtimeInfoCollection = new Backbone.Collection(RealtimeInfo);


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
        // RealtimeInfoCollection.push({'name': '本日業績', 'value': ""});
        // RealtimeInfoCollection.push({'name': '去年本日業績', 'value': ""});
        // RealtimeInfoCollection.push({'name': '本月業績', 'value': ""});
        // RealtimeInfoCollection.push({'name': '去年本月業績', 'value': ""});
        // RealtimeInfoCollection.push({'name': '現有庫存', 'value': ""});
        // RealtimeInfoCollection.push({'name': '可售金額', 'value': ""});