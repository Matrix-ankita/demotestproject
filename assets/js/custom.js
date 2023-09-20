//header sticky
// const header = document.querySelector(".main-header");
// const toggleClass = "is-sticky";
//
// window.addEventListener("scroll", () => {
//   const currentScroll = window.pageYOffset;
//   if (currentScroll > 100) {
//     header.classList.add(toggleClass);
//   } else {
//     header.classList.remove(toggleClass);
//   }
// });
//header sticky
//header one page click
jQuery(document).ready(function(){

  jQuery(".header-menu-sec.for--homeonly ul li a").click(function(e){

    e.preventDefault();
    var getheaderH = jQuery("header.main-header").outerHeight();
    var getcuhref = jQuery(this).attr('href');
    var getcurpos = jQuery(getcuhref).offset().top;
    getcurpos = getcurpos - getheaderH;
    jQuery("html,body").animate({scrollTop:getcurpos},500);

  });


	  if(jQuery(".product-filter-sec").length>0) {
		  //if(jQuery(".main-header.desktop-view").hasClass('is-sticky')){
			  var headerH = jQuery(".main-header.desktop-view").outerHeight();
			  jQuery(".product-filter-sec>.filter").css('top',headerH);
			  jQuery(".product-filter-sec>.filter").addClass('filterfttop');
		 /* }
		  else {
			  jQuery(".product-filter-sec>.filter").removeClass('filterfttop');
		  }*/
	  }

});
//header one page click
//header nav menu
$('.toggle-side').click(function(){
  $(".side-menu").toggleClass("show")
})

$('.close-side').click(function(){
  $(".side-menu").toggleClass("show")
})
//header nav menu
//banner slider
$('.main-banner').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    dots:false,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    nav:false,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    //smartSpeed:450,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
//banner slider
//featured slider
$('.featured-carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:true,
    stagePadding:160,
    responsive:{
        0:{
            items:1,
            stagePadding:0,
            margin:10
        },
        600:{
            items:3,
            stagePadding:0,
            margin:20
        },
        1280:{
            items:4,
            stagePadding:0,
            margin:20
        },
        1500:{
            items:4,
            stagePadding:160,
            margin:30
        }
    }
})
//featured slider
//product carousel
$('.product-carousel').owlCarousel({
    loop:false,
    margin:120,
    autoplay:false,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1,
            margin:30
        },
        600:{
            items:3,
            margin:30
        },
        1025:{
            items:3,
            margin:30
        },
        1280:{
            items:3,
            margin:120
        }
    }
})
//product carousel
//thumbs slider
jQuery(document).ready(function ($) {
  var bigimage = $("#big");
  var thumbs = $("#thumbs");
  var syncedSecondary = true;

  bigimage.owlCarousel({
      items: 1,
      slideSpeed: 2000,
      nav: false,
      autoplay: true,
      dots: false,
      loop: true,
      margin:20,
      responsiveRefreshRate: 200,
      responsive:{
          0:{
              items:1
          },
          475:{
              items:1
          },
          1024:{
              items:1
          }
      }
    })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function () {
      thumbs
        .find(".owl-item")
        .eq(0)
        .addClass("current");
    })
    .owlCarousel({
      items: 4,
      margin: 12,
      dots: false,
      nav: false,
      smartSpeed: 200,
      slideSpeed: 500,
      slideBy: 4,
      responsiveRefreshRate: 100,
      responsive:{
          0:{
              items:2
          },
          475:{
              items:3
          },
          1024:{
              items:4
          }
      }
    })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
      .find(".owl-item.active")
      .first()
      .index();
    var end = thumbs
      .find(".owl-item.active")
      .last()
      .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }
  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }
  thumbs.on("click", ".owl-item", function (e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
});
//thumbs slider
//product filter
$(function() {
    var $filter = $('.filter');
    var $tab = $('.filter a');
    var $offers = $('.boxGroup .box')
    $filter.on('click touch', '.all',  function(e) {
      e.preventDefault();
      $tab.removeClass('current');
      $(this).addClass('current');

      $offers.hide();
      $offers.fadeIn( 700 );
    });
    $filter.on('click touch', '.pastry',  function(e) {
      e.preventDefault();
      $tab.removeClass('current');
      $(this).addClass('current');

      $offers.show();
      $offers.fadeOut( 400 );
      $offers.filter('.pastry').fadeIn( 400 );
    });
      $filter.on('click touch', '.chocolates',  function(e) {
      e.preventDefault();
      $tab.removeClass('current');
      $(this).addClass('current');

      $offers.show();
      $offers.fadeOut( 400 );
      $offers.filter('.chocolates').fadeIn( 400 );
    });
    $filter.on('click touch', '.candies',  function(e) {
      e.preventDefault();
      $tab.removeClass('current');
      $(this).addClass('current');

      $offers.show();
      $offers.fadeOut( 400 );
      $offers.filter('.candies').fadeIn( 400 );

    });
  });
//product filter
//product filter title carousel
$('.filter-title').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:3,
            autoplay:true
        },
        600:{
            items:4
        },
        1000:{
            items:4
        }
    }
})
//product filter title carousel






































//
