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
	

	loginGetData:function () {
        event.preventDefault();
	// loginGetData:function (event) {
        // event.preventDefault(); // Don't let this button submit the form
        // $('.alert-error').hide(); // Hide any errors on a new submit
        // var url = '../api/login';
        var url = 'http://192.168.0.58:8080/flaps2/PDA/PISConsole/getRealtimeInfo.jsp?isSum=1&FMieQ4fK=1';
        // var url = 'http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=7waqfqbprs7pajbz28mqf6vz&page_limit=20&page=1';
        // console.log('Loggin in... ');
        // var formValues = {
        //     // code: $('#code').val(),
        //     // pwd: $('#pwd').val()
        //     // code: 'flextier99',
        //     // pwd: '0827203'
        //     code: window.localStorage.getItem('code'),
        //     pwd: window.localStorage.getItem('pwd')
        // };

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
            success:function (data, textStatus, jqXHR) {

                var oJson = xml2json(data);

                // alert(JSON.stringify(oJson));

                this.setRealtimeInfoData(oJson);
               
                this.setPortalViewData();

                // if(data.error) {  // If there is an error, show the error messages
                //     $('.alert-error').text(data.error.text).show();
                // }
                // else { // If not, send them back to the home page
                //     window.location.replace('#');
                // }
            },
            error: function(xhr, textStatus, errorThrown){
               alert('request failed');
            }
        });


    },

    setRealtimeInfoData: function (oJson) {

    	RealtimeInfo = [
			{'name': '本日業績', 'value': oJson.Info.Pos.volumeToday},
			{'name': '去年本日業績', 'value': oJson.Info.Pos.volumeLastYearToday},
			{'name': '本月業績', 'value': oJson.Info.Pos.volumeThisMonth},
			{'name': '去年本月業績', 'value': oJson.Info.Pos.volumeLastYearThisMonth},
			{'name': '現有庫存', 'value': oJson.Info.Pos.deposit},
			{'name': '可售金額', 'value': oJson.Info.Pos.volumeAvailable},
			
		];

    	
    },

    setPortalViewData: function () {
    	    RealtimeInfoCollection = new Backbone.Collection(RealtimeInfo);
            var tableView = new ava.views.TableView({collection: RealtimeInfoCollection, className: "RealtimeInfo"});
            $('div[data-role=page]').find('div[data-role=content]').html(tableView.render().$el);
    }
});