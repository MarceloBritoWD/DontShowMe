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

	// alert('Hi there!');

	// var tal = document.querySelector('.userContentWrapper');

	// if (tal.textContent.indexOf('FORA')) {
	// 	tal.removeChild(list.childNodes[0]);
	// }




	// var bla = document.querySelector('.userContent p');

	// bla.innerHTML = "New Header";


// <div class="_5pbx userContent" data-ft="{&quot;tn&quot;:&quot;K&quot;}" id="js_9">
// <p><a class="profileLink" href="https://www.facebook.com/j.ralf7" data-hovercard="/ajax/hovercard/user.php?id=100009151265844">Ralf Jset</a> benzinho, espero que me entenda sempre (kkkk). Te amo <i class="_4-k1 img sp_fM-mz8spZ1b sx_62a652"><u>heart emoticon</u></i></p><div class="_5wpt"></div></div>









// FUNCIONANDO!!
// console.log('Ta funcionando!');

// function tal(){
// 	document.querySelector("._5vb_").style.background = '#fff';
// };

// tal();