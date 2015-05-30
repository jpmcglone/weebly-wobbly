
jQuery(function($) {
    console.log("doc ready!");
    
	function tableFlip() {
        console.log("Table Flip!");
        // TODO: show table flip guy first
        setTimeout(function() {
		  $("div").addClass("box_rotate box_transition")
        }, 800);
	}
	
	$(document).ready(function() {
		tableFlip()
    });
});
