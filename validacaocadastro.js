function salvardados1(){
    var usuario1 = document.getElementById('campousuario').value

    var senha1 = document.getElementById('camposenha').value

    localStorage.setItem('usuario1',usuario1);

    localStorage.setItem('senha1',senha1);

    alert('Cadastro realizado com sucesso!');

}


function validarcadastro(event) {

    event.preventDefault();

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

    var Inseriremail = document.getElementById('inserirEmail').value;



    if (nomecompleto === ''){
        alert('O campo nome completo não foi preenchido')
        nomecompleto.focus();
        return false;


    }

    if (datanascimento === ''){
        alert('O campo data de nascimento não foi preenchido')
        datanascimento.focus();
        return false;

    }

    if (genero === ''){
        alert('O campo sexo não foi preenchido')
        genero.focus();
        return false;


    }


    if (senha === ''){
        alert('Por favor, informe uma senha')
        senha.focus()
        return false;

    }

    if (confirmasenha ===''){
        alert('Por favor, confirme a senha')
        confirmasenha.focus()
        return false;

    }

    if (senha !== confirmasenha){
        alert('As senhas não coincidem')
        senha.focus();
        return false;
    
    }
        
    if (usuario === ''){
        alert('Por favor, informe um usuário')
        usuario.focus()
        return false;


    }

    if (cep ===''){
        alert('Por favor, informe um CEP');
        cep.focus();
        return false;


    }

    if (endereco ===''){
        alert('Por favor, informe um endereço');
        endereco.focus();
        return false;


    }


    if (complemento ===''){
        alert('Por favor, informe um complemento');
        complemento.focus();
        return false;


    }


    if (tel ===''){
        alert('Por favor, informe um telefone');
        cep.focus();
        return false;


    }


    if (cpf ===''){
        alert('Por favor, informe um CPF');
        cep.focus();
        return false;


    }


    if (Inseriremail ===''){
        alert('Por favor, informe um e-mail');
        Inseriremail.focus();
        return false;


    }
    
    salvardados1();

    window.location.href="../html/telasobrenos.html"

}


function voltar(){
    window.location.href="../html/telalogin.html"

}
   
  


    

