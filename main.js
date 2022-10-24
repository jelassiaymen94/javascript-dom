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
