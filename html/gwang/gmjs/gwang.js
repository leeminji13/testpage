$(function(){
    var $sec1 = $('.sec1')
    $sec1.find('.main_txt_top').addClass('fadeIn');
    var $gmxi_ko = $('.mainBg')
    $gmxi_ko.find('.main_txt_top_line').addClass('lineFade');
    $gmxi_ko.find('.main_txt_big > p').addClass('txt_up');
    $gmxi_ko.find('.main_txt_sm > p').addClass('txt_up');

    //클릭 이벤트
    //퀵
    $('#quick').click(function(){
        $('.line_wrap').toggleClass('ro')
        $('.quick_menu > ul').toggleClass('menu_on')
    });
    //네비게이션
    $('.nav_btn').click(function(){
        $('.nav_btn > span').toggleClass('close')
        $('.nav_btn > .first').toggleClass('close_ro')
        $('.nav_btn > .second').toggleClass('close_ro2')
        $('.lastLine').toggleClass('dnone')
        $('.nav_menu').toggleClass('menu_open')
    });
    //메뉴 클릭 시 메뉴 닫힘
    $('.d1li').click(function(){
        $('.nav_menu').removeClass('menu_open')
        $('.nav_btn > span').removeClass('close')
        $('.nav_btn > .first').removeClass('close_ro')
        $('.nav_btn > .second').removeClass('close_ro2')
        $('.lastLine').removeClass('dnone')
    });
    //비디오 버튼 클릭시 영상나옴
    $('.vd3_bnt').click(function(){
        $('.vd3_mask').addClass('transy')
    })
    
    // tab
    $(".tab_btn").click(function(){
        $(".tabSub").removeClass('on')
        $(this).parent().addClass('on');
    })
    //스크롤 이벤트
    $(window).scroll(function(){
        var $offset = 200; 

        var $sec2 = $('.sec2')
        var $provdOST = $sec2.offset().top - $offset
        if($(this).scrollTop() > $provdOST){
            $sec2.find('.enSub').addClass('txt_up');
            $sec2.find('.enLine').addClass('fadeIn');
            $sec2.find('.pro_txt_md > p').addClass('txt_up');
            $sec2.find('.pro_txt_bt > img').addClass('txt_up');
            $sec2.find('.mask_img').addClass('fadeOut');
        }

        var $video = $('#video1')
        var $videoOST = $video.offset().top - $offset
        var $videoIH = $video.innerHeight();
        console.log($videoIH)
        const iframe1 = document.querySelector('#iframe1');
        const player1 = new Vimeo.Player(iframe1);
        if($(this).scrollTop() > $videoOST){
            player1.play();
        }else{
            player1.pause();
        }
    
        var $sec3 = $('.sec3')
        var $premiumOST = $sec3.offset().top - $offset
        if($(this).scrollTop() > $premiumOST){
            $sec3.find('.enSub').addClass('txt_up');
            $sec3.find('.enLine').addClass('fadeIn');
            $sec3.find('.gmxi_txt_md > img').addClass('txt_up');
            $sec3.find('.mask').addClass('mask_down');
            $sec3.find('.gmxi_img > img').addClass('img_down');
            $sec3.find('.gmSub > img').addClass('txt_up');
            $sec3.find('.gmCon1 > span,p').addClass('txt_up');
        }
        if($(this).scrollTop() > $premiumOST){
            player1.pause();
        }

        var $sec4 = $('.sec4')
        var $sec4OST = $sec4.offset().top - $offset
        if($(this).scrollTop() > $sec4OST){
            $sec4.find('.enSub').addClass('txt_up');
            $sec4.find('.enLine').addClass('fadeIn');
            $sec4.find('.gmxi2_txt_md > img').addClass('txt_up');
            $sec4.find('.mask').addClass('mask_down');
            $sec4.find('.gmxi_img2 > img').addClass('img_down');
            $sec4.find('.table_wrap').addClass('fadeIn');
        }

        var $sec6 = $('.sec6')
        var $sec6OST = $sec6.offset().top - $offset
        if($(this).scrollTop() > $sec6OST){
            $sec6.find('.mask_img').addClass('fadeOut');
        }
        var $video2 = $('#video2')
        var $video2OST = $video2.offset().top - $offset
        const iframe2 = document.querySelector('#iframe2');
        const player2 = new Vimeo.Player(iframe2);
        if($(this).scrollTop() > $video2OST){
            player2.play();
        }else{
            player2.pause();
        }

        var $sec7 = $('.sec7')
        var $sec7OST = $sec7.offset().top - $offset
        if($(this).scrollTop() > $sec7OST){
            $sec7.find('.enLine').addClass('fadeIn');
            $sec7.find('.enSub').addClass('txt_up');
            $sec7.find('.club_txt_md > img').addClass('txt_up');
            $sec7.find('.club_intxt > p').addClass('txt_up');
            $sec7.find('.club_slide').addClass('fadeIn');
        }
        if($(this).scrollTop() > $sec7OST){
            player2.pause();
        }

        var $sec8 = $('.sec8')
        var $sec8OST = $sec8.offset().top - $offset
        if($(this).scrollTop() > $sec8OST){
            $sec8.find('.enLine').addClass('fadeIn');
            $sec8.find('.enSub').addClass('txt_up');
            $sec8.find('.unit_txt_md > p').addClass('txt_up');
            $sec8.find('.unit_txt_bt > img').addClass('txt_up');
            $sec8.find('.unit_tab').addClass('fadeIn');
        }

        var $sec9 = $('.sec9')
        var $sec9OST = $sec9.offset().top - $offset
        if($(this).scrollTop() > $sec9OST){
            $sec9.find('.enLine').addClass('fadeIn');
            $sec9.find('.enSub').addClass('txt_up');
            $sec9.find('.mask').addClass('mask_down');
            $sec9.find('.sche').addClass('fadeIn');
        }

        var $sec10 = $('.sec10')
        var $sec10OST = $sec10.offset().top - $offset
        if($(this).scrollTop() > $sec10OST){
            $sec10.find('.enLine').addClass('fadeIn');
            $sec10.find('.enSub').addClass('txt_up');
            $sec10.find('.brand_txt_md > img').addClass('txt_up');
            $sec10.find('.b_txt_in > p').addClass('txt_up');
            $sec10.find('.brand_txt_bt2 > p').addClass('fadeIn');
            $sec10.find('.mask').addClass('mask_down');
            $sec10.find('.brand_img > img').addClass('img_down');
        }

        var $sec11 = $('.sec11')
        var $sec11OST = $sec11.offset().top - $offset
        if($(this).scrollTop() > $sec11OST){
            $sec11.find('.enLine').addClass('fadeIn');
            $sec11.find('.enSub').addClass('txt_up');
            $sec11.find('.brand2_txt_md > img').addClass('txt_up');
            $sec11.find('.mask').addClass('mask_down');
            $sec11.find('.vd3_wrap').addClass('img_down');
            // $sec11.find('.mask_img').addClass('fadeOut');
        }

        var $sec12 = $('.sec12')
        var $sec12OST = $sec12.offset().top - $offset
        if($(this).scrollTop() > $sec12OST){
            $sec12.find('.enLine').addClass('fadeIn');
            $sec12.find('.enSub').addClass('txt_up');
            $sec12.find('.loca_txt_md > img').addClass('txt_up');
            $sec12.find('.mask').addClass('mask_down');
            $sec12.find('.loca_map > img').addClass('img_down');
            $sec12.find('.loca_btn').addClass('fadeIn');
        }

        var $sec13 = $('.sec13')
        var $sec13OST = $sec13.offset().top - $offset
        if($(this).scrollTop() > $sec13OST){
            $sec13.find('.sign_txt_top > img').addClass('txt_up');
            $sec13.find('.sign_txt_md > p').addClass('txt_up');
            $sec13.find('form').addClass('fadeIn');
        }
    });
    $(window).resize(function(){ //반응형을 대비하여 리사이즈시 top값을 다시 계산
        $provdOST = $sec2.offset().top - $offset;
        $premiumOST = $sec3.offset().top - $offset
        $sec4OST = $sec4.offset().top - $offset
        $sec6OST = $sec6.offset().top - $offset
        $sec7OST = $sec7.offset().top - $offset
        $sec8OST = $sec8.offset().top - $offset
        $sec9OST = $sec9.offset().top - $offset
        $sec10OST = $sec10.offset().top - $offset
        $sec11OST = $sec11.offset().top - $offset
        $sec12OST = $sec12.offset().top - $offset
        $sec13OST = $sec13.offset().top - $offset
    });
});