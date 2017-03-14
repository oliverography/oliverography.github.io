$(document).ready(function() {
  // Scroll to About section on document load
  $.fn.scrollPath("scrollTo", "about", 1200, "easeInOutSine");
});

// Reload on window resize
$(window).resize(function(){location.reload();});