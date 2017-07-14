var codigo = /^[a-zA-Z0-9_\.\-]+@[a-zA-Z0-9\-]+\.[a-zA-Z0-9\-\.]+$/;
$(document).ready(function(){
	$("#boton").click(function(){
		var email = $("#email").val();
		var contraseña = $("#contraseña").val();
	};

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

});
