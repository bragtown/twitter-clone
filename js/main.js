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

		var newTweet = $(
			<div class="content">
				<img class="avatar" src="img/damenleeturks.jpg" />
				<strong class="fullname">My BFF</strong>
				<span class="username">@mybff</span>
				<p class="tweet-text">Today is an amazing day.</p>
				<div class="tweet-actions">
					<ul>
						<li><span class="icon action-reply"></span> Reply</li>
						<li><span class="icon action-retweet"></span> Retweet</li>
						<li><span class="icon action-favorite"></span> Favorite</li>
						<li><span class="icon action-more"></span> More</li>
					</ul>
				</div>
		);
	});
});