function linearSearchSubstring(mainString, substring) {
    const mainStringLength = mainString.length;
    const substringLength = substring.length;
  
    for (let i = 0; i <= mainStringLength - substringLength; i++) {
      let found = true;
  
      for (let j = 0; j < substringLength; j++) {
        if (mainString[i + j] !== substring[j]) {
          found = false;
          break;
        }
      }
  
      if (found) {
        return i;  // Підрядок знайдено, повертаємо індекс початку підрядка
      }
    }
  
    return -1;  // Підрядок не знайдено
  }
  
  // Введення рядків із клавіатури
  const mainString = prompt("Введите основную строку:");
  console.log("введена строка:", mainString);
  const substringToFind = prompt("Введите подстроку для поиска:");
  console.log("ищем подстроку:", substringToFind);

  const result = linearSearchSubstring(mainString, substringToFind);
  
  if (result !== -1) {
    console.log(`Подстрока "${substringToFind}" найдена по индексу ${result}.`);
  } else {
    console.log(`Подстрока "${substringToFind}" не найдена в строке.`);
  }
  