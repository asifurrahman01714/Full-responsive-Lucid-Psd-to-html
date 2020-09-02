$(function () {
    $.scrollUp({
      scrollSpeed: 300,
      scrollImg: true
    });
   
});


AOS.init();

$('.owl-carousel').owlCarousel({
  loop:true,
  margin:10,
  nav:false,
  autoplay: true,
  autoplayTimeout: 7000,
  autoplayHoverPause: true,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:2
      }
  }
})