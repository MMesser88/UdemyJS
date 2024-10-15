function insertionSort(arr) {
    var len = arr.length;

    for (var i = 1; i < len; i++) {
        
        var currentElement = arr[i];
        var j = i - 1;

        while (j >= 0 && arr[j] > currentElement) {
            arr[j + 1] = arr[j];
            j--;
        }
        
        arr[j + 1] = currentElement;
        console.log('Масив сортується, i=', i, ': ', arr);
    }
    
    return arr;
    
}

var unsortedArray = [15, 10, 4, 12, 1, 8, 13, 5, 9, 3, 14, 6, 11, 2, 7];
console.log("Невідсортований масив:", unsortedArray);
var sortedArray = insertionSort(unsortedArray.slice()); // Створюємо копію масиву перед сортуванням
console.log("Відсортований масив:", sortedArray);