let mode = 'time';
const output = document.getElementById('output');
const fullBtn = document.getElementById('full');
const dateBtn = document.getElementById('date');
const timeBtn = document.getElementById('time');

update();

setInterval(update, 1000);

fullBtn.onclick = function()
{
	mode = 'full';
	update();
};

dateBtn.onclick = function()
{
	mode = 'date';
	update();
};

timeBtn.onclick = function()
{
	mode = 'time';
	update();
};

function update()
{
	output.textContent = format(mode);
};

function format(formatMode)
{
	const now = new Date();

	switch (formatMode)
	{
		case 'time':
			return now.toLocaleTimeString();
			break;
		case 'date':
			return now.toLocaleDateString();
			break;
		case 'full':
			return now.toLocaleDateString() + ' ' + now.toLocaleTimeString();
			break;
		default:
			return now.toLocaleTimeString();
			break;
	}
}