

//color-code each block of time based on whether in past or coming up soon
// functions needed:
// save tasks(in the cards)
//edit tasks
//load tasks
//clear all tasks
var dateAndTime = document.querySelector("#currentDay");

//display current date at the top of the calendar
var refreshTime = function(){
    // dateAndTime.textContent = "";
    var currentTime = moment();
    dateAndTime.textContent = currentTime.format("MMM Do, YYYY - hh:mm a");
}
setInterval(refreshTime, 1000);
//create cards for each hour of the day - 7-9

// var editTask = function(){
//      var text = $(this)
//     .text()
//     .trim();

//   var textInput = $("<textarea>")
//   .addClass("text-center col-12 col-lg-10 border")
//   .val(text);

//   $(this).replaceWith(textInput);
//  }

var saveTask = function(){
    var taskText = $(this).prev().val();
    var taskHour = $(taskText).prevUntil(".time");
    console.log(taskHour);
}

// $("#text-container").on("click", editTask);
$("#save-task").on("click", saveTask);