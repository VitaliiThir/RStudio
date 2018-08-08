$(function(){
	$('.people-video__screenshot-play-button').on('click', function(){
		var youTube = $('<iframe class="people-video__block" src="https://www.youtube.com/embed/42AGGRGB_Ew?rel=0&amp" allowfullscreen></iframe>')
		$('.people-video').append($(youTube));
		var src = youTube.attr('src');
		$('.people-video__screenshot').fadeOut(300);
		$(youTube).attr('src', src +'&autoplay=1');
		$('.people-video-stop').fadeIn(1000);
	});
	$('.people-video-stop').on('click', function(){
		$('iframe').remove();
		$('.people-video__screenshot').fadeIn(500);
		$(this).fadeOut(300);
	});
	$.fn.animate_Text = function() {
		var string = this.text();
		return this.each(function(){
			var $this = $(this);
			$this.html(string.replace(/./g, '<span class="new">$&</span>'));
			$this.find('span.new').each(function(i, el){
				setTimeout(function(){ $(el).addClass('div_opacity'); }, 15 * i);
			});
		});
	};
	$('#example').show();
	$('#example').animate_Text();
$('.contacts-map').on('click','.contacts-map__screenshot', function(){
	$('.contacts-map__screenshot').css('display','none');
	$('.google-map').css('display','block');
});
$(document).click(function(e){
   		if(!$('.contacts-map').is(e.target) && $('.contacts-map').has(e.target).length === 0) {
   			$(".google-map").css('display','none');
   			$(".contacts-map__screenshot").css('display','block');
   		}
   	});
var mainBar = $('.main-bar');
$(mainBar).on('click', function(){
	$('.main-bar-active')
	.removeClass('main-bar-active')
	.addClass('main-bar-active--close');
	$('.main-bar-close')
	.removeClass('main-bar-close')
	.addClass('main-bar-close--active, main-bar-close--rotate');
});
});
