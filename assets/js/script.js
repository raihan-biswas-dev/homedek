$(function ($) {
    'use strict';


    $('.banner_slider').slick({

        dots: true,
        arrows: true,
        autoplay: false,
        speed: 300,
        nextArrow: '<span><i class="fas fa-chevron-right clien_next"></i></span>',
        prevArrow: '<span><i class="fas fa-chevron-left clien_prev"></i></span>',

    });





    // About slider Start

    $('.slick_slider').slick({

        dots: false,
        arrows: true,
        autoplay: true,
        speed: 300,
        nextArrow: '<span class="btn_nxt"><i class="fas fa-chevron-right"></i>',
        prevArrow: '<span class="btn_prv"><i class="fas fa-chevron-left"></i></span>',

    });


    //Gallery Part Start


    $(document).ready(function () {
        $('.venobox').venobox();
    });



    //Service Slider Start


    $('.service_slider').slick({

        dots: false,
        arrows: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 300,
        nextArrow: '<span class="serv_right"><i class="fas fa-chevron-right"></i></span>',
        prevArrow: '<span class="serve_left"><i class="fas fa-chevron-left"></i></span>',

    });


    // counter part
    $('.count').counterUp({
        delay: 15,
        time: 1000,
    });



    //parallax js start

    $('.parallax-window').parallax();


    //Scroll animation Js

    new WOW().init({

    });


    //Team Slider Start
    $('.team_slider').slick({

        dots: false,
        arrows: true,
        autoplay: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 300,
        nextArrow: '<span class="serv_right"><i class="fas fa-chevron-right"></i></span>',
        prevArrow: '<span class="serve_left"><i class="fas fa-chevron-left"></i></span>',

    });

    //Contact Parallax js

    $('.parallax-window').parallax();



});
