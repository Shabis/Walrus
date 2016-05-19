$(document).ready(function() {
  $(".clickable").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
  $("html").click(function() {
  $(".fadeinpeekaboo").fadeToggle();
  });
});
