// change text color of #year to random color every 1 second
const year = document.querySelector("#year");
setInterval(() => {
	year.style.color = `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
		Math.random() * 255
	)}, ${Math.floor(Math.random() * 255)})`;
}, 1000);

const liElements = document.querySelectorAll("li");

liElements.forEach((li) => {
	console.log(li.innerHTML);
	if (li.innerHTML.includes("Ongoing")) {
		li.style.color = "yellow";
	} else if (li.innerHTML.includes("Coming")) {
		li.style.color = "red";
	} else if (li.innerHTML.includes("Done")) {
		li.style.color = "green";
	}
});
