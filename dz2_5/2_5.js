function sum(a) {
	if (a === undefined) {
			a = 0;
		}
	var cur = a;
	function next(b) {
		if (b === undefined) {
			b = 0;
		}
		cur = cur + b;
		return next;
	}
	next.toString = function () {
		return cur;
	}
	return next;
}

alert(sum(1)(2)(3)());