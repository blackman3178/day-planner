var timeTextEl = $("#currentDay");
var currentDay = moment().format("dddd[,] MMMM Do");
console.log(currentDay);
timeTextEl.text(currentDay);
//^^ uses moment.js to display day & month at bottom of jumbotron.

