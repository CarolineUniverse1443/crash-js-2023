// var a = 5;
// let b = 10;
// const c = 13;

// console.log(a);
// console.log(b);
// console.log(c);

// a = 9;
// b = 12;

// console.log(a);
// console.log(b);
// console.log(c);
//

// console.log(a);
// var a;
// a = 10;
// console.log(a);

productName = 'манго';
productPrice = 214;
productQuantity = 3;

resultCost = productPrice * productQuantity;

console.log(`Вы купили ${productName} (${productQuantity} шт.) по ${productPrice} ₽. Всего было потрачено: ${resultCost} ₽`);

const a = 7;
const b = 11.8;
const c = a > b ? a : b;

console.log(c);

// let a = 47;

// if(a % 2 == 0)
// 	console.log('Четное');
// else
// {
// 	console.log('Нечетное');
// 	a += 1;
// 	console.log(a);
// }

// for(let i = 0; i < 1000; i++)
// {
// 	if(i % 2 != 0)
// 		console.log(i);
// }

// let el = 10;

// el += el*0.25;

let pricesForSpring = [1, 10, 15, -100, -23, 19, 15032];

let pricesForAutamn = pricesForSpring.map((price) => price+price*0.25);

console.log(pricesForSpring);
console.log(pricesForAutamn);

function sayHello(name = 'someone')
{
	console.log(`Hello, ${name}!`);
}

sayHello('Caroline');
sayHello();

const sayHello2 = (name = 'someone2') =>
{
	console.log(`Hello, ${name}!`);
};

sayHello2('Charlotte');
sayHello2();

function calc(a, b, operation)
{
	if (operation == '+')
		return a + b;
	else if(operation == '-')
		return a - b;
	else if(operation == '*')
		return a * b;
	else if(operation == '/')
		return a / b;
}

console.log('calculated');
console.log(calc(1, 2, '-'));

const age = 27;

const category = age >= 18 ? 'Взрослый' : 'Детский';

console.log(age);
console.log(category);
