$(document).ready(function() {
	
	
	
		$("#portfolio_grid").mixItUp();//плпгин для квадратиков Mixitup
	
	$(".s_portfolio li").click(function(){
		$(".s_portfolio li").removeClass("active");
		$(this).addClass("active");
	});//при клике на категории, полосочка становится под активным
	
	
	$(".popup").magnificPopup({type:"image"});//для работы попап менеджера, при клике увеличивается фотография
    $(".popup_content").magnificPopup({type:"inline", midClick: true, showCloseBtn: true});//для всплывающегося окна с информацией о работах
	
	
    $(".top_text h1").animated("fadeInDown", "fadeOutUp"); //создаём анимацию для имени ("первый элемент" "вторый элемент")
     $(".top_text p, .section_header").animated("fadeInUp", "fadeOutDown");// нижняя запис подниимается и названия секций
 	 
	 $(".animation_1").animated("flipInY", "flipOutY");
	$(".animation_2").animated("fadeInLeft", "fadeOutLeft");
	 $(".animation_3").animated("fadeInRight", "fadeOutRight");
	
	$(".left .resume_item").animated("fadeInLeft", "fadeOutLeft");
	$(".right .resume_item").animated("fadeInRight", "fadeOutRight");
	  $(".cont").animated("fadeInUp", "fadeOutDown");
	
    
	function heightDetect() { //scroll
	$(".main_head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});
	
	$(".toggle_mnu").click(function() {
  $(".sandwich").toggleClass("active");
});
	
	//чтобы закрывалось при клике на пункт меню
	$(".top_mnu li a").click(function(){
		$(".top_mnu").fadeOut(600);
		$(".sandwich").toggleClass("active");//добавляет класс для затемнения иконки в активном меню
	}).append("<span>");//.append("<span>") добавляет спан в a
	
	
	$(".toggle_mnu").click(function(){
	if($(".top_mnu").is(":visible")){
		$(".top_text").removeClass("h_opacify")
		$(".top_mnu").fadeOut(600);
		$(".top_mnu li a").removeClass("fadeInUp animated")// плавно появляется меню и плавно исчезает при закрытии 
	}else{
		$(".top_text").addClass("h_opacify")
		$(".top_mnu").fadeIn(600);
		$(".top_mnu li a").addClass("fadeInUp animated")
	};
	});
	
		$(".portfolio_item").each(function(i) { //раздаём id через цикл для описания в портфолио
			$(this).find("a").attr("href", "#work_" + i );
			$(this).find(".podrt_descr").attr("id", "work_" + i);
			
		});
	
	
	$("input,select,textarea").jqBootstrapValidation();
	
	//плагин для скролла меню
	 $(".top_mnu ul a").mPageScroll2id();
});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});
		