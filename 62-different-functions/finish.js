/** ЗАДАЧА 62 - Разница в объявлении функций
 *
 * 1. Объясните разницу между двумя вариантами объявления функций
 *
 * 2. Покажите эту разницу, добавив дополнительный код под функциями
 *
 * 3. Также вызовите обе функции
 */
 console.log (firstFunction(1,2))
function firstFunction(a, b) {
  a = a*2
  return a + b
}
console.log (firstFunction(3,2))

//console.log (secondFunction(4.4))  -- выдаст ошибку, так же не можем присвоить новое значение для const;
const secondFunction = function (a, b) {
  a = a*2
  return a + b
}
console.log (secondFunction(4,4))