$(document).ready(function() {
  getCurrentDay();
  createTimeBlocks();
  updateTimeBlocks();
  renderStoredData();
  $("button").on("click", saveData);
})

