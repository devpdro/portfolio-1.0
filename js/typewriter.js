$(document).ready(function () {
  $(".typewriter-text").addClass("animate__animated animate__fadeInDown");
  $(window).on("load", function () {
    $(".typewriter-text").removeClass("animate__fadeInDown");
  });
});
