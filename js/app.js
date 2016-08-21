$( document ).ready(function() {
	
	var click=1;
	var i=j=1;
	var newitem=null;

	$('#add')
	.css('cursor', 'pointer')

	.mouseover(function(){
		if(click == 1) $( this ).prop('title', 'show the add item box');
		
		if(click == 2) $( this ).prop('title', 'hide the add item box');
	})

	.click(function(){
		
		if(click == 1) {
			$('.new-items').fadeIn("medium");
			click = 2;}
		
		else {
		
			$('.new-items').fadeOut("fast");
			click =	1;}
	});

	$('#empty')
	.css('cursor', 'pointer')

	.click(function(){
		$('.discarded ul').html("");
	});

	$('#submit').click(function(e) { //New Item Addition
	
		e.preventDefault();
		
		newitem = $('#newitem').val();
		
		if (newitem == null || newitem == "") {
			
			alert('Please put in some Item Name');
			return false;	
		}
		else {
		
			$('.on-list ul').append($('<li><input type="checkbox" name="item' + i + '" value="' + newitem + '" class="checkbox"/> ' + '<i class="fa fa-trash-o fa-lg-o-o aria-hidden=true"></i> ' + newitem + '</li>'));
			$('#newitem').val("");
		

			$('.fa-trash-o').hover(function(){
			
				$( this ).prop('title', 'discard this item')
			});

			i++;
		}
	});

	$('#newitem').keydown(function(event){
		
		if (event.keyCode == 13) {
		
			if (newitem != null || newitem != "") {
			
				$('#submit').click();
				return false;
			}
		
			else {
			
				 alert('Please put in some Item Name');
				 return false;
			}
		}
	});
	
	$('.on-list ul')

	.on('click', 'li', function(){ //Item moved from List to Cart
		
		if($('.checkbox').is(':checked')) {
		
			var cartitem = $( this ).text();
			$('.in-cart ul').append($('<li><input type="checkbox" checked name="item' + j + '" value="' + cartitem + '" class="checkbox"/> ' + '<i class="fa fa-trash-o fa-lg-o"></i> ' + cartitem + '</li>')).hide().fadeIn("medium");
			$( this ).html("");
			
			
			$('.fa-trash-o').hover(function(){
		
				$( this ).prop('title', 'discard this item')
			});

			j++;
		}

		else if($('.fa-trash-o').mousedown()) {

			var trashitem = $( this ).text();
			$('.discarded ul').append($('<li>' + trashitem + '</li>')).hide().fadeIn("medium");
			$( this ).html("");
		}
		
		if(i>1) i--;
	})
	
	$('.in-cart ul')

	.on('click', 'li', function(){ //Item moved from Cart to List
		
		if(!$('.checkbox').is(':checked')) {
		var listitem = $( this ).text();
		$('.on-list ul').append($('<li><input type="checkbox" name="item' + i + '" value="' + listitem + '" class="checkbox"/> ' + '<i class="fa fa-trash-o fa-lg-o-o"></i> '	 + listitem + '</li>')).hide().fadeIn("medium");
		$( this ).html("");
		

		$('.fa-trash-o').hover(function(){
		
			$( this ).prop('title', 'discard this item')
		});

		i++;
		}

		else if($('.fa-trash-o-o').mousedown()) {

			var trashitem = $( this ).text();
			$('.discarded ul').append($('<li>' + trashitem + '</li>')).hide().fadeIn("medium");
			$( this ).html("");	
		}

		if(j>1) j--;
	});

});