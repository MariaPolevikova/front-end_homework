
// 1. Функция isPrime(n), которая проверяет является ли число n простым

function isPrime(n) {
    for (let i = 2; i <= n/2; i++) {
        if (n % i === 0 || n <=1) {
            return false;
        }else{
            console.log('Число простое')
        }
    }
}

isPrime(7);


//2. Функция isPalindrome(str), которая проверяет является ли строка палиндромом

function isPalindrome(str) {
    for(let i = 0; i <= str.length / 2; i++) {
        if (str[i] !== str[str.length - 1]) {
            return false;
        }else{
            console.log('Это палиндром')
        }
    }

}

isPalindrome('renyer');



//3. Функция uniqueValues(arr) возвращает новый массив с уникальными значениями из исходного массива arr

function uniqueValues(arr){
    let massUniq = [];
    for (let i = 0; i < arr.length; i++) {
        if (!massUniq.includes(arr[i])) {
            massUniq.push(arr[i]);
        }
    } console.log(massUniq);
}

uniqueValues([1, 2, 2, 3, 4, 4, 5, 6, 6]);


// 4. Функция sumRange(start, end) возвращает сумму всех целых чисел от start до end

function sumRange(start, end){
    let sum = 0;
    if (start > end){
        [start, end] = [end, start];
    }
    for (let i = start; i>=start && i <= end; i++){
         sum += i;
    } console.log(sum);
}

sumRange(9, 3.5)



// 5. Функцию принимает любую строку и выводит в консоль массив,
// содержащий только те символы, которые встречаются в строке только один раз.
// Пример: Если входная строка равна "ШАЛАШ", функция должна вывести в консоль массив ['Л'],
// поскольку символ "Л" встречается в строке только один раз.


function uniqStr(str) {
    let massUniqStr = [];
    let lowCase = str.toLowerCase();

    for (let i = 0; i < lowCase.length; i++) {
        let char = lowCase[i];
        if (char < 'a' || char > 'z') continue;

        let isUnique = true;
        for (let j = 0; j < lowCase.length; j++) {
            if (i !== j && char === lowCase[j]) {
                isUnique = false;
                break;
            }
        } if (isUnique) {
            massUniqStr.push(char);
        }
    }
    console.log(massUniqStr);
}

uniqStr('Hello World!')


//6. Функция принимает целое число, обозначающее длину массива.
// Заполните этот массив случайными целыми числами от 0 до 100.
// Выведите в консоль получившийся массив.
// Затем найдите и выведите в консоль максимальное значение,
// минимальное значение, сумму всех элементов и среднее арифметическое значение элементов в массиве.


function massLength(arrLength) {
    let massRandom = new Array(arrLength);
    for (let i = 0; i < arrLength; i++) {
        massRandom[i] = Math.floor(Math.random() * 101);
    }
    console.log(massRandom);

    let min = massRandom[0];
    let max = massRandom[0];
    let sum = 0;

    for (let i = 0; i < arrLength; i++) {
        if (massRandom[i] > max) {
            max = massRandom[i];
        }
        if (massRandom[i] < min) {
            min = massRandom[i];
        }
        sum += massRandom[i];
    }
    let average = sum / arrLength;

    console.log('Максимальное число:', max);
    console.log('Минимальное число:', min);
    console.log('Среднее арифметическое значение:', average);
    console.log('Сумма всех чисел:', sum);
    return massRandom;
}

massLength(8);


// 7. Функция принимает целое число n, обозначающее длину массива.
// Создайте массив длиной n, заполненный последовательностью Фибоначчи, начиная с чисел 0 и 1.
// Выведите в консоль получившийся массив.

function massFibonacci (n){
    let start = [0, 1];
    for (let i = 2; i <= n; i++) {
        start[i] = start[i-1] + start[i-2];
    } console.log(start)
}

massFibonacci(3);