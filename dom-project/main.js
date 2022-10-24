// change text color of #year to random color every 1 second
const year = document.querySelector("#year");
setInterval(() => {
	year.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
		Math.random() * 255
	)}, ${Math.floor(Math.random() * 255)})`;
}, 1000);
