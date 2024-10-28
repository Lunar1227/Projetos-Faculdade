
/*essa função faz com que cada usuário tenha um id único ao se cadastrar, não vou saber
explicar com detalhes porque eu pesquisei sobre como colocar o id e apareceu o código abaixo.*/
function generate_uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,
    function(c) {
       var uuid = Math.random() * 16 | 0, v = c == 'x' ? uuid : (uuid & 0x3 | 0x8);
       return uuid.toString(16);
    });
}


/*Essa função é responsável por salvar os dados do campo usuário e campo senha*/
/*criei uma variavel chamada usuario e senha, e peguei os elementos do campo de usuario e senha, no html e seus valores*/
function SalvarDados() {
    var usuario = document.getElementById('campousuario').value;
    var senha = document.getElementById('camposenha').value;
    var email = document.getElementById('inserirEmail').value;

    // Quando a gente coloca o JSON.parse é para converter uma string em um objeto.
    //Criei uma variável chamada usuarios e coloquei um JSON.parse para que, toda vez que eu criar um novo usuário
    //o JSON converter o objeto "novoUsuário" em uma string, pq se não converter, dá erro pra acessar as propriedades login e senha, sabe?
    // daí junto com o JSON tem o sinal de "||" que significa "ou" e ao lado tem o "[]" que se chama Array.
    //Array é uma estrutura que serve pra armazenar qualquer tipo de dado, e abaixo o array está vazio.
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Criei um objeto com os dados abaixo, e chamando a funçao acima no id. Assim, cada novoUsuario (que é um objeto) vai ter seus p´roprios dados.
    var novoUsuario = {
        id: generate_uuidv4(), // chama primeira função que eu expliquei acima.
        login: usuario,
        senha: senha,
        email: email
    };

    // Aqui a gente pega o a variável (usuarios) e Adiciona o novo usuário (objeto) ao array dessa forma abaixo:
    usuarios.push(novoUsuario);


    // Depois quue puxamos os novos dados, a gente usa o localStorage.setItem para salvar os novos dados no array, dentro do localstorage.
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    //E aqui, aparece uma mensagem no console (apertando f12 aparece aquela janela de inspecionar, e lá na aba "console" aparece a mensagem abaixo)
    console.log(usuarios)
    console.log('Dados salvos');

    alert('Cadastro realizado com sucesso!')


}

//função que valida todos os campos de cadastro.
function validarcadastro(event) {

    event.preventDefault(); //essa função não deixa o formulário ser enviado caso a gente clicar no
    //cadastrar e tiver alguma coisa não preenchida.


    //abaixo eu só coloquei as validações como comentário para poder fazer vários testes.
    // var nomecompleto = document.getElementById('nomecompleto').value;

    // var datanascimento = document.getElementById('datanascimento').value;

    // var genero = document.getElementById('genero').value;

    // var usuario = document.getElementById('campousuario').value;

    // var senha = document.getElementById('camposenha').value;

    // var confirmasenha = document.getElementById('confirmasenha').value;

    // var cep = document.getElementById('cep').value;

    // var endereco = document.getElementById('endereco').value;

    // var complemento = document.getElementById('complemento').value;

    // var tel = document.getElementById('tel').value;

    // var cpf = document.getElementById('cpf').value;

    // var Inseriremail = document.getElementById('inserirEmail').value;



    // if (nomecompleto === ''){
    //     alert('O campo nome completo não foi preenchido')
    //     nomecompleto.focus();
    //     return false;


    // }

    // if (datanascimento === ''){
    //     alert('O campo data de nascimento não foi preenchido')
    //     datanascimento.focus();
    //     return false;

    // }

    // if (genero === ''){
    //     alert('O campo sexo não foi preenchido')
    //     genero.focus();
    //     return false;


    // }


    // if (senha === ''){
    //     alert('Por favor, informe uma senha')
    //     senha.focus()
    //     return false;

    // }

    // if (confirmasenha ===''){
    //     alert('Por favor, confirme a senha')
    //     confirmasenha.focus()
    //     return false;

    // }

    // if (senha !== confirmasenha){
    //     alert('As senhas não coincidem')
    //     senha.focus();
    //     return false;
    
    // }
        
    // if (usuario === ''){
    //     alert('Por favor, informe um usuário')
    //     usuario.focus()
    //     return false;


    // }

    // if (cep ===''){
    //     alert('Por favor, informe um CEP');
    //     cep.focus();
    //     return false;


    // }

    // if (endereco ===''){
    //     alert('Por favor, informe um endereço');
    //     endereco.focus();
    //     return false;


    // }


    // if (complemento ===''){
    //     alert('Por favor, informe um complemento');
    //     complemento.focus();
    //     return false;


    // }


    // if (tel ===''){
    //     alert('Por favor, informe um telefone');
    //     cep.focus();
    //     return false;


    // }


    // if (cpf ===''){
    //     alert('Por favor, informe um CPF');
    //     cep.focus();
    //     return false;


    // }


    // if (Inseriremail ===''){
    //     alert('Por favor, informe um e-mail');
    //     Inseriremail.focus();
    //     return false;


    // }
    

    //aqui a gente chama a função acima, mas só se os dados forem devidamente validados.
    SalvarDados();

    window.location.href="../html/telalogin.html"

}


function voltar(){
    window.location.href="../html/telalogin.html"

}
