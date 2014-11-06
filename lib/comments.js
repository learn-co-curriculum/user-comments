'use-strict';

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

function addCommentListener(){
  $('#show-comment-form').click(function(){
    $('form#add-comment').show();
  });
}

function cancelListener(){
  $('#cancel').click(function(){
    $('form#add-comment').hide();
  });
}

function nameValidator(){
  if ( $('#comment-name').val().length < 4 ){
    $('#com-name-error').show();
    return false;
  } else {
    return true;
  }
} 

function emailValidator(){
  var emailRegex = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+@[a-zA-Z0-9_-]+.([a-z]{2}|com|org|net|edu)$/;
  if ( !emailRegex.test($('#com-email').val()) ){
    $('#com-email-error').show();
    return false;
  } else {
    return true;
  }
} 

function commentValidator(){
  if ( $('#comment').val().length === 0 ){
    $('#comment-error').show();
    return false;
  } else {
    return true;
  }
}

function submitCommentListener(){
  $('form').submit(function(e){
    e.preventDefault();
    if ( nameValidator() && emailValidator() && commentValidator() ) {
      $('#posts').append(
      '<div class="newcomment"><span class="name">'
      + $('#comment-name').val() + '</span>'
      + '<span class="email">' + $('#com-email').val() + '</span>'
      + '<span class="date">' + (new Date).toDateString() + '</span>'
      + '<p class="comment">' + $('#comment').val() + '</p></div>'
      );
    }
  });
}
