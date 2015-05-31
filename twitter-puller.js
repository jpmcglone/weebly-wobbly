jQuery(function($) {

	var lastMessageId;

	// The stuff from data is username, message_id, message_text, user_pic, and message_hashtag
	// The allowed hashtags are 'wobblykitty', 'wobblyrickroll', 'wobblytableflip', 
	// 'wobbly8bit'
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

    $('body').append('<marquee id="twitter-user" behavior="scroll" direction="left" scrollamount="9" style="color: dodgerblue; text-transform: uppercase; font-size: 45px; font-weight: bold; margin-bottom: 30px;">' + 
    	"@" + data.username + " tweeted: " + data.message_text + '</marquee>');

    	// '<div id="twitter-user" style="position: fixed; left: 0; bottom: 10px; width: 300px; height: 50px; font-size: 30px;">' +
     //                 data.username + " tweeted: " + data.message_text + 
     //                 '</div>')
    window.setTimeout(function() {
      $('#twitter-user').remove()
    }, 15000)
  }

	function changeCssHere(string) {
		if (string == 'wobbly8bit') {
			changer('eight-bit', changes8Bit)
		} else if (string == 'wobblyrickroll') {
			changer('rick-roll', changesRR)
		} else if (string == 'wobblytableflip') {
			changer('table-flip', tableFlip)
		} else if (string == 'wobblykitty') {
			changer('kitty', changesKitty)
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
