var user = {
   uname : "Ivan",
   greet: function () {
       return this.uname + " приветствует Вас!";
   }
};

var bind = function(fn, context) {
	var barg = [].slice.call(arguments, 2);
  return function() {
  	var farg = [].slice.call(arguments);
    return fn.apply(context, arguments);
  };
};

var newuser = bind(user.greet, user);

console.log(newuser());