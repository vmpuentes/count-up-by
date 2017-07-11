var maxNumber;
var countBy;
var theCount = [];

$(function() {
  $("#daForm").submit(function(event) {
    event.preventDefault();
    maxNumber = parseInt($("input#countTo").val());
    countBy = parseInt($("input#countBy").val());
    var currentNumber = 0;

    for (var index = 0; currentNumber < maxNumber; index += 1) {
      currentNumber += countBy;
      theCount[index] = currentNumber;
    }
  });
});
