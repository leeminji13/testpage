
$(function(){
    var $offset = 200; 
//sec1 텍스트 영상 모션
    var $video = $('.grandCity')
    var $videoOST = $video.offset().top - $offset
//sec2 텍스트 지도 모션
    var $device = $('.premiumWrap');
    var $deviceOST = $device.offset().top - $offset

    var $sumBox = $('.sumBox')
    var $sumOST = $sumBox.offset().top - $offset

    var $agreeBox = $('.agreeBox')
    var $agreeOST = $agreeBox.offset().top - $offset

    var $moveText = $('.moveText')
    var $moveOST = $moveText.offset().top - $offset

    var $location = $('.location')
    var $locaoOST = $location.offset().top - $offset
 
//매거진
    var $maginner = $('.maginner')
    var $magTop = $maginner.offset().top

    var $magazine = $('.grandPride')
    var $magOST = $magazine.offset().top - $offset

    var $magInfra = $('.maginfra')
    var $infraOST = $magInfra.offset().top

    var $magBrand = $('.magBrand')
    var $brandOST = $magBrand.offset().top

    var $magTraffic = $('.magTraffic')
    var $trafficOST = $magTraffic.offset().top

    var $magEdu = $('.magEdu')
    var $eduOST = $magEdu.offset().top
//
    $(window).scroll(function(){
        if($(this).scrollTop() > $deviceOST){
            $device.find('.premiumBox').addClass('scrolled');
        }else{
            $device.find('.premiumBox').removeClass('scrolled');
        }
        if($(this).scrollTop() > $sumOST){
            $sumBox.find('.summary').addClass('scrolled');
        }else{
            $sumBox.find('.summary').removeClass('scrolled');
        }
        if($(this).scrollTop() > $agreeOST){
            $agreeBox.find('.agree').addClass('bgWhite');
        }else{
            $agreeBox.find('.agree').removeClass('bgWhite');
        }

        if($(this).scrollTop() > $moveOST){
            $moveText.find('.make').addClass('moveleft');
            $moveText.find('.change').addClass('moveright');
            $moveText.find('.life').addClass('moveRight');
        }else{
            $moveText.find('.make').removeClass('moveleft');
            $moveText.find('.change').removeClass('moveright');
            $moveText.find('.life').removeClass('moveRight');
        }

//매거진 줌인
        if($(this).scrollTop() > $magOST){
            $magazine.find('.grand').addClass('zoomin');
        }else{
            $magazine.find('.grand').removeClass('zoomin');
        }

        if($(this).scrollTop() > $magOST){
            $magInfra.find('.mag_infra').addClass('zoomin');
        }else{
            $magInfra.find('.mag_infra').removeClass('zoomin');
        }

        if($(this).scrollTop() > $magOST){
            $magBrand.find('.mag_brand').addClass('zoomin');
        }else{
            $magBrand.find('.mag_brand').removeClass('zoomin');
        }

        if($(this).scrollTop() > $magOST){
            $magTraffic.find('.mag_traffic').addClass('zoomin');
        }else{
            $magTraffic.find('.mag_traffic').removeClass('zoomin');
        }

        if($(this).scrollTop() > $magOST){
            $magEdu.find('.mag_edu').addClass('zoomin');
        }else{
            $magEdu.find('.mag_edu').removeClass('zoomin');
        }
//이미지 텍스트 나타나기
        if($(this).scrollTop() > $videoOST){
            $video.find('#mask').addClass('maskMove');
            $video.find('.vdWrap').addClass('fadeIn');
            $video.find('.premium > p').addClass('txtUp');
            $video.find('.premiumXi > p').addClass('txtUp');
        }else{
            // $video.find('.thumnail').removeClass('widthTran');
        }
        if($(this).scrollTop() > $locaoOST){
            $location.find('.locaImg').addClass('fadeIn');
            $location.find('.locaMask').addClass('maskMove');
            $location.find('.dalgubul').addClass('txtUp');
            $location.find('.fame').addClass('txtUp');
        }else{
            // $location.find('img').removeClass('widthTran');
        }
    });

    $('#menu').click(function(){
        $('.menulist').addClass('menuOpen')
        $('.d1lip').addClass('txtUp')
    })

    $('.d1ul > li').click(function(){
        $('.menulist').removeClass('menuOpen')
    })

    $('#close').click(function(){
        $('.menulist').removeClass('menuOpen')
        $('.d1lip').removeClass('txtUp')
    })

    $('#maskBtn').click(function(){
        $('.th').addClass('dnone')
    })
    $('#maskBtn2').click(function(){
        $('.th2').addClass('dnone')
    })

    //퀵메뉴
    $('#quick').click(function(){
        $('.more').toggleClass('rotate')
        $('.quickUl').toggleClass('quickUp')
    })
});