$( document ).ready(function() {
	
	var click=1;
	var i=1;

	$('p')
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
			click=1;}
		});

	$('input[type=submit]').click(function(e) { //New Item Addition
	
		e.preventDefault();
		
		var newitem = $('input[type=text]').val();
		$('.on-list ul').append($('<li><input type="checkbox" name="item' + i + '" value="' + newitem + '"/> ' + newitem + '</li>'));
		$('input[type=text').val("");
		
		i++;
		
		$('li').css('cursor', 'pointer');
	});
	
	$('.on-list ul').on('click', 'li', function(){ //Item moved from List to Cart
		
		var cartitem = $( this ).text();
		$('.in-cart ul').append($('<li><input type="checkbox" checked name="item' + i + '" value="' + cartitem + '"/> ' + cartitem + '</li>')).hide().fadeIn("medium");
		$( this ).html("");
		
		if(i>1) i--;

	});
	
	$('.in-cart ul').on('click', 'li', function(){ //Item moved from Cart to List
		
		var listitem = $( this ).text();
		$('.on-list ul').append($('<li><input type="checkbox" name="item' + i + '" value="' + listitem + '"/> ' + listitem + '</li>')).hide().fadeIn("medium");
		$( this ).html("");
		
		i++;
	});

});