var contador = 1;

function salvardados1() {

    var usuario1 = document.getElementById('campousuario').value;
    var senha1 = document.getElementById('camposenha').value;

    // Recupera os usuários armazenados ou cria um array vazio se não existir nenhum
    var usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    // Adiciona o novo usuário e senha
    usuarios.push({ nome: usuario1, senha: senha1 });

    // Armazena os dados atualizados no localStorage
    localStorage.setItem('usuarios', JSON.stringify(usuarios));

    console.log('Usuário cadastrado com sucesso!');
}

function validarcadastro(event) {

    event.preventDefault();  // Previne o envio padrão do formulário

    var nomecompleto = document.getElementById('nomecompleto').value;
    var datanascimento = document.getElementById('datanascimento').value;
    var genero = document.getElementById('genero').value;
    var usuario = document.getElementById('campousuario').value;
    var senha = document.getElementById('camposenha').value;
    var confirmasenha = document.getElementById('confirmasenha').value;
    var cep = document.getElementById('cep').value;
    var endereco = document.getElementById('endereco').value;
    var complemento = document.getElementById('complemento').value;
    var tel = document.getElementById('tel').value;
    var cpf = document.getElementById('cpf').value;
    var inserirEmail = document.getElementById('inserirEmail').value;

    // Validações
    if (nomecompleto === '') {
        alert('O campo nome completo não foi preenchido');
        document.getElementById('nomecompleto').focus();
        return false;
    }

    if (datanascimento === '') {
        alert('O campo data de nascimento não foi preenchido');
        document.getElementById('datanascimento').focus();
        return false;
    }

    if (genero === '') {
        alert('O campo sexo não foi preenchido');
        document.getElementById('genero').focus();
        return false;
    }

    if (senha === '') {
        alert('Por favor, informe uma senha');
        document.getElementById('camposenha').focus();
        return false;
    }

    if (confirmasenha === '') {
        alert('Por favor, confirme a senha');
        document.getElementById('confirmasenha').focus();
        return false;
    }

    if (senha !== confirmasenha) {
        alert('As senhas não coincidem');
        document.getElementById('camposenha').focus();
        return false;
    }

    if (usuario === '') {
        alert('Por favor, informe um usuário');
        document.getElementById('campousuario').focus();
        return false;
    }

    if (cep === '') {
        alert('Por favor, informe um CEP');
        document.getElementById('cep').focus();
        return false;
    }

    if (endereco === '') {
        alert('Por favor, informe um endereço');
        document.getElementById('endereco').focus();
        return false;
    }

    if (complemento === '') {
        alert('Por favor, informe um complemento');
        document.getElementById('complemento').focus();
        return false;
    }

    if (tel === '') {
        alert('Por favor, informe um telefone');
        document.getElementById('tel').focus();
        return false;
    }

    if (cpf === '') {
        alert('Por favor, informe um CPF');
        document.getElementById('cpf').focus();
        return false;
    }

    if (inserirEmail === '') {
        alert('Por favor, informe um e-mail');
        document.getElementById('inserirEmail').focus();
        return false;
    }

    // Se passar em todas as validações, salva os dados
    salvardados1();

    // Redirecionamento após cadastro bem-sucedido
    window.location.href = "../html/telasobrenos.html";
}

function voltar() {
    window.location.href = "../html/telalogin.html";
}
