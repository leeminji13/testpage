$(function(){
    var $sec2 = $('.sec2')
    $sec2.find('.sub_img').addClass('fadeIn');

    $('.selectWrap').click(function(){
        $(this).parents().toggleClass('overUnset')
    })
});
