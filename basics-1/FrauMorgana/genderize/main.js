const SERVER_URL = 'https://api.genderize.io';

const form = document.querySelector("form");

form.addEventListener("submit", Genderize);

function Genderize(event) {
	event.preventDefault();
	getName();
	const URL = `${SERVER_URL}?name=${firstName}`;
	fetch(URL)
		.then(Response => Response.json())
		.then(function(data){
			let gender = data.gender;
			return gender;
		});
	resultOutput();
};

function getName() {
	let input = form.querySelector("input");
	let firstName = input.value;
	if(!firstName) {
		alert("Please, enter any name");
	}
	else return firstName;
};

function resultOutput(){
	let message = document.createElement("span");
	message.textContent = `${firstName} is probably ${gender}`;
	form.after(message);
}

function getGender() {
	
}