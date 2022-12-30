$(document).ready(function(){
    $("#input").on("keyup", function() {
      var value = $(this).val().toLowerCase();
      $("#tabela tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });
  });