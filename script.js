var currentDayEl = document.querySelector("#currentDay");
var allTasksData = [

]
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
        // if (localStorage.getItem("tasks")) {
        //     var taskListEl = document.getElementById(hours[i]);
        //     taskListEl.innerHTML = localStorage.getItem(hours[i]);
        // }

        // change to localStorage getItem task, turn task back using parse
        // loop through, each object has id, set textarea value to it
    }
}

var savedTasks = localStorage.getItem("task");
var parsedSavedTasks = JSON.parse(savedTasks);
if (parsedSavedTasks !== null) {

    for (var i = 0; i < parsedSavedTasks.length; i++) {
        var targetTextArea = document.getElementById(parsedSavedTasks[i].time);
        targetTextArea.value = parsedSavedTasks[i].data;
    }

}

// save in an array of objects DONE
// steps
// give all buttons an id DONE
// keep all data objects in an array DONE
// 

function saveTask(event) {
    console.log(event.target.id);
    var textAreaContent = event.target.id;
    textAreaContent = document.getElementById(textAreaContent);
    console.log(textAreaContent.previousElementSibling.value);
    var savedContentObj = {
        time: textAreaContent.previousElementSibling.id,
        data: textAreaContent.previousElementSibling.value
    }
    allTasksData.push(savedContentObj);
    localStorage.setItem("task", JSON.stringify(allTasksData));
}

var allSaveBtns = document.querySelectorAll(".saveBtn");

for (var i = 0; i < allSaveBtns.length; i++) {
    allSaveBtns[i].addEventListener("click", saveTask);
    console.log("working");
}

checkCurrentHour();

