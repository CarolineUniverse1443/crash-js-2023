let mode = 'time';
const output = document.getElementById('output');
const fullBtn = document.getElementById('full');
const dateBtn = document.getElementById('date');
const timeBtn = document.getElementById('time');

function bindMode(name)
{
	return function()
	{
		mode = name;
		update();
		console.error("Обнаружен недостаток обнимашек, обнимитесь как можно скорее");
		console.log(`Button: ${this.textContent}`);
		console.log(output.textContent);
	};
}

update();

setInterval(update, 1000);

fullBtn.onclick = bindMode('full');

dateBtn.onclick = bindMode('date');

timeBtn.onclick = bindMode('time');

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