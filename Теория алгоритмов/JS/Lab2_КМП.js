function computePrefixFunction(pattern) {
    const m = pattern.length;
    const pi = new Array(m).fill(0);
    let k = 0;

    for (let q = 1; q < m; q++) {
        while (k > 0 && pattern[k] !== pattern[q]) {
            k = pi[k - 1];
        }
        if (pattern[k] === pattern[q]) {
            k++;
        }
        pi[q] = k;
    }

    return pi;
}

function kmpSearch(text, pattern) {
    const n = text.length;
    const m = pattern.length;

    const pi = computePrefixFunction(pattern);

    let q = 0;
    const indices = [];

    for (let i = 0; i < n; i++) {
        while (q > 0 && pattern[q] !== text[i]) {
            q = pi[q - 1];
        }
        if (pattern[q] === text[i]) {
            q++;
        }
        if (q === m) {
            indices.push(i - m + 1);
            q = pi[q - 1];
        }
    }

    if (indices.length > 0) {
        return indices;
    } else {
        return -1;
    }
}

const text = "bgnbxzyxyxzyxzbncz";
const pattern = "xzyxyxzyxz";

const indices = kmpSearch(text, pattern);

if (indices !== -1) {
    console.log("Фрагмент знайдено в позиціях: " + indices.join(", "));
} else {
    console.log("Фрагмент не найдено в тексті.");
}
