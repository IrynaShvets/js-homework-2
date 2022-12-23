function arrayToSentence(arr) {
  const arrString = arr.reduce((acc, el) => {
    let checkedString = "";

    if (typeof el === "string") {
      checkedString = el.replace(/[^а-яА-Я]+/g, "");
    }
    if (checkedString.length > 0) {
      acc.push(el);
    }
    return acc;
  }, []);

  return arrString.join(" ");
}

console.log(arrayToSentence(["Привет", 1, null, "как", "{}", "дела"]));

/* 
12. Напишите функцию, которая принимает массив. 
Функция должна вернуть предложение только из строковых значений массива.
Например:
arrayToSentence(['Привет', 1, null, 'как', '{}', 'дела']) // вернуть Привет как дела
*/
