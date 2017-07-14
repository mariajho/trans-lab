//Home me da acceso a todas las opciones 
$(document).ready(function(){
	$("#Home").click(function(e){
		e.preventDefault()//evita que vaya a la ruta especificada
		window.location = "index-menu.html";//devuelve un objeto, nos lleva a la pantalla con todas las opciones
	});

//Al pinchar la opción de perfil me direcciona hasta este
$("#Perfil").click(function(e){
	e.preventDefault()//evita que vaya a la ruta especificada
	window.location = "index-perfil.html";//devuelve un objeto, nos lleva a la pantalla con todas las opciones
});

//AL pinchar la opcion de deriva al menu de saldo
$("#Saldo").click(function(e){
	e.preventDefault();//evita que vaya a la ruta especificada
	window.location = "index-saldo.html";//devuelve un objeto, nos lleva a la pantalla con todas las opciones
});

//AL pinchar la opcion de deriva al menu de calcular
$("#Saldo").click(function(e){
	e.preventDefault();//evita que vaya a la ruta especificada
	window.location = "index-calcular.html";//devuelve un objeto, nos lleva a la pantalla con todas las opciones
});




});