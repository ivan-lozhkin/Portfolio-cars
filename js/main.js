$(function(){

   $('.top__slider').slick({
    arrows:false,
    dots: true, /* это точки, они же переключатели */
    autoplay:true, /* это авто пролистование */
    fade: true ,  /* перемещение слайда в блике */
    responsive: [ /* отключение dots на 1200px*/ 
      {
         breakpoint: 1200,
         settings: {
            dots: false
         }
      },
    ]
   }); 

   $('.reviews__slider').slick({
      arrows: false,
      dots:true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [ /* отключение dots на 1200px*/ 
      {
         breakpoint: 1200,
         settings: {
            slidesToShow: 3,
         }
      },
      {
         breakpoint: 881,
         settings: {
            slidesToShow: 2,
         }
      },
      {
         breakpoint: 552,
         settings: {
            slidesToShow: 1,
         }
      },
    ]
   });


   $('.menu__btn').on('click', function(){
      $('.menu__list').toggleClass('menu__list--active');
   });

});