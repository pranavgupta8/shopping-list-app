$( document ).ready(function() {
	$('input[type=submit]').click(function(e) {
		e.preventDefault();
		var newitem = $('input[type=text]').val();
		i=1;
		$('.on-list ul').append($('<li><input type="checkbox" name="item' + i + '" value="' + newitem + '"/>' + newitem + '</li>'));
		$('input[type=text').val("");
	});
	$('.on-list ul').on('click', 'li', function(){
		var cartitem = $( this ).text();
		$('.in-cart ul').append($('<li><input type="checkbox" checked name="item' + i + '" value="' + cartitem + '"/>' + cartitem + '</li>'))
		$( this ).html("");
	});
	$('.in-cart ul').on('click', 'li', function(){
		var listitem = $( this ).text();
		$('.on-list ul').append($('<li><input type="checkbox" name="item' + i + '" value="' + listitem + '"/>' + listitem + '</li>'))
		$( this ).html("");
	});
});