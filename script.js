jQuery(function($) {

 var $body = $('body');
 var $section = $('section#container');
 var $win = $(window);
 var height = $win.height();
 var trueHeight = height / 12;

 $section.on("scroll", function () {
     if ($(this).scrollTop() > trueHeight ) {
         $body.addClass("doch");
     } else {
         $body.removeClass("doch");
     }
 });

 $section.on("scroll", function () {
     if ($(this).scrollTop() > height ) {
         $body.addClass("fulldoch");
     } else {
         $body.removeClass("fulldoch");
     }
 });

});

$(document).ready(function(){
 $('.skin-button').click(function(){
 $(this).siblings('form').toggle();
 });
 $('a#menu, a#closemenu').click(function(){
 $('section#popup').toggleClass('active');
 });
$('.tbtab').click(function(){
var para = $(this).attr('para');
$(this).addClass('active');
$(this).siblings().removeClass('active');
$(this).parents('#tablon').removeClass().addClass(para);
});
$('.frdesc>img').each(function(){
$(this).parents('.frow').addClass('withimg').prepend('<div class="frbanner gradientact"><span></span></div>');
$(this).parents('.frow').find('.frbanner').append(this);
});
$('.subs').each(function(){
var subs = $(this).html();
$(this).parents('.frow').addClass('withsubs').append('<div class="frsubs">'+subs+'</div>');
$(this).remove();
});
});