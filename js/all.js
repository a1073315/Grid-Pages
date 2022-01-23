// init Masonry
var $grid = $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer'
  });
  // layout Masonry after each image loads
  $grid.imagesLoaded().progress( function() {
    $grid.masonry();
  });  

  

  $(document).ready(function(){
    
    $(window).scroll(function(){
      var scrollPos = $(window).scrollTop();
      var windowHeight = $(window).height();
      
      // animated
      $('.animated').each(function(){
        var thisPos = $(this).offset().top;
        if((windowHeight + scrollPos)-100 >= thisPos) {
           $(this).addClass('animate__zoomIn fadeIn');
        }
      });
      
    });
    
  });