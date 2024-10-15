 // Функція сортування бульбашкою
 function bubbleSort(arr) {
  var len = arr.length;
  var swapped;
  var sortedArray = arr.slice(); // Створюємо копію початкового масиву

  do {
      swapped = false;
      for (var i = 0; i < len - 1; i++) {
          if (sortedArray[i] < sortedArray[i + 1]) {
              // Обмін елементів, якщо вони перебувають у неправильному порядку
              var temp = sortedArray[i];
              sortedArray[i] = sortedArray[i + 1];
              sortedArray[i + 1] = temp;
              swapped = true;
              // console.log(sortedArray);
          }
      }
      console.log("     Масив сортується:", sortedArray);
  } while (swapped);

  return sortedArray;
}

// Приклад використання
var unsortedArray = [15, 10, 4, 12, 1, 8, 13, 5, 9, 3, 14, 6, 11, 2, 7];
console.log("Невідсортований масив:", unsortedArray);
var sortedArray = bubbleSort(unsortedArray);

console.log("  Відсортований масив:", sortedArray);