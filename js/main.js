$(function(){
//Slick-banner1
$('.banner_slick').slick ({
  dots:true,
  prevArrow:'<span class="prev-arrow"><i class="fa fa-angle-left"></i></span>',
  nextArrow:'<span class="next-arrow"><i class="fa fa-angle-right"></i></span>',
  autoplay:true,
  autoplaySpeed: 3000,
  fade:true,
  
});
//youtube video
$("a.bla-2").YouTubePopUp( { autoplay: 0 } );

 //gallery images zoom with venobox
 $('.venobox').venobox({
  border: '10px',
  spinner: 'wandering-cubes',
  spinColor: '#e23e38'
}); 

//Team part
$('.team_slide').slick({
  dots: false,
  arrows: false,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1, 
      }
    }, 
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

//testimonial slide
$('.client_slide').slick({
  dots: true,
  arrows: false,
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
  ]
});

  //counter up 
  $('.counter').counterUp({
    delay: 20,
    time: 3000,
  });

   //classes tab with colorfull tab
   $('#colorful').colorfulTab({
    overlayColor: "#000",
    overlayOpacity: ".6"
  });
});
