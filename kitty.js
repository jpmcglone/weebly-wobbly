var undoKitty = function() {
  $('img.kitty').remove()
  changer('')
}

/*
 * kitty theme specific javascript
 */
var changesKitty = function() {
  $('body').append('<img style="position: fixed; width: 200px; height: 200px; right: 0; bottom: 10px"' +
                   'class="kitty">')
  window.setTimeout(undoKitty, 15000)
}
