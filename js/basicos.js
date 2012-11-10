jQuery(document).ready(function(){
	document.addEventListener("deviceready", dispositivoListo, false);
});

function dispositivoListo(){
	jQuery('#boton').click(function(){
		navigator.notification.confirm('Quieres aceptar la alerta?', alerta, 'Alerta', 'Si,No,Quizás');
	});
}

function alerta(boton){

}