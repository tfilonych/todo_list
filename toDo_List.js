var counter = 0;
	
function addText(){
	counter++;
	var div = document.createElement('div');
	div.setAttribute('class', 'newText');
	div.setAttribute('id', 'row' + counter);
	var answerField = document.getElementById("answer");
	var someText = answerField.value;
	var txt = document.createTextNode(someText);
	div.appendChild(txt);
	var wrapper = document.getElementById("wrap");
	wrapper.appendChild(div);
	var image = document.createElement('img');
	image.setAttribute('src', 'close.png');
	image.setAttribute('class', 'kartynka');
	image.setAttribute('id', 'button' + counter);
	image.setAttribute('onclick', 'deleteRow(this.getAttribute("id"));');
	image.setAttribute('onmouseover', 'hover(this)');
	image.setAttribute('onmouseout', 'unhover(this)');
	div.appendChild(image);
	answerField.value = '';
}

function hover(image2){
		image2.setAttribute('src', 'close_hover.png');
		image2.setAttribute('class', 'image-hover');
	}
	
function unhover(image1){
		image1.setAttribute('src', 'close.png');
	}
	
	


function deleteRow(button_id){
	var wrapper = document.getElementById("wrap");
	var button = document.getElementById(button_id);
	var deleteRow = button.parentNode;
	wrapper.removeChild(deleteRow);

}

function pressEnter(evt){
	//alert(evt.which + " " + evt.keyCode);
	var charCode = (typeof evt.which === "number") ? evt.which : evt.keyCode;
	if (charCode == 13){
		addText();
	} 
	
}
