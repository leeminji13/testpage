$(function(){
    var $main = $('.main')
    $main.find('.main_top > img').addClass('txt_up');
    $main.find('.main-mid > img').addClass('txt_up');
    $main.find('.vdWrap').addClass('fadeIn');

    $('.pop_btn').click(function(){
        $('.popup_img').addClass('on')
    });

    $(window).scroll(function(){
        var $offset = 200; 

        var $mainImg = $('.openImgWrap')
        var $mainImgOST = $mainImg.offset().top - $offset
        if($(this).scrollTop() > $mainImgOST){
            $mainImg.find('.main_open_img > img').addClass('fadeIn');
        }

        var $main_txt2 = $('.main_txt2')
        var $main_txt2OST = $main_txt2.offset().top - $offset
        if($(this).scrollTop() > $main_txt2OST){
            $main_txt2.find('.txt2_top > img').addClass('txt_up');
            $main_txt2.find('.txt2_top2 > img').addClass('txt_up');
        }
        
        var $main_icon = $('.main_icon')
        var $main_iconOST = $main_icon.offset().top - $offset
        if($(this).scrollTop() > $main_iconOST){
            $main_icon.find('.icon_img > img').addClass('fadeIn');
            $main_icon.find('.icon_sub > p').addClass('txt_up');
            $main_icon.find('.icon_con > p').addClass('txt_up');
        }

        var $main_map = $('.main_map')
        var $main_mapOST = $main_map.offset().top - $offset
        if($(this).scrollTop() > $main_mapOST){
            $main_map.find('.map_img > img').addClass('fadeIn');
            $main_map.find('.map_more').addClass('fadeIn');
        }

        var $point = $('.point')
        var $pointOST = $point.offset().top - $offset
        if($(this).scrollTop() > $pointOST){
            $point.find('.logo_red > img').addClass('txt_up');
            $point.find('.big_txt > img').addClass('txt_up');
            $point.find('.point_box > img').addClass('txt_down');
        }

        var $premium = $('.premium')
        var $premiumOST = $premium.offset().top - $offset
        if($(this).scrollTop() > $premiumOST){
            $premium.find('.pre_logo > img').addClass('txt_up');
            $premium.find('.pre_big > img').addClass('txt_up');
            $premium.find('.pre_slide').addClass('fadeIn');
        }

        var $sec3 = $('.sec3')
        var $sec3OST = $sec3.offset().top - $offset
        if($(this).scrollTop() > $sec3OST){
            $sec3.find('.way_sub > p').addClass('txt_up');
            $sec3.find('.way_con1 > p').addClass('txt_up');
            $sec3.find('.way_con2 > p').addClass('txt_up');
            $sec3.find('.way_btn_wrap').addClass('txt_down');
        }
    });
    $(window).resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
        $mainImgOST = $mainImg.offset().top - $offset;
        $main_txt2OST = $main_txt2.offset().top - $offset
        $main_iconOST = $main_icon.offset().top - $offset
        $main_mapOST = $main_map.offset().top - $offset
        $premiumOST = $premium.offset().top - $offset
        $sec3OST = $sec3.offset().top - $offset
    });
//외부영역 선택시 팝업 닫힘
    $(document).mouseup(function (e){
        if($(".popup_img").has(e.target).length === 0){
            $(".popup_img").hide();
        }
    });
});