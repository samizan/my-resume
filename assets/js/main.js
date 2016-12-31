$(document).ready(function () {
    $(".typed-element").typed({
        strings: ["Welcome", "Hoş^700geldiniz", "Wil^700lkommen", "ようこそ", "Bienvenido", "Welc^700ome"],
        typeSpeed: 300,
        loop: false,
        showCursor: false
    });
});

$(function () {
    $('a[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 50
                }, 1000);
                return false;
            }
        }
    });
});

var prev = 0;
var $window = $(window);
var nav = $('.navbar');

$window.on('scroll', function () {
    var scrollTop = $window.scrollTop();
    nav.toggleClass('hidden', scrollTop > prev);
    prev = scrollTop;
});