(function() {
    // gnb 메뉴
    $('.gnb .depth1>li').on('mouseenter', function() {
        $(this).find('.depth2_wrap').stop().slideDown(300);
        $(this).addClass('on');
    }).on('mouseleave', function() {
        $(this).find('.depth2_wrap').stop().slideUp(300);
        $(this).removeClass('on');
    });

    // 검색 모달
    $('#header .btn_search_toggle').on('click', function() {
        $('#header .dimm').toggle();
        $(this).toggleClass('on');
        $('.search_box').toggleClass('on');
        $('body').toggleClass('hidden');
    });

      // 모바일 아코디언
    $('.m_gnb_box .depth1>li>a').on('click', function() {
        $(this).siblings('.depth2').slideToggle().parent().siblings().find('.depth2').slideUp();
        $(this).parent().toggleClass('on').siblings().removeClass('on');

    });

    $('.m_gnb_box .depth2>li>a').on('click', function() {
        $(this).siblings('.depth3').slideToggle().parent().siblings().find('.depth3').slideUp();
        $(this).parent().toggleClass('on').siblings().removeClass('on');
    });

    $('#header .btn_menu').on('click', function() {
        $('#header .m_gnb_box').addClass('open');
        $('#header .btn_close').show();
        $('body').addClass('hidden');
    });

    // gnb 닫기
    $('#header .btn_close').on('click', function() {
        $('#header .m_gnb_box').removeClass('open');
        $('#header .btn_close').hide();
        $('body').removeClass('hidden');
    });


    var mainSlider = new Swiper('.main_slider', {
        loop: true,
        // spaceBetween: 30,
        slidesPerView: 'auto',
        // effect: "fade",
        centeredSlides: true,
        // autoplay: {
        //   delay: 7000,
        //   disableOnInteraction: false,
        // },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        on: {
            init: function() {
                // 시작시 active video 실행
               $('.main_slider .swiper-slide-active video')[0].play();
            },
        },
    });

    mainSlider.on('slideChangeTransitionEnd', function () {
        $('.main_slider .swiper-slide-active').addClass('delay');

        // 비디오 전체 일시정지 후 첫화면으로 이동
        $(".main_slider .swiper-slide video").each(function(i, v) {
            this.pause();
            this.currentTime = 0;
        })

        $('.main_slider .swiper-slide-active video')[0].play();
    });

    var mainSliderFlag = true;
   
    $('.main_slider .pag_wrap .btn_slider_toggle').on('click', function() {
      $(this).toggleClass('play');

      if(mainSliderFlag) {
        mainSlider.autoplay.stop();
      } else {
        mainSlider.autoplay.start();
      }
      mainSliderFlag = !mainSliderFlag;
    });


})();