var codigo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;

$(document).ready(function(){
	$("#boton").click(function(){
		function email(email){
			return codigo.test(email);
		};
		if($("#email").val() == true){
			alert("tu email es valido");
		}
		if(email($("#email").val() == false){
			e.preventDefault();
			alert("tu email no es valido");
		}
		if($("contraseña").val().length != 8){
			alert("la contraseña debe tener 8 digitos");
		}else{
			e.preventDefault();
			window.location = "index-menu.html";

		}
	});

});


/*var codigo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
$(document).ready(function(){
	$("#boton").click(function(){
		var email = $("#email").val();
		var contraseña = $("#contraseña").val();
	});

	if(email == ""){
		$("#mensaje1").fadeIn();
		return false;
	}else{
		$("#mensaje1").fadeOut();
		if(contraseña == "" !expr.test(contraseña)){
			$("#mensaje2").fadeIn();
			return false;
		}
	}

}*/
