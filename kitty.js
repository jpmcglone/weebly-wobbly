var undoKitty = function() {
  $('img.kitty').remove()
  changer('')
}

/*
 * kitty theme specific javascript
 */
var changesKitty = function() {
	var audio = new Audio('files/theme/ie_Short_Cow_MooMeow_Mix_Comm-KevanGC-2007570186.mp3')
  	audio.play()
  $('body').append('<img style="position: fixed; width: 200px; height: 200px; right: 0; bottom: 10px"' +
                   'class="kitty">')
  window.setTimeout(undoKitty, 15000)
}
