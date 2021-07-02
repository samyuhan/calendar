// Add current date at top of planner with moment.js
var currentDay = moment().format("dddd, MMMM Do");
$("#currentDay").append(currentDay);
