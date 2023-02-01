$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        nextArrow: '<button type="button" class="slick-next"><img src="img/icons/chevron right solid.png" alt="arrow"></button>',
        prevArrow: '<button type="button" class="slick-prev"><img src="img/icons/chevron left solid.png" alt="arrow"></button>',
        responsive: [
            {
                breakpoint: 779,
                settings: {
                    arrows: false
                }
            }
        ]
    });
});