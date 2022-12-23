function spam(str) {
        
    const s = str.split(' ');
    console.log(s)
     const d = s.some(el => console.log(el));
     console.log(d)
    //return str.toLowerCase().includes(substring.toLowerCase())

    //   if (Array.isArray(str)) {
    //     return str.some(el => includes(el.toLowerCase()));
    // }
   
    // return str.includes(el.toLowerCase());
    }

    /* 
    ---------------------Не добре працює
    
    
    */
   
    console.log(spam("которая проверяет строку на спам строку на спам"), "---------------");
    console.log(spam("которая проверяет строку"), "---------------");



/* 
10. Напишите функцию, которая проверяет строку на спам. 
Функция должна возвращать true, если в строке есть 2 одинаковых слова, 
и false - если все слова уникальны.
*/