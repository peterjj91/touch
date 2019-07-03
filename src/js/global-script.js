$(document).ready(function() {
  
});

$(document).ready(function() {
  $('.multiple-items').slick({
    infinite: false,
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  });
});

$(document).ready(function() {
  var myFullpage = new fullpage('#fullpage', {
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE',
    anchors: ['page-about', 
              'page-service', 
              'page-attend', 
              'page-buy', 
              'page-whyWe', 
              'page-news', 
              'page-contacts'],
    menu: '#menu',
    keyboardScrolling: false,
    fadingEffect: true,
    // scrollOverflow: true
    autoScrolling: false,
    paddingTop: '0em',
    paddingBottom: '0px',
    licenseKey: 'OPEN-SOURCE-GPLV3-LICENSE'
  });
});

// $(document).ready(function(){
//   $('.toggle-menu').click(function(){
//     $(this).toggleClass('open');
//     slideout.close();
//   });
// });

// MAIN MENU
// var slideout = new Slideout({
//   'panel': document.getElementById('main'),
//   'menu': document.getElementById('menu'),
//   'side': 'right',
//   'padding': 256,
//   'tolerance': 70
// });
// document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
//   slideout.toggle();
// });
// function close(eve) {
//   eve.preventDefault();
//   slideout.close();
// }
// slideout
//   .on('beforeopen', function() {
//     this.panel.classList.add('panel-open');
//   })
//   .on('open', function() {
//     this.panel.addEventListener('click', close);
//   })
//   .on('beforeclose', function() {
//     this.panel.classList.remove('panel-open');
//     this.panel.removeEventListener('click', close);
//   });

