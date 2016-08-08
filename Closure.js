function makeCounter(){
	var i=0;
	return function(){
		return ++i;
	}
}

var counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());

var counter2 = makeCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
console.log(counter2());



