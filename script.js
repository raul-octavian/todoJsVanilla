var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelectorAll("li");

lis.forEach(item => item.appendChild(createDoneButton()));
lis.forEach(item => item.appendChild(createDelete()));

function inputLength() {
	return input.value.length;
}

function createDoneButton() {
	var done = document.createElement("button");
	done.classList.add("doneBtn");
	done.appendChild(document.createTextNode("Done"));
	done.addEventListener("click", makeDone);
	return done;	
}

function createDelete() {
	let deleteBtn = document.createElement("button");
	deleteBtn.classList.add("deleteBtn");
	deleteBtn.classList.add("delete");
	deleteBtn.appendChild(document.createTextNode("Delete"));
	deleteBtn.addEventListener("click", makeDelete);
	return deleteBtn;
	
}


function createListElement() {
	let li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(createDoneButton());
	li.appendChild(createDelete());
	ul.appendChild(li);
	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function makeDone(evt) {
		showDelete(evt);
	let element = evt.target;
	let parent = element.parentNode;
	parent.classList.toggle("done");

}

function showDelete(evt) {
	let el = evt.target;
	let par = el.parentNode;
	children = par.children;
	console.log(children);
	for (let i = 0; i < children.length; i++)
	 {
	
		if (children[i].classList.contains("deleteBtn")) {
			children[i].classList.toggle("delete")
		}
	
	}
}
var children;

function makeDelete(e) {
	let el = e.target;
	let par = el.parentNode;
	par.remove();
		// evt.target.removeEventListener("click", makeDelete, false);
}
	


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
var btnS;
