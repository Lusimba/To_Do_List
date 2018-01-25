var button=document.getElementById("add");
var input=document.getElementById("items");
var ul=document.querySelector("ul");

function inputLen(){
	return input.value.length;
}
function createElement(){
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value="";
}

function onClick(){
	if (inputLen()>0) {
		createElement();
	}
}

function onPress(event){
	if (inputLen() > 0 && event.keyCode === 13) {
		createElement();
	}
}


button.addEventListener("click", onClick);

input.addEventListener("keypress", onPress);