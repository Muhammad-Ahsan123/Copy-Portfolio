$(document).ready(function () {
    console.log('fdjkfjkdjfkjk');

    $(".owl-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            560: {
                items: 2
            },
        }
    });

    let $btn = $('.image-section ul li');
    let $btn1 = $('.image-section ul li').first();
    console.log($btn1);

    $btn1.addClass('active');

    let selector = $btn1.attr('data-filter');

    $('.image-section .image-div').isotope({
        filter: selector
    });

    $btn.click(function (e) {
        e.target.classList.add('active')
        let selector = $(e.target).attr('data-filter')
        $('.image-section .image-div').isotope({
            filter: selector
        });
        return false
    })
    let $menu = $('.menu');
    let $hamburger = $('.for-mob-section');
    $menu.click(function () {
        console.log('sadjsadhjshdjs')
        // $hamburger.css('display', 'block')
        $hamburger.toggleClass('active');
    })


});