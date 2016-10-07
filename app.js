// good luck !

var inputs = $(".color");
console.log(inputs);
//input.color input.color...
function setButtonBackground(inputs){
	var len = inputs.length;
	for (var i=0; i<len; i++){
		var color = $(inputs[i]).data('color');
		$(inputs[i]).css("background-color", color);
	}
}

setButtonBackground(inputs);

$('input.color').on('click', function(){
	var fond = $(this).data('color');
	
	var appel = checked();
	console.log(appel);
	if(appel){
		$(".main").css('color',fond)
	} else {
		$('body').css("background-color", fond);
	}
	
});

function checked(){
return $('#modify-texte').is(':checked');

}
