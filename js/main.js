$(document).ready(function(){
    // $('.pet-detalis-group-header-left-photo-slider').slick({
    //     slidesToShow: 1,
    //     infinite: true,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     dots: false,
    //     arrows: true,
    //     pauseOnHover: false
    // });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav'
    });

    $('.slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        arrows: false,
        focusOnSelect: true
    });

    $('.our-customer-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
    });

    // $('#productsSlider').slick({
    //     slidesToShow: 6,
    //     infinite: true,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     dots: false,
    //     arrows: true,
    //     pauseOnHover: false,
    //     responsive: [
    //         {
    //             breakpoint: 1200,
    //             settings: {
    //                 slidesToShow: 4,
    //                 slidesToScroll: 4,
    //                 infinite: true,
    //                 dots: false
    //             }
    //         },
    //         {
    //             breakpoint: 992,
    //             settings: {
    //                 slidesToShow: 3,
    //                 slidesToScroll: 3,
    //                 infinite: true,
    //                 dots: false
    //             }
    //         },
    //         {
    //             breakpoint: 768,
    //             settings: {
    //                 slidesToShow: 2,
    //                 slidesToScroll: 2,
    //                 infinite: true,
    //                 dots: false
    //             }
    //         },
    //         {
    //             breakpoint: 576,
    //             settings: {
    //                 slidesToShow: 1,
    //                 slidesToScroll: 1,
    //                 infinite: true,
    //                 dots: false
    //             }
    //         }
    //     ]
    // });
});


    // $('.slider-for').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.slider-nav'
    // });
    // $('.slider-nav').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     asNavFor: '.slider-for',
    //     dots: true,
    //     centerMode: true,
    //     focusOnSelect: true
    // });
    