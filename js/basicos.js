jQuery(document).ready(function(){
	document.addEventListener("deviceready", dispositivoListo, false);
	jQuery('#boton1').click(function(){
		alert("Has hecho click!");
	});
});

function dispositivoListo(){
	//alert("Tu dispositivo está listo para usar la API de PhoneGap.");
	var canvas = jQuery('#misCanvas');
	var contexto = canvas.getContext("2d");
	contexto.beginPath();
	contexto.arc(60, 60, 50, 0, Math.PI*2, true);
	contecto.closePath();
	contexto.strokeStyle = "#FF0000";
	contexto.fillStyle = "#0000FF";
	contexto.lineWidth = 3;
	contexto.fill();
	contexto.stroke();
}