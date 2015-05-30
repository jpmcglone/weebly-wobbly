var themeName = ''
var oldTheme = ''

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
}

/*
 * add class to customizable parts of page
 */
$(document).ready(function() {
  $('body').addClass('themeable')
})
