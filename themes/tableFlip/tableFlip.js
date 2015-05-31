var tableFlip = function() {
  audio.pause()
  audio = new Audio('files/theme/themes/tableFlip/doitlive.mp3')
  audio.play()

  // TODO: show table flip guy first
  setTimeout(function() {
    $("#banner").addClass("table-flip")
    setTimeout(function() {
    $("div").addClass("box_rotate box_transition")
    }, 250)
  }, 3750)
  window.setTimeout(undoTableFlip, 10000)
}

var undoTableFlip = function() {
  $("#banner").removeClass("table-flip")
  $("div").removeClass("box_rotate box_transition")
  changer('')
}
