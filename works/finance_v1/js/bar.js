$(document).ready(function () {
    $(window).scroll(function () {
        var scrollpos = $(window).scrollTop(); //畫面目前的位置          
        var WindowHeight = $(window).height();//畫面高度
        var listTop = $('._4_gray').position().top;
        if (listTop > (scrollpos + WindowHeight / 2) || scrollpos > listTop) {//元件listTop的位置大於 畫面目前位置+視窗大小/2執行
            $('._5_bar-1 > ._5_bar').each(function () {
                var barValue = $(this).data('progress'); //把dataprogress值取出來
                $(this).css('width', barValue + '%');//把cssbar寬度修改
            });
        }
    });
});