jQuery(document).ready(function() {
  jQuery( "h1" ).on( "mouseover", function() {
    jQuery( this ).css( "color", "red" );
  });
  console.log('we are ready to go');
  jQuery('p span').css('color', 'red');
  // jQuery('ul#list li').css('list-style', 'none');
  jQuery('ul#list li:first').css('color', 'red');
  jQuery('ul#list li:even').css('background', 'yellow');
  jQuery('ul#list li:odd').css('background', '#ccc');
  jQuery('ul#subMenu-list li a').css('text-decoration', 'none');
})
