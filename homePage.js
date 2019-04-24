$(document).ready(function(){
  $('#btnSignIn').click(function(){
    fire_ajax();
  });

});

function fire_ajax() {

  var data = {};
  var email = $('#inputEmail').val();
  var password = $('#inputPassword').val();
  data['email'] = email;
  data['password'] = password;

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/checkCustomer", 
        data: JSON.stringify(data),
        dataType: 'json',
        success: function (response) {
          if(response){
             location.href = "http://localhost:3000/userTodoLists.html";
          }else{
            alert('Wrong email or Password!!!');
          }
            
        },
        error: function (e) {
        }
    });
}
