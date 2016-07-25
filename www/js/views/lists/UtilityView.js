ava.views.UtilityView = Backbone.View.extend({
    numFormat: function (number) {
      return number.toFixed(2).replace(/./g, function(c, i, a) {
          return i && c !== "." && ((a.length - i) % 3 === 0) ? ',' + c : c;
      });
    },
	getTimeAndDate: function () {

	    var now = moment().format( "HHmmss" );    
	    var nowDate = moment().format( "YYYYMMDD" );

	    return {hours: now.substring(0,2),
	      minutes: now.substring(2,4),
	      seconds: now.substring(4,6),
	      years: nowDate.substring(0,4),
	      months: nowDate.substring(4,6),
	      days: nowDate.substring(6,8),
	    };

	},
});