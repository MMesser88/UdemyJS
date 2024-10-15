// Функція shellSort виконує сортування методом Шелла для масиву arr.
function shellSort(arr) {
    var len = arr.length;
    var gap = Math.floor(len / 2);  // Початкове значення кроку – половина довжини масиву.

    // Зовнішній цикл зменшує крок до 1, коли виконується остання ітерація.
    while (gap > 0) {
       // Внутрішній цикл проходить по підмасиву з кроком gap і виконує сортування вставками.
        for (var i = gap; i < len; i++) {   //i=8
            var temp = arr[i];              //temp= arr[8]
            var j = i;                      //j=8

            // Внутрішній цикл для сортування вставками у підмасиві.
            while (j >= gap && arr[j - gap] > temp) {   //8>7 &&arr[1]>arr[8]
                arr[j] = arr[j - gap];
                j -= gap;
            }

            arr[j] = temp;  // Вставляємо поточний елемент на правильне місце у відсортованому підмасиві.
            
            console.log('Масив сортується, i=', i, 'gap=', gap, ': ', arr);
        }

        gap = Math.floor(gap / 2);  // Зменшуємо крок.
    }

    return arr;
}

var unsortedArray = [15, 10, 4, 12, 1, 8, 13, 5, 9, 3, 14, 6, 11, 2, 7];
console.log("          Невідсортований масив:", unsortedArray);

var sortedArrayShell = shellSort(unsortedArray.slice());  // Створюємо копію масиву перед сортуванням.
console.log("             Відсортований масив:", sortedArrayShell);
