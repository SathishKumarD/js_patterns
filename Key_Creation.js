// There are four ways to create keys

// 01 the simple dot syntax way

var newObject1 = {};
newObject1.a = "hello world a";

var value = newObject1.a;
//console.log(value);


// 02 the square bracket syntax 
// can even use special chaacters like - in the key
newObject1["b--c"] = "-- in key name wow ";
value = newObject1["b--c"];
// console.log(value);

// 03 abnormally unnecessary way
// by default writeable:true, enumerbale:false
// false makes it read protected. But does not throw exception
Object.defineProperty( newObject1, "simpleKey",{
	value : "for more control over the property it seems",
	writable:false,
	enumerable:true,
	configurable:true
}
	);

newObject1.simpleKey = "rewrite";
// console.log(newObject1.simpleKey);

// tweaking the above a litle bit to make it little user friendly

var defineProp = function (obj,key,val){
	var config = {
		value:val,
		writable:true,
		enumerable:true,
		configurable:true
	}
	Object.defineProperty(obj,key,config);
};

defineProp(newObject1,"key","valuee");
//console.log(newObject1.key);

//04 defining multiple properties

Object.defineProperties(newObject1,{
	"firstkey":{
		value:"first value",
		writable:true,
		enumerable:true
	},
		"secondkey":{
		value:"second value",
		writable:false,
		enumerable:true
	}
})

console.log(newObject1);




