function Tasks(taskName, description, dueDate) {
  this.taskName = taskName;
  this.description = description;
  this.dueDate = dueDate;
}

Tasks.prototype.dueTask = function() {
  return this.taskName + " " + this.dueDate;
}






$(document).ready(function() {
  $(".form-one").submit(function(event) {
    event.preventDefault();
    var taskNameInput = $("input[name=taskName]").val();
    var descriptionInput = $("input[name=description]").val();
    var dueDateInput = $("#datepicker").val();

    var newTask = new Tasks(taskNameInput, descriptionInput, dueDateInput);

    $("#output").append("<li><span class='clickable'>" + newTask.dueTask() +  "</span><button class='doneButton'>Complete</input></button></li><br></br>");

    $("#output, #hide-output").show();


    $(".clickable").last().click(function() {
      $("#showOutput").show();
      $("#taskName").text(newTask.taskName);
      $("#description").text(newTask.description);
      $("#dueDate").text(newTask.dueDate);
    });

    $("input[name=taskName]").val("");
    $("input[name=description]").val("");
    $("#datepicker").val("");


    $(".doneButton").last().click(function(){
      $(this).prev().toggleClass("taskComplete");


    });
  });
});
