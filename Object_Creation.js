// There are three ways of object creation

// 01 the simply way weveryone uses
var newObject1 = {};

// 02  using Object.create method
// you can pass Object.prototype or null
var newObject2 = Object.create(Object.prototype);

// 03 using Object constructor
var newObject3 = new Object();

newObject1.a = "newObject1.a";
newObject2.a = "newObject2.a";
newObject3.a = "newObject3.a";

console.log(newObject1.a);
console.log(newObject2.a);
console.log(newObject3.a);


