$(document).ready(function () {


  //your code here

// ONE
$('#one').click(function(){
  $(this).toggleClass('check',50,'linear');
  $('#one .slider').toggleClass('slide',50,'linear');
});
// TWO
$('#two').click(function(){
  $(this).toggleClass('check',50,'linear');
  $('#two .slider').toggleClass('slide',50,'linear');
});


	$(window).scroll(function () {
		var positionx=$(window).scrollTop();
    var positionx_2=$(window).scrollTop();
		$("#div1").html(positionx);

     $('body').addClass('scrolling');
    clearTimeout($.data(this, 'scrollTimer'));
    $.data(this, 'scrollTimer', setTimeout(function() {
        $('body').removeClass('scrolling');
    }, 250));

    if(positionx >= 1500){
      $('.logo').css({
        position: 'absolute'
      });
    }

/*--
    if(positionx_2 >= 0){
    $('.layer_7').animate({top:-((positionx/100)*90)}, 30);
    $('.layer_6').animate({top:(-46+((positionx/100)*-30))}, 30);
    $('.layer_5').animate({top:(-162+((positionx/100)*10))}, 30);
    $('.layer_4').animate({top:(-226+((positionx/100)*40))}, 30);
    $('.layer_3').animate({top:(-317+((positionx/100)*50))}, 30);
    }else if(positionx >= 800){
    $('.layer_7').css({top: '0px'});
    $('.layer_6').css({top: '-46px'});
    $('.layer_5').css({top: '-162px'});
    $('.layer_4').css({top: '-226px'});
    $('.layer_3').css({top: '-317px'});
    }
--*/

    var sec1 = $(".content").offset().top;
    if (positionx >= sec1-400) {
      $('.menu').addClass('menu_opacity');
      $('.whatisiot_text').css({top: '0',opacity:1});
      $('.whatisiot_img img').css({top: '0',opacity:1});
    }else{
      $('.menu').removeClass('menu_opacity')
      $('.whatisiot_text').css({top: '500px',opacity:0});
      $('.whatisiot_img img').css({top: '500px',opacity:0});
    }

    var sec2 = $(".content_2").offset().top;
    if (positionx >= sec2-300) {
      $('.whatissmart_text').css({top: '0',opacity:1});
      $('.whatissmart_img img').css({top: '0',opacity:1});
    }else{
      $('.whatissmart_text').css({top: '500px',opacity:0});
      $('.whatissmart_img img').css({top: '500px',opacity:0});
    }



    $('.hp-1').css({
      transform: 'translateY('+positionx/5+'px)',
    });
    $('.hp-2').css({
      transform: 'translateY('+positionx/10+'px)',
    });
    $('.hp-3').css({
      transform: 'translateY('+positionx/15+'px)',
    });
    $('.hp-4').css({
      transform: 'translateY('+positionx/20+'px)',
    });
    $('.hp-5').css({
      transform: 'translateY('+-positionx/9+'px)',
    });
     $('.bgp_blue').css({
      transform: 'translateY('+-positionx/9+'px)',
    });

    $('.layout-logo').css({
      transform: 'translateY('+positionx/3+'px)',
    });
    
    


    var room1 = $("#room_one").offset().top;
    if (positionx >= room1-300) {
      // statement

      $('.private').css({left: '17%', opacity: 1});
      $('.lamp').css({top: '-3%', opacity: 1});
      $('.smart_tv').css({bottom: '13%', opacity: 1});
      $('.sofa').css({left: '0', opacity: 1});
      $('.door').css({right: '6%', opacity: 1});
      $('.cctv').css({left: '-0.5%', opacity: 1});
      $('.table_tv').css({bottom: '0%', opacity: 1});
      $('#switch').css({ opacity: 1});
    } else{
      // statement
      $('.private').css({left: '37%', opacity: 0});
      $('.lamp').css({top: '-30%', opacity: 0});
      $('.smart_tv').css({bottom: '25%', opacity: 0});
      $('.sofa').css({left: '-20%', opacity: 0});
      $('.door').css({right: '-6%', opacity: 0});
      $('.cctv').css({left: '-5%', opacity: 0});
      $('.table_tv').css({bottom: '-5%', opacity: 0});
      $('#switch').css({ opacity:0});

    }

    var room2 = $("#room_two").offset().top;
    if (positionx >= room2-300) {
      // statement
      $('.freeze').css({right: '0', opacity: 1});
      $('.gas').css({left: '10%', opacity: 1});
      $('.dude_smooke').css({top: '0%', opacity: 1});
      $('.chef_suit').css({left: '26%', opacity: 1});
      $('.drop_box').css({left: '2%', opacity: 1});
    }else{
      $('.freeze').css({right: '-15%', opacity: 0});
      $('.gas').css({left: '0%', opacity: 0});
      $('.dude_smooke').css({top: '-7%', opacity: 0});
      $('.chef_suit').css({left: '10%', opacity: 0});
      $('.drop_box').css({left: '-5%', opacity: 0});
    }

    var room3 = $("#room_three").offset().top;
    if (positionx >= room3-300) {
      // statement
      $('.door2').css({left: '5%', opacity: 1});
      $('.book').css({right: '5%', opacity: 1});
      $('.chair').css({left: '-12%', opacity: 1});
      $('.work_table').css({right: '0%', opacity: 1});
      $('.air').css({top: '10%', opacity: 1});
    }else{
      $('.door2').css({left: '-5%', opacity: 0});
      $('.book').css({right: '-5%', opacity: 0});
      $('.chair').css({left: '-40%', opacity: 1});
      $('.work_table').css({right: '-10%', opacity: 1});
      $('.air').css({top: '0%', opacity: 0});

    }

    var room4 = $("#room_four").offset().top;
    if (positionx >= room4-300) {
      $('.wardrope').css({left: '5%', opacity: 1});
      $('.bed').css({right: '5%', opacity: 1});
      $('.wall_picture').css({top: '10%', opacity: 1});
      $('.lamp_2').css({left: '0%', opacity: 1});
    }else{
      $('.wardrope').css({left: '-5%', opacity: 0});
      $('.bed').css({right: '-5%', opacity: 0});
      $('.wall_picture').css({top: '0%', opacity: 0});
      $('.lamp_2').css({left: '-10%', opacity: 0});
    }

    var room5 = $('.infographic').offset().top;
    if (positionx > room5) {
      $('#switch').css({ opacity:0});
    }


	});
/*--
	if (window.addEventListener) window.addEventListener('DOMMouseScroll', wheel, false);
window.onmousewheel = document.onmousewheel = wheel;

function wheel(event) {
    var delta = 0;
    if (event.wheelDelta) delta = event.wheelDelta / 120;
    else if (event.detail) delta = -event.detail / 3;

    handle(delta);
    if (event.preventDefault) event.preventDefault();
    event.returnValue = false;
}

function handle(delta) {
    var time = 1000;
	var distance = 100;

    $('html, body').stop().animate({
        scrollTop: $(window).scrollTop() - (distance * delta)
    }, time );
}
-*/

$("#c1").click(function() {
	$('.sofa').toggleClass('selector');
  $('.door').toggleClass('selector');
  $('.drop_box').toggleClass('selector');
  $('.door2').toggleClass('selector');
  $('.chair').toggleClass('selector');
  $('.work_table').toggleClass('selector');
  $('.book').toggleClass('selector');
  $('.wall_picture').toggleClass('selector');
  $('.wardrope').toggleClass('selector');
  $('.private').toggleClass('selector');
  $('.human').toggleClass('selector');
  $('.human2').toggleClass('selector');
  $('.human3').toggleClass('selector');
  $('.human4').toggleClass('selector');
  $('.chef_suit').toggleClass('selector');

  $('.wall-inner').toggleClass('selector_2');
});

$('.button_read').click(function() {
   	$('.content_1_more').addClass('test');

});

$('.closed_read').click(function() {
	$('.content_1_more').removeClass('test');

});

$('.popup_me2').click(function() {
	$('html').addClass('class_name')
   	$('.content_ones2').fadeToggle('slow/400/fast', function() {});
});

$('.closed_about').click(function() {
  /* Act on the event */
  $('.cctv_ab').removeClass('test_2');
  $('.lamp_ab').removeClass('test_2');
  $('.smart_tv_ab').removeClass('test_2');
  $('.dude_smooke_ab').removeClass('test_2');
  $('.gas_ab').removeClass('test_2');
  $('.freeze_ab').removeClass('test_2');
  $('.air_ab').removeClass('test_2');
  $('.bed_ab').removeClass('test_2');
  $('.lamp_2_ab').removeClass('test_2');
});

/*---------------------------------*/

$(".air_link").click(function() {
  $('.air_ab').addClass('test_2')

});

$(".gas_link").click(function() {
  $('.gas_ab').addClass('test_2');

});

$(".freeze_link").click(function() {
  $('.freeze_ab').addClass('test_2');

});

$(".dude_smooke_link").click(function() {
  $('.dude_smooke_ab').addClass('test_2');

});

$(".smart_tv_link").click(function() {
  $('.smart_tv_ab').addClass('test_2');

});


$(".lamp_link").click(function() {
  $('.lamp_ab').addClass('test_2');

});

$(".cctv_link").click(function() {
  $('.cctv_ab').addClass('test_2');

});

$(".air_link").click(function() {
  $('.air_ab').addClass('test_2');

});

$(".bed_link").click(function() {
  $('.bed_ab').addClass('test_2');

});

$(".lamp_2_link").click(function() {
  $('.lamp_2_ab').addClass('test_2');

});


$(document)
    .on('click', 'a[href^="#"]', function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body')
            .animate({
                scrollTop: $(target).offset().top}, 'slow', 'swing', function() {});
    })





});
