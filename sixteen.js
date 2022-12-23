function passwordVerification(password) {
  
    if (password.length >= 6 && password.match(/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9!@#$%^&*a-zA-Z]{6,}/g)) {
        return "Ваш пароль безпечний";
    }
    return "Не добрий пароль";
  }
  
  console.log(passwordVerification("a23DFjhhgg"));
  console.log(passwordVerification("45Ghghfgdfdh"));
  console.log(passwordVerification("fgg"));
  console.log(passwordVerification("145214fgg"));
  
/* 
16. Напишите функцию, которая проверяет пароль на корректность.
Пароль должен быть не менее 6ти символов, 
должен содержать хотя бы одну цифру и хотя бы одну заглавную букву
*/