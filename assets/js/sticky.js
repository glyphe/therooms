$(document).ready(function() {  
var stickyNavTop = $('.nav-inpage').offset().top;  
  
var stickyNav = function(){  
var scrollTop = $(window).scrollTop();  
       
if (scrollTop > stickyNavTop) {   
    $('.nav-inpage').addClass('sticky');  
} else {  
    $('.nav-inpage').removeClass('sticky');   
}  
};  
  
stickyNav();  
  
$(window).scroll(function() {  
    stickyNav();  
});  
});