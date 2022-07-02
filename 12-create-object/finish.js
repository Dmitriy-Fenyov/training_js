/** ЗАДАЧА 12 - Создание объекта
 *
 * 1. Создайте объект с тремя свойствами:
 *  - name
 *  - surname
 *  - favoriteNumber
 *
 * 2. Выведите в консоль строку
 * "My name is <name> <surname> and my favorite number is <favoriteNumber>"
 */
const object1 = {
 names: "Дмитрий",
 surname: "Фенёв",
 favoriteNumber: 7
}

console.log("My name is " + object1.names + " " + object1.surname + " and my favorite number is " + object1.favoriteNumber);

const info = `My name is ${object1.names} ${object1.surname} and my favorite number is ${object1.favoriteNumber}`

setTimeout(() => console.log(info), 2000); 
