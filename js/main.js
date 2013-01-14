$(document).ready( function() {
  $("#konewka").click(function() {
    $(this).addClass("rotate30");
    setTimeout( function() {
      $("#woda").slideDown(1000, function() {
        $("#dasein").slideDown(2000, function() {
          $("#kwiatek").slideDown(1000, function() {
            $("#fadebox").fadeOut(3000, function() {
              $("#kwiatek").addClass("object");
              $("#kwiatek").addClass("rotate360");
            });
          });
        });
      });
    },1000);
  });
});
