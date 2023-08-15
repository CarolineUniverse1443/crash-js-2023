const inputElement = document.getElementById('title');
const createBtn = document.getElementById('create');
const listElement = document.getElementById('list');

createBtn.onclick = function()
{
	if(inputElement.value)
	{
		listElement.insertAdjacentHTML(
			'beforeend',
			`
			<li
			class="list-group-item d-flex justify-content-between align-items-center"
			>
				<span>${inputElement.value}</span>
				<span>
					<span class="btn btn-small btn-success">&check;</span>
					<span class="btn btn-small btn-danger">&times;</span>
				</span>
			</li>
			`);

		inputElement.value = '';
	}
};