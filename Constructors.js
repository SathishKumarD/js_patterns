
// Constructor

function Car(model,year, miles){
this.model = model;
this.year = year;
this.miles = miles;
this.toString = function(){
	return this.model + " runs "+ this.miles + " miles.";
};

};

var civic = new Car("Honda civic",2009,20000);
var city = new Car("Hyundai city",2009,20000);

console.log(civic.toString());
console.log(city.toString());
console.log(typeof Car);




// Constructor with prototypes

function Vehicle(model,year, miles){
this.model = model;
this.year = year;
this.miles = miles;

};

civic = new Car("Honda civic",2009,20000);
city = new Car("Hyundai city",2009,20000);

Vehicle.prototype.toString = function() {
	return this.model + " runs "+ this.miles + " miles.";
};
console.log(civic.toString());
console.log(city.toString());
console.log(typeof Car);







