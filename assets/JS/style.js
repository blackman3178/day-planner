var timeTextEl = $("#currentDay");
var currentDay = moment().format("dddd[,] MMMM Do");
console.log(currentDay);
timeTextEl.text(currentDay);
//^^ uses moment.js to display day & month at bottom of jumbotron.
var tableEl = $("#project-display");
init();
//generates the time table with blank inputs

function makeTimeTable() {

    for (var i = 8; i < 25; i++) {
        var projectRowEl = $('<tr>');
        var timeRowEl = $('<td>').text([i] + ":00");
        var todoRowEL = $('<td>').addClass("col-10 bg-success TODO");
        var saveEl = $('<td>').addClass("bg-primary text-light position-absolute top-50 start-50 translate-middle h-100").text("Save");
        console.log(projectRowEl);
        var inputArea = $("<div>").addClass("")
        var inputEl = $("<input>").addClass("form-control bg-success TODO border-0 text-body");
        inputArea.append(inputEl);
        todoRowEL.append(inputArea);
        projectRowEl.append(
            timeRowEl,
            todoRowEL,
            saveEl
        );

        tableEl.append(projectRowEl);
    }
}

function init() {
    makeTimeTable();
    console.log("jho");
}

