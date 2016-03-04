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
  $('.controller').click(function() {
  	var item  = $('.slider .item');
  	var nmbSl = item.length;
    var i = -1;
    var curAct = 0;
    //curent active item
    $('.slider .item').each(function() {
      ++i;
      if($(this).hasClass('active')){
      	  curAct = i;
				};
      });
    //next active item
    var nextAct = curAct;
    if($(this).hasClass('left')){
    	var nextAct = (curAct-1) % nmbSl;
      if(nextAct<0){
      	nextAct = nmbSl-1;
      }
    }else if ($(this).hasClass('right')){
    	var nextAct = (curAct+1) % nmbSl;
    };
    $(item[curAct]).removeClass('active').animate({opacity:0});
    $(item[nextAct]).animate({opacity:1},1000).addClass('active');
  });
});
