$(function(){

  $(".stc-tab__wrapper--myself").on("click", function(){
    $(this).addClass("color");
    $(".stc-tab__wrapper--all").removeClass("color");

    $(".stc-myself").show();
    $(".stc-all").hide();
  });

  $(".stc-tab__wrapper--all").on("click", function(){
    $(this).addClass("color");
    $(".stc-tab__wrapper--myself").removeClass("color");

    $(".stc-all").show();
    $(".stc-myself").hide();
  });
  

});