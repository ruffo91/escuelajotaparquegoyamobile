jQuery(document).ready(function(){
	var ejecutado = 0;
	setTimeout(function(){
		document.addEventListener("deviceready", dispositivoListo, false);
	}, 3000);
	setTimeout(function(){
		if(ejecutado != 1){
			navigator.notification.confirm('Imposible conectar...', error_salir, 'Error', 'Salir');
		}
	}, 5000);
	
});

function dispositivoListo(){
	ejecutado = 1;
	ejecutar();
}

function ejecutar(){
	var internet = navigator.network.connection.type;
	if(internet != "none"){
		jQuery('#inicio-splash-screen').hide();
		jQuery('#inicio-contenedor').fadeIn(1000);
		
		jQuery('#boton-salir').click(function(){
			navigator.app.exitApp();
		});
		
		jQuery('#borrar').click(function(){
			navigator.notification.beep(1);
		});
	}
	else{
		navigator.notification.confirm('No tienes conexión a internet...', error_salir, 'Error', 'Salir');
	}
}

function error_salir(){
	navigator.app.exitApp();
}