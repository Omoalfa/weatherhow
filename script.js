const api = {
	base: "api.openweathermap.org/data/2.5/",
	key: "2402644934374c21f582a5b14f8cdb5e"
}

if (navigator.geolocation) {
navigator.geolocation.getCurrentPosition(function(position) {
	let lat = position.coords.latitude;
	let long = position.coords.longitude;

	
	fetch(`https://${api.base}weather?lon=${long}&lat=${lat}&units=metric&appid=${api.key}`)
		.then(result => {
			return result.json();
		}).then(displayResult);		
	
})	
}

function displayResult (result) {
	console.log(result);
	const yourLocation = document.querySelector("#yourLocation");
	const yourTemperature = document.querySelector("#yourDegree");
	const yourSkycon = document.querySelector("#yourSkycon");
	const yourComment = document.querySelector("#yourSkyComment");
	const yourTime = document.querySelector("#yourTime");
	const yourDate = document.querySelector("#yourDate")

	let time = setInterval(myTime, 1000);
	yourLocation.textContent = `${result.name}, ${result.sys.country}`;
	yourTemperature.textContent = `${Math.round(result.main.temp)}`;
	yourComment.textContent = `${result.weather[0].description}`;
	yourSkycon.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;

	function myTime () {
		const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
		const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		let d = new Date();
		let t = d.toLocaleTimeString();
		let day = d.getDate();
		let x = d.getDay();
		let month = d.getMonth();
		let year = d.getFullYear();
		yourTime.innerHTML = t;
		yourDate.textContent = `${days[x]}, ${months[month]} ${day}, ${year}`;
	}
}

function checknewlocation () {
	let otherCity = document.querySelector("#otherLocationSection");
	let set = document.querySelector("#setLocation");

	otherCity.style.display = "block";
	set.style.display = "none";

	let input = document.querySelector("input");

	fetch(`https://${api.base}weather?q=${input.value}&units=metric&appid=${api.key}`)
		.then(result => {
			return result.json();
		}).then(displayResultOther);		
	
}

function displayResultOther (result) {
	console.log(result);
	const yourLocation = document.querySelector("#otherLocation");
	const yourTemperature = document.querySelector("#otherDegree");
	const yourSkycon = document.querySelector("#otherSkycon");
	const yourComment = document.querySelector("#otherSkyComment");
	const yourTime = document.querySelector("#otherTime");
	const yourDate = document.querySelector("#otherDate")

	let time = setInterval(myTime, 1000);
	yourLocation.textContent = `${result.name}, ${result.sys.country}`;
	yourTemperature.textContent = `${Math.round(result.main.temp)}`;
	yourComment.textContent = `${result.weather[0].description}`;
	yourSkycon.src = `http://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;

	function myTime () {
		const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
		const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
		let d = new Date();
		let t = d.toLocaleTimeString();
		let day = d.getDate();
		let x = d.getDay();
		let month = d.getMonth();
		let year = d.getFullYear();
		yourTime.innerHTML = t;
		yourDate.textContent = `${days[x]}, ${months[month]} ${day}, ${year}`;
	}
}