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
	$(mainBar).on('click', '.main-bar-active', function(){
		$('.main-bar-active').addClass('main-bar-active-close');
		setTimeout(function(){
			if($('.main-bar-close').hasClass('main-bar-close-elem-hidden')){
				$('.main-bar-close').removeClass('main-bar-close-elem-hidden');
			}
			$('.main-bar-close').addClass('main-bar-close-elem');
		}, 700);
		$('.nav').fadeIn(400).css({
			'display': '-webkit-flex',
			'display': '-moz-flex',
			'display': '-ms-flex',
			'display': '-o-flex',
			'display': 'flex'});
	});
	$(mainBar).on('click', '.main-bar-close' || '.nav-list__link', function(){
		$('.main-bar-close').removeClass('main-bar-close-elem');
		$('.main-bar-close').addClass('main-bar-close-elem-hidden');
		setTimeout(function(){
			if($('.main-bar-active').hasClass('main-bar-active-close')){
				$('.main-bar-active').removeClass('main-bar-active-close')
			}						
		}, 700);
		$('.nav').fadeOut(400);
	});
	// PAGE SCROLL
	$('.nav-list__link').on('click', function(){
		var selector = $(this).attr('href');
		var h = $(selector);
		$('.main-bar-close').removeClass('main-bar-close-elem');
		$('.main-bar-close').addClass('main-bar-close-elem-hidden');
		setTimeout(function(){
			if($('.main-bar-active').hasClass('main-bar-active-close')){
				$('.main-bar-active').removeClass('main-bar-active-close')
			}						
		}, 700);
		$('.nav').fadeOut(400);
		$('html, body').animate({
			scrollTop: h.offset().top
		}, 900);
	});
	// SCROLL BTN
	var btnScrollTop = $('.scroll-top');
	function scrollBtn(){
		var bodyScroll = $('html, body').scrollTop();
		if(bodyScroll > 300) {
			$(btnScrollTop).addClass('scroll-top--visible');
		} else {
			$(btnScrollTop).removeClass('scroll-top--visible');
		};
	};
	scrollBtn();
	$(window).on('scroll', function(){
		scrollBtn();
	});
	$('.scroll-top').on('click', function(){
		$('html, body').animate({
			scrollTop: 0
		}, 600);
	});
});
