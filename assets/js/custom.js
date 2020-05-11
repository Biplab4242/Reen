// Owl Carousel

      $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:true,
    autoplay: false,
    autoplayTimeout: 8000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})




// Stick Up

jQuery(function($) {
    $(document).ready( function() {
      //enabling stickUp on the '.navbar-wrapper' class
      $('.navbar-wrapper').stickUp();
    });
  });





// //   Stick Up One Pager Navigation

// $(document).ready( function() {
//     //enabling stickUp on the '.navbar-wrapper' class
//     $('.navbar-wrapper').stickUp({
//                   parts: {
//                     0:'home',
//                     1:'features',
//                     2: 'news',
//                     3: 'installation',
//                     4: 'one-pager',
//                     5: 'extras',
//                     6: 'wordpress',
//                     7: 'contact'
//                   },
//                   itemClass: 'menuItem',
//                   itemHover: 'active'
//                 });
//   });



// Wow Animation
new WOW().init();



// Animated Counter
$('#counter-block').ready(function(){
  $('.fb').animationCounter({
    start: 0,
    step: 1,
    delay:100
  });
  $('.bike').animationCounter({
    start: 245677,
    step: 100,
    delay:2000,
    txt: ' km'
  });
  $('.code').animationCounter({
    start: 0,
    end: 570,
    step: 4,
    delay: 1000
  });
  $('.coffee').animationCounter({
    start: 490,
    end: 1560,
    step: 20,
    delay: 900,
    txt: ' cl'
  });
});