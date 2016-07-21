// UserManager Users
ava.collections.UtilityForCollection = Backbone.Collection.extend({
	getColumns: function () {
		
		var columns = [];
		if (this.first()) {
			
			_.each(this.first().pairs(), function (pair) {
			  var k = pair[0], v = pair[1];
			  // columns.push({name: k, cell: typeof v});
			  columns.push({name: k, cell: typeof v, label: k});
			});
			this.columns = columns;
		}
		
	}
});