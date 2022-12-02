$(function(){
    var $main = $('.main')
    $main.find('.main_top > img').addClass('txt_up');
    $main.find('.main-mid > img').addClass('txt_up');
    $main.find('.vdWrap').addClass('fadeIn');

    //서브페이지 모션
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
})
$(window).scroll(function(){
    var $offsetmo = 350; 
        var $mainImg = $('#openImgWrap')
        var $mainImgOST = $mainImg.offset().top - $offsetmo
        if($(this).scrollTop() > $mainImgOST){
            $mainImg.find('.main_open_img > img').addClass('fadeIn');
        }

        var $main_txt2 = $('.main_txt2')
        var $main_txt2OST = $main_txt2.offset().top - $offsetmo
        if($(this).scrollTop() > $main_txt2OST){
            $main_txt2.find('.txt2_top > img').addClass('txt_up');
            $main_txt2.find('.txt2_top2 > img').addClass('txt_up');
        }
        
        var $main_icon = $('.main_icon')
        var $main_iconOST = $main_icon.offset().top - $offsetmo
        if($(this).scrollTop() > $main_iconOST){
            $main_icon.find('.icon_img > img').addClass('fadeIn');
            $main_icon.find('.icon_sub > p').addClass('txt_up');
            $main_icon.find('.icon_con > p').addClass('txt_up');
        }

        var $main_map = $('.main_map')
        var $main_mapOST = $main_map.offset().top - $offsetmo
        if($(this).scrollTop() > $main_mapOST){
            $main_map.find('.map_img > img').addClass('fadeIn');
            $main_map.find('.map_more').addClass('fadeIn');
        }

        var $point = $('.point')
        var $pointOST = $point.offset().top - $offsetmo
        if($(this).scrollTop() > $pointOST){
            $point.find('.logo_red > img').addClass('txt_up');
            $point.find('.big_txt > img').addClass('txt_up');
            $point.find('.point_box > img').addClass('txt_down');
        }

        var $premium = $('.premium')
        var $premiumOST = $premium.offset().top - $offsetmo
        if($(this).scrollTop() > $premiumOST){
            $premium.find('.pre_logo > img').addClass('txt_up');
            $premium.find('.pre_big > img').addClass('txt_up');
            $premium.find('.pre_slide').addClass('fadeIn');
        }

        var $sec3way = $('.sec3way')
        var $sec3wayOST = $sec3way.offset().top - $offsetmo
        if($(this).scrollTop() > $sec3wayOST){
            $sec3way.find('.way_sub > p').addClass('txt_up');
            $sec3way.find('.way_con1 > p').addClass('txt_up');
            $sec3way.find('.way_con2 > p').addClass('txt_up');
            $sec3way.find('.way_btn_wrap').addClass('txt_down');
        }
})
$(window).resize(function(){
    //mo
    $mainImgOST = $mainImg.offset().top - $offsetmo
    $main_txt2OST = $main_txt2.offset().top - $offsetmo
    $main_iconOST = $main_icon.offset().top - $offsetmo
    $main_mapOST = $main_map.offset().top - $offsetmo
    $premiumOST = $premium.offset().top - $offsetmo
    $sec3wayOST = $sec3.offset().top - $offsetmo
})