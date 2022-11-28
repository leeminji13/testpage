$(function(){
    var $sec2 = $('.sec2')
    $sec2.find('.main_txt1 >img').addClass('txt_up');
    $sec2.find('.main_box > img').addClass('txt_up');
    $sec2.find('iframe').addClass('fadeIn');
    $sec2.find('.main_right > img').addClass('img_right');

    $(window).scroll(function(){
        var $offset = 400; 

        var $main_txt = $('.main_txt')
        var $main_txtOST = $main_txt.offset().top - $offset
        if($(this).scrollTop() > $main_txtOST){
            $main_txt.find('.m_txt_top > img').addClass('txt_up');
            $main_txt.find('.m_txt_md > p').addClass('txt_up');
            $main_txt.find('.m_icon > img').addClass('txt_up');
            $main_txt.find('.m_map > img').addClass('img_down');
        }

        var $sec3 = $('.sec3')
        var $sec3OST = $sec3.offset().top - $offset
        if($(this).scrollTop() > $sec3OST){
            $sec3.find('.sec3_logo > img').addClass('txt_up');
            $sec3.find('.sec3_txt > img').addClass('txt_up');
            $sec3.find('.sec3_box > img').addClass('img_down');
        }

        var $sec4 = $('.sec4')
        var $sec4OST = $sec4.offset().top - $offset
        if($(this).scrollTop() > $sec4OST){
            $sec4.find('.sec4_logo > img').addClass('txt_up');
            $sec4.find('.sec4_txt > img').addClass('txt_up');
            $sec4.find('#sec4_slide').addClass('fadeIn');
        }

        var $sec5 = $('.sec5')
        var $sec5OST = $sec5.offset().top - $offset
        if($(this).scrollTop() > $sec5OST){
            $sec5.find('.sec5_topTxt > p').addClass('txt_up');
            $sec5.find('.sec5_mdTxt > img').addClass('txt_up');
            $sec5.find('.yongin').addClass('img_down');
            $sec5.find('.bundang').addClass('img_down');
        }
    });

    $(window).resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
        $main_txtOST = $sec2.offset().top - $offset;
        $sec3OST = $sec3.offset().top - $offset;
        $sec4OST = $sec4.offset().top - $offset;
        $sec5OST = $sec5.offset().top - $offset;
    });
});
