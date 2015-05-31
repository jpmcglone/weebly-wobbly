var undoRR = function() {
  $('#giant-head').remove()
  changer('')
}

/*
 * rick-roll theme specific javascript
 */
var changesRR = function() {
  audio.pause()
  audio = new Audio('http://upload.wikimedia.org/wikipedia/en/d/d0/Rick_Astley_-_Never_Gonna_Give_You_Up.ogg')
  audio.play()

  $('body').append('<marquee id="giant-head" behavior="scroll" direction="left">' +
    '<img src="http://31.media.tumblr.com/c4b03d9214b2f1cb506b5fc2d7d0deb7/tumblr_mgktubqPt51r933bpo1_400.gif" width="400" alt="rickface">' +
  '</marquee>')
  window.setTimeout(undoRR, 15000)
}
