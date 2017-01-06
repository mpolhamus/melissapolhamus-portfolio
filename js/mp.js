    
$(window).scroll(function() {
  if( $(this).scrollTop() > 670 ) {
    $("nav").addClass("main-nav-scrolled");
  } else {
    $("nav").removeClass("main-nav-scrolled");
  }
});


// Landing Page - BIO

$(".MP-logo img").on("mouseenter", function(){
	$(".black-logo img").addClass("black-logo-hidden");
	$(".white-logo img").removeClass("white-logo-hidden");
	// $("body").addClass("gray-background");

});

$(".MP-logo img").on("mouseleave", function(){
	$(".black-logo img").removeClass("black-logo-hidden");
	$(".white-logo img").addClass("white-logo-hidden");
	// $("body").removeClass("gray-background");

});


$(".MP-logo img").on("click", function(){
	$(".MP-logo").addClass("MP-logo-hidden");
	$(".MP-bio").removeClass("MP-bio-hidden");
});

$(".MP-bio h1").on("click", function(){
	$(".MP-logo").removeClass("MP-logo-hidden");
	$(".MP-bio").addClass("MP-bio-hidden");
});

