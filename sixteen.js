function password(str) {
  
    if (str.length >= 6) {
        return "Ваш пароль безпечний";
    }
    return "Не добрий пароль";
  }
  
  console.log(password("a0A#ccsx"));
  console.log(password("45ghghfgdfdh"));
  console.log(password("fgg"));
  
/* 
16. Напишите функцию, которая проверяет пароль на корректность.
Пароль должен быть не менее 6ти символов, 
должен содержать хотя бы одну цифру и хотя бы одну заглавную букву
*/