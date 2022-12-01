$(function(){
    var $sec2 = $('.sec2')
    $sec2.find('.sub_img').addClass('fadeIn');

    $('.selectWrap').click(function(){
        $(this).parents().toggleClass('overUnset')
    })

    var $sec2 = $('.sec2')
    $sec2.find('.layer').addClass('fadeIn');

    var $sub4con = $('.sub4con')
    $sub4con.find('.form_wrap').addClass('fadeIn');

    var $sub4_2con = $('.sub4_2con')
    $sub4_2con.find('#contents').addClass('fadeIn');
//타입 탭
    $('ul.type_ul li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.type_ul li').removeClass('typeOn');
        $('.type_img').removeClass('typeOn');

        $(this).addClass('typeOn');
        $("#"+tab_id).addClass('typeOn');
    });
});