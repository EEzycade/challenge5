var currentDayEl = document.querySelector("#currentDay");
var saveTaskBtn = document.querySelector(".saveBtn")
var currentHour = moment().format("H");
var hours = ["9", "10", "11", "12", "1", "2", "3", "4", "5"];

var today = moment();
console.log(currentHour);
currentDayEl.textContent = today.format("dddd, MMMM Do");

function checkCurrentHour() {
    for (var i = 0; i < hours.length; i++) {
        var hourId = "#" + hours[i];
        var militaryTime = parseInt(hours[i]);
        if (hours[i] < 6) {
            militaryTime = parseInt(hours[i]) + 12;
        }
        console.log(militaryTime, currentHour);
        if (militaryTime == currentHour) {
            $(hourId).addClass("present");
        }
        else if (militaryTime < currentHour) {
            $(hourId).addClass("past");
        }
        else {
            $(hourId).addClass("future");
        }
        if (localStorage.getItem(hours[i])) {
            var taskListEl = document.getElementById(hours[i]);
            taskListEl.innerHTML = localStorage.getItem(hours[i]);
        }

    }
}

function saveTask() {
    localStorage.setItem("task", hours[i].textContent);
}

saveTaskBtn.addEventListener("click", saveTask);

checkCurrentHour();





