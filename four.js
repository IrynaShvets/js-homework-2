function onlyName(arr) {
    return arr.filter(el => el.name);
  }
  
  console.log(onlyName([
    {
        id: 1,
        name: 'John',
        age: 20
    },
    {
        id: 2,
        age: 22
    },
    {
        id: 3,
        name: 'Poll',
        age: 25
    },
    {
        id: 4,
        age: 28
    },
]));
console.log(onlyName([
    {
        id: 12,
        name: 'Оля',
        age: 20
    },
    {
        id: 13,
        name: 'Ігор',
        age: 22
    },
    {
        id: 14,
        age: 25
    },
]));


/* 
4. Напишите функцию, которая принимает массив объектов.
Функция должна вернуть массив только с теми объектами, у которых есть свойство name
*/