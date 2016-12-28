    
$(window).scroll(function() {
  if( $(this).scrollTop() > 670 ) {
    $("nav").addClass("main-nav-scrolled");
  } else {
    $("nav").removeClass("main-nav-scrolled");
  }
});


// var  mn = $(".main-nav");
//     mns = "main-nav-scrolled";
//     hdr = $('header').height();

// $(window).scroll(function() {
//   if( $(this).scrollTop() > hdr ) {
//     mn.addClass(mns);
//   } else {
//     mn.removeClass(mns);
//   }

