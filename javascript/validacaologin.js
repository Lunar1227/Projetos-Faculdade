
// function recuperardados(){


//     var campousuario = document.getElementById('usuario').value;

//     var camposenha = document.getElementById('senha').value;

//     var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

//     var usuarioEncontrado = usuarios.find(function SalvarDados() {
//     return usuario.nome === campousuario && usuario.senha === camposenha;
//     });

//     if (usuarioEncontrado) {
//     alert('Login bem-sucedido!');
//     window.location.href = "../html/telasobrenos.html";
//     } else {
//     alert('Usuário ou senha incorretos.');
    
//     }
// }



// }

// essa função Verifca se os campos estão preenchidos ou não


// function validarlogin() {

//     var usuario = document.getElementById('usuario').value;

//     var senha = document.getElementById('senha').value;

//     if (usuario === "") {
//         alert('Usuário não informado');
//         return false;
//     }

//     if (senha === "") {
//         alert('Senha não informada')
//         return false;
//     }

//     senha_salva = JSON.parse(localStorage.getItem('chamandosenha'));

//     usuario_salvo = JSON.parse(localStorage.getItem('chamandousu'));

//     if (usuario === usuario_salvo && senha === senha_salva) {
//         window.location.href = "../html/telasobrenos.html"


//     } else {
//         alert ('Usuário ou senha incorreto!')
//     }

//     console.log('Os dados foram carregados!')
//     return false;

// } 



function recuperardados() {
    var campousuario = document.getElementById('usuario').value;
    var camposenha = document.getElementById('senha').value;

    // Recuperando os usuários do localStorage
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Procurando o usuário que corresponde ao login e à senha
    var usuarioEncontrado = usuarios.find(function(usuario) {
        return usuario.login === campousuario && usuario.senha === camposenha;
    });

    if (usuarioEncontrado) {
        alert('Login bem-sucedido!');
        window.location.href = "../html/telasobrenos.html";
    } else {
        alert('Usuário ou senha incorretos.');
    }
}

