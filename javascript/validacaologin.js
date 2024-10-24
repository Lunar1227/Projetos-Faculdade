

//essa função pega os dados do input login e senha da tela de login;
function recuperarDados() {
    var campousuario = document.getElementById('usuario').value;
    var camposenha = document.getElementById('senha').value;

    //criei uma variável chamado usuarios, que está recebendo o valor do 
    //LocalStorage.setItem, responsável por pegar os dados na página "testesalvardados"
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Procurando o usuário que corresponde ao login e à senha. Para isso, criei uma variavel,
    // daí coloquei o nome da variável que eu coloquei acima e .find para encontrar o objeto e as propriedades usuario e senha.
    var usuarioEncontrado = usuarios.find(function(usuario) {
        return usuario.login === campousuario && usuario.senha === camposenha;
    });


    //Aqui é um if básico, se os dados da variável acima forem encontrados, aparece o alerta de login bem sucedido
    // e direciona para a tela sobre nós, caso não vai alertar que o usuário e a senha estão incorretos.
    if (usuarioEncontrado) {
        localStorage.setItem('usuarioLogado', JSON.stringify(usuarioEncontrado));
        alert('Login bem-sucedido!');
        window.location.href = "../html/telasobrenos.html";
    } else {
        alert('Usuário ou senha incorretos.');
    }
}

