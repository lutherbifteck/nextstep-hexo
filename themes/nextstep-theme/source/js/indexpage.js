$(document).ready(function() {

  var $doc = $(document);
  var $body = $doc.find('body');
  var $hamburger = $doc.find(".hamburger");
  var $xtraLinks = $doc.find(".xtra-links");
  var $upArrow = $('<div class="ns-vert-arrow-up"></div>');
  var $downArrow = $('<div class="ns-vert-arrow-down"></div>');

  // var $section0 = $('#section0'); //jobs
  // var $section1 = $('#section1'); //home
  // var $section2 = $('#section2'); //contact
  // var activeSection;

  $body.append($upArrow);
  $body.append($downArrow);

  $('#fullpage').fullpage({
    anchors: ['jobsPage', 'homePage', 'contactPage'],
    sectionsColor: ['rgba(27,188,155,.95)', 'transparent', 'rgba(27,188,155,.95)'],
    css3: true,
    onLeave: function(index, nextIndex, direction) {
      if (nextIndex == 1) {
        $upArrow.hide();
        $downArrow.addClass('home-message-before');
      }
      //going form section 3 to 2
      else if (nextIndex == 2) {
        $upArrow.removeClass('home-message-after').show();
        $downArrow.removeClass('home-message-before').show();
      } else if (nextIndex == 3) {
        $downArrow.hide();
        $upArrow.addClass('home-message-after')
      }
    },
    onSlideLeave: function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
      var isFirst = direction === 'right' && nextSlideIndex > slideIndex + 1;
      var isLast = direction === 'left' && slideIndex > nextSlideIndex + 1;
      $(this).parent().toggleClass('no_transition', isFirst || isLast);

      if (nextSlideIndex == 0) {
       console.log('going to mission')
       $('.fp-prev').removeClass('home-message-after').addClass('about-message-after');
       $('.fp-next').removeClass('mission-message-before').addClass('home-message-before');

      } else if (nextSlideIndex == 1) {
        $('.fp-next').removeClass('home-message-before')
                     .removeClass('mission-message-before')
                     .removeClass('about-message-before');
        $('.fp-prev').removeClass('home-message-after')
                     .removeClass('mission-message-after')
                     .removeClass('about-message-after');

      } else if (nextSlideIndex == 2) {
        $('.fp-prev').removeClass('about-message-after')
                     .addClass('home-message-after');
        $('.fp-next').removeClass('home-message-before')
                     .addClass('mission-message-before');
      }
    }
  });

  $upArrow.on('click', function() {
    $.fn.fullpage.moveSectionUp();
  });

  $downArrow.on('click', function() {
    $.fn.fullpage.moveSectionDown();
  });

  $hamburger.on("click", function(e) {
    $hamburger.toggleClass("is-active");
    $xtraLinks.toggleClass('shown');
  });

});
