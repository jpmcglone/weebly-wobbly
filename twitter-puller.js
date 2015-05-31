jQuery(function($) {
    
	function getLatestTweet() {
		$.get( "https://quiet-bastion-3290.herokuapp.com/twitter_puller", function( data ) {
  			console.log( "Load was performed. " + data );
		});
	}

	$(document).ready(function() {
		getLatestTweet();
		setInterval(getLatestTweet, 10000);
    });
});
