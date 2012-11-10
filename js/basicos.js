jQuery(document).ready(function(){
	document.addEventListener("deviceready", dispositivoListo, false);
});

function dispositivoListo(){
	jQuery('#splash-screen').hide();
	jQuery('#inicio-header').fadeIn(1000);
	jQuery('#inicio-body').fadeIn(1000);
}