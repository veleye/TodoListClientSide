$(document).ready(function(){
  $('#btnRegisterSubmit').click(function(){
    fire_ajax();
  });

});

function fire_ajax() {

  var data = {};

  var email = $('#inputEmail').val();
  var password = $('#inputPassword').val();

  data['email'] = email;
  data['password'] = password;

debugger;

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: "http://localhost:8080/registerCustomer", 
        data: JSON.stringify(data),
        dataType: 'json',
        success: function (data) {
            window.location.href = "http://localhost:3000";
        },
        error: function (e) {
			
        }
    });
}
