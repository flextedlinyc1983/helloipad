var tabOperation = 
{
	init: function () {
		$("#work").each(function() {
			tabOperation.$tabList = $(this).find(".tabs-nav");
			tabOperation.$tabAnchors = tabOperation.$tabList.find("a");
			tabOperation.$tabPanels = $(this).find(".tabs-panel");


			$(tabOperation.$tabAnchors[0]).addClass("active");

			tabOperation.$tabPanels.hide();
			$(tabOperation.$tabPanels[0]).show();

		// $tabList.on('click', 'a', function(event) {
		// 	event.preventDefault();
		// 	/* Act on the event */

		// 	var $this = $(this);
		// });

		});

		this.calcEvent();

		this.self = this;

	},

	checkDot:function () {
		if($('#answer').val().indexOf('.') > -1)
		{
		  alert("has . error");
		}
	},

	calcEvent: function () {
		 $('#1,#2,#3,#4,#5,#6,#7,#8,#9,#0,#dot').click(function(){
			var v = $(this).val();
			$('#answer').val($('#answer').val() + v);	
		});
		 $('#C').click(function(){
			$('#answer').val('');
			$('#operation').val('');
			$('#operation').removeClass('activeAnswer');
			$('#equals').attr('onclick','');
		});
		$('#backspace').click(function(){
			var iLength = $("#answer").val().length;
			if( iLength	> 0){
				$('#answer').val($('#answer').val().substring(0,iLength	- 1));		
			}
		});

		$('#plus').click(function(e) { 
			
			// tabOperation.self.checkDot();
			if($('#answer').val().indexOf('.') > -1)
			{
			  alert("has . error");
			  return;
			}

			if($('#answer').val() == ''){
				return false;
				$('#equals').attr('onclick','');
			}
			else if ( $('#operation').attr('class') == 'activeAnswer') {
				$('#operation').val( $('#operation').val() + $('#plus').val() );
				$('#answer').val('');
				$('#equals').attr('onclick','');
			}
			else{
				$('#operation').val( $('#operation').val() + $('#answer').val() + $('#plus').val() );
				$('#answer').val('');
				$('#equals').attr('onclick','');
			}
	    });
		$('#subtract').click(function(e) { 

			if($('#answer').val().indexOf('.') > -1)
			{
			  alert("has . error");
			  return;
			}
		
			if($('#answer').val() == ''){
				return false;	
				$('#equals').attr('onclick','');
			}
			else if ( $('#operation').attr('class') == 'activeAnswer') {
				$('#operation').val( $('#operation').val() + $('#subtract').val() );
				$('#answer').val('');
				$('#equals').attr('onclick','');
			}
			else{
				$('#operation').val( $('#operation').val() + $('#answer').val() + $('#subtract').val() );
				$('#answer').val('');
				$('#equals').attr('onclick','');
			}
	    });
		$('#divide').click(function(e) { 

			if($('#answer').val().indexOf('.') > -1)
			{
			  alert("has . error");
			  return;
			}
		
			if($('#answer').val() == ''){
				return false;	
				$('#equals').attr('onclick','');
			}
			else if ( $('#operation').attr('class') == 'activeAnswer') {
				$('#operation').val( $('#operation').val() + $('#divide').val() );
				$('#answer').val('');
				$('#equals').attr('onclick','');
			}
			else{
				$('#operation').val( $('#operation').val() + $('#answer').val() + $('#divide').val() );
				$('#answer').val('');
				$('#equals').attr('onclick','');
			}
	    });
		$('#product').click(function(e) { 

			if($('#answer').val().indexOf('.') > -1)
			{
			  alert("has . error");
			  return;
			}
		
			if($('#answer').val() == ''){
				return false;	
				$('#equals').attr('onclick','');
			}
			else if ( $('#operation').attr('class') == 'activeAnswer') {
				$('#operation').val( $('#operation').val() + $('#product').val() );
				$('#answer').val('');
				$('#equals').attr('onclick','');
			}
			else{
				$('#operation').val( $('#operation').val() + $('#answer').val() + $('#product').val() );
				$('#answer').val('');
				$('#equals').attr('onclick','');
			}
	    });	
		$('#equals').click(function(){
			
			if($('#equals').attr('onclick') != 'return false'){
			
				var a = $('#answer').val();
				var b = $('#operation').val();
				var c = b.concat(a);
				$('#answer').val(eval(c));
				$('#operation').val(eval(c));
				$('#operation').addClass('activeAnswer');
				$('#equals').attr('onclick','return false');
			
			}
		});

	}

};



