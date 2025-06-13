
//1. Создать массив с дубликатами
// Написать код для удаления дублей
// Вывести обновленный массив в консоль

let mass = [1, 1, 2, 3, 3, 4, 5, 5, 6, 7, 7, 8];
const massNew = [];

for (let i = 0; i < mass.length; i++) {
    let isUnique = true;
    for (let j = 0; j < massNew.length; j++) {
        if (mass[i] === massNew[j]) {
            isUnique = false;
            break;
        }
    } if (isUnique) {
        massNew.push(mass[i])
    }
}
console.log(massNew);




//2. Создать переменную с числом и с помощью цикла вычислить факториал
// произведение числа 5 = 1*2*3*4*5

let num = 8;
let factorial = 1;

for (let i = 1; i <= num; i++) {
    factorial = factorial * i;
}
console.log(factorial);



//3. Создать переменную с годом и описать условие с проверкой является ли введенный год високосным

let year = 2004;

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    console.log(year + ' - високосный год');
} else {
    console.log(year + ' - не високосный год');
}




//4. Создать массив, с помощью цикла вычислить сколько раз повторялись числа и вывести в консоль результат

let massDuplicate = [1, 1, 1, 2, 2, 3, 4, 4, 5, 6, 6, 7, 8, 8, 9];
let duplicate = {};

for (let num of massDuplicate) {
    duplicate[num] = (duplicate[num] || 0) + 1;
}

console.log("Количество повторений:", duplicate);



//5. Создать объект с несколькими свойствами, написать код для подсчета количества свойств в этом объекте
// Вывести результат на консоль

let obj = {
    name: 'Mary',
    age: 29,
    hobbies: ['Computer games', 'Board games', 'Mobile games', 'Coding', 'Workout'],
    pets: ['Atman', 'Dune']
}

let count = Object.keys(obj).length;
console.log(count);


//6. Создать массив объектов пользователей с именем и возрастом.
// С помощью цикла создать массив, куда войдут пользователи старше определенного возраста
//Вывести новый массив в консоль

const massNameAge = [
    {name: 'Alex', age: 68},
    {name: 'Peter', age: 20},
    {name: 'Steve', age: 32},
    {name: 'Mary', age: 29},
    {name: 'Nate', age: 78},
    {name: 'Sofia', age: 81},
    {name: 'Olga', age: 32},
];
let massSort = [];

for (let person of massNameAge) {
    if (person.age > 30) {
        massSort.push(person);
        console.log(person);
    } if (person.age < 30) {
        console.log();
    }
}




//7. Создать массив и заполнить его случайными числами от 0 до 100 чтобы длина массива была равна 10
// Использовать random = Meth.floor(Math.random()*101)

let massMath = [];

for (let i = 0; i < 10; i++) {
    massMath.push(Math.floor(Math.random()*101))
}

console.log(massMath);



//8. Создать строку, развернуть ее циклом for без использования reverse

let strRevers = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

for (let i = strRevers.length - 1; i >= 0; i--) {
    console.log(strRevers[i]);
}