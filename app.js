console.log('Ta funcionando!');

function tal(){
	var bla = document.querySelectorAll(".userContent p");

	console.log(bla[0].innerText);

	setInterval(function(){ 
		for (var i = 0; i <= bla.length; i++) {
			bla[i].innerHTML = "blahahahaha";
		};
	}, 500);
		

};

tal();