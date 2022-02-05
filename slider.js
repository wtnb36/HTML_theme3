$(function () {
  $('.slider').slick({
    autoplay: true,//自動的に動き出すか。初期値はfalse。
    speed: 500,//スライドのスピード。初期値は300。
    slidesToShow: 1,//スライドを画面に3枚見せる
    slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
    centerMode: true,//要素を中央ぞろえにする
    dots: true,//下部ドットナビゲーションの表示
    centerPadding: '10%',
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
  });
});