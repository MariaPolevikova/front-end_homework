
// 1. Функция принимает массив чисел и выполняет следующие операции:
// Находит среднее арифметическое четных элементов
// Возвращает новый массив без отрицательных чисел
// Вычисляет сумму элементов, кратных 3

function mass(arr) {
    let sum  = 0;
    let positive = [];
    let sumThree = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            sum += arr[i];
        }
        if (arr[i] > 0){
            positive.push(arr[i]);
        }
        if (arr[i] % 3 === 0){
            sumThree += arr[i];
        }
    }
    let average = sum / arr.length;
    console.log('Среднее значение четных чисел', average);
    console.log('Массив без отрицательных чисел', positive);
    console.log('Сумма чисел кратных трем', sumThree)
}

mass([1, 2, -3, -16, 9, 18, 27, 68, 4, 4])



// 2. Написать функцию, которая принимает массив чисел и выполняет следующие операции:
// Найти элемент, наиболее близкий к среднему арифметическому массива

function mass2 (arr){
    let sum = 0;
    let closeToAverage = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let average = sum / arr.length;
    let minDiff = Math.abs(arr[0] - average);

    for (let i = 1; i < arr.length; i++) {
        let currDiff = Math.abs(arr[i] - average);
        if (currDiff < minDiff) {
            minDiff = currDiff;
            closeToAverage = arr[i];
        }
    }
    console.log('наиболее близкое число к среднеарифметическому:',
        closeToAverage, 'среднее арифметическое:', average);
}

mass2([2, 4, 6, 8, 9, 12, 64])


// 3. Написать функцию, которая принимает массив чисел и выполняет следующие операции:
// Вычислить сумму элементов между первым и последним нулевыми элементами

function massZero(arr) {
    let firstZero = -1;
    let lastZero = -1;
    let sumBetween = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            if (firstZero === -1) {
                firstZero = i;
            }
            lastZero = i;
        }
    }
    if (firstZero !== -1 && lastZero !== -1 && firstZero !== lastZero) {
        for (let i = firstZero + 1; i < lastZero; i++) {
            sumBetween += arr[i];
        }
        console.log('Сумма чисел между первым и последним нулем в массиве:', sumBetween);
    } else {
        console.log('Добавьте несколько нулей в массив чисел');
    }

}

massZero([1, 2, 4, 5, 6, 4, 5, 0, 6, 7]);


// 4. Написать функцию, которая принимает массив чисел и выполняет следующие операции:
// Выполнить сдвиг массива на n элементов вправо. пустые элементы заполнить каким-либо значением

function massRight(arr, n, emptyValue = 0) {
    if (arr.length === 0) return [];

    let result = [];
    let shift = n % arr.length;

    for (let i = 0; i < arr.length; i++) {
        if (i < shift) {
            result.push(emptyValue);
        } else {
            result.push(arr[i - shift]);
        }
    }
    console.log(result);
}

massRight([1, 2, 3, 4, 5], 2, 'hello')

// 5. Написать функцию, которая принимает массив чисел и выполняет следующие операции:
// Найти максимальное количество подряд идущих одинаковых элементов


function maxSame(arr) {

    let max = 0;
    let now = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i-1]) {
            now++;
            if (now > max) {
                max = now;
            }
        } else {
            now = 1;
        }
    }
    console.log(max);
}

maxSame([1, 2, 2, 2,  3, 4, 5], 2, 'hello', 'hello')