$(function(){
  $('.home-soc').animate({marginTop:'5px'},1000);
  $('.home-content,.home-avat').animate({opacity:1},1000);
  //menu for small device
  $('#menu-btn').click(function() {
    $('.top-nav ul').toggleClass('show');
  });
  //to top button
  var stop = 1;
  $(window).scroll(function(e) {
    if(window.scrollY > 600) {
      $('#totop').show('3000');  
    }else{
      $('#totop').hide('3000');
    };
    if (window.scrollY + $(window).height() > $('#projects h2').offset().top) {
      $('#projects h2').animate({opacity:1},1000);
    };
    if (window.scrollY + $(window).height() > $('#gform').offset().top) {
      $('#gform').animate({height:'100%',width:'100%'},2000);
    };
    if (window.scrollY + $(window).height() > $('.skillset').offset().top) {
      $('#html').animate({width:'70%'},2000);
      $('#css').animate({width:'60%'},2000);
      $('#js').animate({width:'40%'},2000);
      if(stop){
        stop = 0;
        $('.skill-value span').each(function () {
            $(this).prop('Counter',0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
      };
    };
  });
  //anchors smouth
  $('a[href^="#"').click( function() {
    if($(this).attr('class') === "scroll"){
      var scroll_element = $(this).attr('href'); 
    }
	  $('html, body').animate({ scrollTop:$(scroll_element).offset().top }, 900); 
	  return false;
  });
  //slider
  var item  = $('.slider .item');
  var nmbSl = item.length;
  var curAct = curPosition();
  var circle = $('.contr-circle li');
  var nextAct = curAct+1;
  setInterval(function(){
    curAct  = curPosition();
    nextAct = (curAct+1) % nmbSl;
    change();
  },4000);
  $('.contr-circle li').click(function() {
    curAct  = curPosition();
    nextAct = $(this).data('slide');
    change();
  });
  $('.controller').click(function() {
    curAct = curPosition();
    if($(this).hasClass('left')){
    	nextAct = (curAct-1) % nmbSl;
      if(nextAct<0){
      	nextAct = nmbSl-1;
      }
    }else if ($(this).hasClass('right')){
    	nextAct = (curAct+1) % nmbSl;
    };
    change();
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
  function change() {
    $(item[curAct]).removeClass('active').animate({opacity:0});
    $(item[nextAct]).animate({opacity:1},1000).addClass('active');
    $(circle[curAct]).removeClass('circ-act');
    $(circle[nextAct]).addClass('circ-act');
  };
});