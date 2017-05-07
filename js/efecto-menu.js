$(document).ready(function(){
	if($(window).scrollTop() > 0){
		$('#header').addClass('header-fixed');
		$('#logo-header img').addClass('logo-header-width');
		$('#menu-head nav').addClass('menu-head-top');
	}else{
		$('#header').removeClass('header-fixed');
		$('#logo-header img').removeClass('logo-header-width');
		$('#menu-head nav').removeClass('menu-head-top');
	}
	$(window).scroll(function(){
		if($(window).scrollTop() > 0){
			$('#header').addClass('header-fixed');
			$('#logo-header img').addClass('logo-header-width');
			$('#menu-head nav').addClass('menu-head-top');
		}else{
			$('#header').removeClass('header-fixed');
			$('#logo-header img').removeClass('logo-header-width');
			$('#menu-head nav').removeClass('menu-head-top');
		}
	})
})

var button = document.querySelector('.menu-icon');
button.addEventListener('click', function (){
  button.classList.toggle('open');
});

$('.menu-icon').click(function(){
	$('#menu-head').toggleClass('view-menu')
})