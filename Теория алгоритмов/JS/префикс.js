function computePrefixFunction(pattern) {
    const m = pattern.length;
    const pi = new Array(m).fill(0);
    let k = 0;

console.log('Начальная префикс-функция: pi=',pi);

    for (let q = 1; q < m; q++) {
        console.log('Цикл FOR');
        console.log('   Итерация q =',q);

        console.log('');
        console.log('   Вложенный цикл WHILE: проверка условия (k > 0 && pattern[k] !== pattern[q])');
        console.log('                                          ',k,'> 0 =',k>0, '&&', pattern,'[',k,'] !==', pattern,'[',q,'] = ',pattern[k] !== pattern[q]);
        while (k > 0 && pattern[k] !== pattern[q]) {
                        console.log('   Условие выполняется:', pattern,'[',k,']!==',pattern,'[',q,']');
            k = pi[k - 1];
            console.log('   Выполняется тело цикла, k = pi[k - 1]=',k)
        }

            console.log('');
            console.log('   Вложенное условие IF (pattern[k] === pattern[q])');
        if (pattern[k] === pattern[q]) {
            console.log('   Условие IF',pattern,'[',k,']=',pattern,'[',q,'] - выполнено');
            k++;
            console.log('   Условие IF выполнено, increment k=',k);
        } else {
            console.log('   Условие IF не выполнено',pattern,'[',k,'] !==',pattern,'[',q,']')
        }

        console.log('');
        pi[q] = k;
        console.log('   Выполняется тело цикла: pi[q] = k=',k,'   pi=',pi);
        // console.log('   pi=',pi);
        console.log('   Конец итерации FOR q =',q);
        console.log('');
    }

    return pi;
}



function kmpSearch(text, pattern) {
    console.log("Поиск паттерна", pattern,'в тексте:',text );
    // Получаем длины текста и образца
    const n = text.length;
    const m = pattern.length;

    // Вычисляем префикс-функцию для образца
    console.log("Расчёт префикс-функции для паттерна:", pattern);
    const pi = computePrefixFunction(pattern);
    console.log("Префикс-функция: ", pi)

    // Инициализируем переменные для отслеживания текущей позиции в тексте и образце
    let q = 0;
    const indices = [];

    console.log(' ')
    console.log('Функция поиска паттерна в тексте')
    // Итерируем по тексту
    for (let i = 0; i < n; i++) {
        // Обновляем значение q при несовпадении символов

        console.log('Цикл FOR');
        console.log('   Итерация i =',i);

        console.log('');
        console.log('   Вложенный цикл WHILE: проверка условия (q > 0 && pattern[q] !== text[i])');
        console.log('                                          ',q,'> 0 =',q>0, '&&', pattern,'[',q,'] !==', text,'[',i,'] = ',pattern[q] !== text[i]);
        while (q > 0 && pattern[q] !== text[i]) {
            console.log('   Условие выполняется:', pattern,'[',q,']!==',text,'[',i,']');
            q = pi[q - 1];
            console.log('   Выполняется тело цикла, q = pi[q - 1]=',q)
        }

        // Увеличиваем q, если символы совпадают
        console.log('');
        console.log('   Вложенное условие IF (pattern[q] === text[i])');
        if (pattern[q] === text[i]) {
            q++;
            console.log('   Условие IF выполнено, increment q=',q);
        } else {
            console.log('   Условие IF не выполнено',pattern,'[',q,'] !==',text,'[',i,']')
        }

        // Если q достигло длины образца, сохраняем индекс вхождения
        if (q === m) {
            console.log('');
            console.log('   Вложенное условие IF (q === m):',q,'=',m, 'q достигло длины образца');
            indices.push(i - m + 1);
            q = pi[q - 1];
            console.log('   Условие IF выполнено, indices.push(i - m + 1)=',indices);
            console.log(pi)
            console.log('                          q = pi[q - 1]=',q);
        } else {console.log('   q не достигло длины образца')}

        console.log('   Конец итерации FOR i =',i);
        console.log('');

    }

    // Если были найдены фрагменты, возвращаем массив индексов, иначе возвращаем -1
    if (indices.length > 0) {
        return indices;
    } else {
        return -1; // Фрагмент не найден
    }
}




const text = "bgnbxzyxyxzyxzbncz";
const pattern = "xzyxyxzyxz";

const indices = kmpSearch(text, pattern);

// Выводим результаты поиска в консоль
if (indices !== -1) {
    console.log("Фрагмент найден в позициях: " + indices.join(", "));
} else {
    console.log("Фрагмент не найден в тексте.");
}