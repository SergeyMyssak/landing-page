$(document).ready(function () {

   /*---- MENY BUTTON IN THE HEADER ----*/
   $(".inner-bottom-header-menu").click(function () {
      $(".nav ul").slideToggle();
   });

   /*---- THE MAIN SLIDER ----*/
   $("#slider").owlCarousel({
      dots: true,
      nav: true,
      lazyLoad: true,
      slideSpeed : 300,
      paginationSpeed : 400,
      items: 1,
      animateOut: 'slideOutDown',
      animateIn: 'flipInX'
   });
   /* DOWNLOAD IMAGES FOR SCREEN */
   function windowSize() {
      if ($(window).width() <= '480'){
         $("#img-1").attr("src","../images/1-480x450.jpg");
      } else if ($(window).width() <= '640'){
         $("#img-1").attr("src","../images/1-640x450.jpg");
      } else if ($(window).width() <= '768'){
         $("#img-1").attr("src","../images/1-768x450.jpg");
      } else if($(window).width() <= '992'){
         $("#img-1").attr("src","../images/1-992x450.jpg");
      } else {
         $("#img-1").attr("src","../images/1-1270x450.jpg");
      }
   }
   $(window).load(windowSize);
   $(window).resize(windowSize);

   /*---- ABOUT US SLIDER ----*/
   $(function(){
      $('#prev').click(function() {
         $.getJSON('../json/mini_slider.json', function (data) {
            for (var i = 0; i <= 2 ; i ++){
               if($(".about-statistics-people-content-text").attr( "id") == i) {

                  if (i == 0){
                     $(".about-statistics-people-content-text").attr("id", "2");
                     i = 2;
                  } else if (i == 2){
                     $(".about-statistics-people-content-text").attr("id", "1");
                     i = 1;
                  } else if (i == 1) {
                     $(".about-statistics-people-content-text").attr("id", "0");
                     i = 0;
                  }

                  $('#description').html(data.users[i].description);
                  $('#fullName').html(data.users[i].fullName);
                  $('#android-percent').html(data.users[i].skill.android);
                  $('#apple-percent').html(data.users[i].skill.apple);
                  $('#windows-percent').html(data.users[i].skill.windows);
                  $('#more-percent').html(data.users[i].skill.more);
                  $('#portrait').css("background", data.users[i].img);

                  $('#android').css({
                     background: "linear-gradient(90deg, #00adf0 "+ data.users[i].skill.android + ", #d0d0d0 " + data.users[i].skill.android + ")"
                  });
                  $('#apple').css({
                     background: "linear-gradient(90deg, #00adf0 "+ data.users[i].skill.apple + ", #d0d0d0 " + data.users[i].skill.apple + ")"
                  });
                  $('#windows').css({
                     background: "linear-gradient(90deg, #00adf0 "+ data.users[i].skill.windows + ", #d0d0d0 " + data.users[i].skill.windows + ")"
                  });
                  $('#more').css({
                     background: "linear-gradient(90deg, #00adf0 "+ data.users[i].skill.more + ", #d0d0d0 " + data.users[i].skill.more +")"
                  });
                  break;
               }
            }
         });
      });

      $('#next').click(function() {
         $.getJSON('../json/mini_slider.json', function (data) {
            for (var i = 0; i <= 2 ; i ++){
               if($(".about-statistics-people-content-text").attr( "id") == i) {

                  if (i == 0){
                     $(".about-statistics-people-content-text").attr("id", "1");
                     i = 1;
                  } else if (i == 1){
                     $(".about-statistics-people-content-text").attr("id", "2");
                     i = 2;
                  } else if (i == 2) {
                     $(".about-statistics-people-content-text").attr("id", "0");
                     i = 0;
                  }

                  $('#description').html(data.users[i].description);
                  $('#fullName').html(data.users[i].fullName);
                  $('#android-percent').html(data.users[i].skill.android);
                  $('#apple-percent').html(data.users[i].skill.apple);
                  $('#windows-percent').html(data.users[i].skill.windows);
                  $('#more-percent').html(data.users[i].skill.more);
                  $('#portrait').css("background", data.users[i].img);

                  $('#android').css({
                     background: "linear-gradient(90deg, #00adf0 "+ data.users[i].skill.android + ", #d0d0d0 " + data.users[i].skill.android + ")"
                  });
                  $('#apple').css({
                     background: "linear-gradient(90deg, #00adf0 "+ data.users[i].skill.apple + ", #d0d0d0 " + data.users[i].skill.apple + ")"
                  });
                  $('#windows').css({
                     background: "linear-gradient(90deg, #00adf0 "+ data.users[i].skill.windows + ", #d0d0d0 " + data.users[i].skill.windows + ")"
                  });
                  $('#more').css({
                     background: "linear-gradient(90deg, #00adf0 "+ data.users[i].skill.more + ", #d0d0d0 " + data.users[i].skill.more +")"
                  });
                  break;
               }
            }
         });
      });
   });

   /*---- SLIDERS BLOG ----*/
   $('#blog-slider').owlCarousel({
      mouseDrag: false,
      touchDrag: false,
      loop: true,
      dots: true,
      nav: true,
      margin:3,
      autoWidth:true,
      slideSpeed : 100,
      paginationSpeed : 400
});

   /* IMAGE AND INFO PROCESSING */

   $('#blog-slider .owl-next').click(function() {
      $.getJSON('../json/mini_slider.json', function (data) {
         $('.blog-slider .owl-dots .owl-dot').each(function (i) {
            if ($(this).hasClass("active")) {
               $(".blog-item-" + i).addClass('active');
               $(".blog-item-" + i).attr("style", "opacity: 1 !important");
               if (i < 5) {
                  $('.blog-text-slider-inner h2').html(data.ourBlog[i].header);
                  $('.blog-text-slider-inner .blog-text-slider-text-1').html(data.ourBlog[i].FirstColText);
                  $('.blog-text-slider-inner .blog-text-slider-text-2').html(data.ourBlog[i].SecondColText);
                  $('.row .blog-posted').html(data.ourBlog[i].blogPosted);
               } else {
                  $('.blog-text-slider-inner h2').html(data.ourBlog[i-5].header);
                  $('.blog-text-slider-inner .blog-text-slider-text-1').html(data.ourBlog[i-5].FirstColText);
                  $('.blog-text-slider-inner .blog-text-slider-text-2').html(data.ourBlog[i-5].SecondColText);
                  $('.row .blog-posted').html(data.ourBlog[i-5].blogPosted);
               }
            } else {
               $(".blog-item-" + i).removeClass("active");
               $(".blog-item-" + i).attr("style", "opacity: 0.4 !important");
            }
            return;
         });
      });
   });
   $('#blog-slider .owl-prev').click(function() {
      $.getJSON('../json/mini_slider.json', function (data) {
         $('.blog-slider .owl-dots .owl-dot').each(function (i) {
            if ($(this).hasClass("active")) {
               $(".blog-item-" + i).addClass('active');
               $(".blog-item-" + i).attr("style", "opacity: 1 !important");
               if (i < 5) {
                  $('.blog-text-slider-inner h2').html(data.ourBlog[i].header);
                  $('.blog-text-slider-inner .blog-text-slider-text-1').html(data.ourBlog[i].FirstColText);
                  $('.blog-text-slider-inner .blog-text-slider-text-2').html(data.ourBlog[i].SecondColText);
                  $('.row .blog-posted').html(data.ourBlog[i].blogPosted);
               } else {
                  $('.blog-text-slider-inner h2').html(data.ourBlog[i-5].header);
                  $('.blog-text-slider-inner .blog-text-slider-text-1').html(data.ourBlog[i-5].FirstColText);
                  $('.blog-text-slider-inner .blog-text-slider-text-2').html(data.ourBlog[i-5].SecondColText);
                  $('.row .blog-posted').html(data.ourBlog[i-5].blogPosted);
               }
            } else {
               $(".blog-item-" + i).removeClass("active");
               $(".blog-item-" + i).attr("style", "opacity: 0.4 !important");
            }
            return;
         });
      });
   });

      $(function() {
         $('#toTop').click(function() {
            $('body,html').animate({scrollTop:0},800);
         });
      });

});

