var mas = [[1, 2], [3, 4, 5], [6]];

var res = mas.reduce(function (a,b) {
		return a.concat(b);
	});
console.log (res);