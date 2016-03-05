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
  var item  = $('.slider .item');
  var nmbSl = item.length;
  var curAct = curPosition();
  var circle = $('.contr-circle li');
  var nextAct = curAct;
  $('.controller').click(function() {
    //curent active item
    curAct = curPosition();
    //next active item
    nextAct = curAct;
    if($(this).hasClass('left')){
    	nextAct = (curAct-1) % nmbSl;
      if(nextAct<0){
      	nextAct = nmbSl-1;
      }
    }else if ($(this).hasClass('right')){
    	nextAct = (curAct+1) % nmbSl;
    };
    $(item[curAct]).removeClass('active').animate({opacity:0});
    $(item[nextAct]).animate({opacity:1},1000).addClass('active');
    $(circle[curAct]).removeClass('circ-act');
    $(circle[nextAct]).addClass('circ-act');
  });
  function curPosition() {
    var res;
    var i = -1;
    $('.slider .item').each(function() {
       ++i;
       if($(this).hasClass('active')){
        	  return res = i;
  				}
        });
    return res;   
  };
});