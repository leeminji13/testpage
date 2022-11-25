$(document).ready(function(){
    $('ul.type_ul li').click(function(){
        var tab_id = $(this).attr('data-tab');

        $('ul.type_ul li').removeClass('typeOn');
        $('.type_img').removeClass('typeOn');

        $(this).addClass('typeOn');
        $("#"+tab_id).addClass('typeOn');
    });
});