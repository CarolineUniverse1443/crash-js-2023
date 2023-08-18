function isPrimeNumber(num)
{
	let flag = true;

	if (num % 2 == 0 && num != 2) return false;

	let len = Math.ceil(Math.sqrt(num));
	for (let i = 3; i <= len; i+= 2)
	{
		if(num % i == 0)
		{
			flag = false;
			break;
		}
	}
	return flag;

	// for (let i = 2; i < num; i++)
	// {
	// 	if (num % i === 0) return false;
	// }
	// return num > 1;
}

function func(num, min, max)
{
	if(num < min)
		return min ** 2;
	else if(num > max)
		return max ** 2;
	else if(num < max - (max - min) / 2)
		return num ** 2;

	return Math.floor(num);
}

function isPerfectNumber(number)
{
	let dividers = [];
	for(let i = 1; i <= number / 2; i++)
	{
		if(number % i == 0)
			dividers.push(i);
	}

	return number === dividers.reduce((acc, el) => acc + el, 0);
}

function countDigits(number)
{
	if (number === 0)
	{
		return 1;
	}

	let count = 0;
	let num = Math.abs(number);

	while (num >= 1)
	{
		num = Math.floor(num / 10);
		count++;
	}

	return count;
}

function getNumberDigit(number, digitPosition)
{
	if (digitPosition < 0)
	{
		return undefined;
	}

	const count = countDigits(number);

	if (digitPosition > count)
	{
		return undefined;
	}

	const invertedIndex = count - 1 - digitPosition;
	let tempNumber = Math.abs(number);

	for (let i = 0; i < invertedIndex; i++)
	{
		tempNumber = Math.floor(tempNumber / 10);
	}
	return tempNumber % 10;
}

// console.log(isPrimeNumber(96));

// console.log(func(3, 1, 10));
// console.log(func(15, 1, 10));

console.log(isPerfectNumber(28));

getNumberDigit(123, 0);

const car =
{
	name: 'Hendai Solaris',
	type: 'sedan',
	maxSpeed: '320',
	color: 'red',
};

function showCar(obj)
{
	return `
		<article>
			<div>
				<h2>${obj.name}</h2>
				<span>${obj.type}</span>
			</div>
			<div>
				<span>Maximum speed:</span>
				<span>${obj.maxSpeed}</span>
			</div>
			<div>
				<span>Color:</span>
				<span>${obj.color}</span>
			</div>
		</article>
	`;
}

console.log(showCar(car));

function countWords(sentence)
{
	return sentence.split(' ').length;
}
console.log(countWords("Hello, how are you, dude?"));

function getInitials(string)
{
	return string
		.split(' ')
		.map( str => str.slice(0, 1))
		.join('. ') + '.';
}


const fullName = "John Doe";
const initials = getInitials(fullName);
console.log(initials);

function generateGoogleString(num)
{
	if(num <= 2)
		return 'Google';

	let string = 'oo';
	for (let i = 0; i < num - 2; i++)
	{
		string += 'o';
	}

	return `G${string}gle`;
}

console.log(generateGoogleString(3));

function countVowels(string)
{
	return string.length;
}

const countVowels2 = (str) =>
{
	const vowels = ['a', 'e', 'i', 'o', 'u', 'а', 'е', 'ё', 'и', 'о', 'у', 'ы', 'э', 'ю', 'я'];
	let count = 0;

	for (let i = 0; i < str.length; i++)
	{
		if (vowels.includes(str[i].toLowerCase()))
		{
			count++;
		}
	}
};