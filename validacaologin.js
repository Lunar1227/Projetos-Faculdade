function validarlogin() {

    var usuario = document.getElementById('usuario').value;

    var senha = document.getElementById('senha').value;

    if (usuario === "") {
        alert('Usuário não informado');
        return false
    }

    if (senha === "") {
        alert('Senha não informada')
        return false
    }

    window.location.href = "telasobrenos.html";

} 
