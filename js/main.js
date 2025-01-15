$(".title").on("click", function () {
  $(".box").slideUp(500);

  var findElm = $(this).next(".box");

  if ($(this).hasClass("close")) {
    $(this).removeClass("close");
  } else {
    $(".close").removeClass("close");
    $(this).addClass("close");
    $(findElm).slideDown(500);
  }
});

/*=================================================
  ハンバーガーメニュー
  ===================================================*/
$(".toggle-btn").on("click", function () {
  // headerにopenクラスがあるか判定する
  if ($("#header").hasClass("open")) {
    // headerにopenクラスが存在する場合、openクラスを削除する
    $("#header").removeClass("open");
  } else {
    // headerにopenクラスが存在しない場合、openクラスを加える
    $("#header").addClass("open");
  }
});

// メニューが表示されている時に画面をクリックして戻る
$("#mask").on("click", function () {
  $("#header").removeClass("open");
});


$('.item-right-sub img').on('click',function(){
  img = $(this).attr('src');
  $('.item-right-sub li').removeClass('current');
  $(this).parent().addClass('current');

  $('.item-right-main img').fadeOut(500,function(){
    $('.item-right-main img').attr('src',img).on('load',function(){
      $(this).fadeIn();
    })
  })
});
