var counter = (function(){
	var i = 0;

	return {
		reset : function(){
			console.log("The value before reset: ",i);
			i=0;
		},
		increment: function(){
			++i;
			return i;
		},
		decrement: function(){
			--i;
			return i;
		},
		set:function(value){
			i=value;
		},
		get:function(){
			return i;
		}


	};
})();

//var  counter= makecounter()
console.log(counter.get());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());