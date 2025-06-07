// 1. Склеить Hello world

const str1 = 'Hello';
const str2 = 'world';
console.log(str1.concat(str2));



//2. Заменить пробелы на нижние подчеркивания

const str3 = 'I learn computer science!';
const arr = str3.split('_');
console.log(arr);



//3. Вывести длину строки

const str4 = 'I learn computer science!';
console.log(str4.length);



//4. Сделать длину строки 10 и забором

const str5 = 'Hello world';
const str6 = str5[2, 4, 7, 9].toUpperCase();
console.log(str6);



//5. В какую четверть часа попадает число min

let min = 13;
if (min <= 15){
    console.log('First quote')
    }else if (min >15 && min <=30){
        console.log('Second quote')
    }else if (min >30 && min <=45){
        console.log('Third quote')
    }else if (min >45 && min <=60){
        console.log('Fourth quote')
    }else if (min >60){
        console.log('Please, enter number low than 61 and try again')
}



//6а. В зависимости от языка (рус или анг) выводить дни недели на соответствующем языке.
//Ввод с консоли либо в браузере
// Использовать if else

let lang = 'en';
if (lang === 'en'){
    console.log('Monday Tuesday Wednesday Thursday Friday Saturday Sunday');
}else if (lang === 'ru'){
    console.log('Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье')
}



//6б. То же самое используя Switch

switch (lang) {
    case 'en':
        console.log('Monday Tuesday Wednesday Thursday Friday Saturday Sunday')
        break;
    case 'ru':
         console.log('Понедельник Вторник Среда Четверг Пятница Суббота Воскресенье')
        break;
}



//7. Есть поля name, age. Если имя не задано, то выводить John/Jane Doe

let obj = {name: '', age: 1};
if (obj.name === '') {
    console.log('John/Jane Doe')
}else{
    console.log(obj)
}



//8. Если введенное имя Jane, то вывести: 'This is Jane. She is 21'

let name = '';
if (name === 'Jane'){
    console.log('This is Jane. She is 21')
}else{
    console.log(name)
}