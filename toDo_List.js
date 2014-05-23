function addText() {
	var div = document.createElement('div');
	div.setAttribute('class', 'newText');
	var answerField = document.getElementById("answer");
	var someText = answerField.value;
	var txt = document.createTextNode(someText);
	div.appendChild(txt);
	var wrapper = document.getElementById("wrap");
	wrapper.appendChild(div);
	var image = document.createElement('img');
	image.setAttribute('src', 'close.png');
	image.setAttribute('class', 'kartynka');
	var imageOnPage = document.getElementById("wrap");
	div.appendChild(image);
	answerField.value = '';
	

}