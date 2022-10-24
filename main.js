console.log(document.querySelector("p").innerHTML);

console.log(document.querySelector("#paragraph").innerHTML);
console.log(document.querySelector("#paragraph1").innerHTML);
console.log(document.querySelector("#paragraph2").innerHTML);
console.log(document.querySelector("#paragraph3").innerHTML);

console.log(document.querySelectorAll("p"));

const paragraphs = document.querySelectorAll("p");
// loop through the paragraphs and print the innerHTML
paragraphs.forEach((paragraph) => {
	console.log(paragraph.innerHTML);
});

// Set a text content to paragraph3
document.querySelector("#paragraph3").textContent = "I am paragraph 3";

// Set id and class attribute for all the paragraphs using different attribute setting methods
document.querySelector("#paragraph").id = "paragraphId";
document.querySelector("#paragraph1").className = "paragraphClass";
document.querySelector("#paragraph2").setAttribute("id", "paragraphId2");
document.querySelector("#paragraph3").setAttribute("class", "paragraphClass2");

// Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
document.querySelector("#paragraphId").style.color = "red";
document.querySelector("#paragraph1").style.backgroundColor = "blue";
document.querySelector("#paragraphId2").style.border = "1px solid black";
document.querySelector("#paragraph3").style.fontSize = "20px";
document.querySelector("#paragraph3").style.fontFamily = "Arial";

// Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color

paragraphs.forEach((paragraph, index) => {
	if (index % 2 === 0) {
		paragraph.style.color = "green";
	} else {
		paragraph.style.color = "red";
	}
});

// Set text content, id and class to each paragraph
paragraphs.forEach((paragraph, index) => {
	paragraph.textContent = `I am paragraph ${index}`;
	paragraph.id = `paragraphId${index}`;
	paragraph.className = `paragraphClass${index}`;
});
