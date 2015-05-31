/*
 * 8-bit theme specific javascript
 */
var changes_8bit = function() {
  $('body').append('<img style="position: fixed; width: 200px; height: 200px; right: 0"' +
                   'class="eight-bit" src="files/theme/images/dundundun.gif">')

  window.setTimeout(undo_8bit, 15000);
}
var undo_8bit = function() {
	console.log('undoing 8 bit');
  $('img.eight-bit').remove()
}
