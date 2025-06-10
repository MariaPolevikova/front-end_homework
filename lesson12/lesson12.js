// 1. Склеить Hello world

const str1 = 'Hello';
const str2 = 'world';
console.log(str1.concat('!',' ', str2));



//2. Заменить пробелы на нижние подчеркивания

const str3 = 'I learn computer science!';
const newStr3 = str3.split(' ').join('_');
console.log(newStr3);



//3. Вывести длину строки

const str4 = 'I learn computer science!';
console.log(str4.length);



//4. Сделать длину строки 10 и забором

let str5 = 'Hello world';
// разделить буквы
let str6 = str5.split('');
str6[0] = str6[0].toUpperCase();
str6[2] = str6[2].toUpperCase();
str6[4] = str6[4].toUpperCase();
str6[6] = str6[6].toUpperCase();
str6[8] = str6[8].toUpperCase();
str6[10] = str6[10].toUpperCase();
// соединить буквы
str5 = str6.join('');
console.log(str5);



//5. В какую четверть часа попадает число min

let min = -10;
if (min <0){
    console.log('Please, enter number between 0 and 60 and try again')
    }else if (min <= 15){
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
// проверка есть ли поле и если есть, то пустое ли оно
if (obj.name === undefined || obj.name === '') {
    console.log('John/Jane Doe')
}else{
    console.log(obj)
}



//8. Если введенное имя Jane, то вывести: 'This is Jane. She is 21'

let obj1 = {name: 'Jane'};
if (obj1.name === 'Jane'){
    console.log('This is Jane. She is 21')
}else{
    console.log(name)
}