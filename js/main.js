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
});
