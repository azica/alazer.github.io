
 // FIXED TOP HEADER
 function myFunction() {
  window.onscroll = function() {myFunction()};
  var header = document.querySelector('header');
  var sticky = header.offsetTop;
  if (window.pageYOffset > sticky) {
    header.classList.add("header-sticky");
  } else {
    header.classList.remove("header-sticky");
  }
}
myFunction();

 // TOGGLE MENU
 $('.toggle-menu').click(function () {
  $('.menu').toggleClass('menu-open', 400);
  $('.toggle-menu').toggleClass('active', 200);
});

$('.features__slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesTiScroll: 1,
  nextArrow: '<button id="next" type="button"></button>',
  prevArrow: '<button id="prev" type="button"></button>',
});


  //SMOOTHSCROLL
  const makeNavLinksSmooth = ( ) => {
    const navLinks = document.querySelectorAll( '.nav__link' );
  
    for ( let n in navLinks ) {
      if ( navLinks.hasOwnProperty( n ) ) {
        navLinks[ n ].addEventListener( 'click', e => {
          e.preventDefault( );
          document.querySelector( navLinks[ n ].hash )
            .scrollIntoView( {
              behavior: "smooth"
            } );
        } );
      }
    }
  }
  
  const spyScrolling = ( ) => {
    const sections = document.querySelectorAll( '.hero-bg' );
  
    window.onscroll = ( ) => {
      const scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  
      for ( let s in sections )
        if ( sections.hasOwnProperty( s ) && sections[ s ].offsetTop <= scrollPos ) {
          const id = sections[ s ].id;
          document.querySelector( '.active' ).classList.remove( 'active' );
          document.querySelector( `a[href*=${ id }]` ).parentNode.classList.add( 'active' );
        }
    }  
  }
  
  makeNavLinksSmooth();
  spyScrolling();
// Accordion 
var acc = document.getElementsByClassName("interest__link");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function(e) {
 e.preventDefault();
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
   
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null; 
      panel.style.marginBottom= '0px';
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.marginBottom= '27px';
    } 
  });
}


$('.events__slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesTiScroll: 1,
  nextArrow: document.querySelector('#eventsNext'),
  prevArrow:  document.querySelector('#eventsPrev'),
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        arrows: false,
        slidesToShow: 3,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        arrows: false,
        slidesToShow: 2,
        dots: true
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        slidesToShow: 1,
        dots: true
      }
    }
  ]
});

 // Tab 
 function tabFunc(evt, tabName) {
  evt.preventDefault();
  var i, tabContent, tabItem;
  tabContent = document.getElementsByClassName("tab__content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  tabItem = document.getElementsByClassName("tab__nav-item");
  for (i = 0; i < tabItem.length; i++) {
    tabItem[i].className = tabItem[i].className.replace(" active", "");
  }

  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
};



  // ANIMATION 
  const animItems = document.querySelectorAll('.anim-items');
  if(animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(params) {
      for (let index = 0; index < animItems.length; index++) {
        const animItem = animItems[index];
        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        const animStart = 4;
        

        let animItemPoint = window.innerHeight - animItemHeight / animStart;

        if ( animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < ( animItemOffset + animItemHeight)) {
          animItem.classList.add('_active');
        } else {
          if (!animItem.classList.contains('anim-hide')) {
            animItem.classList.remove('_active');
          }
        }
      }
    }
    function offset(el) {
      const rect = el.getBoundingClientRect(),
      scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
      scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return { top: rect.top + scrollTop, left: rect.lect + screenLeft}
      
    }
    setTimeout(() => {
      animOnScroll();
    }, 300);
    
  }
  // =========================================================================
