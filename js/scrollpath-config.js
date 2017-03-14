var windowWidth = $(window).width()
var centerPtOffset = windowWidth/Math.sqrt(2)

$(document).ready(init);

function init() {
  /* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */

  $.fn.scrollPath("getPath")
    // Move to 'start' element (N position)
    .moveTo(0, 0, {name: "top"})
    // 1/8 arc clockwise (NE position)
    .arc(0, windowWidth, windowWidth, 3/2*Math.PI, 7/4*Math.PI, false, {
      name: "about"
    })
    // 1/8 arc clockwise (E position)
    .arc(0, windowWidth, windowWidth, 7/4*Math.PI, 2*Math.PI, false)
    // 1/8 arc clockwise (SE position)
    .arc(0, windowWidth, windowWidth, 2*Math.PI, Math.PI/4, false, {
      name: "projects"
    })
    // 1/8 arc clockwise (S position)
    .arc(0, windowWidth, windowWidth, Math.PI/4, Math.PI/2, false)
    // 1/8 arc clockwise (SW position)
    .arc(0, windowWidth, windowWidth, Math.PI/2, 3/4*Math.PI, false, {
      name: "skills"
    })
    // 1/8 arc clockwise (W position)
    .arc(0, windowWidth, windowWidth, 3/4*Math.PI, Math.PI, false)
    // 1/8 arc clockwise (NW position)
    .arc(0, windowWidth, windowWidth, Math.PI, 5/4*Math.PI, false, {
      name: "contact"      
    })
    // 1/8 arc clockwise (N position)
    .arc(0, windowWidth, windowWidth, 5/4*Math.PI, 3/2*Math.PI, false)

  // We're done with the path, let's initate the plugin on our wrapper element
  $(".wrapper").scrollPath({drawPath: true, wrapAround: true});

  // Add scrollTo on click on the navigation anchors
  // $("nav").find("a").each(function() {
  //   var target = $(this).attr("href").replace("#", "");
  //   $(this).click(function(e) {
  //     e.preventDefault();
      
  //     // Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
  //     // for extra easing functions like the one below
  //     $.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
  //   });
  // });

  $(".toAbout").click(function() {
    $.fn.scrollPath("scrollTo", "about", 1000, "easeInOutSine");
  });
  $(".toProjects").click(function() {
    $.fn.scrollPath("scrollTo", "projects", 1000, "easeInOutSine");
  });
  $(".toSkills").click(function() {
    $.fn.scrollPath("scrollTo", "skills", 1000, "easeInOutSine");
  });
  $(".toContact").click(function() {
    $.fn.scrollPath("scrollTo", "contact", 1000, "easeInOutSine");
  });
};