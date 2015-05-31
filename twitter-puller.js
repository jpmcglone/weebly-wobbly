jQuery(function($) {

	var lastMessageId;

	// The stuff from data is username, message_id, message_text, user_pic, and message_hashtag
	// The allowed hashtags are 'wobblycats', 'wobblyrickroll', 'wobblytableflip', 
	// 'wobbly8bit', 'wobblyallyourbase'
	function getLatestTweet() {
		$.get( "https://quiet-bastion-3290.herokuapp.com/twitter_puller", function( data ) {
			console.log(data.message_hashtag)
      if (data.message_id == lastMessageId) {
        console.log("same")
        return
      }
      lastMessageId = data.message_id
      changeCssHere(data.message_hashtag)
      showTweet(data)
	})
	}

  function showTweet(data) {
    console.log("show tweet")

    $('body').append('<div id="twitter-user" style="position: fixed; left: 0; bottom: 10px; width: 300px; height: 50px; font-size: 30px;">' +
                     data.username + " tweeted: " + data.message_text + 
                     '</div>')
    window.setTimeout(function() {
      $('div#twitter-user').remove()
    }, 15000)
  }

	function changeCssHere(string) {
		if (string == 'wobbly8bit') {
			changer('eight-bit', changes8Bit)
		} else if (string == 'wobblyrickroll') {
			changer('rick-roll', changesRR)
		} else if (string == 'wobblytableflip') {
			changer('table-flip', tableFlip)
		}
		//604868162220228600
		// twttr.widgets.createTweet('463440424141459456', document.getElementById('twitbox')).then( function( el ) {
  		// 			console.log('Tweet added.' + lastMessageId.toString());
		// });
	}

	$(document).ready(function() {
		setInterval(getLatestTweet, 10000)
		// twttr.ready(
  // 			function (twttr) {
  //   			twttr.widgets.load();
  // 			}
		// );
    })
})
