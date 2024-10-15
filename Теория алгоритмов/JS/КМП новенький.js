function computePrefixFunction(pattern) {
    const m = pattern.length;
    const pi = new Array(m).fill(0);
    let k = 0;

    for (let q = 1; q < m; q++) {
        while (k > 0 && pattern[k] !== pattern[q]) {
            k = pi[k - 1];
        }

        if (pattern[k] === pattern[q]) {
            console.log(`pi(${q}): pattern[${pattern.slice(0, k)}]=pattern[${pattern.slice(0, q)}] (Matching character: ${pattern[q]})`);
            console.log("k=", k);
            k++;
        } else {
            console.log(`pi(${q}): pattern[${pattern.slice(0, k)}]!=pattern[${pattern.slice(0, q)}] (Mismatch at character: ${pattern[q]})`);
        }

        pi[q] = k;

        console.log(`pi[${q}] = ${k}, pattern: ${pattern.slice(0, q + 1)}`);
    }

    return pi;
}

function kmpSearch(text, pattern) {
    const n = text.length;
    const m = pattern.length;
    const pi = computePrefixFunction(pattern);
    console.log("Префикс-функция: ", pi);

    let q = 0;
    const indices = [];

    for (let i = 0; i < n; i++) {
        while (q > 0 && pattern[q] !== text[i]) {
            q = pi[q - 1];
        }

        if (pattern[q] === text[i]) {
            console.log(`Matching character: ${text[i]}`);
            q++;
        } else {
            console.log(`Mismatch at character: ${text[i]}`);
        }

        if (q === m) {
            indices.push(i - m + 1);
            q = pi[q - 1];
        }
    }

    return indices;
}

// Пример использования
const text = "bgnbxzyxyxzyxzbncz";
const pattern = "xzyxyxzyxz";
const result = kmpSearch(text, pattern);

// Выводим результаты поиска в консоль
if (indices !== -1) {
    console.log("Фрагмент найден в позициях: " + indices.join(", "));
} else {
    console.log("Фрагмент не найден в тексте.");
}
