const someString = 'This is some strange string';

function reverse(str) {
    let answer = ``;
    if (typeof(str) != `string`) {
        answer += `Ошибка!`
    } else {
        answer = str.split(``);
        answer = answer.reverse();
        answer = answer.join(``)
        }
    console.log(answer);
    return answer
}

reverse(someString);



let test = `First Second Third`;
console.log(`${test}, ${typeof(test)}`);
let spltest = test.split(``);
console.log(spltest);

console.log(`${spltest.reverse()}, ${typeof(spltest)}`);

let jtest = spltest.join(``);
console.log(`${jtest}, ${typeof(jtest)}`);




const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// const baseCurrencies = [];
// const additionalCurrencies = [];


function availableCurr(arr, missingCurr) {
    
    let str = ``;
    let avaible = [];
    arr.forEach(function(currence) {
        if (currence == missingCurr) {return};
        avaible.push(currence)});
    
console.log(avaible.length);

    if (avaible.length == 0) {
        str = 'Нет доступных валют';
    } else str = `Доступные валюты:\n`;
        avaible.forEach(function(currence) {str += `${currence}\n`});

    console.log(str);
    return str;
}

availableCurr([...baseCurrencies, ...additionalCurrencies], 'CNY')
