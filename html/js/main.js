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

/*==humberger menu js==*/
(function() {

  var hamburger = {
    navToggle: document.querySelector('.nav-toggle'),
    nav: document.querySelector('.bar-collapse'),

    doToggle: function(e) {
      e.preventDefault();
      this.navToggle.classList.toggle('expanded');
      this.nav.classList.toggle('expanded2');
    }
  };

  hamburger.navToggle.addEventListener('click', function(e) { hamburger.doToggle(e); });
  //hamburger.nav.addEventListener('click', function(e) { hamburger.doToggle(e); });

}());

$('.nav-toggle').click( function(){
    if ( $('body').hasClass('dScroll') ) {
        $('body').removeClass('dScroll');
    } else {
        $('body').removeClass('dScroll');
        $('body').addClass('dScroll');    
    }
});
/*==humberger menu js==*/

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



// let component = document.querySelector('ul');
// component.addEventListener('click',()=>{
//      component.classList.toggle('active');  
// })

    