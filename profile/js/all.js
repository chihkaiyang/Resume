$(document).ready(function () {
    $('.scrolltop').click(function (event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 300);
    });
});