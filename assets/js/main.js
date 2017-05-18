var inputName = document.getElementById("list-name");
var listBox = document.getElementById("list-box");
var prueba = document.getElementById("principal");
var listArr = [];
var listTarea = [];

function Lists (name, content)
{
	this.name = name;
	this.content = content;
}



function addList (){
	var inputList = document.getElementById("list");
	var border = document.createElement("div"); //creo mi borde
	var newDiv = document.createElement("input"); //creo mi boton

	listBox.appendChild(border); //meto el border en el nav
	border.appendChild(inputName); //meto el texto en el borde
	border.appendChild(newDiv) //meto mi boton en el border
	prueba.appendChild(border);
	newDiv.setAttribute("type", "button");
	newDiv.setAttribute("value", "SAVE");
	newDiv.setAttribute("id", "newButton");
	border.setAttribute("class", "transformBg")
	border.setAttribute("id", "border");
	var button = document.getElementById("newButton");
	button.addEventListener("click", saveButton);

}
inputName.addEventListener("focus", addList)
inputName.addEventListener("blur", function(){
	inputName.removeEventListener("focus", addList)
})



function saveButton(){
	if(inputName.value == ""|| inputName.length == 0){
		alert("El campo no puede estar vacío");
		return
	}
	listArr.push(new Lists(inputName.value));
	listContent(listArr[listArr.length -1].name);
	return listArr;
}

function listContent(name){
	document.getElementById("list-name").value = "";
	var cardSpace = document.createElement("div"); //creo mi espacio
	cardSpace.setAttribute("class", "cardSpace"); 
	var nameList = name;
	var texto = document.createTextNode(nameList);
	var addCard = document.createElement("p");
	addCard.setAttribute("class", "addCard")
	var message = document.createTextNode("Añadir tarjeta");
	addCard.appendChild(message);
	cardSpace.appendChild(texto);
	cardSpace.appendChild(addCard);
	prueba.appendChild(cardSpace);
	document.getElementsByClassName("addCard")[0].addEventListener("click", textArea)
}
function textArea(){
	var card = document.getElementsByClassName("addCard")[0];
	card.remove(card.lastChild);
	var boxText = document.getElementsByClassName("cardSpace")[0];
	var textContent = document.createElement("textarea");
	textContent.setAttribute("placeholder", " Add a tarea...");
	textContent.setAttribute("id", "textarea");
	boxText.appendChild(textContent);
	var addButton = document.createElement("input");
	var ulList = document.createElement("ul");
	addButton.setAttribute("type", "button");
	addButton.setAttribute("value", "AÑADIR");
	addButton.setAttribute("id", "addTarea");
	boxText.appendChild(addButton);

	var button = document.getElementById("addTarea");
	button.addEventListener("click", listInBox)

 	function listInBox(){
 	var textTarea = document.getElementById("textarea").value;
 	listArr[0].content = textTarea;
 	listTarea.push(textTarea);
 	var liList= document.createElement("li");
 	var textForTareas = document.createTextNode(textTarea);
 	liList.appendChild(textForTareas);
 	ulList.appendChild(liList);
 	boxText.appendChild(ulList);
 	document.getElementById("textarea").value = "";
 }

}


	
