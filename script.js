// your code here
const urlForm = document.getElementById('urlForm');
        const nameInput = document.getElementById('name');
        const yearInput = document.getElementById('year');
        const urlOutput = document.getElementById('url');

urlForm.addEventListener('submit',function(event){
	event.preventDefault();
	const name=document.getElementById('name').value;
	const year=document.getElementById('year').value;

const queryString =`?name=${encodeURIComponent(name)}&year=${encodeURIComponent(year)}`;

urlOutput.textContent = `https://localhost:8080/${queryString}`;
}
						)
