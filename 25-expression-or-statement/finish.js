/** ЗАДАЧА 25 - Выражение или инструкция
 *
 * Определите тип каждой конструкции JavaScript:
 *  - выражение (expression)
 *  - инструкция (statement)
 *  - выражение-инструкция (expression statement)
 */

// expression statement
15

// statement
const myObject = {
  x: 10,
  y: true,
}

// expression statement
myObject.z = 'abc' // expression

// expression statement
delete myObject.x

// statement
let newVariable

// expression statement
newVariable = 30 + 5 // expression

// expression statement
console.log(newVariable)


// statement
if (newVariable > 10) {
 
  // expression statement
  console.log(`${newVariable} больше 10`) // newVariable is expression
}