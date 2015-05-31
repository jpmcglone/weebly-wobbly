var undoKitty = function() {
  $('img.kitty').remove()
  changer('')
}

/*
 * kitty theme specific javascript
 */
var changesKitty = function() {
  audio.pause()
  audio = new Audio('files/theme/themes/kitty/Meow_Mix_Commercial.mp3')
  audio.play()

  $('body').append('<img style="position: fixed; width: 200px; height: 200px; right: 0; bottom: 10px"' +
                   'class="kitty" src="http://media.giphy.com/media/5ZxSN5D9rcUI8/giphy.gif">')
  window.setTimeout(undoKitty, 15000)
}
