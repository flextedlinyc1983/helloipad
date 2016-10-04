try{

	// alert('test');
	ava.collections.Table_Template_Collection = Backbone.Collection.extend({

		parse: function (data) {

			try{
				var str = data.trim();
		        str = str.substring(0,str.indexOf("\r\n\r"));
		        str = JSON.parse(str);

		        if($("#template-container " + this.options.templateName).attr('version') != str.version){
		        	logoutForTableUpdateVersion();
		        }else{
		        	return str.data;	
		        }
			}catch(err) {
		        // console.log("swipeIt" + err);
		    }
			
		},

		initialize: function(models, options){
			this.options = options;
		},

		url: function(){
			return this.options.domainName + this.options.urlPath;
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
	                $.mobile.loading('show');
	            },
	            success: function (collection, response, options) {
	            	if(window.location.hash == self.options.routeName && window.localStorage.getItem('loginSuccess') == "true"){
		                // you can pass additional options to the event you trigger here as well

		             //    if($('#getBrandStatistics-table thead th').length == 0){
		             //    	self.options.columns.reset(self.getColumnsFromCollection(collection));
		            	// }

		                self.trigger('successOnFetch');


		                // portal_Timeout = new Timeout(_.bind(self.getResults, self), 10000);
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
	          //   	if(window.location.hash == "" && window.localStorage.getItem('loginSuccess') == "true"){
		         //    // 	$('#portal-table').show({
		         //    // 		complete: function () {
		         //    // 			//$("div[data-role=header]").outerHeight()  63px
		         //    // 			var tableHeight = $(window).height() - 2 - 63 - $('#portal-table thead').height();
					      //   	// $('#portal-table tbody').css('height',tableHeight.toString());

		         //    // 		}
		         //    // 	});
		         //    	$('#portal-table tbody').show({
		         //    		duration: 10,
		         //    		complete: function () {
		         //    			//$("div[data-role=header]").outerHeight()  63px

											// //for ios status bar
											// if(typeof (StatusBarLength) != "undefined"){
											// 	StatusBarLength = 0;
											// }else{
											// 	StatusBarLength = 20;
											// }

		         //    			var tableHeight = $(window).height() - 2 - 63 - $('#portal-table thead').height() - StatusBarLength;
					      //   	$('#portal-table tbody').css('height',tableHeight.toString());

		         //    		}
		         //    	});

		         //    	// $('.pinned #RealtimeInfo_Today_Test-table').show();




	          //   	}

	             	$.mobile.loading('hide');
	            }
	        });
	    },
	});







	ava.views.Table_Template_View = Backbone.View.extend({
	  tagName: 'table',
	  className: 'table',
	  // el: "<table class='table test'>",
	  template: null,
	  // template: _.template($('#test-template').html()),
	  initialize: function(options) {
	    this.options = options;
	    this.template =  _.template($(options.templateName).html());
	    this.listenTo(this.collection, "reset", this.render);
	    this.getDisplayColumnsPara(options);
	  },
	  getDisplayColumnsPara :function (options) {

		if( doOnOrientationChange() == "landscape" && options.templateName == "#test-template"){			
	        
			var width = $(window).width();
	      	if(width >= 568 && width < 667 ){
	      		//iphone5s
	      		this.display_columns = 2;
	      	}else if(width >= 667 && width < 736 ){
	      		//iphone6s
	      		this.display_columns = 2;
	      	}else if(width >= 736 && width < 1024 ){
	      		//iphone6s
	      		this.display_columns = 2;
	      	}else if(width >= 1024 ){
	      		//ipad
	      		this.display_columns = 3;
	      	}else {
	      		this.display_columns = 1;
	      	}

		} else if( doOnOrientationChange() == "landscape" && options.templateName == "#test-template-two"){
			this.display_columns = 3;	
		}else{
			this.display_columns = $(options.templateName).attr('display_columns');	
		}
	  	
	  	


	  	this.now_column_index = $(options.templateName).attr('now_column_index');
	  	this.total_length = $(options.templateName).attr('total_length');
	  	
	  	
	  },
	  DisplayColumns: function (num, index) {
	  	$(this.el).find('thead th').each(function(){
	  		var ith = $(this).attr('columngroup').substring(1);
	  		var leftBound = num * index;
	  		var rightBound = (((index + 1) * num)-1);
			if( ith >= leftBound && ith <= rightBound){
				$(this).css('display','table-cell');
			}
		});
	  },


	  swipeShowLeft:function () {

		var num = this.display_columns;
		var index = this.now_column_index;
		var total_length = this.total_length;
		if(index - 1 < 0){
			return false;
		}

		var length = (((index + 1) * num)-1);
		//hide
		for (var i = num * index; i <= length; i++){			
			$(this.el).find("[columnGroup='C" + i + "']").each(function(){
			  $(this).css('display','none');
			})		
		}

		//show
		this.now_column_index = parseInt(this.now_column_index) - 1;
		var index = this.now_column_index;
		var length = (((index + 1) * num)-1);

		for (var i = num * index; i <= length; i++){			
			$(this.el).find("[columnGroup='C" + i + "']").each(function(){
			  $(this).css('display','table-cell');
			})		
		}

	  },

	  swipeShowRight:function () {

		var num = this.display_columns;
		var index = this.now_column_index;
		var total_length = this.total_length;
		if(num * (index + 1) > total_length - 1){
			return false;
		}

		var length = (((index + 1) * num)-1);
		//hide
		for (var i = num * index; i <= length; i++){			
			$(this.el).find("[columnGroup='C" + i + "']").each(function(){
			  $(this).css('display','none');
			})		
		}

		//show
		this.now_column_index = parseInt(this.now_column_index) + 1;
		var index = this.now_column_index;
		var length = (((index + 1) * num)-1);

		for (var i = num * index; i <= length; i++){			
			$(this.el).find("[columnGroup='C" + i + "']").each(function(){
			  $(this).css('display','table-cell');
			})		
		}

	  },
	  onlyUpdateDataFlag: false,
	  render: function (event){

	    
	    var $el = $(this.el);
	    if(this.onlyUpdateDataFlag == false){
	    	var content = this.template({});
	    	$el.html(content);
	    	this.onlyUpdateDataFlag = true; 	

	    	this.DisplayColumns(this.display_columns, this.now_column_index);
	    }else{
	    	$el.find('tbody').html('');
	    }
	    

	    this.collection.each(function(model) {
	      var rowview = new ava.views.Table_Row_Template_View({ model: model, templateName: this.options.templateNameTwo, display_columns: this.display_columns,
	      	now_column_index: this.now_column_index });
	      this.$el.find('tbody').append(rowview.render().el);
	    },this);

	    this.setTbodyHeight();

	    return this;
	  },

	  setTbodyHeight: function () {
	    //for ios status bar
	    if(typeof (StatusBarLength) != "undefined"){
	      StatusBarLength = 0;
	    }else{
	      StatusBarLength = 20;
	    }

	    var tableHeight = $(window).height() - 61 - this.$el.find('thead').height() - StatusBarLength - 3;
	    this.$el.find('tbody').css('height',tableHeight.toString());
	  }
	});

	ava.views.Table_Row_Template_View = Backbone.View.extend({
	  tagName: 'tr',
	  template: null,
	  // template: _.template($('#test-row-template').html()),
	  initialize: function (options) {
	    this.template = _.template($(options.templateName).html());

	   	this.display_columns = options.display_columns;
	  	this.now_column_index = options.now_column_index;

	  },
	  DisplayColumns: function (num, index) {
	  	$(this.el).find('td').each(function(){
	  		var ith = $(this).attr('columngroup').substring(1);
	  		var leftBound = num * index;
	  		var rightBound = (((index + 1) * num)-1);
			if( ith >= leftBound && ith <= rightBound){
				$(this).css('display','table-cell');
			}
		});
	  },
	  render: function() {
	    $(this.el).html(this.template(this.model.toJSON()));

	    this.DisplayColumns(this.display_columns, this.now_column_index);

	    return this;
	  }
	});




	function ajaxGetTemplate(src){

	    var updateTemplate = function (data) {
	        // if($("#template-container #template-version").attr('version') != $($(data)[0]).attr('version')){
	            $("#template-container").html('');
	            $("#template-container").append($(data)); 
	        // }
	    };

	    $.ajax({
	        timeout: 10000,
	        cache: false,
	        url:src,
	        type:'GET',
	        beforeSend: function () {
	            // $.mobile.loading('show');
	        }, 
	        success: function (data, textStatus, jqXHR) {
	            updateTemplate(data);
	        },
	        error: function(xhr, response, errorThrown){              
	            if(xhr.readyState == 0){               
	              navigator.notification.alert($.i18n.prop('msg_networkError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
	            }else if(xhr.readyState == 4){                  
	              navigator.notification.alert($.i18n.prop('msg_serverError'), function(){}, $.i18n.prop('msg_sysInfo'), $.i18n.prop('msg_btnConfirm'));
	            }
	        },  
	        complete: function ( jqXHR, textStatus) {
	           // $.mobile.loading('hide');
	        }          
	    });
	}

	function ajaxGetData(){
	  try {
	    g_Table_function();
	  }
	  catch(err) {
	  
	  }
	}

	function ajaxSetTable(func) {
	  g_Table_function = func;
	}




	function getResizeFromTableServer() {

		if(window.location.hash.indexOf('#getBrandStatistics_New') >= 0){
			console.log("width: " + $(window).width());
			console.log("heigth: " + $(window).height());
			Backbone.history.loadUrl(Backbone.history.fragment);			
		}
		
	}

	function doOnOrientationChange()
    {
    	var orientation = '';
        switch(window.orientation) 
        {   
            case -90:
            case 90:
            //alert('landscape');
            orientation = 'landscape';
            break; 
          default:
            //alert('portrait');
            orientation = 'portrait';
            break; 
      	}
      	return orientation;
    }


}catch(err) {
        console.log(err);
}



function logoutForTableUpdateVersion(){
	window.localStorage.setItem('loginSuccess', false);
    
    if(window.location.hash == ""){
        location.reload();  
    }else{
        Backbone.history.navigate('', {trigger: true, replace: true}); 
        location.reload(); 
    }
}






