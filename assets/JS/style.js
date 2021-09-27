var timeTextEl = $("#currentDay");
var currentDay = moment().format("dddd[,] MMMM Do");
console.log(currentDay);
timeTextEl.text(currentDay);
//^^ uses moment.js to display day & month at bottom of jumbotron.
var tableEl = $("#project-display");

init();

//generates the time table with blank inputs and also makes the input element.

function makeTimeTable() {

    for (var i = 8; i < 25; i++) {
        var projectRowEl = $('<div>').addClass("row project");
        var timeRowEl = $('<div>').text([i] + ":00").addClass("col-md-2 time border").attr("id", i);
        var todoRowEL = $('<textarea>').addClass("col-md-8 bg-success TODO ");
        var saveEl = $('<button>').addClass("col-md-2 bg-primary text-light top-50 start-50 translate-middle SAVE").text("Save");
        var inputArea = $("<div>").addClass("")
        var inputEl = $("<textarea>").addClass(" text-area");
        console.log(i);
        projectRowEl.attr("data-hour", i);

       // inputEl.attr("value");
        console.log(inputEl);
        inputArea.append(inputEl);

        projectRowEl.append(
            timeRowEl,
            todoRowEL,
            saveEl
        );

        tableEl.append(projectRowEl);
    }
    

}

// this function will check the current time using moment.js and append the colors of the todoRowEl according.
function timeCheck() {
    var currentTime = moment().format("HH");
    var newTime = Number(currentTime);
    $(".project").each( function() {

        var anyVar = Number($(this).attr("data-hour"));

        if ( anyVar < newTime) {
            $(".TODO").addClass("bg-warning")
        } else if (anyVar === newTime){
            $(".TODO").addClass("bg-success");
        } else {
            $(".TODO").addClass("bg-danger");
        }
        console.log(anyVar);
    });
    



    
    
}

var saveButton = $(".SAVE");
saveButton.on("click", function (){

    var randomVar = $(this).siblings(".TODO").val();
    //var randomVar = $("#textarea2").val();
    console.log(randomVar);
    localStorage.setItem("userInput", JSON.stringify(randomVar));

});




function init() {
    makeTimeTable();
   timeCheck();
    console.log("jho");
}

var title = $( "em" ).attr( "title" );
var example = $( "div" ).text( title );

console.log(example);