$(document).ready(function(){
  // functions are called inside the document ready
  hideErrors();
  hideForm();
  addCommentListener();
  cancelListener();
  submitCommentListener();
});

// write your functions out here

function hideErrors(){
  $('#com-name-error, #com-email-error, #comment-error').hide();
}

function hideForm(){
  $('form#add-comment').hide();
}