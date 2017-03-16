
function Bit_1(a)
{
	var del = 0;
	if (a > 1)
	{
		del = a % 2;
		a = Math.floor(a / 2);
		Bit_1(a);
		return (Bit_1(a) + del);
	}
	return ("" + a)
}
