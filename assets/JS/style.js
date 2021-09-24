var timeTextEl = $("#currentDay");
var currentDay = moment().format("dddd[,] MMMM Do");
console.log(currentDay);
timeTextEl.text(currentDay);
//^^ uses moment.js to display day & month at bottom of jumbotron.

//generates the time table with blank inputs
function makeTimeTable() {
    var tableEl = $('.table-element');
    for (var i = 8; i < 25; i++) {
        var timeRowEl = $("<tr>").text([i] + ":00");
        var todoRowEL = $("<tr>").addClass("col-10");
        var saveEl = $("<tr>").addClass("bg-primary text-light position-absolute top-50 start-50 translate-middle");

        tableEl.append(
            timeRowEl,
            todoRowEL,
            saveEl
        );
    }
}