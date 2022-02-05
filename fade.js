$(function () {
  $(".fade img:not(:first-child)").hide();
  setInterval(function () {
    $(".fade img:first-child").fadeOut(3000).next("img").fadeIn(3000).end().appendTo(".fade");
  }, 10000);
});