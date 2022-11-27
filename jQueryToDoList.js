$( document).ready( function()  {
/**
 * Toggles "done" class on <li> element
 */

$(document).on('click', 'li', function(e) {
  let $this = $(this);
  $this.toggleClass('done');
})

/**
 * Delete element when delete link clicked
 */
$(document).on('click', 'a.delete', function(e){
  let $this = $(this);
  $this.parent('li').remove();
})

/**
 * Adds new list item to <ul>
 */
const addListItem = function(e) {
  //grab text from text field
  const text = $('input').val();
  //get the ul list and set to html
  const $ul = $('ul.today-list');
  //create new li, span and del link
  let $newLI = $('<li>');
  let $newSpan = $('<span>');
  let $newDel = $('<a>');
  //add the delete link's class and text 
  $newDel.addClass('delete');
  $newDel.text('Delete');
  //set the span's text
  $newSpan.text(text);
  //add new items to the list item and then list item to the ul
  $newLI.append($newSpan);
  $newLI.append($newDel);
  $ul.prepend($newLI);
  //set the field back to empty
  $('input').val('');

  
};

// add listener for add
$(document).on('click', 'a.add-item', function(e) {
  e.preventDefault();
  addListItem();
})



});
