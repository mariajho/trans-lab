$(document).ready(function(){
	$("#cantidad-saldo").click(function(){
		var ultimo = $(".guardar").val();
		$.ajax({
			url:http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip= + final,
			type: 'GET',
			datatype: 'JSON',
		})

		.done(function(response){
			$("#resultado").append(<button class="btn btn-default" id="cantidad-saldo"><a href="">
				</a>VER SALDO</button>)
			console.log(response.cantidad-saldo);
		})
		.fail(finction(error){
			console.log("error");
		})
	});

});