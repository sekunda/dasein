$(document).ready( function() {
  $("#konewka").click(function() {
    $(this).addClass("rotate30");
    setTimeout( function() {
      $("#woda").slideDown(1000, function(){
        $("#dasein").slideDown(1000, function(){
          $("#kwiatek").slideDown(1000);
        });
      });
    },1000);
  });
});
