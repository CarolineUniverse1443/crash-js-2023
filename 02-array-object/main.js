const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

const notes = ['Изучить js до уровня сложных анимаций и настройки клиента', 'Vue на уровне компонентов', 'Увеличить скорость печати'];

function render()
{
	for (let note of notes)
	{
		listElement.insertAdjacentHTML('beforeend', getNoteTemplate(note));
	}
}

render();

createBtn.onclick = function()
{
	if(inputElement.value)
	{
		listElement.insertAdjacentHTML(
			'beforeend',
			getNoteTemplate(inputElement.value)
		);

		inputElement.value = '';
	}
};

function getNoteTemplate(title)
{
	return `
		<li
		class="list-group-item d-flex justify-content-between align-items-center"
		>
			<span class="list-group-item__title">${title}</span>
			<span class="btns">
				<span class="btn btn-small btn-success">&check;</span>
				<span class="btn btn-small btn-danger">&times;</span>
			</span>
		</li>
		`;
}

const person =
{
	firstName: 'Caroline',
	lastName: 'Popova',
	getFullName: function()
	{
		console.log(this.firstName + ' ' + this.lastName);
	}
};

// person.getFullName();