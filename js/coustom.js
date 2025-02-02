// ------nav----------


$(window).scroll(function(){

    var scroll = $(this).scrollTop();
    if (scroll > 200) {
        $('.navbar').addClass("navbg");
    } else {
        $('.navbar').removeClass("navbg");
    }
  
  });