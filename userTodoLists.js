$(document).ready(function () {

    retrieveTaskLists();


    $('#createNewTodo').click(function(){
        createNewTodo();
      });
      
});

function deleteTodo(email,taskname) {

    var data = {};
    data['email'] = email;
    data['taskname'] = taskname;

    
  
      $.ajax({
          type: "POST",
          contentType: "application/json",
          url: "http://localhost:8080/deleteTask", 
          data: JSON.stringify(data),
          dataType: 'json',
          success: function (response) {

            
            $("#dtBasicExample > tbody").html("");

            var trHTML = '';

            for(i=0; i<response.length; i++) {
                trHTML += '<tr><td>' + response[i].email +'</td>  <td>' + response[i].taskname +
                '</td> <td>' + response[i].description +'</td> <td>' + response[i].deadline +'</td>'+ 
                '<td><input class="removeBtn" type="button" value="Delete"></td></tr>';
            }

            $('#dtBasicExample tbody').append(trHTML);
   
              
          },
          error: function (e) {
              
          }
      });

}

function retrieveTaskLists() {
  
      $.ajax({
          type: "POST",
          contentType: "application/json",
          url: "http://localhost:8080/retrieveTasks", 
          data: '',
          dataType: 'json',
          success: function (response) {
              
            var trHTML = '';

            for(i=0; i<response.length; i++) {
                trHTML += '<tr><td>' + response[i].email +'</td>  <td>' + response[i].taskname +
                '</td> <td>' + response[i].description +'</td> <td>' + response[i].deadline +'</td>'+ 
                '<td><input class="removeBtn" type="button" value="Delete"></td></tr>';
            }

            $('#dtBasicExample tbody').append(trHTML);
            
            $('tbody').on("click", "input.removeBtn", function(){
                var email = $(this).closest("tr").find('td:eq(0)').text();
                var taskName = $(this).closest("tr").find('td:eq(1)').text();
                deleteTodo(email,taskName);
            });

           
        },
          error: function (e) {
              
          }
      });
  }


function createNewTodo() {
  var data = {};
  var taskname = $('#todoName').val();
  var description = $('#description').val();
  var deadline = $('#deadline').val();
  data['taskname'] = taskname;
  data['password'] = description;
  data['deadline'] = deadline;
  data['description'] = description;
  

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