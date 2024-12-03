// JavaScript Variables

/*
 * Var Variable
 * You can re declare
 * You can re assaign
 * Global Scooped
 * var is hosted
 */

var a = 10;
var a = 20;  // re-declare variable
a = 'Bangladesh';  // re-assaign variable
{
  var blocked = '30';
  console.log(a);  // Global Scooped
}
console.log(blocked); //var is hosted

console.log(a);   //Global Scooped 

var country = 'Bangladesh';
console.log(country);

var countrys;
console.log(countrys);  //undefine variable
countrys = 'Bangladesh';  


/*
 * let Variable
 ! You can not re declare
 * You can re assaign
 ? Block Scooped
 ! let is not hosted
 */

let b = 10;
b = 11;  // re assaign
{
  console.log(b);  //Block Scooped
}
// console.log(people);
// let people = 'SomeOne';    //  let is not hosted or undefine variable

let fruits = 'Orange';
console.log(`${fruits} is my favorite fruits, ${fruits} I like to eat`);
/*
 * const Variable
 ! You can not re declare
 ! You can not re assaign
 ? Block Scooped
 ! const is not hosted
 */
const c = 10;
{
  const d = 50;
  console.log(c);
  console.log(d);
}

const person = {
  firstName: 'Mehedi',
  age: 22,
};
person.country = 'Bangladesh';   //Can the re-assaign using the object
person.age = 25;

console.log(person);




