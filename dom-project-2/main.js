/* Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div. 
Even numbers background is green
Odd numbers background is yellow
Prime numbers background is red */

const container = document.createElement("div");
container.setAttribute("class", "container");
document.body.appendChild(container);

for (let i = 1; i <= 100; i++) {
	let div = document.createElement("div");
	div.setAttribute("class", "div");
	div.style.width = "150px";
	div.innerHTML = parseInt(Math.random() * i);
	container.appendChild(div);

	if (div.innerHTML % 2 == 0) {
		div.style.backgroundColor = "green";
	} else if (i % 2 != 0) {
		div.style.backgroundColor = "yellow";
	} else {
		div.style.backgroundColor = "red";
	}
}
