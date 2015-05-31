/*
 * 8-bit theme specific javascript
 */
var changes_8bit = function() {
  $('body').append('<img style="position: fixed; width: 200px; height: 200px; right: 0"' +
                   'class="eight-bit" src="files/theme/images/dundundun.gif">')
}
var undo_8bit = function() {
  $('img.eight-bit').remove()
}
