$(function() {
	console.log($('img.avatar').next('.fullname').text());
	$('textarea').click(function(){
		$(this).addClass('expand');
		$('#tweet-submit').show();
		$('#char-count').show();
		$('button').attr('disabled', 'disabled');
	});
	$('#tweet-submit').hide();
	$('#char-count').hide();
	$('.tweet-compose').on('keyup', function(){
		var length = this.value.length;
		$('#char-count').text(140 - length);
		if (length >= 130){
			$('#char-count').css('color', 'red');
		}
		else{
			$('#char-count').css('color', '#999');
		}

		if (length > 140 || length <= 0) {
			
			$('button').attr('disabled', 'disabled');
		}
		else{
			$('button').removeAttr('disabled');
		}
	});
	$('#tweet-submit').on('click', function(){
		var text = $('.tweet-compose').val();
		var newTweet = $('.tweet').eq(0).clone();
		newTweet.find('.avatar').attr('src','img/alagoon.jpg');
		newTweet.find('.fullname').text('Jordan Braginton');
		newTweet.find('.username').text('@bragtown');
		newTweet.find('.tweet-text').text(text);

		$('#stream').prepend(newTweet);
		$('.tweet-compose').val("");
		$('textarea').removeClass('expand');
		$('#char-count').text('140');
	});
	$('.stats').hide();
	$('.reply').hide();
	$('.tweet').on('click', function(){
		$('.stats').hide();
		$('.reply').hide();
		$(this).find('.stats').show();
		$(this).find('.reply').show();
	});
	

	

	$('img.avatar').attr('data-toggle', 'tooltip');

	$('img.avatar').tooltip({
			placement: 'left',
			title: function(){
				return $(this).siblings(".username").text();
			}
	});

});