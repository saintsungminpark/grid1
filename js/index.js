$(function() {
    var wrapper = document.querySelector('.wrapper')
    var nav = $('nav ul');

    $(wrapper).on('click', function(e) {
        e.preventDefault();
        wrapper.classList.toggle('toggle');
        nav.slideToggle();
    });

    $(window).resize(function() {
        var w = $(window).width();
        if (w > 320 && nav.is(':hidden')) {
            nav.removeAttr('style');
        }
    });
});