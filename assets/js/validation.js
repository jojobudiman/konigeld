$(document).ready(function() {

$.validator.setDefaults({
  submitHandler: function() {
    form.submit();
  }
});

  var signup1 =$('#signup');
  signup1.validate({
    rules: {
      email: {
        required: true,
        email:true
      },
      email_confirmation: {
        required: true,
        equalTo: '#email'
      },
      password: {
        required: true,
        minlength: 6
      },
      password_confirmation: {
        required: true,
        minlength: 6,
        equalTo: '#password'
      }
    },

    messages: {
      email: {
        required: 'Please enter your email address',
        email: 'Please enter a valid email address'
      },
      email_confirmation: {
        required: 'Please enter your confirmation email address',
        email: 'Please enter a valid email address',
        equalTo: 'Please enter the same email'
      },
      password: {
        required: 'Please enter your password',
        minlength: 'Your password must be at least 6 characters long'
      },
      password_confirmation: {
        required: 'Please enter your confirm password',
        minlength: 'Your password must be at least 6 characters long',
        equalTo: 'Please enter the same password'
      }
    }
  })
});
