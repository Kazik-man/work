$('.js-slider-news').slick({
    dots: true,
    infinite: true,
    arrow: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  

  $('.js-first-slider').slick({
    dots: true,
    infinite: true,
    arrow: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autospeed: 1000,
  });
 


  $(document).ready(function () {
    $('.link').bind( 'click', function (e) {
        e.preventDefault();
        let target = $(this).attr("href");
        $('html, body').stop().animate({ scrollTop: $(target).offset().top }, 500, function () {
            location.hash = target;
        });
        return false;
    });
  });

  

let map;
function initMap() {
    let icon = `../img/pin.png`;
    let centerLatLng = {lat: 51.495866, lng: 31.2204984};
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 51.271397, lng: 31.3722444},
        zoom: 6
    });
    let  marker = new google.maps.Marker({
        position: centerLatLng,
        map: map,
        icon: icon
    });
}


const scrollUpBtn = $('#button_up');

scrollUpBtn.click(function() {
	$('#button_up').click(function(){
		$('html, body').animate({scrollTop: 0},700);
		return false;
  });
});

function hideScrollUp(scrollTop) {
	if (scrollTop > 1100) {
			$('#button_up').fadeIn();
		}
}




let servicePosition = $('.slider__flex').offset().top;
$(window).scroll(function(){
    let windowScroll = $(window).scrollTop() + $(window).height();
    console.log(servicePosition +'/'+ windowScroll)
    if (servicePosition < windowScroll) {
      $('#button_up').css('display', 'block');
        $('.slider__navigation').css('background-color','rgba(240, 105, 15, 0.521)');
    } else {
      $('.slider__navigation').css('background-color','transparent');
      $('#button_up').css('display', 'none');
    }
});


$('#js-see-more').click(function() {
  $('.gallery--second-block').toggleClass('block-none');
});



   function isEmail() {
    let str = document.getElementById("email").value;
    let status = document.getElementById("status");
    let res = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
    if (res.test(str)) status.innerHTML = "Адрес правильный";
      else status.innerHTML = "Адрес неверный";
    if(isEmpty(str)) status.innerHTML = "Поле пустое";
   }
   function isEmpty(str){
    return (str == null) || (str.length == 0);
   }


   AOS.init({
     duration: 1000,
   })



   $('.slider__navigation--menu').on('click', function (e) {
    e.preventDefault;
    $('.menu_btn').toggleClass('menu_btn--active');
      $('.slider__navigation--link').toggleClass('slider__navigation--link--active');
      
  });