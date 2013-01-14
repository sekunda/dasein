$(document).ready( function() {
  $(".konewka").click(function() {
    $(this).addClass("rotate30");
    var parent = $(this).parents('.paper');
    setTimeout( function() {
      $(parent).find(".woda").slideDown(1000, function(){
        $(parent).find(".dasein").slideDown(1000, function(){
          $(parent).find(".kwiatek").slideDown(1000, function(){
            $(parent).find(".fadebox").fadeOut("slow");
          });
        });
      });
    },1000);
  });
});
