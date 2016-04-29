console.log('Dont Show Me is running!');

function tal(){

	setInterval(function(){ 
		// var container = document.querySelectorAll("._5pcb._4b0l"); /* Perfil de Usuario */
		var container = document.querySelectorAll("._4ikz");
		var textArea = document.querySelectorAll(".userContent");

		for (var i = 0; i <= container.length; i++) {
			
			// container[i].style.display = 'none';

			if (container.indexOf("Esporte Interativo")) {
				container[i].style.display = 'none';
				container[i].innerHTML = "Postagem Escrota";
				console.log("Workou");
			};


		};
	}, 500);
};

tal();