function recuperardados(){

    var campousuario = document.getElementById('usuario').value;

    var camposenha = document.getElementById('senha').value;

    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    var usuarioEncontrado = usuarios.find(function(usuario) {
        return usuario.nome === campousuario && usuario.senha === camposenha;
    });

    if (usuarioEncontrado) {
        alert('Login bem-sucedido!');
        window.location.href = "../html/telasobrenos.html";
    } else {
        alert('Usuário ou senha incorretos.');
    }



}

// essa função Verifca se os campos estão preenchidos ou não
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

