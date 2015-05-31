var undo8Bit = function() {
  $('img.eight-bit').remove()
  changer('')
}

/*
 * 8-bit theme specific javascript
 */
var changes8Bit = function() {
  $('body').append('<img style="position: fixed; width: 200px; height: 200px; right: 0; bottom: 10px"' +
                   'class="eight-bit" src="files/theme/images/dundundun.gif">')
  window.setTimeout(undo8Bit, 15000)
}
