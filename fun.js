jQuery(function($) {

	function tableFlip() {
        console.log("Table Flip!");
        var audio = new Audio('files/theme/doitlive.mp3');
        audio.play();
        // TODO: show table flip guy first
        setTimeout(function() {
          $("#banner").addClass("table-flip");
          setTimeout(function() {
		      $("div").addClass("box_rotate box_transition");
          }, 250);
        }, 3750);
	}
    
    function undoTableFlip() {
        $("#banner").removeClass("table-flip");
        $("div").removeClass("box_rotate box_transition");
    }
	
//	$(document).ready(function() {
//		tableFlip()
//    });
});
