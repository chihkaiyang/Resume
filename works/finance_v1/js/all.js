
//漢堡選單
$(document).ready(function () {
    $('.header_box').click(function (e) {
        e.preventDefault();
        $('.hamList').slideToggle(500);;
    });
    $('.hamList_close').click(function (e) { 
        e.preventDefault();
        $('.hamList').hide();
    });
});


$(document).ready(function () {
    $('.F4_toggleTitle').click(function (event) {
        event.preventDefault()
        $(this).toggleClass('active').parent('.F4_menuList').find('.F4_togglecontent').slideToggle();
        $(this).parent().siblings().find('.F4_togglecontent').slideUp();
        $(this).parents('.F4_menuList').siblings().find('.F4_toggleTitle').removeClass('active');
    });

    //switch tab
    $('.F4_select').find('.tabs > .F4_selectItems').eq(0).addClass('active'); //預設顯示
    $('.F4_select').find('.F4_selectul').find('.F4_ul').eq(0).show();;
    $('.F4_selectItems').click(function (e) {
        e.preventDefault();
        var tabIndex = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $('.F4_select').find('.F4_ul').eq(tabIndex).show().siblings().hide();
    });

});