jQuery(function($) {

	var lastMessageId;
    
	// The stuff from data is username, message_id, message_text, and message_hashtag
	// The allowed hashtags are 'wobblycats', 'wobblyrickroll', 'wobblytableflip', 
	//		'wobbly8bit', 'wobblyallyourbase'

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
		if (string == 'wobbly8bit') {
			changer('eight-bit', null, null);
		} else if (string == 'wobblyrickroll') {
			changer('rick-roll', null, null);
		}
	}

	$(document).ready(function() {
		setInterval(getLatestTweet, 10000);
    });
});
