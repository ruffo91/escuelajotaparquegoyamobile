jQuery(document).ready(function(){
	setTimeout(function(){
		document.addEventListener("deviceready", dispositivoListo, false);
	}, 3000);
});

function dispositivoListo(){
	var internet = navigator.network.connection.type;
	if(internet != "none"){
		jQuery('#inicio-splash-screen').hide();
		jQuery('#inicio-contenedor').fadeIn(1000);
		
		jQuery('#boton-salir').click(function(){
			navigator.app.exitApp();
		});
		
		jQuery('#borrar').click(function(){
			navigator.notification.beep(3);
		});
	}
	else{
		alert("Error, no tienes conexión a internet...");
	}
}