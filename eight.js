const users = [
  {
    id: 1,
    name: "John",
    age: 20,
  },
  {
    id: 2,
    name: "Marry",
    age: 22,
  },
  {
    id: 3,
    name: "Poll",
    age: 25,
  },
];

function arrayName(users) {
  return users.map((el) => el.name);
}

console.log(arrayName(users));

/* 
8. Напишите функцию, которая принимает объект 
с пользователями и возвращает массив имён. 
const users = [
    {
        id: 1,
        name: 'John',
        age: 20
    },
    {
        id: 2,
        name: 'Marry',
        age: 22
    },
    {
        id: 3,
        name: 'Poll',
        age: 25
    },
]

Функция должна вернуть ['John', 'Marry', 'Poll']
*/
