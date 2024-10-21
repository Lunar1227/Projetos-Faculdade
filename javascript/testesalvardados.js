// function generate_uuidv4() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
//     function(c) {
//        var uuid = Math.random() * 16 | 0, v = c == 'x' ? uuid : (uuid & 0x3 | 0x8);
//        return uuid.toString(16);
//     });
// }
 


// function SalvarDados () {

    
//     var usuario = document.getElementById('campousuario').value

//     var senha = document.getElementById('camposenha').value

//     var usu = {login: usuario};

//     var sen =  {senha: senha};

//     localStorage.setItem('chamandosenha'+ '-' + generate_uuidv4(), JSON.stringify(sen));

//     localStorage.setItem('chamandousu' +'-'+ generate_uuidv4() , JSON.stringify(usu));

//     console.log('Dados salvos')

// }


function generate_uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
    function(c) {
       var uuid = Math.random() * 16 | 0, v = c == 'x' ? uuid : (uuid & 0x3 | 0x8);
       return uuid.toString(16);
    });
}

function SalvarDados() {
    var usuario = document.getElementById('campousuario').value;
    var senha = document.getElementById('camposenha').value;

    // Recuperando usuários existentes
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Criando um novo objeto de usuário
    var novoUsuario = {
        id: generate_uuidv4(), // Adicionando um ID único
        login: usuario,
        senha: senha
    };

    // Adicionando o novo usuário ao array
    usuarios.push(novoUsuario);

    // Salvando o array atualizado no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    console.log('Dados salvos');
}
