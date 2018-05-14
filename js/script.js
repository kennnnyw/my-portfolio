$(document).ready(function(){
  // determine showcase layout
  if ($('.showcase').length < 3) {
    $('.showcase').parent().removeClass('col-lg-4').addClass('col-lg-6');
  }

  // project selection event handler
  // handles displaying/hiding project bios
  $('.showcase').on('click', function(event){
    event.preventDefault();

    // display selected project
    var bio = $(this).data('target');
    showMainSections();
    hideMainSections();
    $(bio).fadeIn(500);
    scrollToAnchor(bio);
  })

  // close button event handler
  $('.close').on('click', function(){
    showMainSections();
    scrollToAnchor('#projects');
    $(this).closest('.bio').hide();
  })
});

function scrollToAnchor(anchor){
  // scroll the page to a specified anchor point
  $('html,body').animate({scrollTop: $(anchor).offset().top},'fast');
}

function hideMainSections(){
  // hides all the main sections of the page
  $('header').hide();
  $('#projects').hide();
  $('#contact').hide();
  $('footer').hide();
}

function showMainSections(){
  // hides all the main sections of the page
  $('header').show();
  $('#projects').show();
  $('#contact').show();
  $('footer').show();
}
