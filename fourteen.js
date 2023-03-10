const usersArray = [
  {
    id: 1,
    name: "John",
    age: 20,
    salary: 1000,
  },
  {
    id: 2,
    name: "Marry",
    age: 22,
    salary: 1500,
  },
  {
    id: 3,
    name: "Poll",
    age: 25,
    salary: 1200,
  },
];

function getHighestSalary(usersArray) {
 const maxSalary = Math.max(...usersArray.map(el => el.salary), 0);
 return usersArray.filter((el)=>el.salary === maxSalary).map((e)=>e.name).join(' ');
}

console.log(getHighestSalary(usersArray));

/*
14. Напишите функцию, которая массив с пользователями и возвращает имя пользователя 
с наибольшей заработной платой. Например:
const users = [
{
id: 1,
name: 'John',
age: 20,
salary: 1000
},
{
id: 2,
name: 'Marry',
age: 22,
salary: 1500
},
{
id: 3,
name: 'Poll',
age: 25,
salary: 1200
},
]
getHighestSalarty(users) // должно вернуть 'Marry'
*/
