const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

const notes = [
	{
		title: 'Изучить js до уровня сложных анимаций и настройки клиента',
		completed: false,
	},
	{
		title: 'Vue на уровне компонентов',
		completed: true,
	},
	{
		title: 'Увеличить скорость печати',
		completed: false,
	},
];

function render()
{
	listElement.innerHTML = '';
	if(notes.length == 0)
		listElement.innerHTML = '<p align="center" class="mt-2">Тут ничего нет</p>';
	for (let i = 0; i < notes.length; i++)
	{
		listElement.insertAdjacentHTML('beforeend', getNoteTemplate(notes[i], i));
	}
}

render();

listElement.onclick = function(e)
{
	if (e.target.dataset.index)
	{
		const index = parseInt(e.target.dataset.index);
		const type = e.target.dataset.type;

		if(type === 'toggle')
			notes[index].completed = !notes[index].completed;
		else if(type === 'remove')
			notes.splice(index, 1);

		render();
	}
};

createBtn.onclick = function()
{
	if(inputElement.value)
	{
		const newNote =
		{
			title: inputElement.value,
			completed: false,
		};

		notes.push(newNote);
		render();

		inputElement.value = '';
	}
};

function getNoteTemplate(note, index)
{
	return `
		<li
		class="list-group-item d-flex justify-content-between align-items-center"
		>
			<span class="list-group-item__title ${note.completed ? 'del' : ''}">${note.title}</span>
			<span class="btns">
				<span
					class="btn btn-small btn-${note.completed ? 'primary' : 'success'}"
					data-index="${index}"
					data-type="toggle"
				>
					&check;
				</span>
				<span
					class="btn btn-small btn-danger"
					data-index="${index}"
					data-type="remove"
				>
					&times;
				</span>
			</span>
		</li>
		`;
}