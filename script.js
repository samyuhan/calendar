// Add current date at top of planner with moment.js
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").append(currentDay);

// Create currentTime variable to coordinate colors for past, present, future
var currentTime = moment();
colorBlock();

// Coordinate colors with this function
function colorBlock(){
    var timeBlock = $(".time-block");
    var currentHr = currentTime.hours();
    
    for(var i = 0; i < timeBlock.length; i++){
        var block = timeBlock[i];

        if(parseInt(block.id) < currentHr){
            $(block).addClass("past");
        }
        else if(parseInt(block.id) === currentHr){
            $(block).removeClass("past");
            $(block).addClass("present");
        }
        else{
            $(block).removeClass("past");
            $(block).removeClass("present");
            $(block).addClass("future");
        }
    }
}
