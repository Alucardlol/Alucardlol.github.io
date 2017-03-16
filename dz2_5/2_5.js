function sum(a)
{
	var cur = a;
	function next(b)
	{
		cur = cur + b;
		return next;
	}
	next.toString = function ()
	{
		return cur;
	}
	return next;
}

alert(sum(1)(2)(3)());