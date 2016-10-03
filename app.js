// good luck !

var inputs = $(".color");
console.log(inputs);
//input.color input.color...
var len = inputs.length;
console.log(len);
//10
for (var i=0; i<len; i++){
//var colors = inputs[i];
var color = $(inputs[i]).data('color');
//console.log(colors);
console.log(color);
$(inputs[i]).css("background-color", color);
}

$('input.color').on('click', function(){
	var font = $(this).data('color');
	
	var appel = checked();
	console.log(appel);
	if(appel){
		$(".main").css('color',font)
	} else {
	$('body').css("background-color", font);
		
	}
	
});



function checked(){
return $('#modify-texte').is(':checked');

}
