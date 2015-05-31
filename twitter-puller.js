jQuery(function($) {

	var lastMessageId;
    
	function getLatestTweet() {
		$.get( "https://quiet-bastion-3290.herokuapp.com/twitter_puller", function( data ) {
  			if (data.message_id == lastMessageId) {
  				console.log("same");
  				return;
  			}
  			lastMessageId = data.message_id;
  			changeCssHere(data.message_hashtag);
		});
	}

	function changeCssHere(string) {
		console.log(string);
	}

	$(document).ready(function() {
		setInterval(getLatestTweet, 10000);
    });
});
