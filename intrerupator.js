var mode = "default";
function swapStyleSheet(){
	var pagestyle = document.getElementById('pagestyle');
	var lightSwitch = document.getElementById('lightSwitch');
	if(mode == "default"){ //schimba modul paginii in dark daca este default
		pagestyle.setAttribute('href', 'dark.css');
	    lightSwitch.src = "img/intrerupator_on.png";
	    lightSwitch.title = "Pleaca Ruby";
		mode = "dark";
	} else { //schimba modul paginii in default daca este dark
		pagestyle.setAttribute('href', 'styles.css');
	    lightSwitch.src = "img/intrerupator_off.png";
	    lightSwitch.title = "Vine Ruby";
		mode = "default";
	}
}