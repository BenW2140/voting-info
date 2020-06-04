$(document).ready(function() {
  $("#age").submit(function(event) {
    event.preventDefault();
    const age = parseInt($("#age1").val())
    if (age < 18) {
      $("#meetsAge").hide();
      $("#underAge").show();
    } else {
      $("#underAge").hide();
      $("#meetsAge").show();
    }
  });
});