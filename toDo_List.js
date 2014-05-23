function addText() {
	var div = document.createElement('div');
		div.setAttribute('class', 'newText');
	var answerField = document.getElementById("answer");
	var someText = answerField.value;
	var txt = document.createTextNode(someText);
		div.appendChild(txt);
	var elementAlreadyOnPage = document.getElementById("wrap");
		elementAlreadyOnPage.appendChild(div);
	var image = document.createElement('img');
		image.setAttribute('src', 'close.png');
	var imageOnPage = document.getElementById("wrap");
		imageOnPage.appendChild(image);
		answerField.value = '';
	

}