

//color-code each block of time based on whether in past or coming up soon
// functions needed:
// save tasks
//load tasks
var dateAndTime = document.querySelector("#currentDay");

//display current date at the top of the calendar
var refreshTime = function () {
    // dateAndTime.textContent = "";
    var currentTime = moment();
    dateAndTime.textContent = currentTime.format("MMM Do, YYYY - hh:mm a");
}

var setColors = function () {
    var hour = document.querySelectorAll(".row")
    hour.forEach((hour) => {
        time = $(hour).attr("id");
        currentTime = moment().hours();
        var colorSet = $(hour).children("textarea")

        if (time > currentTime) {
            $(colorSet).removeClass("present");
            $(colorSet).removeClass("past");
            $(colorSet).addClass("future");
        }
        else if (time < currentTime) {
            $(colorSet).removeClass("present");
            $(colorSet).removeClass("future");
            $(colorSet).addClass("past");
        } else {
            $(colorSet).removeClass("future");
            $(colorSet).removeClass("past");
            $(colorSet).addClass("present");
        }
    })
};

refreshTime();
setColors();

setInterval(function(){
    refreshTime();
    setColors();
}, 1000);

var loadTasks = function () {
    taskContainer = document.querySelectorAll(".row");

    taskContainer.forEach((taskContainer) => {
        var taskId = $(taskContainer).attr("id");
        var taskText = $(taskContainer).children("textarea");

        var task = localStorage.getItem(taskId);

        $(taskText).text(task);
    });

}
loadTasks();

var saveTask = function () {
    console.log(this);
    var taskText = $(this).prev().val();
    var taskHour = $(this).parent().attr("id");

    localStorage.setItem(taskHour, taskText);

}

$(".saveBtn").on("click", saveTask);