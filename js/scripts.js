var leapYear = function(year) {
  if (year % 4 === 0 && year % 100 != 0 || year % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

$(document).ready(function() {
  $("form#yearForm").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("#inputYear").val());
    var result = leapYear(year);
    $("#results").show();

    if (!result) {
      $("#not").show();
    } else {
      $("#not").hide();
    }
  })
})
