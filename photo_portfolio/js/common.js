$(document).ready(function() {

	$("body, .left_side").niceScroll({  //плавный скролл
		horizrailenabled: false
	});
    
$(".gallery").css("min-height", $(document).height()*2);
			
	$(".btn_mnu").click(function() { //код кнопки
	$(this).toggleClass("active");
	$(".left_side").toggleClass("active"); //при нажатии выплывает сайд-бар
		
});
	//плагин lazyload для плавной загрузки изображения
	$(".gallery img").lazyload({
    effect : "fadeIn", 
	threshold : 1000
});
	$(".gallery a").hover(function(){//при наведении на изображение, становиться светлее других plagin freewall
		$(".gallery a").css("opacity", ".7");
		$(this).css("opacity", "1");
	},	function() {
		$(".gallery a").css("opacity", "1");
	});
	
			//плитка для изображений
	var wall = new freewall(".gallery");
	wall.reset({
		selector: "a",
		animate: true,
		cellW: 150,
		cellH: "auto",
		gutterX : 5,
		gutterY : 5,
		onResize: function() {
			wall.fitWidth();
	}
});

var images = wall.container.find("a");
images.find("img").load(function() {
	wall.fitWidth();
});

 $(".filter_label").click(function() {
 	$(".filter_label").removeClass("active");
 	var filter = $(this).addClass("active").data("filter");
 	wall.filter(filter);
 	setTimeout(function() {
		$(window).resize();
 		wall.fitWidth();
 	}, 400);
 });
	//всплывающее окно для фотографии(слайдер)
	$(".gallery a").magnificPopup({
	type : 'image',
	gallery : {
		enabled : true
	},
	removalDelay: 400,
	mainClass: 'mfp-fade'
});

	

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
			}, 1000);
		});
		return false;
	});

	
});
 //preloader
$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

