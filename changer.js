var themeName = ''
var oldTheme = ''
var audio = new Audio()

/*
 * callback used by Changer to add a class to a dom element
 */
var classNameCallback = function(currentValue) {
  var temp = jQuery(currentValue)
  temp.removeClass(oldTheme)
  temp.addClass(themeName)
}
/*
 * Takes a theme name and performs transformations to the current page
 * it ensures the relevant DOM elements have the proper css classNames
 * if passed a callback it gets executed at the end
 * if this is the second time called provide an undo function to undo previous
 */
var changer = function(newTheme, callback) {
  oldTheme = themeName
  themeName = newTheme
  var elements = document.getElementsByClassName('themeable')
  Array.prototype.forEach.call(elements, classNameCallback)

  if (callback) { callback() }
}

/*
 * add class to customizable parts of page
 */
$(document).ready(function() {
  $('body').addClass('themeable')
})
