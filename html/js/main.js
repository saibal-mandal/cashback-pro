//loader
$(window).load(function() {
    $('.loader').delay(400).fadeOut(200);
	});	
	

//scroll to top	
$(window).scroll(function(){
	if($(this).scrollTop()>250){
		$('.scrollup').fadeIn();
	}else{
		$('.scrollup').fadeOut();
		}
	});
$('.scrollup').click(function(){
	$("html, body").animate({scrollTop:0}, 600);
	return false;
	});
    	
/*dropdown js*/
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
 
$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 992px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});

 // owl-carousel banner 
$('#owldemo1').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4500,
        smartSpeed: 1950,
        dots: true,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });
		
 // owl-carousel deal 
$('#owldemo2').owlCarousel({
        loop: true,
        nav: true,
        margin:5,
        navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 2000,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 1
            },
            767: {
                items: 2
            },
            991: {
                items: 3
            }
        }
    });
// owl-carousel new product
$('#owldemo3').owlCarousel({
        loop: true,
        nav: true,
        navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
        autoplay: true,
        autoplayTimeout: 4500,
        smartSpeed: 1950,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1025: {
                items: 4
            }
        }
    });
// owl-carousel Popular Products
$('#owldemo4').owlCarousel({
        loop: true,
        nav: true,
        navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 2550,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1025: {
                items: 4
            }
        }
    });

// owl-carousel Popular brands
$('#owldemo5').owlCarousel({
        loop: true,
        nav: false,
        autoplay: true,
        autoplayTimeout: 4500,
        smartSpeed: 1950,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 2
            },
            500: {
                items: 3
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            },
            1025: {
                items: 6
            }
        }
    });


// owl-carousel blog
$('#owldemo6').owlCarousel({
        loop: true,
        margin:10,
        nav: true,
        navText : ["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],
        autoplay: true,
        autoplayTimeout: 6000,
        smartSpeed: 2550,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            575: {
                items: 2
            },
            900: {
                items: 3
            },
            1025: {
                items: 4
            },
           1100: {
                items: 5
            } 
        }
    });

// modal pop up
$(window).load(function(){        
   $('#myModal').modal('show');
    }); 

/*-----------------------
       Product Single Slider
    -------------------------*/
    $(".ps-slider").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 3,
        dots: false,
        navText : ["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true,

    });
    
    
    /*-------------------
        Range Slider
    --------------------- */
    var rangeSlider = $(".price-range"),
        minamount = $("#minamount"),
        maxamount = $("#maxamount"),
        minPrice = rangeSlider.data('min'),
        maxPrice = rangeSlider.data('max');
        rangeSlider.slider({
        range: true,
        min: minPrice,
        max: maxPrice,
        values: [minPrice, maxPrice],
        slide: function (event, ui) {
            minamount.val('$' + ui.values[0]);
            maxamount.val('$' + ui.values[1]);
        }
    });
    minamount.val('$' + rangeSlider.slider("values", 0));
    maxamount.val('$' + rangeSlider.slider("values", 1));

    /*-------------------
        Radio Btn
    --------------------- */
    $(".fw-size-choose .sc-item label, .pd-size-choose .sc-item label").on('click', function () {
        $(".fw-size-choose .sc-item label, .pd-size-choose .sc-item label").removeClass('active');
        $(this).addClass('active');
    });
    
    /*-------------------
        Nice Select
    --------------------- */
    $('.sorting, .p-show').niceSelect();

    /*------------------
        Single Product
    --------------------*/
    $('.product-thumbs-track .pt').on('click', function(){
        $('.product-thumbs-track .pt').removeClass('active');
        $(this).addClass('active');
        var imgurl = $(this).data('imgbigurl');
        var bigImg = $('.product-big-img').attr('src');
        if(imgurl != bigImg) {
            $('.product-big-img').attr({src: imgurl});
            $('.zoomImg').attr({src: imgurl});
        }
    });

    $('.product-pic-zoom').zoom();
    
    /*-------------------
        Quantity change
    --------------------- */
    var proQty = $('.pro-qty');
    proQty.prepend('<span class="dec qtybtn">-</span>');
    proQty.append('<span class="inc qtybtn">+</span>');
    proQty.on('click', '.qtybtn', function () {
        var $button = $(this);
        var oldValue = $button.parent().find('input').val();
        if ($button.hasClass('inc')) {
            var newVal = parseFloat(oldValue) + 1;
        } else {
            // Don't allow decrementing below zero
            if (oldValue > 0) {
                var newVal = parseFloat(oldValue) - 1;
            } else {
                newVal = 0;
            }
        }
        $button.parent().find('input').val(newVal);
    });
