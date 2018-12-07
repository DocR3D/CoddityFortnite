//import { launch } from '../js/video.js';

count = 0;

function hit() {
	
	count ++;

	if(count < 3) {
		document.getElementById("lama").innerHTML = "<img src='img/lama2.png'/>"
    	setTimeout(normal, 100); 
	}
	else {
		launch();
	}
   

}

function normal() {
    document.getElementById("lama").innerHTML = "<img src='img/lama.png' onclick='hit()'/>"
}