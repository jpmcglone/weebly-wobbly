jQuery(function($) {
    console.log("doc ready!");
    
	function tableFlip() {
        console.log("Table Flip!");
        // TODO: show table flip guy first
        setTimeout(function() {
          $("#banner").addClass("table-flip")
          setTimeout(function() {
		      $("div").addClass("box_rotate box_transition")
          }, 250);
        }, 2000);
	}
	
	$(document).ready(function() {
		tableFlip()
    });
});
