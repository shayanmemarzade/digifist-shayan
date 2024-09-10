
$(document).ready(function () {
    // initialize slider
    $('.product-list__slider').slick({
        slidesToShow: 2.2,
        slidesToScroll: 1,
        infinite: false,
        nextArrow: '.product-list__button--next',
        prevArrow: '.product-list__button--previous',
        variableWidth: true,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2.1,
                    slidesToScroll: 1,
                    variableWidth: false,
                }
            }
        ]
    });
    // selecting active color
    $('.product__color').click(function () {
        $(this).parent().find('.product__color--active').removeClass('product__color--active');
        $(this).addClass('product__color--active');
    });
});