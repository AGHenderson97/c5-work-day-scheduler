$(document).ready(function() {
  getCurrentDay();
  createTimeBlocks();
  updateTimeBlocks();
  renderStoredData();
  $("button").on("click", saveData);
})

function getCurrentDay() {
  let currentDay = days.formatDate(new Date(), "dddd, MMMM Do");
  $("#currentDay").text(currentDay);
  }

  function createTimeBlocks() {
    let container = $(".container");
    let startOfDay = days.startOf(new Date(), "day");
    let myTime = days.formatDate(days.add(startOfDay, 9, "hour"), "h:mma");
    for(let i = 0; i < 9; i++){

  let row = $("<div>");
  let hourSpan = $("<span>");
  let textSpan = $("<span>");
  let textArea = $("<textarea>");
  let button = $("<button>");
  let icon = $("<i>");