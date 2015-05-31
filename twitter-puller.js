jQuery(function($) {

	var lastMessageId;
    
	// The stuff from data is username, message_id, message_text, user_pic, and message_hashtag
	// The allowed hashtags are 'wobblycats', 'wobblyrickroll', 'wobblytableflip', 
	//		'wobbly8bit', 'wobblyallyourbase'

	function getLatestTweet() {
		$.get( "https://quiet-bastion-3290.herokuapp.com/twitter_puller", function( data ) {
			console.log(data.message_hashtag);
  			if (data.message_id == lastMessageId) {
  				console.log("same");
  				return;
  			}
  			lastMessageId = data.message_id;
  			changeCssHere(data.message_hashtag);
            showTweet(data)
		});
	}
    
    function showTweet(data) {
        console.log("showing tweet")
        console.log(data.message_id)
        console.log(data.username)
        console.log(data.user_pic)
        console.log(data.message_id)
        console.log(data.message_text)
        console.log(data.message_hashtag)
        
        // Show div
        
        // Hide div 
    }
    
	function changeCssHere(string) {
		if (string == 'wobbly8bit') {
			changer('eight-bit', changes8Bit);
		} else if (string == 'wobblyrickroll') {
			changer('rick-roll', changesRR);
		} else if (string == 'wobblytableflip') {
			changer('table-flip', tableFlip);
		}
	}

	$(document).ready(function() {
		setInterval(getLatestTweet, 10000);
    });
});
