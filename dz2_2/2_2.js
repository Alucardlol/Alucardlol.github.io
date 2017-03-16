var mas1 = [1, 3, 5, 7, 9];
var mas2 = [1, 2, 3];
var buf = [];
var res = [];
var j = 0
for (var i = 0; i < mas1.length; i++)
{
	buf[mas1[i]] = true;
}

for (var i = 0; i < mas2.length; i++)
{
	if (buf[mas2[i]] === true)
	{
		res[j] = mas[i];
		j++;
	}
}

console.log(res);