var undo8Bit = function() {
  $('img.eight-bit').remove()
  changer('')
}

/*
 * 8-bit theme specific javascript
 */
var changes8Bit = function() {
  audio.pause()
  audio = new Audio('http://themushroomkingdom.net/sounds/wav/smb/smb_world_clear.wav')
  audio.play()

  $('body').append('<img style="position: fixed; width: 200px; height: 200px; right: 0; bottom: 10px"' +
                   'class="eight-bit" src="files/theme/themes/eightBit/pipeFlower.gif">')
  window.setTimeout(undo8Bit, 15000)
}
