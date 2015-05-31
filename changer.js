var themeName = ''
var oldTheme = ''
var audio = new Audio()

var songs = {
  'eight-bit': 'http://themushroomkingdom.net/sounds/wav/smb/smb_world_clear.wav',
  'rick-roll': 'http://upload.wikimedia.org/wikipedia/en/d/d0/Rick_Astley_-_Never_Gonna_Give_You_Up.ogg'
}

/*
 * appends an audio tag to the page body. Replaces audio tag if it already
 * exists
 */
var swapAudio = function(newTheme) {
  audio.pause()
  audio = new Audio(songs[newTheme])
  audio.play()
}

/*
 * callback used by Changer to add a class to a dom element
 */
var classNameCallback = function(currentValue) {
  var temp = jQuery(currentValue)
  temp.removeClass(oldTheme)
  temp.addClass(themeName)
  console.log('result', temp)
}
/*
 * Takes a theme name and performs transformations to the current page
 * it ensures the relevant DOM elements have the proper css classNames
 */
var changer = function(newTheme) {
  oldTheme = themeName
  themeName = newTheme
  var elements = document.getElementsByClassName('themeable')
  Array.prototype.forEach.call(elements, classNameCallback)
  swapAudio(newTheme)
}

/*
 * add class to customizable parts of page
 */
$(document).ready(function() {
  $('body').addClass('themeable')
})
