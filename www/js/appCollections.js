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
	{img_1: "img/circleBtn/01_gr.png", img_2: "img/circleBtn/01_bl.png", name: "大象"}, 
	{img_1: "img/circleBtn/02_gr.png", img_2: "img/circleBtn/02_bl.png", name: "長頸鹿"}, 
	{img_1: "img/circleBtn/03_gr.png", img_2: "img/circleBtn/03_bl.png", name: "狼"},
	{img_1: "img/circleBtn/04_gr.png", img_2: "img/circleBtn/04_bl.png", name: "犀牛"},
		{img_1: "img/circleBtn/01_bl.png", img_2: "img/circleBtn/01_bl.png", name: "大象"}, 
	{img_1: "img/circleBtn/02_bl.png", img_2: "img/circleBtn/02_bl.png", name: "GIRAFFE"}, 
	{img_1: "img/circleBtn/03_bl.png", img_2: "img/circleBtn/03_bl.png", name: "WOLF"},
	{img_1: "img/circleBtn/04_bl.png", img_2: "img/circleBtn/04_bl.png", name: "RHINOCEROS"},
		{img_1: "img/circleBtn/01_gr.png", img_2: "img/circleBtn/01_bl.png", name: "大象"}, 
	{img_1: "img/circleBtn/02_gr.png", img_2: "img/circleBtn/02_bl.png", name: "GIRAFFE"}, 
	{img_1: "img/circleBtn/03_gr.png", img_2: "img/circleBtn/03_bl.png", name: "WOLF"},
	{img_1: "img/circleBtn/04_gr.png", img_2: "img/circleBtn/04_bl.png", name: "RHINOCEROS"}
	,	{img_1: "img/circleBtn/01_bl.png", img_2: "img/circleBtn/01_bl.png", name: "大象"}, 
	{img_1: "img/circleBtn/02_bl.png", img_2: "img/circleBtn/02_bl.png", name: "GIRAFFE"}, 
	{img_1: "img/circleBtn/03_bl.png", img_2: "img/circleBtn/03_bl.png", name: "WOLF"},
	{img_1: "img/circleBtn/04_bl.png", img_2: "img/circleBtn/04_bl.png", name: "RHINOCEROS"},
		{img_1: "img/circleBtn/01_gr.png", img_2: "img/circleBtn/01_bl.png", name: "大象"}, 
	{img_1: "img/circleBtn/02_gr.png", img_2: "img/circleBtn/02_bl.png", name: "GIRAFFE"}, 
	{img_1: "img/circleBtn/03_gr.png", img_2: "img/circleBtn/03_bl.png", name: "WOLF"},
	{img_1: "img/circleBtn/04_gr.png", img_2: "img/circleBtn/04_bl.png", name: "RHINOCEROS"}
	]);