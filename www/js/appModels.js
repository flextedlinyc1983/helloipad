ava.models.User = Backbone.Model.extend({
	initialize: function (Id, Name) {
		this.set({Id: Id, Name: Name});
	}
});


// ava.models.User = Backbone.Model.extend({
//   defaults: {
//     Id: '',
//     Name: ''
//   }
// });



var ted = new ava.models.User("1", "Ted");
var belle = new ava.models.User("2", "Belle");




ava.models.MenuItem = Backbone.Model.extend({
	defaults: {
		id: "",
		title: ""
	}
});



ava.models.TabItem = ava.models.MenuItem.extend({
	defaults: {
		href: "",
		title: ""
	}
});

ava.models.CircleBtnItem = ava.models.MenuItem.extend({
	defaults: {
		img_1: "",
		img_2: "",
		name: ""
	}
});



ava.models.Territory = Backbone.Model.extend({});



ava.models.Todo = ava.models.UtilityForModel.extend({
// ava.models.Todo = Backbone.Model.extend({
  	defaults: function() {
      return {
        title: "no title...",
        // order: Todos.nextOrder(),
        done: false,
        price: 0,
        priceFormat: "0.00",
        test123:"",
      };
    },
    toggle: function() {
	  this.save({done: !this.get("done")});
	},
	setPriceFormat: function () {
		this.save({priceFormat: this.numFormat(this.get("price"))});
	}
});


ava.models.BaseModel = ava.models.UtilityForModel.extend({
});


ava.models.LoginModel = Backbone.Model.extend(
{
	validation:
	{
		account: {required:true, msg: "請輸入帳號"},
		password: {required:true, msg: "請輸入密碼"},		
	}
});