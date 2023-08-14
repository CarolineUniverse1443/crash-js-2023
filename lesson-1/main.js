const num1 = document.getElementById('input1');
const num2 = document.getElementById('input2');
const resultElement = document.getElementById('result');
const submitBtn = document.getElementById('submit');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const multiplyBtn = document.getElementById('multiply');
const divideBtn = document.getElementById('divide');

const actionBtns = Object.values(document.getElementsByClassName('_action'));

console.log(actionBtns);
let action = '+';

function printResult(result)
{
	if (result < 0 )
		resultElement.style.color = 'red';
	else
		resultElement.style.color = 'green';
	resultElement.textContent = result;
}

function computeNumbers(inp1, inp2, actionSymbol)
{
	const num1 = Number(inp1.value);
	const num2 = Number(inp2.value);

	if (action == '+')
		return num1 + num2;
	else if(action == '-')
		return num1 - num2;
	else if(action == '*')
		return num1 * num2;
	else if(action == '/')
		return num1 / num2;
}

actionBtns.forEach( function(elem)
{
	elem.onclick = function()
	{
		action = this.textContent;
	};
});

submitBtn.onclick = function()
{
	const sum = computeNumbers(input1, input2, action);
	printResult(sum);
};
