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





