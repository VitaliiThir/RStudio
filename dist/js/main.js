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
});
