// JavaScript Document// 登录表单提交时的验证
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); 

        var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var usernameError = document.getElementById('username-error');
    var passwordError = document.getElementById('password-error');

    
    usernameError.textContent = '';
    passwordError.textContent = '';

    
    if (!username.match(/^[a-zA-Z0-9]{5,}$/)) {
      usernameError.textContent = '用户名必须包含至少5个字母或数字';
      return false;
    }

    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)) {
      passwordError.textContent = '密码必须包含至少8个字符，包括至少1个大写字母、1个小写字母和1个数字';
      return false;
    }

    
    
  });