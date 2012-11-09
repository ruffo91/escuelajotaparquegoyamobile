jQuery(document).ready(function(){
	document.addEventListener("deviceready", dispositivoListo, false);
	jQuery('#boton1').click(function(){
		alert("Has hecho click!");
	});
});

function dispositivoListo(){
	alert("Tu dispositivo está listo para usar la API de PhoneGap.");
}