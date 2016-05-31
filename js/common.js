$(document).ready(function() {

    var navHeight = $('.top-nav').outerHeight();
    $('.firstScreen').css('height', $(window).height() + navHeight);
    var headerHeight = $('.firstScreen').outerHeight();
    var top = 0;

    $(window).scroll(function(){
        top = $(this).scrollTop();

        if((headerHeight - top) <= navHeight){
            $('.top-nav').addClass("-fixed");
        }
        else if(top < headerHeight && top > 0){
            $('.top-nav').removeClass("-fixed");
        }

        scrollPos = top;
    });


    // var scrollPos = 0;
    // $(window).scroll(function(){
    //     var st = $(this).scrollTop();
    //     if (st > scrollPos &&  st < headerHeight){
    //         headerHeight = headerHeight - 1;
    //         $('#js-header-top').animate({
    //             height: headerHeight
    //         },50);
    //     } else if (st < scrollPos && st < headerHeight){
    //         headerHeight = headerHeight + 1;
    //         $('#js-header-top').animate({
    //             height: headerHeight
    //         },50);
    //     }
    //     scrollPos = st;
    // });

// main-slider
  $('.main-slider').slick({
  dots: true,
  infinite: true,
  speed: 600,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 3000,
  stoponhover: true,
});

 // category-slider

 $('.slider-for-card').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-card-nav'
});

$('.slider-card-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.slider-for-card',
  dots: true,
  // centerMode: true,
  focusOnSelect: true,
   responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        centerMode: false,
      }
    }]
});

// Top menu toggler
  var toggler = document.getElementById('js-top-toggler');
  toggler.onclick = function(e){
     e.preventDefault();
     toggler.classList.toggle('-active');
     document.getElementById('js-top-menu').classList.toggle('openned');
 };

// Left menu toggler
  var togglerLeft = document.getElementById('js-left-toggler');
  togglerLeft.onclick = function(e){
     e.preventDefault();
     togglerLeft.classList.toggle('-active');
     document.getElementById('js-left-menu').classList.toggle('openned');
 };

});

