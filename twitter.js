jQuery(function($) {
    console.log("doc ready!");
    
	function tableFlip() {
        console.log("Table Flip!");
		$("div").addClass("box_rotate box_transition");
	}
	
	$(document).ready(function() {
		tableFlip()
		// TODO: set classes based on the hashtag found on the twitter account
    });
});
