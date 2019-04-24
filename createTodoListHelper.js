$(document).ready(function () {
    $('#createNewTask').click(function () {
        createNewTask();
    });

});

function createNewTask() {
    var data = {};
    var taskName = $('#taskName').val();
    data['taskName'] = taskName;
  
      $.ajax({
          type: "POST",
          contentType: "application/json",
          url: "http://localhost:8080/createNewTask", 
          data: JSON.stringify(data),
          dataType: 'json',
          success: function (data) {
          },
          error: function (e) {
              
          }
      });
}