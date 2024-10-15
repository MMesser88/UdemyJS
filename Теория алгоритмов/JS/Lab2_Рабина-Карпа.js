function rabinKarpSearch(text, pattern, q, d) {
  const m = pattern.length;
  const n = text.length;
  let h = Math.pow(d, m - 1) % q;
  let p = 0; // Хеш для зразка
  let t = 0; // Хеш для поточного вікна тексту

  // Розраховуємо хеш для зразка та першого вікна тексту
  for (let i = 0; i < m; i++) {
      p = (d * p + pattern.charCodeAt(i)) % q;
      t = (d * t + text.charCodeAt(i)) % q;
      console.log("Hash text    i=",i,":", t);
      console.log("Hash pattern i=",i,":", p);
  }

  // Проходим по тексту
  for (let i = 0; i <= n - m; i++) {
      // Перевіряємо хеш поточного вікна
      if (p === t) {
          // Якщо хеші збігаються, перевіряємо символи посимвольно
          let match = true;
          for (let j = 0; j < m; j++) {
              if (pattern[j] !== text[i + j]) {
                  match = false;
                  break;
              }
          }
          if (match) {
              console.log(`Знайдено співпадіння в позиції: ${i}`);
          }
      }

      // Перераховуємо хеш для наступного вікна тексту
      if (i < n - m) {
          t = (d * (t - text.charCodeAt(i) * h) + text.charCodeAt(i + m)) % q;
          // Обробка негативних значень хешу
          if (t < 0) {
              t = t + q;
          }
      }
  }
}

const text = "bgnbxzyxyxzyxzbncz";
const pattern = "xzyxyxzyxz";
const q = 11;
const d = 10;


console.log("Текст:", text);
console.log("Вставка:", pattern);

rabinKarpSearch(text, pattern, q, d);
