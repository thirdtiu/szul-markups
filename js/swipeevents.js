$(function() {  
  var tapCount=0;
  var doubleTapCount=0;
  var longTapCount=0;
  var swipeCount=0;
  var blackCount=0;

  //Enable swiping...
  $("#mobile-nav-control").swipe( {
    tap:function(event, target) {
      tapCount++;
      msg(target);
      $('.mobile-nav-control').hide();
      $('.mm-page, .windowshade, #mobile-nav, #top_header, body').removeClass('move-right');
    },
    doubleTap:function(event, target) {
      doubleTapCount++;
      msg(target);
      $('.mobile-nav-control').hide();
      $('.mm-page, .windowshade, #mobile-nav, #top_header, body').removeClass('move-right');
    },
    longTap:function(event, target) {
      longTapCount++;
      msg(target);
      $('.mobile-nav-control').hide();
      $('.mm-page, .windowshade, #mobile-nav, #top_header, body').removeClass('move-right');
    },
    swipe:function() {
      swipeCount++;
      $("#textText").html("You swiped " + swipeCount + " times");
      $("#mobile-nav").mmenu().trigger('close');
      $('.mobile-nav-control').hide();
      $('.mm-page, .windowshade, #mobile-nav, #top_header, body').removeClass('move-right');
    },
    threshold:50
  });
  
  //Assign a click handler to a child of the touchSwipe object
  //This will require the jquery.ui.ipad.js to be picked up correctly.
  
  
  function msg(target) {
      $("#textText").html("You tapped " + tapCount +", double tapped " +  doubleTapCount + " and long tapped " +  longTapCount + " times on " +  $(target).attr("id"));
  }
});