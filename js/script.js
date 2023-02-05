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
    $('ul.katalog_list-wrapper').on('click', 'li:not(.katalog__list-active)', function() {
        $(this)
        .addClass('katalog__list-active').siblings().removeClass('katalog__list-active')
    });

        $('.katalog__container').each(function(i) {
            $(this).on('click', function(e) {
                e.preventDefault();
                $('.katalog__container').eq(i).toggleClass('katalog__container-active');
            })
        });
});