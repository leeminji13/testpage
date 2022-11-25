
    $('#menu').click(function(){
        $('.d1ulWrap').toggleClass('menuOpen')
        $('.d1a').toggleClass('txt_up')
        $('.menuLine').toggleClass('lineAbs')
        $('.line1').toggleClass('lineRo45')
        $('.mid_line').toggleClass('lineNone')
        $('.line2').toggleClass('lineRo_45')
        $('.d1li').removeClass('d1li_open')
    });
    $('.d1li_wrap').click(function(){
        $(this).find('.open_btn').toggleClass('opBtnDeg')
        $(this).parents().siblings().removeClass('d1li_open')
        $(this).parents().toggleClass('d1li_open')
    });