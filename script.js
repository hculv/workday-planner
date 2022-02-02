
// Date on Jumbo color based on hour

var weekDay = moment().format("ddd MMM Do, YYYY");
$("#currentDay").text(weekDay);

// Change color based on hour

var currentHour = moment().hour();
console.log(currentHour);


function colorChange(){
    
    $(".time-block").each(function(){
        var timeBlockHour = parseInt($(this).attr("id"));
        
    
        if (timeBlockHour === currentHour){
            $(this).addClass("present");
            $(this).removeClass("past"); }

            else if (timeBlockHour < currentHour){
                $(this).addClass("past"); }

                else if (timeBlockHour > currentHour){
                    $(this).removeClass("past");
                    $(this).addClass("future"); }} )}

colorChange();

// Save to local storage 

$(document).ready(function () {
    $(".saveBtn").on("click", function () {
        var task = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");

        localStorage.setItem(hour, task); })}
)

$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("17"));

