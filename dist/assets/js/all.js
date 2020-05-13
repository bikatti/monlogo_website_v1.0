  $(window).scroll(function() {
    if ($("#navw").offset().top < 100) {
        $("#navw").addClass("d-block");
        $("#navb").addClass("d-block");
        $("#navw").removeClass("d-none");
    } else {
        $("#navw").addClass("d-none");
        $("#navw").removeClass("d-block");
        $("#navb").addClass("d-block");
        $("#navb").removeClass("d-block");
    }
  });

  $(window).scroll(function() {
    if ($("#navb").offset().top >= 100) {
        $("#navb").addClass("d-block");
        $("#navb").removeClass("d-none");
    } else {
        $("#navb").removeClass("d-block");
        $("#navb").addClass("d-none");
    }
  });

