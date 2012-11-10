jQuery(document).ready(function(){
	setTimeout(function(){
		document.addEventListener("deviceready", dispositivoListo, false);
	}, 3000);
});

function dispositivoListo(){
	jQuery('#inicio-splash-screen').hide();
	jQuery('#inicio-contenedor').fadeIn(1000);
	
	jQuery('#boton').click(function(){
		navigator.app.exitApp();
	});
}