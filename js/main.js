$(function() {
	$('textarea').click(function(){
		$(this).addClass('expand');
		$('#tweet-submit').show();
		$('#char-count').show();
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

		if (length > 140){
			
			$('button').attr('disabled', 'disabled');
		}
		else{
			$('button').removeAttr('disabled');
		}
	});
	$('#tweet-submit').on('click', function(){
		var text = $('tweet-compose').text();
		 var $newTweet = $("												\
		    <div class='tweet'>  											\
		    	<div class = 'content'>                                     \
		    		<img class = 'avatar' src = 'img/damenleeturks.jpg'/>   \
		    		<strong class='fullname'>Jordan Braginton</strong>		\
		    		<span class='username'>@mybff</span>					\
		    		<p class='tweet-text'>									\
		    		"+ text +"												\
		    		</p>													\
		    	</div>                                                      \
		    </div>											                \
		");
		 $('#stream').append($newTweet);
	});


});