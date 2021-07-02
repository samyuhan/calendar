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

// Save button
$(".saveBtn").on("click", saveClick);

// Create function to save data to local storage
function saveClick(event){
    var hour = $(event.target).parent().attr("id");
    var text = $(event.target).siblings(".description").val();
    
    localStorage.setItem(hour, text);
}