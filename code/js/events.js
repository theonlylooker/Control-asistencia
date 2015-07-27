function clickSignIn() {
    $('#main_form').load('pages/signin.html');	
	changeSubMenu();
}

function clickEditPerfil() {
    $('#main_form').load('pages/editperfil.html');
	changeSubMenu();
}

function clickSignOut() {
    $('#main_form').load('pages/signout.html');	
	changeSubMenu();
}

function clickSolutions() {
	$('#main_form').load('pages/solutions.html');
	changeSubMenu();
}

function clickSearchSolutions() {
	$('#main_form').load('pages/buscar.html');
	changeSubMenu();
}

function changeSubMenu() {
	$('#barra_lateral li').click(function(){
		$('#barra_lateral li').removeAttr('style');
		$(this).css('background-color', '#13551f');
	});
}

$(document).ready(function(){
		/*$('input:radio[name="genero"]').change(function(){
			alert($(this).val());
		});*/
		/*$('#limpiar').click(function(){
			$('.datos').val("");
			$('input:radio[name="genero"]').prop("checked", false);
		});*/
		/*$('#iniciar').click(function(){
			$('#barra').click(function(){
				$('#barra li').css("background-color", 'red')
			});
			$('#campo').html("");
			$('#campo').load('login.html');
			$
			
		});*/
		
	/*cuando se inicia la recarga de la pagina*/
	$('#campo').load('pages/search.html', function(responseTxt, statusTxt, xhr){
		if(statusTxt == "success")
			clickSearchSolutions();
			$('#main_lateral').css('background-color', '#13551f');
		if(statusTxt == "error")
			alert("Error: " + xhr.status + ": " + xhr.statusText);
	});
	$('#main').css('background-color', '#13551f');
	
	$('li').click(function(){
		$('li').removeAttr('style');
		$(this).css('background-color', '#13551f');
	});	
	$('#iniciar').click(function(){
		$('#campo').load('pages/login.html', function(responseTxt, statusTxt, xhr){
			if(statusTxt == "success")
				clickSignIn();
				$('#main_lateral').css('background-color', '#13551f');
			if(statusTxt == "error")
				alert("Error: " + xhr.status + ": " + xhr.statusText);
		});
	});
	$('#buscar').click(function(){
		$('#campo').load('pages/search.html', function(responseTxt, statusTxt, xhr){
			if(statusTxt == "success")
				clickSearchSolutions();
				$('#main_lateral').css('background-color', '#13551f');
			if(statusTxt == "error")
				alert("Error: " + xhr.status + ": " + xhr.statusText);
		});
	});
	$('#registro').click(function(){
		$('#campo').load('pages/registration.html', function(responseTxt, statusTxt, xhr){
			if(statusTxt == "success")
				clickSolutions();
				$('#main_lateral').css('background-color', '#13551f');
			if(statusTxt == "error")
				alert("Error: " + xhr.status + ": " + xhr.statusText);
		});
	});
	/*$('#codigo').keyup(function(e){
		if(e.keyCode == 13)
		{
			var text= prompt("TEMA", "Ingrese el tema");
		}
	});*/
	
});