var maxNumber;
var countBy;
var theCount = [];

$(function() {
  $("#daForm").submit(function(event) {
    event.preventDefault();
    // the value of the input is the argument for parseInt
    maxNumber = parseInt($("input#countTo").val());
    countBy = parseInt($("input#countBy").val());
    var currentNumber = 0;
    //to avoid current number going above max number, pre-count once to make sure it doesn't go above the max number
    for (var index = 0; (currentNumber+countBy) <= maxNumber; index += 1) {
      currentNumber += countBy;
      theCount[index] = currentNumber;
    }
    $("#output").text(theCount);
  });
});
