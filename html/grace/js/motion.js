$(function(){
    //pc 첫화면 모션
    var $sec2 = $('.sec2')
    $sec2.find('.main_txt1 >img').addClass('txt_up');
    $sec2.find('.main_box > img').addClass('txt_up');
    $sec2.find('iframe').addClass('fadeIn');
    $sec2.find('.main_right > img').addClass('img_right');
});

//스크롤이벤트
$(window).scroll(function(){
    //pc
    var $offsetpc = 500; 
    var $main_txt = $('.main_txt')
    var $main_txtOST = $main_txt.offset().top - $offsetpc
    if($(this).scrollTop() > $main_txtOST){
        $main_txt.find('.m_txt_top > img').addClass('txt_up');
        $main_txt.find('.m_txt_md > p').addClass('txt_up');
        $main_txt.find('.m_icon > img').addClass('txt_up');
        $main_txt.find('.m_map > img').addClass('img_down');
    }

    var $sec3 = $('.sec3')
    var $sec3OST = $sec3.offset().top - $offsetpc
    if($(this).scrollTop() > $sec3OST){
        $sec3.find('.sec3_logo > img').addClass('txt_up');
        $sec3.find('.sec3_txt > img').addClass('txt_up');
        $sec3.find('.sec3_box > img').addClass('img_down');
    }

    var $sec4 = $('.sec4')
    var $sec4OST = $sec4.offset().top - $offsetpc
    if($(this).scrollTop() > $sec4OST){
        $sec4.find('.sec4_logo > img').addClass('txt_up');
        $sec4.find('.sec4_txt > img').addClass('txt_up');
        $sec4.find('#sec4_slide').addClass('fadeIn');
    }

    var $sec5 = $('.sec5')
    var $sec5OST = $sec5.offset().top - $offsetpc
    if($(this).scrollTop() > $sec5OST){
        $sec5.find('.sec5_topTxt > p').addClass('txt_up');
        $sec5.find('.sec5_mdTxt > img').addClass('txt_up');
        $sec5.find('.yongin').addClass('img_down');
        $sec5.find('.bundang').addClass('img_down');
    }
});

$(window).resize(function(){ //리사이즈시 top값을 다시 계산
    //pc
    $main_txtOST = $sec2.offset().top - $offsetpc
    $sec3OST = $sec3.offset().top - $offsetpc
    $sec4OST = $sec4.offset().top - $offsetpc
    $sec5OST = $sec5.offset().top - $offsetpc
});

$(document).ready(function(){ //타입안내 탭
    $('ul.type_ul li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.type_ul li').removeClass('typeOn');
        $('.type_img').removeClass('typeOn');

        $(this).addClass('typeOn');
        $("#"+tab_id).addClass('typeOn');
    });
});