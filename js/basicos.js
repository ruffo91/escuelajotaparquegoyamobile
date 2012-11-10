jQuery(document).ready(function(){
	document.addEventListener("deviceready", dispositivoListo, false);
	jQuery('#boton1').click(function(){
		alert("Has hecho click!");
	});
});

function dispositivoListo(){
	alert("Tu dispositivo está listo para usar la API de PhoneGap.");
	navigator.geolocation.getCurrentPosition(lecturasGPS, errorGPS, {enableHighAccuracy:true});
}

function lecturaGPS(ubicacion){
	alert("GPS activado y funcional!");
}

function errorGPS(error){
	alert("GPS no disponible...");
}