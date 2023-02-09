$(document).ready(function () {
  $("#menu-toggle").click(function () {
    $("ul").slideToggle();
  });

  $(window).resize(function () {
    if ($(window).width() > 768) {
      $("ul").show();
    } else {
      $("ul").hide();
    }
  });
});
