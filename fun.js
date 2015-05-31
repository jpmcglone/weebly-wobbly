jQuery(function($) {
    console.log("doc ready!");
    
	function tableFlip() {
        console.log("Table Flip!");
        var audio = new Audio('doitlive.mp3');
        audio.play();
        // TODO: show table flip guy first
        setTimeout(function() {
          $("#banner").addClass("table-flip");
          setTimeout(function() {
		      $("div").addClass("box_rotate box_transition");
          }, 250);
        }, 2000);
	}
    
    function undoTableFlip() {
        $("#banner").removeClass("table-flip");
        $("div").removeClass("box_rotate box_transition");
    }
	
	$(document).ready(function() {
		//tableFlip()
        
//        setTimeout(function() {
//            undoTableFlip()
//        }, 4000);
    });
});
