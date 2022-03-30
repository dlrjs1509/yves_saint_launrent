$(function(){
    var i = 0;
    var aa = $('.artGroup>.article');
    $('.content.cnt02 .btn>i').eq(1).click(function(){
        $('.artGroup>.article').last().prependTo('.artGroup');
        // i++;
        // i = i%aga.length;
        // $('.artGroup').css('margin-left',i * -20+'%');
        // i++;
        // i = (i+4)%4;
        // $('.artGroup').css('margin-left',i * -20+'%');
    });
    $('.content.cnt02 .btn>i').eq(0).click(function(){
        // aga.last().prependTo('.artGroup');
        $('.artGroup>.article').first().appendTo('.artGroup');
        // i--;
        // i = (aga.length+i)%aga.length;
        // $('.artGroup').css('margin-left',i * -20+'%');
        // i++;
        // i = i%4;
        // $('.artGroup').css('margin-left',i * -20+'%');
    });
    $('.nav>li').eq(3).mouseover(function(){
        $('.menu>li').css({
            display : 'block',
            opacity : '1'
        });
    });
    $('.menu').mouseleave(function(){
        $('.menu>li').css({
            display : 'none'
        });
    });
});