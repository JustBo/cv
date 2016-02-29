$(function(){
  $('#menu-btn').click(function() {
    $('.top-nav ul').toggleClass('show');
  });
  $(window).scroll(function(e) {
    if(window.scrollY > 400) {
      $('#totop').show('3000');  
    }else{
      $('#totop').hide('3000');
    }
  });
  $('a[href^="#"').click( function() {
    if($(this).attr('class') === "scroll"){
      var scroll_element = $(this).attr('href'); 
    }
	  $('html, body').animate({ scrollTop:$(scroll_element).offset().top }, 900); 
	  return false;
  });
});
