function recuperardados(){

    var campousuario = document.getElementById('usuario').value;

    var camposenha = document.getElementById('senha').value;

    var login = localStorage.getItem('usuario1');

    var senha = localStorage.getItem('senha1');

    
    if (campousuario == login && camposenha === senha) {
        alert('Login efetuado com sucesso!')
        window.location.href = "../html/telasobrenos.html";

    } else {
        alert('Usuário ou senha incorreto')
    } 
    
}


//Verifica se os campos estão preenchidos ou não
function validarlogin() {

    var usuario = document.getElementById('usuario').value;

    var senha = document.getElementById('senha').value;

    if (usuario === "") {
        alert('Usuário não informado');
        return false;
    }

    if (senha === "") {
        alert('Senha não informada')
        return false;
    }

    recuperardados();
    return false;

} 

