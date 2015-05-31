var undoRR = function() {
  $('marquee').remove()
  changer('')
}

/*
 * rick-roll theme specific javascript
 */
var changesRR = function() {
  $('body').append('<marquee behavior="scroll" direction="left">' +
    '<img src="http://31.media.tumblr.com/c4b03d9214b2f1cb506b5fc2d7d0deb7/tumblr_mgktubqPt51r933bpo1_400.gif" width="600" alt="rickface">' +
  '</marquee>')
  window.setTimeout(undoRR, 15000)
}
