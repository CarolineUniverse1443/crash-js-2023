const john =
{
	name: 'Джон',
	age: 17,
	pet: 'попугай'
};

const ann =
{
	name: 'Аня',
	age: 21,
	pet: 'кошка'
};

function showInfo(person)
{
	console.log(`Меня зовут ${person.name}, мне ${person.age}, у меня есть питомец - ${person.pet}`);
}

showInfo(ann);

function incrementAge(person)
{
	person.age++;
	return person.age;
}

console.log(incrementAge(john));

const display = people =>
{
	for(const [key, value] of Object.entries(people))
		console.log(`${key}: ${value}`);
};

function sum(array)
{
	return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}

const arr = [1, 50, 20, 75, 90];

console.log(sum(arr));

// let names = ['Nick', 'Joe', 'Kevin', 'Liam', 'Harry'];
// console.log(names);
// names.shift();
// names.pop();
// console.log(names);

const listNames = document.getElementById('_names');
const names = ['Bob', 'Klar', 'Petya', 'Ilya', 'Viktoriya'];

// for (let name of names)
// {
// 	listNames.insertAdjacentHTML('afterbegin', `
// 		<li>
// 			<span>${name}</span>
// 		</li>
// 		`);
// }

const obj3 =
{
	age: 22,
	favColor: 'red',
	height: 188,
	pet: 'dog',
	money: 12300
};

const { age, favColor, height, pet, money } = obj3;

console.log(age, favColor, height, pet, money);


const obj = {
	age: 22,
	favColor: 'red',
	height: 188,
	pet: 'dog',
	money: 12300
};

const updateObj = {
	age: 23,
	favColor: 'blue',
	money: 11450
};

//создание нового объекта со всеми свойствами, но с новыми значениями
const obj2 = { ...obj, ...updateObj };