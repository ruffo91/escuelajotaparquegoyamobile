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
		navigator.notification.confirm('No tienes conexión a internet...', error_salir, 'Error', 'Salir');
	}
}

function error_salir(){
	navigator.app.exitApp();
}