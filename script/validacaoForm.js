function validar(){
	var nome=formulario.nome.value;
	var telef=formulario.telef.value;
	var data=formulario.data.value;
	
	if(nome==""){
	window.alert("Preencha o campo com o seu nome!");
	formulario.nome.focus();
	return false;
	}
	
	if(telef==""){
		window.alert("Preencha o campo com o seu telefone!");
		formulario.telef.focus();
		return false;
	}
	if(data==""){
		window.alert("Preencha o campo com o seu nascimento!");
		formulario.data.focus();
		return false;
	}
}