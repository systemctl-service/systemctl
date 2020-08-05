(function ($) {
 Drupal.behaviors.SCTL_multipurpose = {
   attach: function (context, settings) {
    "use strict";

  new WOW().init();

  // counter js
  // $('.counter').counterUp({
  //     delay: 10,
  //     time: 2000
  // });

    $('.blog-carousel').owlCarousel({
      loop: true,
      margin: 10,
      autoplay: true,
      dots: false,
      navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
      center: true,
      autoplayHoverPause: true,
      responsive: {
        0:{
            items:1,
            center:false,
            singleItem:true,
            itemsScaleUp:true,
        },
        600:{
            items:2,
             center:false,
            singleItem:false,
            itemsScaleUp:false,
        },
        1000:{
            items:3
        }    
      }
    });
    $('.partners').owlCarousel({
      loop: true,
      margin: 10,
      nav: false,
      dots: false,
      autoplay: false,
      autoplayTimeout: 5000,
      transitionStyle: 'fade',
      responsive: {
        0:{
            items:1
        },
        400:{
            items:2
        },
        700:{
            items:3
        },
        1000:{
            items:5
        }    
      }
    });

    $('.testimonial-carousel').owlCarousel({
      loop: true,
      navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
      nav: true,
      dots: false,
      autoplay: false,
      autoplayTimeout: 5000,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 450,
      centerMode: true,
      focusOnSelect: true,
      mobileFirst: true,
      transitionStyle: "fade",
      responsive: {
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1
        }    
      }
    });


    $('.other-project-items').owlCarousel({
      loop: true,
      navText: ['<i class="fa fa-long-arrow-left"></i>', '<i class="fa fa-long-arrow-right"></i>'],
      nav: true,
      dots: false,
      margin: 10,
      autoplay: false,
      autoplayTimeout: 5000,
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      smartSpeed: 450,
      centerMode: true,
      focusOnSelect: true,
      mobileFirst: true,
      transitionStyle: "fade",
      responsive: {
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3
        }    
      }
    });

    jQuery(window).scroll(function(){
      var scroll = $(window).scrollTop();
      if (scroll >= 100) {
          $("#menu").addClass("sticky");
      } else {
          $("#menu").removeClass("sticky");
      }
    });


    //Scroll to Top
    $("ul.tabs").addClass("tabs-top");
    function headerStyle() {
      if($('body').length){
        var windowpos = $(window).scrollTop();
        var scrollLink = $('.scroll-top');
        if (windowpos >= 250) {
          scrollLink.addClass('open');
           $("ul.tabs").addClass("tabs-top");
        } else {
          scrollLink.removeClass('open');
           $("ul.tabs").removeClass("tabs-top");
        }
      }
    }
    headerStyle();
    // Scroll to Target
    if($('.scroll-to-target').length){
      $(".scroll-to-target", context).once('scrolltopBehavior').on('click', function() {
        var target = $(this).attr('data-target');
         // animate
         $('html, body').animate({
           scrollTop: 0
         }, 2000);
    
      });
    }

  
      $(document).click(function(e) {
        if (!$(e.target).is('.panel-body')) {
          $('.collapse').collapse('hide');      
        }
      });

  $(window).on('scroll', function() {
    headerStyle();
  });
         var main_color = drupalSettings.main_color;
        // alert("Main Color "+main_color);
        $(':root').css('--main-theme-color', main_color);

        $('#clients-count .col-lg-3:last-child').addClass('col-lg-2');
        $('#clients-count .col-lg-2').removeClass('col-lg-3');

}}})(jQuery, Drupal);// End of use strict