(function ($) {
    "use strict";

        if ($('.banner_slider').length) {
          $('.banner_slider').slick({
               dots: true,
               arrows: false,
               infinite: true,
               speed: 300,
               slidesToShow: 1,
               slidesToScroll: 1,
               autoplay: false,
               autoplaySpeed: 2000,
               pauseOnHover: true,
               pauseOnFocus: true,
               prevArrow: '<button type="button" class="slick-prev"><svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.76459 19.0665L11.2501 27.552L13.3711 25.431L5.94609 18.006L13.3711 10.581L11.2501 8.45996L2.76459 16.9455C2.48339 17.2268 2.32541 17.6082 2.32541 18.006C2.32541 18.4037 2.48339 18.7852 2.76459 19.0665Z" fill="black"/></svg></button>',
               nextArrow: '<button type="button" class="slick-next"><svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2354 19.0665L6.74991 27.552L4.62891 25.431L12.0539 18.006L4.62891 10.581L6.74991 8.45996L15.2354 16.9455C15.5166 17.2268 15.6746 17.6082 15.6746 18.006C15.6746 18.4037 15.5166 18.7852 15.2354 19.0665Z" fill="black"/></svg></button>',
               responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
               ]
          });
        }

        // start menu js


        // leadership js start
        
            $('.founder_slider').slick({
                dots: true,
                arrows: false,
                infinite: true,
                speed: 500,
                slidesToShow: 1,
                adaptiveHeight: true
            });
    

            $(".popup_btn").click(function() {
                $(".popup_main").fadeIn(500);
              });

              $(".close").click(function() {
                $(".popup_main").fadeOut(500);
            });

              


        $('.videosecclick a').click(function(){
            $('.videosecclick a').removeClass('activelink');
            $(this).addClass('activelink');
            var tagid = $(this).data('tag');
            $('.video_testimonail_list').removeClass('active').addClass('hide');
            $('#'+tagid).addClass('active').removeClass('hide');
        });
        

        $(".mobile_menu_toggle").click(function (e) {
            e.preventDefault();
            e.stopPropagation();
            $(".right_menu").slideToggle();
          });
       
          
          $('.menu_arrow').on('click',function() {
            $(this).parent("li").toggleClass('active');
            $(this).parent("li").siblings().removeClass('active');
            $('.drop_down_inner ul li.active').not($(this).parents("li")).removeClass("active");
          });
          
          
          
        //   $('.search_btn').click(function() {
        //     $('.searchSec').toggleClass('active');
        //   });


        // end menu js

         


        if ($('.platform_slider').length) {
            $('.platform_slider').slick({
                 dots: true,
                 arrows: false,
                 infinite: true,
                 speed: 300,
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 autoplay: false,
                 autoplaySpeed: 2000,
                 pauseOnHover: true,
                 pauseOnFocus: true,
                 fade: true,
                 prevArrow: '<button type="button" class="slick-prev"><svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.76459 19.0665L11.2501 27.552L13.3711 25.431L5.94609 18.006L13.3711 10.581L11.2501 8.45996L2.76459 16.9455C2.48339 17.2268 2.32541 17.6082 2.32541 18.006C2.32541 18.4037 2.48339 18.7852 2.76459 19.0665Z" fill="black"/></svg></button>',
                 nextArrow: '<button type="button" class="slick-next"><svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2354 19.0665L6.74991 27.552L4.62891 25.431L12.0539 18.006L4.62891 10.581L6.74991 8.45996L15.2354 16.9455C15.5166 17.2268 15.6746 17.6082 15.6746 18.006C15.6746 18.4037 15.5166 18.7852 15.2354 19.0665Z" fill="black"/></svg></button>',
                 responsive: [
                      {
                          breakpoint: 1024,
                          settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1
                          }
                      },
                      {
                          breakpoint: 600,
                          settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1
                          }
                      }
                 ]
            });
          }



          $('.certification_slider').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 4000,
            pauseOnHover: false,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
           ]
          });


          $(".play_btn").on("click", function () {
            console.log("run");
            let vidSrc = $(this).siblings("iframe");
            let coverBg = $(this).siblings(".video_thumbnail");
            vidSrc.trigger("play");
            coverBg.hide();
            $(this).hide();
          });


          if ($('.faq_accordion').length) {
            $(".faq_accordion .accordion_title").on("click", function(){
                $(this).siblings(".accordion_content").slideToggle(300);
                $(this).parent().siblings().find(".accordion_content").slideUp(300);
                $(this).parent().siblings().find(".accordion_title").removeClass("active");
                $(this).parent().siblings().removeClass("active");
                $(this).parent().toggleClass("active");
                $(this).toggleClass("active");
            });
        }

          if ($('.fact_accordion').length) {
            $(".fact_accordion .accordion_title").on("click", function(){
                $(this).siblings(".accordion_content").slideToggle(300);
                $(this).parent().siblings().find(".accordion_content").slideUp(300);
                $(this).parent().siblings().find(".accordion_title").removeClass("active");
                $(this).parent().siblings().removeClass("active");
                $(this).parent().toggleClass("active");
                $(this).toggleClass("active");
            });
        }
          if ($('.mission_section').length) {
            $(".mission_section .accordion_title").on("click", function(){
                $(this).siblings(".accordion_content").slideToggle(300);
                $(this).parent().siblings().find(".accordion_content").slideUp(300);
                $(this).parent().siblings().find(".accordion_title").removeClass("active");
                $(this).parent().siblings().removeClass("active");
                $(this).parent().toggleClass("active");
                $(this).toggleClass("active");
            });
        }

        if ($('.adv_accordion').length) {
            $(".adv_accordion .accordion_title").on("click", function(){
                $(this).siblings(".accordion_content").slideToggle(300);
                $(this).parent().siblings().find(".accordion_content").slideUp(300);
                $(this).parent().siblings().find(".accordion_title").removeClass("active");
                $(this).parent().siblings().removeClass("active");
                $(this).parent().toggleClass("active");
                $(this).toggleClass("active");
            });
        }

        if ($('.counter_li').length) {
            $('.odometer').appear(function (e) {
            var odo = $(".odometer");
            odo.each(function () {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
            });
        }


        if ($('.js-select2').length) {
            $(".js-select2").select2({
                closeOnSelect : true,
                placeholder : "Select",
                allowHtml: true,
                allowClear: true,
                tags: true // создает новые опции на лету
            });
        }
        

        


        
   
        $('.trusted_slider').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 8000,
            pauseOnHover: false,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
           ]
          });



      
          $(".uniquely_slider").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 500,
            autoplaySpeed: 5000,
            infinite: true,
            autoplay: false,
            centerMode: true,
            centerPadding: "0",
            prevArrow: '<button type="button" class="slick-prev"><svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.76459 19.0665L11.2501 27.552L13.3711 25.431L5.94609 18.006L13.3711 10.581L11.2501 8.45996L2.76459 16.9455C2.48339 17.2268 2.32541 17.6082 2.32541 18.006C2.32541 18.4037 2.48339 18.7852 2.76459 19.0665Z" fill="black"/></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2354 19.0665L6.74991 27.552L4.62891 25.431L12.0539 18.006L4.62891 10.581L6.74991 8.45996L15.2354 16.9455C15.5166 17.2268 15.6746 17.6082 15.6746 18.006C15.6746 18.4037 15.5166 18.7852 15.2354 19.0665Z" fill="black"/></svg></button>',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
           ]
          });

       


          if ($('.testmonial_slider').length) {
             $('.testmonial_slider').slick({
                 dots: true,
                 arrows: false,
                 infinite: true,
                 speed: 300,
                 slidesToShow: 1,
                 slidesToScroll: 1,
                 autoplay: false,
                 autoplaySpeed: 2000,
                 pauseOnHover: true,
                 pauseOnFocus: true,
                 prevArrow: '<button type="button" class="slick-prev"><svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.76459 19.0665L11.2501 27.552L13.3711 25.431L5.94609 18.006L13.3711 10.581L11.2501 8.45996L2.76459 16.9455C2.48339 17.2268 2.32541 17.6082 2.32541 18.006C2.32541 18.4037 2.48339 18.7852 2.76459 19.0665Z" fill="black"/></svg></button>',
                 nextArrow: '<button type="button" class="slick-next"><svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2354 19.0665L6.74991 27.552L4.62891 25.431L12.0539 18.006L4.62891 10.581L6.74991 8.45996L15.2354 16.9455C15.5166 17.2268 15.6746 17.6082 15.6746 18.006C15.6746 18.4037 15.5166 18.7852 15.2354 19.0665Z" fill="black"/></svg></button>',
                 responsive: [
                      {
                          breakpoint: 1024,
                          settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1
                          }
                      },
                      {
                          breakpoint: 600,
                          settings: {
                              slidesToShow: 1,
                              slidesToScroll: 1
                          }
                      }
                 ]
            });
          }



          if ($('.case_study_slider').length) {
            $('.case_study_slider').slick({
                dots: false,
                arrows: true,
                infinite: true,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                pauseOnHover: true,
                pauseOnFocus: true,
                prevArrow: '<button type="button" class="slick-prev"><svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.76459 19.0665L11.2501 27.552L13.3711 25.431L5.94609 18.006L13.3711 10.581L11.2501 8.45996L2.76459 16.9455C2.48339 17.2268 2.32541 17.6082 2.32541 18.006C2.32541 18.4037 2.48339 18.7852 2.76459 19.0665Z" fill="currentColor"/></svg></button>',
                nextArrow: '<button type="button" class="slick-next"><svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2354 19.0665L6.74991 27.552L4.62891 25.431L12.0539 18.006L4.62891 10.581L6.74991 8.45996L15.2354 16.9455C15.5166 17.2268 15.6746 17.6082 15.6746 18.006C15.6746 18.4037 15.5166 18.7852 15.2354 19.0665Z" fill="currentColor"/></svg></button>',
                responsive: [
                     {
                         breakpoint: 1024,
                         settings: {
                             slidesToShow: 1,
                             slidesToScroll: 1
                         }
                     },
                     {
                         breakpoint: 600,
                         settings: {
                             slidesToShow: 1,
                             slidesToScroll: 1
                         }
                     }
                ]
           });
         }



         if ($('.what_we_do_slider').length) {
            $('.what_we_do_slider').slick({
                dots: true,
                arrows: false,
                infinite: true,
                speed: 2000,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnHover: true,
                pauseOnFocus: true,
                prevArrow: '<button type="button" class="slick-prev"><svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.76459 19.0665L11.2501 27.552L13.3711 25.431L5.94609 18.006L13.3711 10.581L11.2501 8.45996L2.76459 16.9455C2.48339 17.2268 2.32541 17.6082 2.32541 18.006C2.32541 18.4037 2.48339 18.7852 2.76459 19.0665Z" fill="currentColor"/></svg></button>',
                nextArrow: '<button type="button" class="slick-next"><svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2354 19.0665L6.74991 27.552L4.62891 25.431L12.0539 18.006L4.62891 10.581L6.74991 8.45996L15.2354 16.9455C15.5166 17.2268 15.6746 17.6082 15.6746 18.006C15.6746 18.4037 15.5166 18.7852 15.2354 19.0665Z" fill="currentColor"/></svg></button>',
                responsive: [
                     {
                         breakpoint: 1024,
                         settings: {
                             slidesToShow: 1,
                             slidesToScroll: 1
                         }
                     },
                     {
                         breakpoint: 600,
                         settings: {
                             slidesToShow: 1,
                             slidesToScroll: 1
                         }
                     }
                ]
           });
         }


          $('.our_partners_slider').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 8000,
            pauseOnHover: false,
            cssEase: 'linear',
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
           ]
          });

          $('.our_partners_slider_two').slick({
            slidesToShow: 6,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 0,
            speed: 8000,
            pauseOnHover: false,
            cssEase: 'linear',
            rtl: true, 
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });
        
        
        if ($('.card_wrap').length) {
            $('.card_wrap_slider').slick({
                dots: true,
                arrows: false,
                infinite: true,
                speed: 1500,
                vertical: true,
                verticalSwiping: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 2000,
                pauseOnHover: true,
                pauseOnFocus: true,
                prevArrow: '<button type="button" class="slick-prev"><svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.76459 19.0665L11.2501 27.552L13.3711 25.431L5.94609 18.006L13.3711 10.581L11.2501 8.45996L2.76459 16.9455C2.48339 17.2268 2.32541 17.6082 2.32541 18.006C2.32541 18.4037 2.48339 18.7852 2.76459 19.0665Z" fill="currentColor"/></svg></button>',
                nextArrow: '<button type="button" class="slick-next"><svg width="18" height="36" viewBox="0 0 18 36" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.2354 19.0665L6.74991 27.552L4.62891 25.431L12.0539 18.006L4.62891 10.581L6.74991 8.45996L15.2354 16.9455C15.5166 17.2268 15.6746 17.6082 15.6746 18.006C15.6746 18.4037 15.5166 18.7852 15.2354 19.0665Z" fill="currentColor"/></svg></button>',
                responsive: [
                     {
                         breakpoint: 1024,
                         settings: {
                             slidesToShow: 1,
                             slidesToScroll: 1
                         }
                     },
                     {
                         breakpoint: 600,
                         settings: {
                             slidesToShow: 1,
                             slidesToScroll: 1
                         }
                     }
                ]
           });
         }

         

        $('.testmonialclick a').click(function(){
            $('.testmonialclick a').removeClass('activelink');
            $(this).addClass('activelink');
            var tagid = $(this).data('tag');
            $('.testmoniallist').removeClass('active').addClass('hide');
            $('#'+tagid).addClass('active').removeClass('hide');
            $('.testmonial_slider').slick('setPosition');
        });

        $('.header_main .search-main').click(function(){
            $('.search-form-main').toggleClass('active-search');
            $('.search-form-main .search-field').focus();
        });


    


        $( window ).resize( function() {
  
            if ( window.matchMedia( '(min-width:767px)' ).matches ) {
              
             

   
         // Detect home page animation frame

         var scroll = window.requestAnimationFrame ||
         function (callback) { window.setTimeout(callback, 1000 / 60) };
     var elementsToShow = document.querySelectorAll('.show-on-scroll');
     function loop() {
         Array.prototype.forEach.call(elementsToShow, function (element) {
             if (isElementInViewport(element)) {
                 element.classList.add('is-visible');
             } else {
                 element.classList.remove('is-visible');
             }
         });
 
         scroll(loop);
     }
 
     loop();
     function isElementInViewport(el) {
         if (typeof jQuery === "function" && el instanceof jQuery) {
             el = el[0];
         }
         var rect = el.getBoundingClientRect();
         return (
             (rect.top <= 0
                 && rect.bottom >= 0)
             ||
             (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
                 rect.top <= (window.innerHeight || document.documentElement.clientHeight))
             ||
             (rect.top >= 0 &&
                 rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
         );
     }
 


              
            }  
          
        } );
        $( window ).resize();
        




    // end Detect home page animation frame


//  thanks you page js start 
   

       



    /********************** wow animation *********************/
      // wow animation off on Mobile
    //   wow = new WOW(
    //     {
    //     boxClass:     'wow',      // default
    //     animateClass: 'animated', // default
    //     offset:       0,          // default
    //     mobile:       false,       // default
    //     live:         true        // default
    //   }
    //   )
    //   wow.init();

    $(window).on('load', function () {
        aosAnimation();
      });
      function aosAnimation() {
        AOS.init({
          duration: 1000,
          easing: 'ease',
          mirror: true,
          once: true,
          disable: 'mobile',
        });
      }


      $(".menu_dropdown").hover(
        function() {
            $("body").addClass("scroll_hidden");
        },
        function() {
            $("body").removeClass("scroll_hidden");
        }
    );

      
})(jQuery);


