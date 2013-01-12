$(document).ready( function() {
  $("#konewka").click(function() {
    $(this).addClass("rotate30");
    setTimeout( function() {
      $("#woda").slideDown(1000, function(){
        $(this).css('display','block');
        $("#dasein").slideDown(1000, function(){
          $(this).css('display','block');
        });
      });
    },1000);
  });
});
