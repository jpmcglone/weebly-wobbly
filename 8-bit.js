/*
 * 8-bit theme specific javascript
 */
var changes_8bit = function() {
  $('body').append('<img style="position: fixed; width: 200px; height: 200px; right: 0"' +
                   'src="files/theme/images/dundundun.gif">');

  setTimeout(undo_8bit, 15000);
}
var undo_8bit = function() {
  $('img.eight-bit').remove()
}
