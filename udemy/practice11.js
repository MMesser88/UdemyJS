// 1) Напишите функцию showFamily, которая будет принимать в себя массив строк и возвращать сообщение в нужном формате.
// showFamily(family)  => 'Семья состоит из: Peter Ann Alex Linda'



const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let str = 'Семья состоит из:';
    if (arr.length == 0) {
        str += `Семья пуста`;
        return str
    }
    arr.forEach(function(member) {str += ` ${member}`});
    console.log(str);
    return str;
}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function(city) {
        console.log(city.toLowerCase())
    })
}

standardizeStrings(favoriteCities)