// Add current date at top of planner with moment.js
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").append(currentDay);

// Call colorBlock function
colorBlock();

// Create function to coordinate colors for past, present, future
function colorBlock(){
    var timeBlock = $(".time-block");
    var currentTime = moment().hours();
    
    for (var i = 0; i < timeBlock.length; i++){
        var block = timeBlock[i];

        if (parseInt(block.id) < currentTime){
            $(block).addClass("past");
        } else if (parseInt(block.id) === currentTime){
            $(block).removeClass("past");
            $(block).addClass("present");
        } else {
            $(block).removeClass("past");
            $(block).removeClass("present");
            $(block).addClass("future");
        }
    }
}

//Save button click listener
$(".saveBtn").on("click", saveClick);

